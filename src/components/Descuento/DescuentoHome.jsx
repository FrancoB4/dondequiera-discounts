import axios from "axios";
import DescuentoFiltro from "./DescuentoFiltro";
import DescuentoList from "./DescuentoList";
import { useEffect, useState } from "react";

function DescuentoHome() {
    const targetEndpoint = 'https://dondequiera-descuentos-app-2aa983685de0.herokuapp.com/api/v1/descuentos';
    // const targetEndpoint = 'http://localhost:8080/api/v1/descuentos';
    const [descuentos, setDescuentos] = useState([{}]);

    const fetchDescuentos = async (data) => {
        let req = targetEndpoint;
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
        fetchDescuentos();
    }, []);

    const eliminarDescuento = async (idDescuento) => {
        try {
            const res = await axios.delete(targetEndpoint + `?idDescuento=${idDescuento}`)
            if (res.status === 200) {
                await fetchDescuentos();
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
            const res = await axios.put(targetEndpoint + `?idDescuento=${idDescuento}`)
            if (res.status === 200) {
                await fetchDescuentos();
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

            <DescuentoList descuentos={descuentos} eliminarDescuento={eliminarDescuento} toggleDescuento={toggleDescuento}/>
        </div>
    )
}

export default DescuentoHome;