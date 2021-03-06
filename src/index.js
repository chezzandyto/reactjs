import React from "react";
import ReactDOM from "react-dom";

// const jsx = <h1>Hello, Platzi Badges!</h1>;
// const element = React.createElement(
//   'a',
//   { href: 'https://platzi.com' },
//   'Ir a Platzi'
// );
// const name = 'Stephanie';
// const sum = () => 3 + 3;
// const element = React.createElement('h1', {}, `Hola, soy ${name}`);
// const jsx = <h1>Hola soy, {undefined}</h1>;

// const jsx = (
//   <div>
//     <h1>Hola, soy Richard</h1>
//     <p>Soy ingeniero frontend.</p>
//   </div>
// );

// const element = React.createElement(
//   'div',
//   {},
//   React.createElement('h1', {}, 'Hola, soy Richard'),
//   React.createElement('p', {}, 'Soy ingeniero de la web.')
// );

import Badge from "./components/Badge";
import "bootstrap/dist/css/bootstrap.css";
import "./global.css";
import BadgeNew from "./pages/BadgeNew";

const container = document.getElementById("app");

//ReactDOM.render(__qué__, __dónde__);
// ReactDOM.render(
//   <Badge
//     firstName="chezzandyto"
//     lastName="Toapanta"
//     avatarUrl="https://www.gravatar.com/avatar?d=identicon"
//     jobTitle="Frontend engineer"
//     twitter="spagus"
//   />,
//   container
// );
ReactDOM.render(<BadgeNew />, container);
