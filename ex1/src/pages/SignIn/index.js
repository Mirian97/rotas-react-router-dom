import './style.css';
import { Link } from "react-router-dom";

function SignIn() {
    return (
        <div>
            <h1>SignIn</h1>
            <Link to="/main">Main</Link>
        </div>
    );
}

export default SignIn;