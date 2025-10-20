// Importa gli hook useEffect e useState da React per gestire stato e side effects
import { useEffect, useState } from "react";
// Importa la funzione fetchData per richiamare l’API (situata in utils/api.js)
import { fetchData } from "../../utils/api";
// Importa il componente Loader che mostra un’animazione durante il caricamento
import Loader from "../Loader";
// Importa il componente ErrorMessage per mostrare eventuali errori
import ErrorMessage from "../ErrorMessage";
// Importa il componente Widget che fornisce la struttura base della card
import Widget from "../Widget";

// Definizione del componente principale ProductWidget
export default function ProductWidget() {
    // Stato per salvare i dati del prodotto selezionato
    const [product, setProduct] = useState(null);
    // Stato booleano per indicare se i dati stanno ancora caricando
    const [loading, setLoading] = useState(true);
    // Stato per memorizzare un eventuale messaggio di errore
    const [error, setError] = useState(null);

    // useEffect viene eseguito una sola volta al montaggio del componente
    useEffect(() => {
        // Chiama la funzione fetchData per ottenere 100 prodotti da dummyjson
        fetchData("products?limit=100")
            .then((data) => {
                // Se la chiamata ha successo, sceglie un prodotto casuale tra quelli ricevuti
                const random = data.products[Math.floor(Math.random() * data.products.length)];
                // Salva il prodotto selezionato nello stato
                setProduct(random);
            })
            .catch((err) =>
                // Se c’è un errore nella chiamata, memorizza il messaggio di errore
                setError(err.message)
            )
            .finally(() =>
                // Quando la promessa è completata (successo o errore), disattiva il loader
                setLoading(false)
            );
    }, []); // Dipendenze vuote: viene eseguito solo al primo render

    // Render del componente
    return (
        // Usa il componente Widget come contenitore con titolo personalizzato
        <Widget title="🛒 Prodotto Consigliato">
            {loading ? (
                // Se loading è true mostra il componente Loader
                <Loader />
            ) : error ? (
                // Se c’è un errore mostra il messaggio di errore
                <ErrorMessage message={error} />
            ) : product ? (
                // Se il prodotto è stato caricato correttamente mostra i suoi dati
                <div>
                    {/* Mostra l’immagine del prodotto */}
                    <img
                        src={product.thumbnail} // URL dell’immagine del prodotto
                        alt={product.title}     // Testo alternativo per accessibilità
                        className="product-image" // Classe CSS per lo stile definito in index.css
                    />
                    {/* Nome del prodotto in grassetto */}
                    <p><strong>{product.title}</strong></p>
                    {/* Prezzo del prodotto */}
                    <p>${product.price}</p>
                </div>
            ) : (
                // Caso finale: se non ci sono prodotti mostra un messaggio d’errore personalizzato
                <ErrorMessage message="Nessun prodotto trovato." />
            )}
        </Widget>
    );
}
