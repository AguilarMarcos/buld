import React from 'react';


export default function Proyecto() {
    return (
        <main className="main-container">
            {/* Imagen centrada (debe estar en la carpeta public) */}
            <img src="formal.jpeg" alt="formal" className="formal-img" />
            
            <h1 className="title">Evaluación parcial 1</h1>
            <h2 className="subtitle">Alumno(a): AGUILAR MUÑOZ MARCOS URIEL</h2>

            <div className="links-group">
                <a 
                    href="https://www.linkedin.com/in/marcos-uriel-aguilar-muñoz-675b373a4/" 
                    className="link-item"
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    LINKED IN DE MI PROFILE
                </a>
                
                {/* Este enlace lleva a tu página de descargas */}
                <a 
                    href="https://www.medikt.com.mx/practicas/documentacion.html" 
                    className="link-item"
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    DOCUMENTACION PARCIAL 1
                </a>
            </div>
        </main>
    );
}