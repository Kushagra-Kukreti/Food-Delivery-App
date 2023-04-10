import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addProduct } from "../Redux/features/productSlice";
import { useState } from "react";

function FoodCard(props) {
 
  return (
    <div className="card-container">
      <div className="card-top">
        <img src={props.foodImage} alt="food" className="card-img" />
        <p>{props.foodName}</p>
        <p className="food-description">{props.foodDescription}</p>
      </div>
      <div className="card-bottom">
        <p>Rs. {props.foodPrice}</p>
        <button onClick={(e)=>{
          props.setOrderName(props.foodName);
        }}>
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default FoodCard;
