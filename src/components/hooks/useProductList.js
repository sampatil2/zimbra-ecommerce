import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const useProductList = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const { name } = useParams();

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);

            const response = await fetch(
                `https://dummyjson.com/products${
                    name ? `/category/${name}` : ""
                }`
            );
            const data = await response.json();
            console.log(data.products);
            setProducts(data?.products);

            setLoading(false);
        };

        getProducts();
    }, [name]);

    return { products, isLoading };
};
