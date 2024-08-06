import { useCategories } from "../../hooks/useCategories";
import { useNavigate, useParams } from "react-router-dom";
import "./Categories.css";

export const Categories = () => {
    const categories = useCategories();
    const navigate = useNavigate();
    const { name } = useParams();

    const handleCategoryChange = (e) => {
        const newCategory = e.target.value;
        navigate(
            newCategory ? `/products/category/${newCategory}` : `/products`
        );
    };

    return (
        <div className="categories">
            <h3>Category</h3>
            <select onChange={handleCategoryChange} value={name ? name : ""}>
                <option key="default" value="">
                    Select
                </option>
                {categories?.map((cat) => (
                    <option key={cat.slug} value={cat.slug}>
                        {cat.name}
                    </option>
                ))}
            </select>
        </div>
    );
};
