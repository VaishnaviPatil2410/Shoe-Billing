import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Button, FormGroup, Input, Label } from "reactstrap";
import base_url from "../../api/bootapi";
import axios from "axios";

function Size()
{
    const btnHandle = () => {
        toast.success("done", {
            position:"top-center",
        });
    };
    useEffect(() => {
        document.title = "Size";
        
    },[]);

    const [size, setSize] = useState({size_no:""});

    const handleForm=(event)=>{
        console.log(size);
        postDatatoServer(size);
        event.preventDefault();
    };

    const postDatatoServer = (data) =>{
        axios.post(`${base_url}/sizeadd`, data).then(
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
            <h1>Size</h1>
            <div className="c_form">
                <form onSubmit={handleForm}>
                    <FormGroup>
                        <Label for="size_no">Size No:</Label>
                        <Input id="no" name="size_no" placeholder="Size No" type="text"
                        onChange={(event)=>{
                            setSize({...size, [event.target.name]: event.target.value });
                        }}
                        />
                    </FormGroup>
                    <Button type="submit" onClick={btnHandle}>Submit</Button>
                </form>
            </div>
        </div>
    )
}

export default Size;