import './App.css';
import {Route, Routes} from "react-router-dom";
import ApiProvider from "../../context/ApiContext";
import MainNavbar from "./components/navbar/MainNavbar";
import WelcomePage from "../auth/WelcomePage/WelcomePage";
import SignIn from "../auth/SignIn/SignIn";
import Dialog from "../dialog/Dialog";
import ClubList from "../dialog/components/ClubList/ClubList";

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
                    <Route
                        path="/test"
                        element={
                            <div>
                                <MainNavbar />
                                <ClubList />
                            </div>
                        }/>
                </Routes>
            </div>
        </ApiProvider>
    );
}

export default App;
