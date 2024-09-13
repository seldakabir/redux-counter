import React, { act } from "react";
const initialStateCustomer = {
  fullName: "",
  id: "",
  createAt: "",
};

export default function customerReducer(state = initialStateCustomer, action) {
  switch (action.type) {
    case "customer/createCustomer":
      return {
        ...state,
        fullName: action.payload.fullName,
        id: action.payload.id,
        createAt: action.payload.createAt,
      };
    case "customer/updateCustomer":
      return {
        ...state,
        fullName: action.payload,
      };
    default:
      return state;
  }
}
export function createCustomer(fullName, id) {
  return {
    type: "customer/createCustomer",
    payload: {
      fullName,
      id,
      createAt: new Date().toISOString(),
    },
  };
}
export function updateCustomer(fullName) {
  return {
    type: "customer/updateCustomer",
    payload: fullName,
  };
}
