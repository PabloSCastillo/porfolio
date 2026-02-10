import React from "react";

const Contact: React.FC = () => {
  // ===================================
  // ✅ VARIABLES DE CONTACTO
  // ===================================
  const contactHeading = "Let's build something together.";
  const contactSubtitle = "I'm currently open to new opportunities and projects. Send me a message, and I'll get back to you as soon as possible.";
  
  const emailAddress = "pablosebastiancastillo@gmmail.com"; // 📧 Reemplaza con tu email


  // ===================================

  return(
    <>
      <div className="min-h-lvh bg-black font-hegarty">
        
        {/* Título de la página */}
        <h1 className="grid grid-cols-1 text-center text-white text-4xl p-6 font-hegarty">CONTACT</h1>
        
        {/* Contenido principal de contacto */}
        <div className="flex flex-col md:flex-row max-w-5xl mx-auto p-8 gap-12 font-hegarty container">
            
            {/* Información y Mensaje (Lado Izquierdo) */}
            <div className="md:w-1/2 text-white font-bebas">
                <h2 className="text-3xl font-bold mb-4 font-bebas">{contactHeading}</h2>
                <p className="text-2xl mb-8 font-bebas">{contactSubtitle}</p>
                
            </div>

            {/* Formulario Simple (Lado Derecho) */}
            <div className="md:w-1/2">
                <form className="space-y-6">
                    <input 
                        type="text" 
                        placeholder="Your Name" 
                        className="w-full p-3 font-bebas bg-gray-800 text-xl  text-white border border-gray-700 focus:border-emerald-500 focus:outline-none"
                    />
                    <input 
                        type="email" 
                        placeholder="Your Email" 
                        className="w-full p-3 font-bebas bg-gray-800 text-xl  text-white border border-gray-700 focus:border-emerald-500 focus:outline-none"
                    />
                    <textarea 
                        placeholder="Your Message" 
                        rows={5}
                        className="w-full p-3 font-bebas bg-gray-800 text-xl text-white border border-gray-700 focus:border-emerald-500 focus:outline-none"
                    ></textarea>
                    <button 
                        type="submit" 
                        className="w-full bg-emerald-500 text-white  text-xl font-bold py-3 hover:bg-emerald-600 transition-colors font-bebas"
                    >
                        <p className="font-bebas w-300 text-2xl">Send</p>
                    </button>
                </form>
            </div>

        </div>
      </div>
    </>
  );
};

export default Contact;