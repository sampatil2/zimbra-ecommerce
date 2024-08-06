import { useEffect, useRef } from "react";

export const useCategories = () => {
    const categoriesRef = useRef();

    useEffect(() => {
        const getCategories = async () => {
            const response = await fetch(
                "https://dummyjson.com/products/categories"
            );
            const data = await response.json();
            categoriesRef.current = data;
        };

        getCategories();
    }, []);

    return categoriesRef.current;
};
