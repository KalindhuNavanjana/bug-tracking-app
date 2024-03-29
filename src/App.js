import "./assets/scss/main.scss";
import Issue from "./pages/Issue";
import Issues from "./pages/Issues";
import NewIssue from "./pages/NewIssue";
import Welcome from "./pages/Welcome";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
    return (
        <div className='App'>
            <BrowserRouter>
                <Routes>
                    <Route exact path='/issues' element={<Issues/>}/>
                    <Route exact path='/issues/:id' element={<Issue/>}/>
                    <Route exact path="/issues/new" element={<NewIssue/> } />
                    
                    <Route path='/' element={<Welcome/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
