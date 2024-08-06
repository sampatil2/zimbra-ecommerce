import React from "react";
import "./ProductList.css";

export const ProductList = ({ products }) => {
    return (
        <div className="product-list">
            {products?.map((prd) => (
                <a
                    key={prd.id}
                    href={`/products/${prd.id}`}
                    className="product-card"
                >
                    <img
                        className="plp-img"
                        src={prd.thumbnail}
                        alt={prd.title}
                    />
                    <p>{prd.title}</p>
                </a>
            ))}
        </div>
    );
};
