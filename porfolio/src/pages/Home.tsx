import React from "react";
import miFoto from '../assets/photo.jpg';
import AudioPlayer from "../components/AudioPlayer/AudioPlayer";

const Home: React.FC = () => {
  // ===================================
  // ✅ VARIABLES DE DATOS PERSONALES Y STACK (Nueva versión general)
  // ===================================
  const myName = "Pablo Castillo"; // ¡Reemplaza con tu nombre!
  // El texto es ahora más general, sin mencionar tecnologías específicas.

  const heading = `Hello World! I'm ${myName}`;
  const text = `
    I'm a dedicated Software Developer with a passion for building robust, clean, and scalable applications. 

    My focus is on transforming complex challenges into elegant code solutions that enhance user experience and drive business value. I prioritize continuous learning, efficient architecture, and delivering high-quality results across the entire development lifecycle.

    I am actively seeking opportunities to leverage my problem-solving skills and technical expertise to collaborate on impactful projects.
  `;
  // ===================================

  return (
    <>
      <AudioPlayer></AudioPlayer>
      <div className="min-h-lvh bg-black text-white">

        {/* Título de la página */}
        <h1 className="grid grid-cols-1 text-center text-4xl p-6 font-hegarty">HOME</h1>

        {/* Contenedor de la foto y el texto de presentación */}
        <div className="flex flex-col items-center justify-center p-8">

          {/* Foto de Perfil (Descomentar cuando esté lista) */}
          {/*
            <img 
              src={miFoto} 
              className="h-64 w-64 rounded-full object-cover mb-8 border-4 border-white"
              alt={`Retrato de ${myName}, Desarrollador de Software`}
            />
            */}

          {/* Texto de Presentación */}
          <div className="max-w-3xl text-center">
            <h2 className="text-3xl font-bold mb-4">{heading}</h2>

            <p className="text-3xl leading-relaxed whitespace-pre-line font-hegarty">
              {text}
            </p>
          </div>

        </div>
      </div>
    </>
  );
};

export default Home;