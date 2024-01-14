import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Button, FormGroup, Input, Label } from "reactstrap";
import base_url from "../../api/bootapi";
import axios from "axios";

function Brand()
{
    const btnHandle = () => {
        toast.success("done", {
            position:"top-center",
        });
    };
    useEffect(() => {
        document.title = "Brand";
        
    },[]);

    const [brand, setBrand] = useState({});

    const handleForm=(event)=>{
        console.log(brand);
        postDatatoServer(brand);
        event.preventDefault();
    };

    const postDatatoServer = (data) =>{
        axios.post(`${base_url}/brandadd`, data).then(
            (response) => {
                console.log(response);
                console.log("success");
            },
            (error)=>{
                console.log(error);
                console.log("error");
            }
        );
    };

    return(
        <div>
            <h1>Brand</h1>
            <div className="c_form">
                <form onSubmit={handleForm}>
                    <FormGroup>
                        <Label for="name">Brand Name:</Label>
                        <Input id="name" name="name" placeholder="Brand Name" type="text"
                        onChange={(event)=>{
                            setBrand({...brand,name:event.target.value});
                        }}
                        />
                    </FormGroup>
                    <Button type="submit" onClick={btnHandle}>Submit</Button>
                </form>
            </div>
        </div>
    )
}

export default Brand;