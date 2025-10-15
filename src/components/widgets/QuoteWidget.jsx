import { useEffect, useState } from "react";
import { fetchData } from "../../utils/api";
import Loader from "../Loader";
import ErrorMessage from "../ErrorMessage";
import Widget from "../Widget";

export default function QuoteWidget() {
    const [quote, setQuote] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchData("quotes/random")
            .then((data) => setQuote(data))
            .catch((err) => setError(err.message))
            .finally(() => setLoading(false));
    }, []);

    return (
        <Widget title="💡 Quote of the Day">
            {loading ? (
                <Loader />
            ) : error ? (
                <ErrorMessage message={error} />
            ) : (
                <blockquote>
                    “{quote.quote}”
                    <footer>— {quote.author}</footer>
                </blockquote>
            )}
        </Widget>
    );
}
