import './style.css';
import { Link } from "react-router-dom";

function Main() {
  return (
    <div>
      <h1>Main</h1>
      <Link to="/sign-in">SignIn</Link>
    </div>
  );
}

export default Main;