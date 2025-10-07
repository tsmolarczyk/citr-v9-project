const Pizza = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("p", {}, props.desc),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Padre Gino's"),
    React.createElement(Pizza, {
      name: "Tomato",
      desc: "A lot of tomatoes",
    }),
    React.createElement(Pizza, {
      name: "Funghi",
      desc: "Forest fruit",
    }),
    React.createElement(Pizza, {
      name: "Pineapple",
      desc: "Weird?",
    }),
    React.createElement(Pizza, {
      name: "Apple",
      desc: "Not recomennded",
    }),
  ]);
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
