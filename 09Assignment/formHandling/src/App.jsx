import React from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import Table from "./components/Table";

export default function App(){
  return (
    <>
    <Header />
    <div style={{
      backgroundImage: "url(./public/image.png)",
       height: "100vh",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "20px",}}>
      <Form /> 


    </div>
    </>
  )
}