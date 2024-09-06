function DescuentoElement({id, nombreCliente, dniCliente, porcentajeDescuento, activo, eliminarDescuento, toggleDescuento}) {
    return (
        <tr>
            <td>{id}</td>
            <td>{dniCliente}</td>
            <td>{nombreCliente}</td>
            <td>{porcentajeDescuento}%</td>
            <td>{activo ? 'Activo' : 'Consumido'}</td>
            <td>
                <button className="btn btn-outline-primary" onClick={async () => await toggleDescuento(id)}><i className="bi bi-bag-check"></i></button>
                <button className="btn btn-outline-danger ms-2" onClick={async () => await eliminarDescuento(id)}><i className="bi bi-trash"></i></button>
            </td>
        </tr>
    )
}

export default DescuentoElement;