import { FaUsers } from 'react-icons/fa';
import { useState } from 'react';
import { toast } from 'react-toastify';

import ClientUsers from '../../services/user.js';

import Sidebar from '../../components/Sidebar';
import Title from '../../components/Title';

import './style.css';

export default function List() {

    const [email, setEmail] = useState('');

    async function handleList(e) {
        e.preventDefault();

        const data = {
            email: email,
        }

        let list = null;
        if(data){
            list = await ClientUsers.listUser(data)
        } else {
            list = await ClientUsers.listAllUsers()
        }

        if (list.status === 200) {
            toast.success('Busca realizada com sucesso!');
        } else {
            toast.error('Ops algo deu errado!');
        }

    }

    return (
        <div>
            <Sidebar />

            <div className="content">
                <Title name="Listar usuários">
                    <FaUsers size={30} />
                </Title>

                <div className="container">
                    <form className="form-profile" onSubmit={handleList}>

                        <label>E-mail</label>
                        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />

                        <button type="submit">Buscar</button>
                    </form>
                </div>

                <div className="userList">

                </div>

            </div>
        </div>
    )
}