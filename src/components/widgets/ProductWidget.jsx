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
                <div>
                    <img
                        src={product.thumbnail}
                        alt={product.title}
                        className="product-image"
                    />
                    <p><strong>{product.title}</strong></p>
                    <p>${product.price}</p>

                </div>
            ) : (
                <ErrorMessage message="Nessun prodotto trovato." />
            )}
        </Widget>
    );
}
