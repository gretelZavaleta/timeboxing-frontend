import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Planificador.css";

function Planificador() {

  const navigate = useNavigate();

  const [priorities, setPriorities] = useState(["", "", ""]);
  const [brainDump, setBrainDump] = useState("");

  // Generar horas dinámicamente
  const generarHoras = () => {
    const horas = [];
    for (let i = 5; i <= 23; i++) {
      horas.push(i);
    }
    return horas;
  };

  return (
    <div className="planner-container">

      {/* Botón regresar */}
      <button 
        className="back-button"
        onClick={() => navigate("/dashboard")}
      >
        ← Volver
      </button>

      <div className="planner-content">

        {/* Columna izquierda */}
        <div className="left-panel">
          <h2>Top Priorities</h2>

          {priorities.map((p, index) => (
            <input
              key={index}
              type="text"
              placeholder={`Prioridad ${index + 1}`}
              value={p}
              onChange={(e) => {
                const nuevas = [...priorities];
                nuevas[index] = e.target.value;
                setPriorities(nuevas);
              }}
            />
          ))}

          <h2>Brain Dump</h2>
          <textarea
            rows="12"
            placeholder="Escribe todo lo que tienes en mente..."
            value={brainDump}
            onChange={(e) => setBrainDump(e.target.value)}
          />
        </div>

        {/* Columna derecha */}
        <div className="right-panel">
          <h1>Daily Timeboxing Planner</h1>

          <div className="time-grid">
            {generarHoras().map((hora) => (
              <div key={hora} className="time-row">
                <div className="hour-label">{hora}:00</div>
                <input type="text" placeholder="Actividad" />

                <div className="hour-label">{hora}:30</div>
                <input type="text" placeholder="Actividad" />
              </div>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
}

export default Planificador;