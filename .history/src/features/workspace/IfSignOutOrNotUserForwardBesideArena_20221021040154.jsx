/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import routingObj from './../../routing';
import { setSelectedUser } from './../redux/signInControllerSlice';
import { selectUserById } from './../redux/usersSlice';

const IfSignOutOrNotUserForwardBesideArena = () => {
  const userId = { useParams };

  const selectedUser = useSelector(state => selectUserById(state, parseInt(userId)));

  const { dynamicRouting } = routingObj;

  const navigate = useNavigate();




  useEffe


  return <div></div>;
};

export default IfSignOutOrNotUserForwardBesideArena;
