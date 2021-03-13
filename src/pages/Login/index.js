import React from 'react'
import { LoginBg } from '../../assets';
import { useHistory } from "react-router-dom";
import { Input, Button, Gap, Link } from '../../components';

const Login = () => {
    const history = useHistory()
    return (
        <div className='main-page'>
            <div className='left'>
                <img src={LoginBg} className='bg-image' alt='imageBg' />
            </div>
            <div className='right'>
                <p className='title'>Login</p>
                <Input label='Email' placeholder='Email' />
                <Gap height={18} />
                <Input label='Password' placeholder='Password' />
                <Gap height={50} />
                <Button title='Login' onClick={() => history.push('/')} />
                <Gap height={100} />
                <Link title='Daftar Sekarang' onClick={() => history.push('/register')} />
            </div>
        </div>
    )
}

export default Login