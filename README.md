# 📊 React Dashboard Widgets

Un progetto React moderno che mostra una **dashboard interattiva** con diversi widget dinamici (news, citazioni, ricette e prodotti), realizzati con **API simulate da DummyJSON** e **UI moderna e reattiva** in puro CSS.

---

## 🚀 Funzionalità

- 📰 **NewsWidget** – mostra gli ultimi post di esempio.  
- 💡 **QuoteWidget** – visualizza una citazione casuale.  
- 🛒 **ProductWidget** – mostra un prodotto casuale con immagine e prezzo.  
- 🍝 **RecipeWidget** – genera una ricetta casuale del giorno.  
- 🎨 **Stile moderno** con transizioni fluide, ombre realistiche e design responsive.  
- ⚙️ **Gestione stati** (loading, error, data) con componenti dedicati (`Loader`, `ErrorMessage`).  

---

## 🧩 Struttura del progetto

```text
src/
 ├── components/
 │   ├── widgets/
 │   │   ├── NewsWidget.jsx
 │   │   ├── QuoteWidget.jsx
 │   │   ├── ProductWidget.jsx
 │   │   └── RecipeWidget.jsx
 │   ├── Widget.jsx
 │   ├── Loader.jsx
 │   └── ErrorMessage.jsx
 ├── utils/
 │   └── api.js
 ├── App.jsx
 ├── main.jsx
 └── index.css

```
---

## ⚙️ Installazione e avvio


```bash
# 1️⃣ Clona il repository
git clone https://github.com/tuo-username/nome-repo.git

# 2️⃣ Entra nella cartella
cd nome-repo

# 3️⃣ Installa le dipendenze
npm install

# 4️⃣ Avvia il progetto in modalità sviluppo
npm run dev
Apri il browser su http://localhost:5173 (o la porta indicata) per vedere la dashboard.
```

## 🧠 Tecnologie utilizzate

- ⚛️ **React 18**  
- 🧱 **Vite** (per build e sviluppo rapido)  
- 🎨 **CSS moderno** con variabili, gradienti e animazioni fluide  
- 🌐 **DummyJSON API** per dati fittizi realistici  

---

## 📁 API usate

Tutti i dati vengono caricati da **[https://dummyjson.com](https://dummyjson.com)**:

- `/posts?limit=3` → per le news  
- `/quotes/random` → per le citazioni  
- `/products?limit=100` → per i prodotti  
- `/recipes?limit=100` → per le ricette  

---

## 🧪 Esempi di comportamento

- Durante il caricamento → compare un **loader animato**.  
- In caso di errore → viene mostrato un messaggio chiaro con **animazione shake**.  
- Hover sui widget → effetto di **elevazione e profondità**.  
