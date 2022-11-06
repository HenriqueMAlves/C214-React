import { Link } from 'react-router-dom';
import { FaUserPlus, FaUserEdit, FaUserMinus } from "react-icons/fa";

import avatar from '../../assets/avatar.png';
import './style.css';

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div>
                <img src={avatar} alt="Foto de perfil do usuário" />
            </div>
            <Link to="/">
                <FaUserPlus color="white" size={24} />
                Criar
            </Link>
            <Link to="/update">
                <FaUserEdit color="white" size={24} />
                Atualizar
            </Link>
            <Link to="/delete">
                <FaUserMinus color="white" size={24} />
                Deletar
            </Link>
        </div>
    )
}