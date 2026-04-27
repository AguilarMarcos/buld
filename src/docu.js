import React from 'react';
import './stylepag.css'; 

export default function Docu() {
    return (
        <div className="bg-container">
            <div className="card-downloads">
                <h1 className="main-title">Centro de Descargas</h1>
                <p className="description">Haz clic en los botones para obtener tus archivos PDF.</p>

                <div className="buttons-stack">
                    <a href="comandos.pdf" className="btn btn-blue" download>
                        COMANDOS BÁSICOS DE REACT
                    </a>
                    
                    <a href="ieee.pdf" className="btn btn-green" download>
                        ISO / ESTANDAR IEEE
                    </a>
                    
                    <a href="requerimientos.pdf" className="btn btn-dark" download>
                        REQUERIMIENTOS FUNCINALES Y NO FUNCIONALES
                    </a>
                    
                    <a href="sha_256.pdf" className="btn btn-dark" download>
                        CÓDIGO PYTHON ALGORITMO SHA-256
                    </a>
                    
                    {/* Enlace para volver a la página principal */}
                    <a href="/" className="btn btn-dark">
                        REGRESAR AL PROYECTO PRINCIPAL
                    </a>
                </div>
            </div>
        </div>
    );
}