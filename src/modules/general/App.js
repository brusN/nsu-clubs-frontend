import './App.css';
import {Route, Routes} from "react-router-dom";
import ApiProvider from "../../context/ApiContext";
import MainNavbar from "./components/navbar/MainNavbar";
import WelcomePage from "../auth/components/WelcomePage/WelcomePage";

function App() {
    return (
        <ApiProvider>
            <div>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <div>
                                <MainNavbar />
                                <WelcomePage />
                            </div>
                        }/>
                </Routes>
            </div>
        </ApiProvider>
    );
}

export default App;
