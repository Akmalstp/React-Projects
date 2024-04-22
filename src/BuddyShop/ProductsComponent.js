import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const ProductsComponent = () =>{
    let {id} = useParams();
    let products = [
        {Name:"VU TV", Price:5647, CategoryId:1},
        {Name:"Mac Book", Price:24324, CategoryId:1},
        {Name:"Red Jacket", Price:2435, CategoryId:2},
        {Name:"Yellow Tshirt", Price:45343, CategoryId:2},
        {Name:"Woodland Shoe", Price:7654, CategoryId:3},
        {Name:"Boot shoe", Price:6544, CategoryId:3},
    ]
    let result = products.filter(category =>  category.CategoryId == id);
    return(
        <div>
            <h2>Product List</h2>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        result.map(product => 
                    <tr>
                        <td>{product.Name}</td>
                        <td>{product.Price}</td>
                    </tr>
                            )
                    }
                </tbody>
            </table>
            <br/>
            <Link to="/categories">Back to categories</Link>
        </div>
    )
}

export default ProductsComponent;