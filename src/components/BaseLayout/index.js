import React from "react";
import { Outlet, useParams } from "react-router-dom";
import "./BaseLayout.css";

export const BaseLayout = () => {
    const { id } = useParams();

    return (
        <div className="root-div">
            <h1 className="heading">
                {id ? "Product Details Page" : "Product Listing Page"}
            </h1>
            <Outlet />
        </div>
    );
};
