import { useEffect, useState } from "react";
import { fetchData } from "../../utils/api";
import Loader from "../Loader";
import ErrorMessage from "../ErrorMessage";
import Widget from "../Widget";

export default function ProductWidget() {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchData("products?limit=100")
            .then((data) => {
                const random = data.products[Math.floor(Math.random() * data.products.length)];
                setProduct(random);
            })
            .catch((err) => setError(err.message))
            .finally(() => setLoading(false));
    }, []);

    return (
        <Widget title="🛒 Prodotto Consigliato">
            {loading ? (
                <Loader />
            ) : error ? (
                <ErrorMessage message={error} />
            ) : product ? (
                <div className="flex flex-col items-center text-center">
                    <img
                        src={product.thumbnail}
                        alt={product.title}
                        className="w-24 h-24 object-cover rounded-lg mb-2"
                    />
                    <p className="font-semibold">{product.title}</p>
                    <p className="text-sm text-gray-500">${product.price}</p>
                </div>
            ) : (
                <ErrorMessage message="Nessun prodotto trovato." />
            )}
        </Widget>
    );
}
