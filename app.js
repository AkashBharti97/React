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

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Hello H1 tag "),
    React.createElement("h2", {}, "Hello H2 tag "),
  ])
);

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
