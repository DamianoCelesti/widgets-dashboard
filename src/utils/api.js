// Esporta una funzione asincrona chiamata fetchData che accetta un parametro "endpoint"
export async function fetchData(endpoint) {
    try {
        // Simula un ritardo di 4 secondi per testare il comportamento del loader
        await new Promise((resolve) => setTimeout(resolve, 4000));

        // Esegue una richiesta HTTP GET all’API di DummyJSON concatenando l’endpoint passato
        const res = await fetch(`https://dummyjson.com/${endpoint}`);

        // Controlla se la risposta è valida (status compreso tra 200–299)
        if (!res.ok) throw new Error("Errore nella risposta API");

        // Converte il corpo della risposta in formato JSON e lo restituisce
        return await res.json();
    } catch (err) {
        // Se c'è un errore (di rete o nel parsing), lo mostra nella console per debug
        console.error("API error:", err);

        // Lancia un nuovo errore personalizzato per essere gestito dal componente chiamante
        throw new Error("Impossibile caricare i dati");
    }
}
