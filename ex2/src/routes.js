import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import SignIn from './pages/SignIn';
import Main from './pages/Main';

function MainRoutes() {
    function ProtectedRoutes({ redirectTo }) {
        const isAuthenticaded = false;

        return isAuthenticaded ? <Outlet /> : <Navigate to={redirectTo} />;
    }

    return (
        <Routes>
            <Route path="/">
                <Route path="/" element={<SignIn />} />
                <Route path="/sign-in" element={<SignIn />} />
            </Route>

            <Route element={<ProtectedRoutes redirectTo={"/sign-in"} />}>
                <Route path="/main" element={<Main />} />
            </Route>

            <Route path='*' element={<h1>404 - Not found</h1>} />
        </Routes >
    );
}

export default MainRoutes;