import axios from "axios";
import DescuentoFiltro from "./DescuentoFiltro";
import DescuentoList from "./DescuentoList";
import { useEffect, useState } from "react";
import DescuentoAgregar from "./DescuentoAgregar";

function DescuentoHome({targetEndpoint}) {
    // const targetEndpoint = 'https://dondequiera-descuentos-app-2aa983685de0.herokuapp.com/api/v1/descuentos';
    // const targetEndpoint = 'http://localhost:8080/api/v1/descuentos';
    const [descuentos, setDescuentos] = useState([{}]);
    const [filtros, setFiltros] = useState({});

    const fetchDescuentos = async (data) => {
        let req = targetEndpoint + 'descuentos';
        if (data?.dniCliente) {
            req += `?dni=${data.dniCliente}`;
        }
        else if (data?.porcentajeDescuento) {
            req += `?porcentajeDescuento=${data.porcentajeDescuento}`;
        }
        else if (data?.activo) {
            req += `?activo=${data.activo}`;
        }

        try {
            const res = await axios.get(req);
            if (res.status === 200) {
                setFiltros(data);
                setDescuentos(res.data);
            }
            else {
                console.log(`No se pudieron cargar los descuentos debido al error: ${res.message}`)
                setDescuentos([]);
            }
            
        }
        catch (error) {
            console.log(`No se pudieron cargar los descunetos debido al error: ${error}`);
        }
    }

    useEffect(() => {
        const fetch = async () => {
            await fetchDescuentos();
        }
        fetch();
    }, []);

    const agregarDescuento = async (data) => {
        try {
            const res = await axios.post(targetEndpoint +
                `generarDescuento?dni=${data.dni}&nombre=${data.nombre}&tipo=1&porcentajeDescuento=${data.porcentaje}`);
            if (res.data) {
                await fetchDescuentos(filtros);
            }
            else {
                console.log(`No se pudo crear el descuento debido al error: ${res}`);
            }
        }
        catch (error) {
            console.log(`No se pudo crear el descuento debido al error: ${error}`);
        }
    }

    const eliminarDescuento = async (idDescuento) => {
        try {
            const res = await axios.delete(targetEndpoint + `descuentos?idDescuento=${idDescuento}`)
            if (res.status === 200) {
                await fetchDescuentos(filtros);
            }
            else {
                console.log(`No se pudo eliminar el descuento debido al error: ${res}`);
            }
        }
        catch (error) {
            console.log(`No se pudo eliminar el descuento debido al error: ${error}`);
        }
    }

    const toggleDescuento = async (idDescuento) => {
        try {
            const res = await axios.put(targetEndpoint + `descuentos?idDescuento=${idDescuento}`)
            if (res.status === 200) {
                await fetchDescuentos(filtros);
            }
            else {
                console.log(`No se pudo eliminar el descuento debido al error: ${res}`);
            }
        }
        catch (error) {
            console.log(`No se pudo eliminar el descuento debido al error: ${error}`);
        }
    }


    return (
        <div className="container font-face-reg">
            <DescuentoFiltro fetchDescuentos={fetchDescuentos}/>

            <DescuentoAgregar agregarDescuento={agregarDescuento}/>

            <DescuentoList descuentos={descuentos} eliminarDescuento={eliminarDescuento} toggleDescuento={toggleDescuento}/>
        </div>
    )
}

export default DescuentoHome;