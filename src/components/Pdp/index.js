import React from "react";
import { useParams } from "react-router-dom";
import { useProductData } from "../hooks/useProductData";
import "./Pdp.css";

export const Pdp = () => {
    const { id } = useParams();
    const { images, title, category, description } = useProductData(id);

    return (
        <div className="pdp-page">
            <img
                className="pdp-img"
                src={images?.[0]}
                alt={title}
                height="400px"
                width="400px"
            />
            <div className="product-details">
                <p className="category">{category}</p>
                <p>{title}</p>
                <p>{description}</p>
            </div>
        </div>
    );
};
