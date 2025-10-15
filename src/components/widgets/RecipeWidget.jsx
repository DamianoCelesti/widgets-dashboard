import { useEffect, useState } from "react";
import { fetchData } from "../../utils/api";
import Loader from "../Loader";
import ErrorMessage from "../ErrorMessage";
import Widget from "../Widget";

export default function RecipeWidget() {
    const [recipe, setRecipe] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchData("recipes?limit=100")
            .then((data) => {
                const random = data.recipes[Math.floor(Math.random() * data.recipes.length)];
                setRecipe(random);
            })
            .catch((err) => setError(err.message))
            .finally(() => setLoading(false));
    }, []);

    return (
        <Widget title="🍝 Ricetta del Giorno">
            {loading ? (
                <Loader />
            ) : error ? (
                <ErrorMessage message={error} />
            ) : recipe ? (
                <div>
                    <p className="font-semibold">{recipe.name}</p>
                    <p className="text-sm text-gray-500 mt-1">
                        {recipe.cuisine} — {recipe.difficulty}
                    </p>
                </div>
            ) : (
                <ErrorMessage message="Nessuna ricetta trovata." />
            )}
        </Widget>
    );
}
