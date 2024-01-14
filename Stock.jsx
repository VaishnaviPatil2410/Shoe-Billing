import React, { useEffect, useState } from "react";
import base_url from "../api/bootapi";

function Stock()
{
    const [productList, setProductList] =useState([]);

    useEffect(() =>{
        const fetchData = async()=>{
            const response = await fetch(`${base_url}/product`);
            const newData = await response.json();
            setProductList(newData);
        };
        fetchData();
    },[]);


    return(
        <div>
            <h1>Stock</h1>
            <div className="table_div">
            <table className="table table-striped table-bordered">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Brand</th>
                    <th>Model No</th>
                    <th>Size</th>
                    <th>Price</th>
                </tr>
                </thead>
                <tbody>
                {productList.map((item) => (
                    <tr key={item.id}>
                    <td>{item.p_id}</td>
                    <td>{item.model.brand.name}</td>
                    <td>{item.model.model_no}</td>
                    <td>{item.size.size_no}</td>
                    <td>{item.price}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            </div>
        </div>
    )
}

export default Stock;