import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggleModal } from "../Redux/features/modalSlice";

const Modal = ({ name, email, password }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleBackClick() {
    navigate("/dashboard");
    dispatch(toggleModal);
  }
  return (
    <div className="modal">
      <div className="modal__content">

        <button
          className="cancel-container"
          type="button"
          onClick={() => handleBackClick()}
        >
          {"< "}Back
        </button>

        <div>
          <div className="card">
            <div className="card-body bg-success">
            {name}
            </div>
          </div>
          <hr />
          <div className="card bg-success ml-0 p-0 ">
            <div className="card-body ">
            {email}
            </div>
          </div>
          <hr />
          <div className="card">
            <div className="card-body bg-success">
            {password}
            </div>
          </div>
          <hr />

        </div>

      </div>
    </div>
  );
};

export default Modal;
