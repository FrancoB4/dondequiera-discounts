import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Registro from "./components/Registro/Registro";
import Descuento from "./components/Descuento/Descuento";
import DescuentoHome from "./components/Descuento/DescuentoHome";
import DescuentoActivo from "./components/Descuento/DescuentoActivo";

function App() {
    const targetEndpoint = 'https://dondequiera-descuentos-app-2aa983685de0.herokuapp.com/api/v1/';
    // const targetEndpoint = 'http://localhost:8080/api/v1/';

    return (
        <>
            <div className="App-container vh-100 font-face-eoi">
                <Routes>
                    <Route path='/' element={<Registro tipo={0} targetEndpoint={targetEndpoint}/>} />

                    <Route path='/premio' element={<Registro tipo={1} targetEndpoint={targetEndpoint}/>} />

                    <Route path='/descuento/:dni' element={<Descuento targetEndpoint={targetEndpoint}/>} />

                    <Route path='/descuentos/lista' element={<DescuentoHome targetEndpoint={targetEndpoint}/>} />

                    <Route path='/poseeDescuentoActivo/:dni/:tipo' element={<DescuentoActivo targetEndpoint={targetEndpoint}/>} />
                </Routes>
            </div>
        </>
    );
}

export default App;
