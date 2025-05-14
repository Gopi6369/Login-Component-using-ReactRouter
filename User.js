import React from 'react';
import { useParams } from 'react-router';

function UserProfile() {
    const{id}= useParams()
  return (
    <>
      <h1>User profile page</h1>
      <p>user id is <b>{id}</b></p>
    </>
  );
}

export default UserProfile;
