import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


import Senaclogo from "./assets/Senaclogo.png";

import "./styles.css";

function App() {
  const [email, setEmail] = useState("");
  const [CPF, setcpf] = useState("");

  return (
    <div className="container">
        
      <div className="container-login">
     
        <div className="wrap-login">
          <form className="login-form">
             <img src={Senaclogo} className="img" alt="Senac"/>
            <span className="login-form-title"> SISTEMA DE EGRESSOS</span>
            <p className="p">Entre para iniciar sua sessão </p>
          
            <span className="login-form-title">
             
            </span>

            <div className="wrap-input1">
            
              <select className="wrap-input1">
              <option className="wrap-input1">Aluno (Graduação e Pós)</option>
              <option className="wrap-input1">Administração</option>
              </select>
             
            </div>

            <div className="wrap-input">
              
               <input className={Number !== "" ? "has-val input" : "input"}
                placeholder="CPF" 
                
              />
             
            </div>

            <div className="container-login-form-btn">
              <button className="login-form-btn">Entrar</button>
            </div>

            <div className="text-center">
              <span className="txt1"> </span>
              <a className="txt2" href="#">
              Cadastrase-se aqui? 
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
