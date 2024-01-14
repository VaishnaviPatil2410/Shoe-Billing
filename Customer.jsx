import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Button, FormGroup, Input, Label } from "reactstrap";
import base_url from "../api/bootapi";
import axios from "axios";

function Customer(){
const btnHandle = () => {
    toast.success("done", {
        position:"top-center",
    });
};
useEffect(() => {
    document.title = "Customer";
},[]);

const [customer, setCustomer] = useState({});

const handleForm=(event)=>{
    console.log(customer);
    postDatatoServer(customer);
    event.preventDefault();
};



const postDatatoServer = (data) =>{
    axios.post(`${base_url}/custadd`, data).then(
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
            <h1>Customer</h1>
            <div className="c_form">
            <form onSubmit={handleForm}>
                <FormGroup>
                    <Label for="name">Customer Name:</Label>
                    <Input id="name" name="name" placeholder="Enter name" type="text"
                    onChange={(event)=>{
                        setCustomer({...customer, name:event.target.value});
                    }}/>
                </FormGroup>
                <FormGroup>
                    <Label for="number">Mobile No:</Label>
                    <Input id="number" name="number" placeholder="Enter Mobile No" type="number" 
                    onChange={(event)=>{
                        setCustomer({...customer, mobileNo:event.target.value});
                    }}/>
                </FormGroup>
                <FormGroup>
                    <Label for="add">Address:</Label>
                    <Input id="add" name="add" placeholder="Enter valid address" type="textarea"
                    onChange={(event)=>{
                        setCustomer({...customer, address:event.target.value});
                    }}/>
                </FormGroup>
                <Button type="submit">Submit</Button>
                
            </form>
            </div>
        </div>
    )
}

export default Customer;