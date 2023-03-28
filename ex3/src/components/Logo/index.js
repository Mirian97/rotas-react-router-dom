import './style.css';
import logo from "../../assets/logo.svg";

function Logo() {
  return (
    <div className='content-page'>
      <header>
        <img src={logo} alt="Logo Cubos Academy" />
      </header>
    </div>
  );
}

export default Logo;