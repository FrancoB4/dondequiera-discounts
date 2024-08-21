import axios from "axios";
import './Registro.css'
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function Registro() {
    const targetEndpoint = 'https://dondequiera-descuentos-app-2aa983685de0.herokuapp.com/api/v1/descuentos'
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();

    const onSubmit = async (data) => {
        try {
            const res = await axios.post(targetEndpoint + `?dni=${data.dni}&nombre=${data.nombre}`);
            if (!res.data) {
                console.log(`No se pudo crear el descuento debido al error: ${data}`);
            }
            else {
                navigate(`/descuento/${data.dni}`);
            }
        }
        catch (error) {
            console.log(`No se pudo crear el descuento debido al error: ${error}.`);
        }
    }

    return (
        <section className="pt-5 pb-5 mt-0 align-items-center d-flex bg-dark class1">
            <div className="container-fluid">
            <div className="row  justify-content-center align-items-center d-flex-row text-center h-100">
                <div className="col-12 col-md-4 col-lg-3   h-50 ">
                <div className="card shadow">
                    <div className="card-body mx-auto">
                    <h4 className="card-title mt-3 text-center">¡Gracias por estos 2 años!</h4>
                    <hr />
                    <p className="text-center">Tenemos un regalo para vos, completá tus datos para obtenerlo.</p>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group input-group mb-2">
                            <span className="input-group-text"><i className="bi bi-person-vcard"></i></span>
                            <input name="" className="form-control" placeholder="Tu DNI" type="number" {...register('dni')}/>
                        </div>
                        <div className="form-group input-group mb-2">
                            <span className="input-group-text"> <i className="bi bi-person-badge"></i> </span>
                            <input name="" className="form-control" placeholder="Tu nombre" type="text" {...register('nombre')}/>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary btn-block"> Quiero mi descuento! </button>
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