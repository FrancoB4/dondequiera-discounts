import { useForm } from "react-hook-form";

function DescuentoFiltro({fetchDescuentos}) {
    const { register, handleSubmit } = useForm();

    const onSubmit = async (data) => {
        await fetchDescuentos(data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="row mt-3 mb-3 text-center">
            <div className='card'>
                <div className="text-center">
                    <h1>Filtros:</h1>

                    <div className='row mt-2 me-2'>
                        <div className='col-1'>
                            <label htmlFor='dniCliente'>DNI cliente:</label>
                        </div>
                        <div className='col-3'>
                            <input type="text" className='form-control' {...register('dniCliente')} />
                        </div>

                        <div className='col-1'>
                            <label htmlFor='porcentajeDescuento'>Porcentaje Descuento:</label>
                        </div>
                        <div className='col-3'>
                            <input type="text" className='form-control' {...register('porcentajeDescuento')} />
                        </div>

                        <div className="col-auto form-check form-switch">
                            <input className="form-check-input" type="checkbox" role="switch" {...register('activo')}/>
                            <label className="form-check-label" htmlFor="activo">Activo</label>
                        </div>
                    </div>

                    <input type="submit" value="Filtrar" className='btn btn-outline-secondary mt-2 mb-3' />
                </div>
            </div>
        </form>
    )
}

export default DescuentoFiltro;