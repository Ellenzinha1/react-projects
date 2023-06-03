import React from "react";
import ReacDOM from "react-dom/client";

function  Hello(props){
return<h1>Hello Word</h1>;
}
const container = document.getElementById('root');
const root = ReacDOM.createRoot(container);
root.render(<Hello/>);

/*
 Eses exemplos são criados usando o
criar-reagir-aplicativo.

Neste exemplo, criamos um componente chamado 'Hello'.
O componente é renderizado em um contêiner chamado 'root'.
*/