//impotar librferias
import React from "react";
import ReactDOM from "react-dom/client";
import NavBar from "./NavBar";
import ItemListContainer from "./ItemListContainer";

//referencia al div con id root
const  el = document.getElementById("root");

//react toma control del elemento
const root = ReactDOM.createRoot(el);

function App() {
    return (
        <div className="App">
        <NavBar />  
        <ItemListContainer  greeting={"Bienvenidos"}/>  
        </div>
    )
};


//mostrar contenido en la pantalla
root.render(<App/>)

