import NewsWidget from "./components/widgets/NewsWidget";
import QuoteWidget from "./components/widgets/QuoteWidget";
import ProductWidget from "./components/widgets/ProductWidget";
import RecipeWidget from "./components/widgets/RecipeWidget";
import "./index.css";

export default function App() {
  return (
    <div className="dashboard">
      <h1>📊 Dashboard</h1>

      <div className="widgets-grid">
        <NewsWidget />
        <QuoteWidget />
        <ProductWidget />
        <RecipeWidget />
      </div>
    </div>
  );
}
