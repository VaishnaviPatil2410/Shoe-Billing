import React, { useState } from "react";
import { Button} from "reactstrap";
import { NavLink } from "react-router-dom";

import { BrowserRouter as Router, Link, Route,Switch, Routes } from "react-router-dom";
import Brand from "./AddStock/Brand";
import Model from "./AddStock/Model";
import ProductForm from "./AddStock/ProductForm";
import Size from "./AddStock/Size";

// const menuItem=[
//     {
//         path:"/brand",
//         name:"Brand"
//     }
//     {
//         path:"/model",
//         name:"Model"
//     },
//     {
//         path:"/size",
//         name:"Size"
//     },
//     {
//         path:"/product",
//         name:"Product"
//     }
// ];

function AddStock({children})
{
    const[isOpen, setIsOpen] = useState(false);
    const toggle =() => setIsOpen(!isOpen);

    return(
        
            <div className="main-container">

            {/* // <Router> */}
                <div className="p_sidebar">
                    
                    <nav>
                        <ul>
                            <Button>
                                <Link className="p_link" to="/addStock/*">Brand</Link>
                            </Button>                            
                            <Button>
                                <Link className="p_link" to="/addStock/model">model</Link>
                            </Button>
                            <Button>
                                <Link className="p_link" to="/addStock/size">Size</Link>
                            </Button>
                            <Button>
                                <Link className="p_link" to="/addStock/productForm">Product</Link>
                            </Button>
                        </ul>
                    </nav>
                    <main>
                    
                    <Routes>
                    {/* <Route path='/brand'element={<Brand/>}/> */}
                    <Route path="/*" exact Component={Brand}/>
                    <Route path="/model" Component={Model}/>
                    <Route path="/size" Component={Size}/>
                    <Route path="/productForm" Component={ProductForm}/>
                    </Routes>
                   
                    </main>
                    
                </div>
            {/* <main>{children}</main> */}
                
            {/* // </Router> */}

          </div>
            
        // </div>
    );
}

export default AddStock;