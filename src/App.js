import React, { useState } from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import './App.css';
import mifoto from './formal.jpeg';

// ─── DATOS ────────────────────────────────────────────────────────
const NOMBRE = "Aguilar Muñoz Marcos Uriel";
const LINKEDIN = "https://www.linkedin.com/in/marcos-uriel-aguilar-mu%EF%BF%BDoz-675b373a4/";
const JIRA = "https://utd-team-ht63x3ao.atlassian.net/jira/software/projects/SCRUM/boards/1";
const CLIENT_ID = "941946385897-fg0819kmq26rhoj75giiq6v9lupbcsp4.apps.googleusercontent.com";

const metodologias = [
  { nombre: 'Cascada',  img: '/cascada.png',  color: '#007bff' },
  { nombre: 'Modelo V', img: '/v.png',         color: '#6c757d' },
  { nombre: 'Ágiles',   img: '/agiles.png',    color: '#198754' },
  { nombre: 'Scrum',    img: '/srum.png',       color: '#dc3545' },
  { nombre: 'Kanban',   img: '/kanban.png',     color: '#ffc107', textColor: 'black' },
  { nombre: 'XP',       img: '/xp.png',         color: '#0dcaf0', textColor: 'black' },
  { nombre: 'Híbridas', img: '/hibridas.png',   color: '#212529' },
];

// ─── MODAL ────────────────────────────────────────────────────────
function Modal({ item, onClose }) {
  if (!item) return null;
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <span>Vista de {item.nombre}</span>
          <button className="modal-close" onClick={onClose}>×</button>
        </div>
        <div className="modal-body">
          <img src={item.img} alt={item.nombre} style={{ maxWidth: '100%', height: 'auto' }} />
        </div>
      </div>
    </div>
  );
}

// ─── VISTA PARCIAL 1 ──────────────────────────────────────────────
function Parcial1({ onVolver }) {
  return (
    <div className="pantalla-oscura">
      <div className="centro-descargas">
        <h1 className="titulo-seccion">Centro de Descargas</h1>
        <p className="desc-texto">Haz clic en los botones para obtener tus archivos PDF.</p>
        <div className="lista-botones">
          <a href="/coma.pdf"  download className="btn btn-azul">COMANDOS BÁSICOS DE REACT</a>
          <a href="/iee.pdf"   download className="btn btn-verde">ISO / ESTANDAR IEEE</a>
          <a href="/reque.pdf" download className="btn btn-gris">REQUERIMIENTOS FUNCIONALES Y NO FUNCIONALES</a>
          <a href="/sha.pdf"   download className="btn btn-gris">CÓDIGO PYTHON ALGORITMO SHA-256</a>
          <button className="btn btn-outline" onClick={onVolver}>VOLVER AL PERFIL</button>
        </div>
      </div>
    </div>
  );
}

// ─── VISTA PARCIAL 2 ──────────────────────────────────────────────
function Parcial2({ onVolver }) {
  const [modal, setModal] = useState(null);
  return (
    <div className="pantalla-blanca">
      <Modal item={modal} onClose={() => setModal(null)} />
      <h1 className="meto-h1">METODOLOGÍAS DE DESARROLLO DE SW</h1>
      <h2 className="meto-h2">¿Qué es una metodología de desarrollo de software?</h2>
      <p className="meto-p">
        Las metodologías de desarrollo de software son un conjunto de técnicas y métodos
        organizativos que se aplican para diseñar soluciones de software informático.
        Definen un proceso estructurado para planificar, crear, probar y entregar software
        de calidad de manera eficiente y predecible.
      </p>
      <h2 className="meto-tipos">TIPOS DE METODOLOGÍAS</h2>
      <hr className="sep" />
      <div className="grid-meto">
        {metodologias.map(m => (
          <button
            key={m.nombre}
            className="btn-meto"
            style={{ backgroundColor: m.color, color: m.textColor || 'white' }}
            onClick={() => setModal(m)}
          >
            {m.nombre.toUpperCase()}
          </button>
        ))}
      </div>
      <hr className="sep" />
      <h3 className="jira-titulo">LINK A TABLERO DE TRABAJO</h3>
      <a href={JIRA} target="_blank" rel="noreferrer" className="link-outline">
        ---- JIRA ----
      </a>
      <hr className="sep" />
      <button className="btn-regresar" onClick={onVolver}>
        ---- REGRESAR MENÚ PRINCIPAL ----
      </button>
      <p className="frase-label">Escribe la frase que colocaste en el tablero de metodología ágil:</p>
      <p className="frase-txt">"No tienes que ser grande para empezar, pero tienes que empezar para ser grande"</p>
      <p className="frase-alumno">Alumno: {NOMBRE}</p>
      <hr className="sep" />
    </div>
  );
}

// ─── DASHBOARD (post-login) ───────────────────────────────────────
function Dashboard({ user, onLogout }) {
  return (
    <div className="pantalla-oscura">
      <div className="contenedor-perfil">
        <img src={mifoto} alt="Perfil" className="foto-perfil" />
        <h1 className="evaluacion-texto">Bienvenido(a), {user.name}</h1>
        <h2 className="subtitulo-dash">EVALUACIÓN PARCIAL 3</h2>
        <div className="lista-botones" style={{ marginTop: '20px', width: '100%', maxWidth: '400px' }}>

          {/* ── ERS: pon tu PDF en la carpeta public/ con nombre ers.pdf ── */}
          <a
            href="/ers.pdf"
            download="ers_proyecto.pdf"
            className="btn btn-azul"
          >
            DESCARGAR DOCUMENTO ERS DEL PROYECTO
          </a>

          {/* ── JIRA: abre tu tablero en nueva pestaña ── */}
          <button
            className="btn btn-jira"
            onClick={() => window.open(JIRA, '_blank', 'noopener,noreferrer')}
          >
            TABLERO JIRA
          </button>

          <button className="btn btn-gris" onClick={onLogout}>
            CERRAR SESIÓN PARCIAL 3
          </button>

        </div>
      </div>
    </div>
  );
}

// ─── APP PRINCIPAL ────────────────────────────────────────────────
function App() {
  const [vista, setVista] = useState('inicio');
  const [usuario, setUsuario] = useState(null);

  if (vista === 'parcial1')  return <Parcial1 onVolver={() => setVista('inicio')} />;
  if (vista === 'parcial2')  return <Parcial2 onVolver={() => setVista('inicio')} />;
  if (vista === 'dashboard') return <Dashboard user={usuario} onLogout={() => { setUsuario(null); setVista('inicio'); }} />;

  return (
    <GoogleOAuthProvider clientId={CLIENT_ID}>
      <div className="pantalla-oscura">
        <div className="contenedor-perfil">
          <img src={mifoto} alt="Perfil" className="foto-perfil" />
          <h1 className="evaluacion-texto">ANÁLISIS Y DISEÑO DE SOFTWARE</h1>
          <p className="alumno-texto">Alumno: {NOMBRE}</p>
          <div className="enlaces-inferiores">
            <a href={LINKEDIN} target="_blank" rel="noreferrer" className="link-azul">
              Visitar mi perfil de LinkedIn
            </a>
            <button className="link-azul-btn" onClick={() => setVista('parcial1')}>
              Documentación Parcial 1
            </button>
            <button className="link-azul-btn" onClick={() => setVista('parcial2')}>
              Documentación Parcial 2
            </button>
          </div>
          <div style={{ marginTop: '24px' }}>
            <GoogleLogin
              onSuccess={() => {
                setUsuario({ name: NOMBRE });
                setVista('dashboard');
              }}
              onError={() => console.log('Login Failed')}
              useOneTap
            />
          </div>
        </div>
      </div>
    </GoogleOAuthProvider>
  );
}

export default App;