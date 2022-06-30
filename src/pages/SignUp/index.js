import { useState, useContext} from 'react';
import { Link } from 'react-router-dom';

import {AuthContext} from '../../contexts/auth'

import logo from '../../assets/logo.png'

function SignUp() {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const {signup} = useContext(AuthContext)

  function handleSubmit(e){
    e.preventDefault()

    if(nome !== '' && email !== '' && password !== '' ){
      signup(email, password, nome)
    }
  
  }
    return (
      <div className='container-center'>
        <div className='login'>
          <div className='logo-area'>
            <img src={logo} alt='Sistema Logo'/>
          </div>

          <form onSubmit={handleSubmit}>
            <h1>Cadastrar nova conta</h1>
            <input type="text" placeholder='Seu nome' value={nome}
            onChange={(e)=>{setNome(e.target.value)}}/>
            <input type="text" placeholder='email...' value={email}
            onChange={(e)=>{setEmail(e.target.value)}}/>
            <input type="password" placeholder='senha...'
             value={password}
             onChange={(e)=>{setPassword(e.target.value)}}/>
            <button>Cadastrar</button>
          </form>
          <Link to='/'>Já tem uma conta? Entre</Link>
        </div>
       

      </div>
    );
  }
  
  export default SignUp;