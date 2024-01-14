import React, { useEffect, useState } from "react";
import base_url from "../api/bootapi";
import axios from "axios";

function Product({children})
{
    const [productList, setProductList] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${base_url}/bill`);
                if (response.status === 200) {
                    setProductList(response.data); // Assuming the data is an array of brands
                } else {
                    console.error("Error fetching data");
                }
            } catch (error) {
                console.error("Error", error);
            }
        };
        fetchData();
    }, []);

    return(
        
        <div>
        <h1>Bill Details</h1>
        <div className="table_div">
        <table className="table table-striped table-bordered">
            <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Address</th>
                <th>Mobile No</th>
                <th>Brand</th>
                <th>Model</th>
                <th>Size</th>
                <th>Price</th>
                <th>Date</th>
                <th>Discount</th>
                <th>Pending</th>
            </tr>
            </thead>
            <tbody>
            {productList.map((item) => (
                <tr key={item.id}>
                <td>{item.b_id}</td>
                <td>{item.customer.name}</td>
                <td>{item.customer.address}</td>
                <td>{item.customer.mobileNo}</td>
                <td>{item.product.model.brand.name}</td>
                <td>{item.product.model.model_no}</td>
                <td>{item.product.size.size_no}</td>
                <td>{item.product.price}</td>
                <td>{item.date}</td>
                <td>{item.discount}</td>
                <td>{item.pending}</td>
                </tr>
            ))}
            </tbody>
        </table>
        </div>
    </div>
    );
}

export default Product;