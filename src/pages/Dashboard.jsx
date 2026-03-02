import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

function Dashboard() {

    const navigate = useNavigate();

  // Datos simulados
  const totalBloques = 16;
  const completados = 7;
  const pendientes = totalBloques - completados;

   return (
    <div className="dashboard-container">

      <header className="dashboard-header">
        <h1>Dashboard</h1>
        <p>Organiza tu día con claridad :B</p>
      </header>

      <div className="cards-container">
        <div className="card">
          <h2>{totalBloques}</h2>
          <p>Bloques Totales</p>
        </div>

        <div className="card">
          <h2>{completados}</h2>
          <p>Completados</p>
        </div>

        <div className="card">
          <h2>{pendientes}</h2>
          <p>Pendientes</p>
        </div>
      </div>

      <button 
        className="planner-button"
        onClick={() => navigate("/planificador")}
      >
        Ir al Planificador →
      </button>

    </div>
     );
}

export default Dashboard;