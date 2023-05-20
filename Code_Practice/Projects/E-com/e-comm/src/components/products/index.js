import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../card";
import { setValue } from "../redux/reducers/value";

const Products=(props)=>{
    const [val,setVal]=useState("");
    const selector=useSelector((state=>state));

    const dispatch=useDispatch();
    console.log(selector);
    return(
        <div className="container p-4 d-flex flex-wrap justify-content-center">
            {
               selector.productData.value.map((productData)=>{
                   return <Card key={productData.id} {...productData}/>
                })
            }
            <input typr="text" value={val} className="" onChange={e=>setVal(e.target.value)}/>
            <button type="button" className="btn" onClick={()=>dispatch(setValue(val))}>Set</button>
        </div>
    )
}
export default Products;