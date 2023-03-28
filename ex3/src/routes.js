import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import "./index.css";
import SignIn from "./pages/SignIn";
import Main from "./pages/Main";
import Teacher from "./pages/Teacher";

function ProtectedRoutes({ redirectTo }) {
    const isAuthenticated = true;

    return isAuthenticated ? <Outlet /> : <Navigate to={redirectTo} />;
}

function MainRoutes() {
    return (
        <Routes>
            <Route path="/" element={<SignIn />} />

            <Route element={<ProtectedRoutes redirectTo={"/"} />}>
                <Route path="/main" element={<Main />} />

                <Route path="/teacher/:id" element={<Teacher />} />
            </Route>
        </Routes>
    )
}

export default MainRoutes