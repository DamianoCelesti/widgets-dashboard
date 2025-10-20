// Importa gli hook useEffect e useState da React per gestire side effects e stato locale
import { useEffect, useState } from "react";
// Importa la funzione fetchData per eseguire richieste API
import { fetchData } from "../../utils/api";
// Importa il componente Loader per mostrare un’animazione di caricamento
import Loader from "../Loader";
// Importa il componente ErrorMessage per gestire e visualizzare errori
import ErrorMessage from "../ErrorMessage";
// Importa il componente Widget che fornisce la struttura base del riquadro
import Widget from "../Widget";

// Definizione del componente RecipeWidget
export default function RecipeWidget() {
    // Stato per salvare i dati della ricetta ottenuta dall’API
    const [recipe, setRecipe] = useState(null);
    // Stato booleano che indica se i dati sono ancora in caricamento
    const [loading, setLoading] = useState(true);
    // Stato che contiene eventuali errori di caricamento o rete
    const [error, setError] = useState(null);

    // useEffect viene eseguito una sola volta quando il componente viene montato
    useEffect(() => {
        // Richiama la funzione fetchData per ottenere fino a 100 ricette da dummyjson
        fetchData("recipes?limit=100")
            // Se la richiesta ha successo, elabora i dati ricevuti
            .then((data) => {
                // Sceglie una ricetta casuale dall’elenco di ricette ottenuto
                const random = data.recipes[Math.floor(Math.random() * data.recipes.length)];
                // Memorizza la ricetta selezionata nello stato
                setRecipe(random);
            })
            // In caso di errore, salva il messaggio di errore nello stato
            .catch((err) => setError(err.message))
            // Alla fine dell’operazione (successo o errore), disattiva lo stato di caricamento
            .finally(() => setLoading(false));
    }, []); // Dipendenze vuote → effetto eseguito solo al primo render

    // Render del componente
    return (
        // Usa il componente Widget come contenitore principale con un titolo e un’icona
        <Widget title="🍝 Ricetta del Giorno">
            {loading ? (
                // Se loading è true, mostra il componente Loader durante il caricamento
                <Loader />
            ) : error ? (
                // Se c’è un errore, mostra il componente ErrorMessage con il messaggio corrispondente
                <ErrorMessage message={error} />
            ) : recipe ? (
                // Se la ricetta è stata caricata correttamente, mostra i suoi dettagli
                <div>
                    {/* Mostra il nome della ricetta */}
                    <p>{recipe.name}</p>
                    {/* Mostra la cucina di appartenenza e la difficoltà */}
                    <p>{recipe.cuisine} — {recipe.difficulty}</p>
                </div>
            ) : (
                // Se non ci sono ricette disponibili, mostra un messaggio d’errore personalizzato
                <ErrorMessage message="Nessuna ricetta trovata." />
            )}
        </Widget>
    );
}
