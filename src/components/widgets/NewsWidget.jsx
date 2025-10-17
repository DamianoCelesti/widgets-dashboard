// Importa gli hook di React per gestire stato e ciclo di vita del componente
import { useEffect, useState } from "react";

// Importa la funzione per recuperare dati dall’API simulata
import { fetchData } from "../../utils/api";

// Importa il componente Loader (mostra un'animazione di caricamento)
import Loader from "../Loader";

// Importa il componente ErrorMessage (mostra un messaggio d’errore)
import ErrorMessage from "../ErrorMessage";

// Importa il componente Widget (contenitore grafico con titolo)
import Widget from "../Widget";

// Definisce il componente principale NewsWidget
export default function NewsWidget() {

    // Stato che contiene la lista delle notizie ricevute dall’API
    const [news, setNews] = useState([]);

    // Stato che indica se il caricamento è in corso
    const [loading, setLoading] = useState(true);

    // Stato per gestire eventuali errori durante il fetch
    const [error, setError] = useState(null);

    // useEffect viene eseguito al montaggio del componente
    useEffect(() => {

        // Chiama la funzione fetchData per ottenere 3 post fittizi
        fetchData("posts?limit=3")

            // Se la richiesta ha successo, salva i post nello stato “news”
            .then((data) => setNews(data.posts))

            // Se avviene un errore, imposta il messaggio di errore nello stato “error”
            .catch((err) => setError(err.message))

            // In ogni caso (successo o errore), imposta loading a false
            .finally(() => setLoading(false));

        // L’array vuoto [] fa sì che l’effetto venga eseguito solo una volta
    }, []);

    // Il componente restituisce la UI (interfaccia utente)
    return (
        // Usa il componente Widget come contenitore, con titolo e icona
        <Widget title="📰 News">

            {/* Se il caricamento è attivo, mostra il loader */}
            {loading ? (
                <Loader />

                // Altrimenti, se c’è un errore, mostra il messaggio d’errore
            ) : error ? (
                <ErrorMessage message={error} />

                // Se tutto è andato bene, mostra la lista delle notizie
            ) : (
                <ul>
                    {/* Cicla su ogni notizia e crea un elemento <li> */}
                    {news.map((item) => (
                        <li key={item.id}>
                            {/* Titolo della notizia in grassetto */}
                            <strong>{item.title}</strong>

                            {/* Corpo della notizia, accorciato a 60 caratteri */}
                            <p>{item.body.slice(0, 60)}...</p>
                        </li>
                    ))}
                </ul>
            )}
        </Widget>
    );
}
