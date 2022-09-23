import React from "react";
import Data from "./Json";
import { useState } from "react";
import { useEffect } from "react";


const Layout = () => {

    let x = ["Empty"]
    const [items,setItems] = useState(x);
    

    const add = (i) =>{
        setItems([...items,i.name])

    }
    const del = (i) =>{
      setItems((oldItems) =>{
        return oldItems.filter((arrElem,index)=>{
          return arrElem !== i.name;
        })

      })
    }
    if (items !=""){
      console.log("Your Cart list " + items)
    }

    useEffect(()=>{

    })



  return (
    <>
      {Data.map((val, index) => {
        return (
          <div className="container" key={index}>
            <div className="heading">
              <h1>{val.name}</h1>
              <hr />
            </div>
            <div className="card-container">
              {val.productList.map((item,id) => {
                return (
                  <div className="card-div" key={id}>
                    <div className="details">
                      <h3 >Name : {item.name}</h3>
                      <h3>Price : {item.price}</h3>
                    </div>
                    <div className="btn">
                      <button onClick={()=>add(item)}>Add to the card</button>
                      <button onClick={()=>del(item)}>Remove from cart</button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Layout;
