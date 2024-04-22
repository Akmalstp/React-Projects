import React from "react";
import { Link } from "react-router-dom";

const CategoriesComponent  = () =>{

    let categories = [
        {CategoriesId: 1, CategoriesName:"Electronics"},
        {CategoriesId: 2, CategoriesName:"Fashion"},
        {CategoriesId: 3, CategoriesName:"Footwear"}
    ]

    return(
        <div>
            <h2>Categories List</h2>
            <ul>
                {
                    categories.map(categorie=>
                        <li key={categorie.CategoriesId}>
                            <Link to={'products/' + categorie.CategoriesId}>{categorie.CategoriesName}</Link>
                        </li>
                        )
                }
            </ul>
        </div>
    )
}

export default CategoriesComponent;