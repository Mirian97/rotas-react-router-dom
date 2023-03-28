import './styles.css';
import logo from "../../assets/logo.svg";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const navigate = useNavigate();

  return (
    <div className='container'>
      <div className="login">
        <img src={logo} alt="Logo Cubos Academy" />
        <input type="text" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <p>Não tem cadastro?
          <a href="/"> Clique aqui!</a>
        </p>
        <button type='button' onClick={() => navigate("/main")}>
          Login
        </button>
      </div>
    </div>
  );
}

export default SignIn; 