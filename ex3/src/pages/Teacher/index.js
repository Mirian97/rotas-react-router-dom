import './style.css';
import teachers from "../../data";
import prevButton from "../../assets/prev-button.svg";
import Logo from "../../components/Logo"
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function Teacher() {
    const [stateTeachers] = useState([...teachers]);
    const [currentTeacher, setCurrentTeacher] = useState({});
    const navigate = useNavigate();
    const { id } = useParams();


    useEffect(() => {
        const findTeacher = stateTeachers.find(teacher => teacher.id === parseInt(id, 10));

        if (!findTeacher) {
            return;
        }
        setCurrentTeacher(findTeacher);
    }, []);


    function handleRetunrToPageMain() {
        navigate("/main")
    }

    return (
        <div className="container-teacher-detail">
            <Logo />
            <img
                className='prev-btn'
                src={prevButton}
                alt="Seta para a esquerda"
                onClick={() => handleRetunrToPageMain()}
            />
            {!currentTeacher ?
                handleRetunrToPageMain()
                :
                <div className="teacher-detail">
                    <img src={currentTeacher.avatar} alt="Perfil do professor" />
                    <strong>{currentTeacher.name}</strong>
                    <span>{currentTeacher.stack}</span>
                    <h4>Bio</h4>
                    <p>{currentTeacher.bio}</p>
                </div>
            }
        </div>
    );
}

export default Teacher;