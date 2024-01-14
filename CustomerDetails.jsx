import React, { useEffect, useState } from "react";
import base_url from "../api/bootapi";
import axios from "axios";
import { Button, Table } from "reactstrap";


function CustomerDetails()
{
    const [customerList, setCustomerList] = useState([]);
    const [name, setName] = useState('')
    const [mobileNo, setMobileNo] = useState('')
    const [address, setAddress] = useState('')
    const [editId, setEditId] = useState(-1)

    // const deleteCustomer=(id) =>{
    //     axios.
    // }
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${base_url}/customer`);
                if (response.status === 200) {
                    setCustomerList(response.data); // Assuming the data is an array of brands
                } else {
                    console.error("Error fetching data");
                }
            } catch (error) {
                console.error("Error", error);
            }
        };
        fetchData();
    }, []);

    const handleEdit = (id) => {
        axios.get(`${base_url}/customer`+id)
        .then(res => {
            console.log(res.data)
            setName(res.data.name)
            setMobileNo(res.data.mobileNo)
            setAddress(res.data.address)
        })
        .catch(er => console.log(er));
        setEditId(id)
    }

    const handleUpdate =() => {
        axios.put(`${base_url}/customer`+editId, {id:editId, name, mobileNo, address})
        .then(res => {
            console.log(res);
            location.reload();
            setEditId(-1)
        }).catch(err => console.log(err));
    }

    return(
        <div>
            <h1>Customer Details</h1>
            <div className="table_div">
            <table className="table table-striped table-bordered">
                <thead>
                <tr className="thead">
                    <th>ID</th>
                    <th>Name</th>
                    <th>Mobile No</th>
                    <th>Address</th>
                </tr>
                </thead>
                <tbody>
                {customerList.map((item) => (
                    item.c_id === editId ?
                    <tr>
                        <td>{item.c_id}</td>
                        <td><input type="text" value={name} onChange={e => setName(e.target.value)}/></td>
                        <td><input type="text" value={mobileNo} onChange={e => setMobileNo(e.target.value)}/></td>
                        <td><input type="text" value={address} onChange={e => setAddress(e.target.value)}/></td>
                        <td><button onClick={handleUpdate}>Update</button></td>
                    </tr>
                    :
                    <tr key={item.id}>
                    <td>{item.c_id}</td>
                    <td>{item.name}</td>
                    <td>{item.mobileNo}</td>
                    <td>{item.address}</td>
                    <td>
                        <button onClick={() => handleEdit(item.c_id)}>Edit</button>
                        <Button color="warning ml-5">Delete</Button>
                    </td>
                    </tr>
                ))}
                </tbody>
            </table>
            </div>
        </div>
    )
}

export default CustomerDetails;