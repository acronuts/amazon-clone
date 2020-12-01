import React from 'react';
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { auth } from './firebass';
import './Login.css'

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = event => {
        event.preventDefault();

        auth.signInWithEmailAndPassword(email, password).then(auth => {
            history.push('/')
        })
        .catch(error => alert(error.message))
    } 

    const register = event => {
        event.preventDefault();

        auth.createUserWithEmailAndPassword(email, password).then((auth) => {
            console.log('auth', auth)
            if (auth) {
                history.push('/')
            }
        })
        .catch(error => alert(error.message))
    }

    return (
        <div className='login'>
            <Link to='/'>
                <img className='login__logo'
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1280px-Amazon_logo.svg.png' />
            </Link>

            <div className='login__container'>
                <h1>Sign In</h1>
                <form>
                    <h5>Email</h5>
                    <input type='text' value={email} onChange= {
                        event => setEmail(event.target.value)
                    } />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={
                        event => setPassword(event.target.value)
                    } />

                    <button className='login__signInButton' onClick={signIn} type='submit' >Sign In</button>
                </form>
                <p>
                    Don't sign-in unless you want to have your search history tracked by us.
                </p>
                <button className='login__registerButton' onClick={register} >Create your fake amazon account</button>
            </div>
        </div>
    )
}

export default Login
