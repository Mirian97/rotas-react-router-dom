import { Route, Routes } from "react-router-dom";
import SignIn from './pages/SignIn';
import Main from './pages/Main';

function MainRoutes() {
    return (
        <Routes>
            <Route path="/">
                <Route path="/" element={<SignIn />} />
                <Route path="/sign-in" element={<SignIn />} />
            </Route>
            <Route path="/main" element={<Main />} />

            <Route path='*' element={<h1>404 - Not found</h1>} />
        </Routes>
    );
}

export default MainRoutes;