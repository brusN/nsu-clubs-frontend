import './App.css';
import {Route, Routes} from "react-router-dom";
import ApiProvider from "../../context/ApiContext";
import MainNavbar from "./components/navbar/MainNavbar";
import WelcomePage from "../auth/components/WelcomePage/WelcomePage";
import SignIn from "../auth/components/SignIn/SignIn";
import Dialog from "../dialog/Dialog";

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
                    <Route
                        path="/signin"
                        element={
                            <div>
                                <MainNavbar />
                                <SignIn />
                            </div>
                        }/>
                    <Route
                        path="/dialog"
                        element={
                            <div>
                                <MainNavbar />
                                <Dialog />
                            </div>
                        }/>
                </Routes>
            </div>
        </ApiProvider>
    );
}

export default App;
