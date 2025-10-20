// Importa gli hook di React necessari per gestire stato e side effects
import { useEffect, useState } from "react";
// Importa la funzione fetchData per ottenere i dati da un'API esterna (dummyjson)
import { fetchData } from "../../utils/api";
// Importa il componente Loader per mostrare un indicatore durante il caricamento
import Loader from "../Loader";
// Importa il componente ErrorMessage per visualizzare errori di caricamento
import ErrorMessage from "../ErrorMessage";
// Importa il componente Widget, che fornisce la struttura grafica di base del riquadro
import Widget from "../Widget";

// Definizione del componente QuoteWidget
export default function QuoteWidget() {
    // Stato per salvare la citazione ottenuta dall'API
    const [quote, setQuote] = useState(null);
    // Stato booleano che indica se i dati sono ancora in caricamento
    const [loading, setLoading] = useState(true);
    // Stato che contiene eventuali errori di rete o fetch
    const [error, setError] = useState(null);

    // useEffect viene eseguito una sola volta al montaggio del componente
    useEffect(() => {
        // Chiama la funzione fetchData per ottenere una citazione casuale
        fetchData("quotes/random")
            // Quando la promessa è risolta con successo, salva i dati della citazione nello stato
            .then((data) => setQuote(data))
            // Se si verifica un errore nella chiamata API, salva il messaggio di errore
            .catch((err) => setError(err.message))
            // Quando l’operazione termina (sia in caso di successo che errore), imposta loading a false
            .finally(() => setLoading(false));
    }, []); // Array di dipendenze vuoto → l’effetto si esegue solo al primo render

    // Ritorna il JSX da rendere nel DOM
    return (
        // Usa il componente Widget come contenitore con titolo “Quote of the Day”
        <Widget title="💡 Quote of the Day">
            {loading ? (
                // Se lo stato loading è true, mostra il componente Loader
                <Loader />
            ) : error ? (
                // Se esiste un errore, mostra il messaggio di errore usando ErrorMessage
                <ErrorMessage message={error} />
            ) : (
                // Se non ci sono errori e i dati sono disponibili, mostra la citazione
                <blockquote>
                    {/* Visualizza il testo della citazione tra virgolette */}
                    “{quote.quote}”
                    {/* Mostra l'autore della citazione nel footer */}
                    <footer>— {quote.author}</footer>
                </blockquote>
            )}
        </Widget>
    );
}
