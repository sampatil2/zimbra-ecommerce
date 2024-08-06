import { useEffect, useState } from "react";

export const useProductData = (id) => {
    const [productData, setProductData] = useState({});

    useEffect(() => {
        const getProducts = async () => {
            const response = await fetch(
                `https://dummyjson.com/products/${id}`
            );
            const data = await response.json();
            setProductData(data);
        };

        getProducts();
    }, [id]);

    return productData;
};
