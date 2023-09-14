import React, {useState} from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

  const [email, setEmail] = useState(''); 
  const [password, setPassword] = useState('');

  const onChange = e => {
    if(e.target.name === 'email') {
      setEmail(e.target.value);
    }
    
    if(e.target.name === 'password') {
      setPassword(e.target.value);  
    }
  }

  return (
    <div className="hold-transition login-page">
      <div className="login-box">
  
        <div className="login-logo">
          <Link to="#">
            <b>Iniciar</b> sesión
          </Link>
        </div>

        <div className="card">
          <div className="card-body login-card-body">
        
            <p className="login-box-msg">Bienvenido a Omega Pet Shop</p>

            <form>
              <div className="input-group mb-3">
                <input 
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  name="email"
                  value={email}
                  onChange={onChange} 
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-envelope"></span>
                  </div>
                </div>
              </div>
        
              <div className="input-group mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Contraseña"
                  name="password"
                  value={password}
                  onChange={onChange}
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-lock"></span>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-8">
                  <div className="icheck-primary">
                    <input type="checkbox" id="remember" />
                    <label htmlFor="remember">Recuérdame</label>
                  </div>
                </div>


              </div>

              <div className="social-auth-links text-center mb-3">
                <button type="submit" className="btn btn-block btn-primary">
                  Iniciar sesión
                </button>
                
                <Link to="/crear-cuenta" className="btn btn-block btn-danger">
                  Crear cuenta  
                </Link>
              </div>

            </form>
  
          </div>
        </div>
  
      </div>
    </div>
  );
}
  
export default Login;