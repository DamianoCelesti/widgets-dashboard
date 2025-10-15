import { useEffect, useState } from "react";
import { fetchData } from "../../utils/api";
import Loader from "../Loader";
import ErrorMessage from "../ErrorMessage";
import Widget from "../Widget";

export default function NewsWidget() {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchData("posts?limit=3")
            .then((data) => setNews(data.posts))
            .catch((err) => setError(err.message))
            .finally(() => setLoading(false));
    }, []);

    return (
        <Widget title="📰 News">
            {loading ? (
                <Loader />
            ) : error ? (
                <ErrorMessage message={error} />
            ) : (
                <ul className="space-y-2 text-sm">
                    {news.map((item) => (
                        <li key={item.id}>
                            <strong>{item.title}</strong>
                            <p className="text-gray-600">{item.body.slice(0, 60)}...</p>
                        </li>
                    ))}
                </ul>
            )}
        </Widget>
    );
}
