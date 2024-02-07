import React from 'react';
import axios from 'axios';
import {baseurl} from './contants/contants';
const instance = axios.create({
    baseURL: baseurl,
 
  });

export default instance;