import axios from "axios";
import './Registro.css'
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Redes from "../Redes/Redes";

function Registro({tipo, targetEndpoint}) {
    // const targetEndpoint = 'https://dondequiera-descuentos-app-2aa983685de0.herokuapp.com/api/v1/generarDescuento'
    // const targetEndpoint = 'http://localhost:8080/api/v1/generarDescuento'
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();

    const onSubmit = async (data) => {
        try {
            const res = await axios.post(targetEndpoint + `generarDescuento?dni=${data.dni}&nombre=${data.nombre}&tipo=${tipo}`);
            if (!res.data) {
                console.log(`No se pudo crear el descuento debido al error: ${res}`);
            }
            else {
                navigate(`/descuento/${data.dni}`);
            }
        }
        catch (error) {
            navigate(`/poseeDescuentoActivo/${data.dni}/${tipo}`);
        }
    }

    return (
        <section className="pt-5 pb-5 mt-0 align-items-center d-flex bg-dark class1">
            <div className="container-fluid">
            <div className="row  justify-content-center align-items-center d-flex-row text-center h-100">
                <div className="col-12 col-md-4 col-lg-3 h-50 ">
                <div className="card shadow">
                    <div className="card-body mx-auto">
                    <h3 className="card-title mt-3 text-center font-face-eoi">¡ Cumplimos 2 años !</h3>
                    <h5 className="card-title mt-3 text-center">Gracias por ser parte</h5>
                    <hr />
                    <p className="text-center font-face-eoi">Tenemos un regalo para vos, completá tus datos para obtenerlo.</p>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group input-group mb-2">
                            <span className="input-group-text"><i className="bi bi-person-vcard"></i></span>
                            <input name="" className="form-control font-face-reg" placeholder="Tu DNI" type="number" 
                            {...register("dni", {required: true})}/>
                        </div>
                        <div className="form-group input-group mb-4">
                            <span className="input-group-text"> <i className="bi bi-person-badge"></i> </span>
                            <input name="" className="form-control font-face-reg" placeholder="Tu nombre" type="text" {...register('nombre')}/>
                        </div>
                        <div className="form-group">
                            <Redes />
                            <button type="submit" className="btn btn-primary btn-block ms-3"> Quiero mi regalo! </button>
                        </div>
                    </form>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
    )
}

export default Registro;