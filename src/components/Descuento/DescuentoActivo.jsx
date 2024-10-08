import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function DescuentoActivo({targetEndpoint}) {
    // const targetEndpoint = 'https://dondequiera-descuentos-app-2aa983685de0.herokuapp.com/api/v1/descuentos';
    // const targetEndpoint = 'http://localhost:8080/api/v1/descuentos';
    const {dni, tipo} = useParams();
    const [descuento, setDescuento] = useState({ cliente: {nombre: "" } });

    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () =>{
            try {
                const res = await axios.get(targetEndpoint + `descuentos?dni=${dni}&activo=true`);
                if (!res.data) {
                    console.log(`No se pudo obtener el descuento debido al error: ${res.data}`);
                }
                else {
                    if (res.data.length === 1) {
                        setDescuento(res.data[0]);
                    }
                    else if (res.data.length >= 1) {
                        setDescuento(res.data[res.data.length - 1]);
                    }
                    else {
                        navigate(tipo === 0 ? '/' : '/premio');
                    }
                }
            }
            catch (error) {
                console.log(`No se ha podido obtener el descuentod debido al error: ${error}`);
            }
        }
        fetchData();
    }, [dni, tipo, navigate, targetEndpoint]);


    return (
        <section className="pt-5 pb-5 mt-0 align-items-center d-flex bg-dark class1">
            <div className="container-fluid">
            <div className="row  justify-content-center align-items-center d-flex-row text-center h-100">
                <div className="col-12 col-md-4 col-lg-3   h-50 ">
                <div className="card shadow">
                    <div className="card-body mx-auto">
                        <h4 className="card-title mt-3 text-center">¡Ya tenes un descuento activo!</h4>
                        <h4 className="m-3">Usalo para poder conseguir otro</h4>
                        <h4 className="m-3">Este es tu descuento:</h4>
                        <h1 className="m-3">{descuento.porcentajeDescuento}%</h1>
                        <hr className=""/>
                        <h6 className="mt-5 mb-2">Cambialo con tu DNI hasta el 31 de Septiembre</h6>
                        <h6 className="">Te esperamos</h6>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
    )
}

export default DescuentoActivo;