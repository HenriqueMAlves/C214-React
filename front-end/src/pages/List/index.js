import { FaUserNinja } from 'react-icons/fa';
import { useState } from 'react';
import { toast } from 'react-toastify';

import ClientUsers from '../../services/user.js';

import Sidebar from '../../components/Sidebar';
import Title from '../../components/Title';

import './style.css';

export default function Read() {

    const [users, setUsers] = useState([]);
    const [email, setEmail] = useState('');

    async function handleRead(e) {
        e.preventDefault();

        const data = {
            email: email,
        }

        let update = [];
        if(data.email === ''){
            update = await ClientUsers.listAllUsers();
        }else {
            update = await ClientUsers.listUser(data);
            update.data = [update.data]
        }
        
        if (update.status === 200) {
            setUsers(update.data)
            toast.success('Usuário encontrado com sucesso!');
        } else {
            toast.error('Ops algo deu errado!');
        }
    }

    return (
        <div>
            <Sidebar />

            <div className="content">
                <Title name="Listar usuário">
                    <FaUserNinja size={30} />
                </Title>

                <div className="container">
                    <form className="form-profile" onSubmit={handleRead}>

                        <label>E-mail</label>
                        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />

                        <button type="submit">Listar</button>

                        <div class="table">
                            <table class="fl-table">
                                <thead>
                                    <tr>
                                        <th>Nome</th>
                                        <th>Email</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {users && users.map((user, index) =>
                                        <tr key={index}>
                                            <td>{user.nome} </td>
                                            <td>{user.email} </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>

                    </form>
                </div>

            </div>
        </div>
    )
}