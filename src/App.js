import "./assets/scss/main.scss";
import Issues from "./pages/Issues";
import Welcome from "./pages/Welcome";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
    return (
        <div className='App'>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Welcome/>}/>
                    <Route path='/issues' element={<Issues/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
