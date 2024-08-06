import React from "react";
import { Categories } from "./Categories";
import { useProductList } from "../hooks/useProductList";
import { ProductList } from "./ProductList";
import "./Plp.css";

export const Plp = () => {
    const { products, isLoading } = useProductList();

    return (
        <div
            className="plp-page"
            style={isLoading ? { opacity: 0.5 } : { opacity: 1 }}
        >
            <Categories />
            <ProductList products={products} />
        </div>
    );
};
