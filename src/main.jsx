import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
import React from "react";

const CongresoElectronicaLanding = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <header className="bg-blue-900 text-white p-6 text-center">
        <h1 className="text-4xl font-bold">Congreso de Electrónica</h1>
        <p className="mt-2 text-lg">Universidad Nacional de Educación</p>
      </header>

      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Ponentes</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white shadow-lg rounded-2xl p-6">
            <h3 className="text-xl font-semibold">ARMAS CASTAÑEDA RICHARD MILLER</h3>
            <p className="mt-2 text-gray-600 text-justify">
              Licenciado en Educación en la especialidad de Electrónica. Docente universitario de la UNE, instructor en CCNA y asesor en telecomunicaciones. Maestro en Ciencias de la Educación, Ingeniero en Sistemas. Interesado en automatización, IA y RA aplicadas al sector educativo, comercial e industrial.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-2xl p-6">
            <h3 className="text-xl font-semibold">ORTIZ VERGARA MARTIN WILLIAM</h3>
            <p className="mt-2 text-gray-600 text-justify">
              Docente egresado de Electrónica con experiencia en docencia universitaria en la UNE. Estudios en Ingeniería Industrial (UNMSM), Mecatrónica (UTP) y Electrónica (UPC).
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-2xl p-6">
            <h3 className="text-xl font-semibold">ROMERO SANDOVAL JULIO AMARILDO</h3>
            <p className="mt-2 text-gray-600 text-justify">
              Docente de la Facultad de Tecnología de la UNE. Enseña en la Escuela Profesional de Electrónica y Telecomunicaciones en cursos de especialidad, investigación y prácticas preprofesionales.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-2xl p-6">
            <h3 className="text-xl font-semibold">SORIA CUELLAR FIDEL TADEO</h3>
            <p className="mt-2 text-gray-600 text-justify">
              Licenciado en Educación en Electrónica, Maestro en Ciencias de la Educación (Administración Educacional) y Doctor en Ciencias de la Educación. Docente de pregrado y posgrado en la UNE, investigador en temas educacionales.
            </p>
          </div>
        </div>
      </section>

      <footer className="bg-blue-900 text-white text-center py-6">
        <p>© 2025 Congreso de Electrónica - Universidad Nacional de Educación</p>
      </footer>
    </div>
  );
};

export default CongresoElectronicaLanding;
