import React, { useEffect, useState } from "react";
import base_url from "../api/bootapi";
import { Button, FormGroup, Input, Label } from "reactstrap";
import axios from "axios";



function Bill()
{
    const[mobileNo, setMobileNo] = useState('');
    const[billDetails, setBillDetails] = useState(null);
    const [model, setModel] = useState({ model_no: "", brand: {} });
    const [brandList, setBrandList] = useState([]);


    const handleMobileNo = (e) =>{
        setMobileNo(e.target.value);
    };
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${base_url}/brand`);
                if (response.status === 200) {
                    setBrandList(response.data); // Assuming the data is an array of brands
                } else {
                    console.error("Error fetching data");
                }
            } catch (error) {
                console.error("Error", error);
            }
        };
        fetchData();
    }, []);

    const fetchDetails = () => {
        fetch(`${base_url}/customer/${mobileNo}`)
        .then((response) => {
            if(!response.ok){
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then((data) => setBillDetails(data))
        .catch((error) => console.error(error));
    };
    const handleChange = (event) =>{
        const selectedbrand = brandList.find((brand) => brand.id === parseInt(event.target.value));
        setModel({...model,brand:selectedbrand,});
    };
    
    return(
        <div>
            <h1>Bill</h1>
            <div>
                <input type="number" value={mobileNo} onChange={handleMobileNo}/>
                <button onClick={fetchDetails}>Submit</button>
            </div>

            {billDetails && (
                <div>
                    <h2>Bill</h2>
                    <p>Name:{billDetails.name}</p>
                    <p>Mobile No:{billDetails.mobileNo}</p>
                    <p>Address:{billDetails.address}</p>
                
                <FormGroup>
                <div>
                    <Label for="brand">Brand:</Label>
                </div>
                <select
                    value={model.brand.id}
                    name="brand"
                    onChange={handleChange}
                >
                    <option value="">Select an option</option>
                    {brandList.map((brand) => (
                        <option value={brand.id} key={brand.id}>
                            {brand.name}
                        </option>
                    ))}
                </select>
            </FormGroup></div>
            )}
            
        </div>
    )
}

export default Bill;