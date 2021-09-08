import React from 'react';
import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID KOb0QtHv9WwmeaRLSMtfQBWnA1kJ_b8Y_V1lydJe9XQ",
  },
});