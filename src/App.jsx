// Importa i quattro widget principali che compongono la dashboard
import NewsWidget from "./components/widgets/NewsWidget";   // Widget che mostra le notizie
import QuoteWidget from "./components/widgets/QuoteWidget"; // Widget che mostra una citazione casuale
import ProductWidget from "./components/widgets/ProductWidget"; // Widget che mostra un prodotto casuale
import RecipeWidget from "./components/widgets/RecipeWidget";   // Widget che mostra una ricetta casuale

// Importa il file CSS principale per applicare gli stili globali e della dashboard
import "./index.css";

// Definisce il componente principale dell’applicazione, chiamato App
export default function App() {
  return (
    // Contenitore principale della dashboard
    <div className="dashboard">
      {/* Titolo della pagina */}
      <h1>📊 Dashboard</h1>

      {/* Contenitore griglia che dispone i vari widget in modo responsive */}
      <div className="widgets-grid">
        {/* Ogni widget viene visualizzato all’interno della griglia */}
        <NewsWidget />     {/* Mostra le notizie */}
        <QuoteWidget />    {/* Mostra una citazione */}
        <ProductWidget />  {/* Mostra un prodotto casuale */}
        <RecipeWidget />   {/* Mostra una ricetta del giorno */}
      </div>
    </div>
  );
}
