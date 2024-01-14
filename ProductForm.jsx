import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Button, FormGroup, Input, Label } from "reactstrap";
import base_url from "../../api/bootapi";
import axios from "axios";

function ProductForm() {
    const [product, setProduct] = useState({ model: {}, size: {}, price:"" });
    const [model, setModel] = useState({ model_no: "", brand: {} });

    const [modelList, setModelList] = useState([]);
    const [sizeList, setSizeList] = useState([]);
    const [brandList, setBrandList] = useState([]);


    const btnHandle = () => {
        toast.success("done", {
            position: "top-center",
        });
    };

    const handleForm = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post(`${base_url}/productadd`, product);
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
                const response = await axios.get(`${base_url}/model`);
                const responses = await axios.get(`${base_url}/size`);
                if (response.status === 200 ) {
                    setModelList(response.data);                      
                } else {
                    console.error("Error fetching data");
                }
                if(responses.status===200){
                    setSizeList(responses.data);
                } else {
                    console.error("Error");
                }
            } catch (error) {
                console.error("Error", error);
            }
        };
        fetchData();
        // const fetchData = async () => {
            
                // axios.get(`${base_url}/model`).then((response) =>{
                //     setModelList(response.data);
                // })
                // .catch((error) => {
                //     console.error("Error fetching model data:", error);
                // });
                // axios.get(`${base_url}/size`).then((response) =>{
                //     setSizeList(response.data);
                // })
                // const responses = await axios.get(`${base_url}/size`);
                // if ( responses.status === 200) {
                //     // setModelList(response.data); // Assuming the data is an array of brands
                //     setSizeList(responses.data);
                // } else {
                //     console.error("Error fetching data");
           
        // };
        // fetchData();
    }, []);

    const handleSelectedChange = (event) => {
        setProduct({ ...product, [event.target.name]: event.target.value });
    };
    const handleChange = (event) =>{
        const selectedmodel = modelList.find((model) => model.model_id === parseInt(event.target.value));
        setProduct({...product,model:selectedmodel,});
    };
    const handleSizeChange = (event) =>{
        const selectedsize = sizeList.find((size) => size.size_id === parseInt(event.target.value));
        setProduct({...product,size:selectedsize,});
    };

    return (
        <div>
            <h1>Product</h1>
            <div className="c_form">
                <form onSubmit={handleForm}>
                <FormGroup>
                        <div>
                            <Label for="model">Model:</Label>
                        </div>
                        <select
                            value={product.model.model_id}
                            name="model"
                            onChange={handleChange}
                        >
                            <option value="">Select an option</option>
                            {modelList.map((model) => (
                                <option value={model.model_id} key={model.model_id}>
                                    {model.model_no}
                                </option>
                            ))}
                        </select>
                    </FormGroup>
                    <FormGroup>
                        <div>
                            <Label for="size">Size:</Label>
                        </div>
                        <select
                            value={product.size.size_id}
                            name="size"
                            onChange={handleSizeChange}
                        >
                            <option value="">Select Size</option>
                            {sizeList.map((size) => (
                                <option value={size.size_id} key={size.size_id}>
                                    {size.size_no}
                                </option>
                            ))}
                        </select>
                    </FormGroup>
                    <FormGroup>
                        <Label for="price">Price:</Label>
                        <Input
                            id="no"
                            value={product.price}
                            name="price"
                            placeholder="Price"
                            type="text"
                            onChange={handleSelectedChange}
                        />
                    </FormGroup>
                    <Button type="submit" onClick={btnHandle}>
                        Submit
                    </Button>
                </form>
            </div>
        </div>
    );
}

export default ProductForm;