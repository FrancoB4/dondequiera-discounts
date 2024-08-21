import DescuentoElement from "./DescuentoElement";

function DescuentoList({descuentos, eliminarDescuento, toggleDescuento}) {
    return (
        <div className="row">
            <table className="table table-bordered table-striped text-center">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>DNI cliente</th>
                        <th>Nombre cliente</th>
                        <th>Porcentaje descuento</th>
                        <th>Activo</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody className="table-group-divider">
                    {
                        descuentos.map(descuento => { return <DescuentoElement  key={descuento.idDescuento + descuento.cliente?.dni} nombreCliente={descuento.cliente?.nombre}
                                                                                dniCliente={descuento.cliente?.dni} porcentajeDescuento={descuento.porcentajeDescuento}
                                                                                activo={descuento.activo} id={descuento.idDescuento} 
                                                                                eliminarDescuento={eliminarDescuento} toggleDescuento={toggleDescuento}/>})
                    }
                </tbody>
            </table>
        </div>
    )
    
}

export default DescuentoList;