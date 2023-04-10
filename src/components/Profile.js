import React from 'react'
import Modal from './Modal';
const Profile = ({name,email,password}) => {
  return (
    <>
      <div>Profile</div>
      <Modal name ={name} password ={password} email={email}></Modal>
    </>
  );
}

export default Profile