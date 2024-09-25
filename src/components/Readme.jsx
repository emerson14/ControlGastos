import React, { useState } from "react";

export function Readme() {
  // Estado para manejar el idioma
  const [language, setLanguage] = useState("es"); // 'es' para español, 'en' para inglés

  // Función para cambiar el idioma
  const toggleLanguage = () => {
    setLanguage(language === "es" ? "en" : "es");
  };

  // Textos en ambos idiomas
  const texts = {
    es: {
      title: "Instrucciones para el Sistema de Control de Ganancias y Gastos",
      instructionsTitle: "¿Cómo usar la aplicación?",
      gain: "Para agregar una <b>ganancia</b>, introduce el valor como un número <b>positivo</b>. Ejemplo: <code>500</code>",
      expense: "Para agregar un <b>gasto</b>, introduce el valor con un signo <b>negativo</b>. Ejemplo: <code>-300</code>",
      description:
        "La aplicación se encarga de <b>controlar tus ingresos y gastos</b>, proporcionándote una vista clara de tu balance financiero.",
      who: "¿Quién hizo esto?",
      signature:
        "Esta aplicación fue creada con mucha dedicación por <b>Emerson Guerrero DEV</b>. ¡Mantén tus finanzas bajo control y sigue adelante!",
      buttonText: "Cambiar a Inglés"
    },
    en: {
      title: "Instructions for the Income and Expense Control System",
      instructionsTitle: "How to use the app?",
      gain: "To add an <b>income</b>, enter the value as a <b>positive</b> number. Example: <code>500</code>",
      expense: "To add an <b>expense</b>, enter the value with a <b>negative</b> sign. Example: <code>-300</code>",
      description:
        "The app helps you <b>manage your income and expenses</b>, providing a clear view of your financial balance.",
      who: "Who made this?",
      signature:
        "This app was created with dedication by <b>Emerson Guerrero DEV</b>. Keep your finances under control and keep moving forward!",
      buttonText: "Switch to Spanish"
    }
  };

  // Obtener los textos según el idioma seleccionado
  const currentTexts = texts[language];

  return (
    <div className="p-4 bg-neutral-800 rounded-md">
      <h1 className="text-yellow-400 text-xl font-bold mb-4 text-center">
        {currentTexts.title}
      </h1>
      <p className="mb-2">
        <b>{currentTexts.instructionsTitle}</b>
      </p>
      <ul className="list-disc list-inside mb-4">
        <li dangerouslySetInnerHTML={{ __html: currentTexts.gain }}></li>
        <li dangerouslySetInnerHTML={{ __html: currentTexts.expense }}></li>
      </ul>

      <p className="mb-4" dangerouslySetInnerHTML={{ __html: currentTexts.description }}></p>

      <h2 className="text-yellow-400 text-lg font-bold mt-4 text-center">
        {currentTexts.who}
      </h2>
      <p className="text-center mt-2" dangerouslySetInnerHTML={{ __html: currentTexts.signature }}></p>

      {/* Botón para cambiar el idioma */}
      <div className="text-center mt-4">
        <button
          onClick={toggleLanguage}
          className="bg-yellow-400 text-black px-4 py-2 rounded-md hover:bg-yellow-500"
        >
          {currentTexts.buttonText}
        </button>
      </div>
    </div>
  );
}
