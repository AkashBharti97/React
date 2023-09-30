/*const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Namaste Javascript react ❤️"
);

const root = ReactDOM.createRoot(document.getElementById("root"));

console.log(heading);
console.log(root);
root.render(heading);
*/

// =================Create a nested Html======================
/* <div id:parent><div id:child><h1>Hello</h1></div></div> */
import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Im a h1 tag"),
    React.createElement("h2", {}, "Im a h2 tag"),
  ]),

  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "Im a h1 tag"),
    React.createElement("h2", {}, "Im a h2 tag"),
  ]),
]);

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
