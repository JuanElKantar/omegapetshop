import React, {useState} from 'react';
import { Link } from 'react-router-dom';

const CrearCuenta = () => {

  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmarPassword, setConfirmarPassword] = useState('');

  const onChange = e => {
    if(e.target.name === 'nombre'){
      setNombre(e.target.value);
    }
    if(e.target.name === 'email'){
      setEmail(e.target.value);
    }
    if(e.target.name === 'password'){
      setPassword(e.target.value);
    }
    if(e.target.name === 'confirmarPassword'){
      setConfirmarPassword(e.target.value);
    }
  }

  return (
    <div className="hold-transition register-page">
      <div className="register-box">

        <div className="register-logo">
          <Link to="#">
            <b>Registrarse</b>
          </Link>
        </div>

        <div className="card">
          <div className="card-body register-card-body">
            <p className="login-box-msg">Regístrate en Omega Pet Shop</p>

            <form>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre"
                  name="nombre"
                  value={nombre}
                  onChange={onChange}
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-user"></span>
                  </div>
                </div>
              </div>  

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

              <div className="input-group mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Repita la contraseña"
                  name="confirmarPassword"
                  value={confirmarPassword}
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
                    <input type="checkbox" id="agreeTerms" name="terms" value="agree" />
                    <label for="agreeTerms">
                      Estoy de acuerdo con los <a href="#">términos</a>
                    </label>
                  </div>
                </div>
                <div className="col-4">
                  <button type="submit" className="btn btn-primary btn-block">Registrarme</button>
                </div>
              </div>
            </form>

            <Link to="/" className="text-center">Ya estoy registrado</Link>
          </div>
        </div>

      </div>
    </div>
  )
}

export default CrearCuenta;