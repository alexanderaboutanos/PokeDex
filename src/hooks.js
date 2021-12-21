/** @format */

import { useState } from "react";
import uuid from "uuid";
import axios from "axios";

function useFlip(initialState = true) {
  const [state, setState] = useState(initialState);
  const flip = () => {
    setState((state) => !state);
  };
  return [state, flip];
}

function useAxios(URL) {
  const [data, setData] = useState([]);
  const addData = async (val) => {
    const sendURL = typeof val === "string" ? URL + val : URL;
    const response = await axios.get(sendURL);
    setData((data) => [...data, { ...response.data, id: uuid() }]);
  };
  return [data, addData];
}

export { useFlip, useAxios };
