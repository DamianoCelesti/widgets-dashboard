export default function ErrorMessage({ message }) {
    return <div className="error-message">{message || "Errore durante il caricamento"}</div>;
}
