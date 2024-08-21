import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Routes, Route } from "react-router-dom";
import Registro from "./components/Registro/Registro";
import Descuento from "./components/Descuento/Descuento";
import DescuentoHome from "./components/Descuento/DescuentoHome";

function App() {
    return (
        <>
            <div className="App-container vh-100">
                <Routes>
                    <Route path='/' element={<Registro />} />

                    <Route path='/descuento/:dni' element={<Descuento />} />

                    <Route path='/descuentos/lista' element={<DescuentoHome />} />
                </Routes>
            </div>
        </>
    );
}

export default App;
