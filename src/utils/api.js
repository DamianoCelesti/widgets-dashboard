export async function fetchData(endpoint) {
    try {
        // Simula un ritardo di 4 secondi per vedere se funziona il loader
        await new Promise((resolve) => setTimeout(resolve, 4000));

        const res = await fetch(`https://dummyjson.com/${endpoint}`);
        if (!res.ok) throw new Error("Errore nella risposta API");
        return await res.json();
    } catch (err) {
        console.error("API error:", err);
        throw new Error("Impossibile caricare i dati");
    }
}
