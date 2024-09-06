import { useForm } from "react-hook-form";

function DescuentoAgregar({agregarDescuento}) {
    const { register, handleSubmit } = useForm();

    const onSubmit = async (data) => {
        await agregarDescuento(data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="row mt-3 mb-3 text-center">
            <div className='card text-center'>
                <div className='row mt-2 me-1'>
                    <div className='col-1'>
                        <label htmlFor='dni'>DNI cliente:</label>
                    </div>
                    <div className='col-2'>
                        <input type="text" className='form-control' {...register('dni', {required: true})} />
                    </div>

                    <div className='col-1'>
                        <label htmlFor='nombre'>Nombre cliente:</label>
                    </div>
                    <div className='col-2'>
                        <input type="text" className='form-control' {...register('nombre', {required: true})} />
                    </div>

                    <div className='col-1'>
                        <label htmlFor='porcentaje'>Porcentaje Descuento:</label>
                    </div>
                    <div className='col-2'>
                        <input type="text" className='form-control' {...register('porcentaje', {required: true})} />
                    </div>
                    <div className='col-auto'>
                        <button type="submit" value="Filtrar" className='btn btn-success'><i class="bi bi-plus-square"></i></button>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default DescuentoAgregar;