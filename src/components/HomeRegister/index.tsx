import { useState, useEffect } from 'react';
import * as C from './styles';

export const HomeRegister = () => {
    const [email, setEmail] = useState('');
    const [pet, setPet] = useState('Qual seu pet?');
    const [disableRegister, setDisableRegister] = useState(true);

    const EnableRegister = () => {
        if ((email !== '' || email !== undefined) && (pet !== 'Qual seu pet?')) {
            setDisableRegister(false);
        } else {
            setDisableRegister(true);
        }
    }

    useEffect(()=>{
        EnableRegister();
    }, [email, pet]);

    return (
        <C.Container>
            <form>
                <h2>Cadastre-se e fique sabendo das ofertas antes de todos!</h2>
                <div className='input-area'>
                    <input 
                        type='email' 
                        placeholder='seu@email.com' 
                        value={email}
                        required={true}
                        onChange={e=>setEmail(e.target.value)}/>
                    <select required={true} onChange={e=>setPet(e.target.value)}>
                        <option>Qual seu pet?</option>
                        <option>cachorro</option>
                        <option>gato</option>
                        <option>pássaro</option>
                        <option>roedor</option>
                        <option>peixe</option>
                        <option>réptil</option>
                    </select>
                    <button disabled={disableRegister}>Cadastrar</button>
                </div>
            </form>
        </C.Container>
    );
}