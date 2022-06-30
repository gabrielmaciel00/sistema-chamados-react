import { useState } from 'react';
import { Link } from 'react-router-dom';
import './signin.css'
import logo from '../../assets/logo.png'

function Signin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleSubmit(e){
    e.preventDefault()
  
  }
    return (
      <div className='container-center'>
        <div className='login'>
          <div className='logo-area'>
            <img src={logo} alt='Sistema Logo'/>
          </div>

          <form onSubmit={handleSubmit}>
            <h1>Entrar</h1>
            <input type="text" placeholder='email...' value={email}
            onChange={(e)=>{setEmail(e.target.value)}}/>
            <input type="password" placeholder='senha...'
             value={password}
             onChange={(e)=>{setPassword(e.target.value)}}/>
            <button>Acessar</button>
          </form>
          <Link to='/register'>Criar uma conta</Link>
        </div>
       

      </div>
    );
  }
  
  export default Signin;