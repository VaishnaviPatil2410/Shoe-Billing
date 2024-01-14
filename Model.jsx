import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Button, FormGroup, Input, Label } from "reactstrap";
import base_url from "../../api/bootapi";
import axios from "axios";

function Model() {
    const [model, setModel] = useState({ model_no: "", brand: {} });
    const [brandList, setBrandList] = useState([]);

    const btnHandle = () => {
        toast.success("done", {
            position: "top-center",
        });
    };

    const handleForm = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post(`${base_url}/modeladd`, model);
            if (response.status === 200) {
                console.log("success");
            } else {
                console.error("error",response.status, response.data);
            }
        } catch (error) {
            console.error("Error", error);
        }
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

    const handleSelectedChange = (event) => {
        setModel({ ...model, [event.target.name]: event.target.value });
    };
    const handleChange = (event) =>{
        const selectedbrand = brandList.find((brand) => brand.id === parseInt(event.target.value));
        setModel({...model,brand:selectedbrand,});
    };

    return (
        <div>
            <h1>Model</h1>
            <div className="c_form">
                <form onSubmit={handleForm}>
                    <FormGroup>
                        <Label for="no">Model No:</Label>
                        <Input
                            id="no"
                            value={model.model_no}
                            name="model_no"
                            placeholder="Model No"
                            type="text"
                            onChange={handleSelectedChange}
                        />
                    </FormGroup>
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
                    </FormGroup>
                    <Button type="submit" onClick={btnHandle}>
                        Submit
                    </Button>
                </form>
            </div>
        </div>
    );
}

export default Model;
