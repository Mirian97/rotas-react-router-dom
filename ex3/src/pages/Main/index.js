import './style.css';
import teachers from "../../data";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../components/Logo"

function Main() {
    const [stateTeachers] = useState([...teachers]);
    const navigate = useNavigate();

    function handleOpenDetail(teacherId) {
        navigate(`/teacher/${teacherId}`)
    }

    return (
        <div className="container-main">
            <Logo />
            <div className='container-teacher-list'>
                {stateTeachers.map((teacher) =>
                    <div
                        className="teacher"
                        key={teacher.id}
                        onClick={() => handleOpenDetail(teacher.id)}
                    >
                        <img src={teacher.avatar} alt="Foto do professor" />
                        <strong>{teacher.name}</strong>
                    </div>
                )
                }
            </div>
        </div >
    );
}

export default Main;