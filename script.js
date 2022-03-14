const App = () => {

  const initialState = "0";
  const [exp, setExp] = React.useState("");

  const allClear = () => {
    setExp(initialState);
  };

  const append = e => {
    if (exp === initialState) {
      setExp(e);
    } else {
      setExp(exp.concat(e));
    }
  };

  const add = () => {
    setExp(exp + "+");
  };

  const subtract = () => {
    setExp(exp + "-");
  };

  const multiply = () => {
    setExp(exp + "*");
  };

  const divide = () => {
    setExp(exp + "/");
  };

  const calculate = () => {
    const expRegEx = /(\+|\*|\/|-)?(\.|\-)?\d+/g;
    const filteredExp = exp.match(expRegEx).join('');
    setExp(eval(filteredExp).toString());
  };

  const addDecimal = () => {
    const opRegEx = /[+\-*/]/g;
    const nums = exp.split(opRegEx);
    if (nums[nums.length - 1].indexOf(".") === -1) {
      setExp(exp + ".");
    }
  };

  return /*#__PURE__*/(
    React.createElement("div", { className: "container calculator" }, /*#__PURE__*/
    React.createElement("span", { id: "display" }, " ", exp || initialState, " "), /*#__PURE__*/
    React.createElement("div", { className: "pads" }, /*#__PURE__*/
    React.createElement("button", { id: "clear",
      className: "btn btn-danger",
      onClick: allClear }, "AC"), /*#__PURE__*/

    React.createElement("button", { id: "add",
      className: "btn btn-warning",
      onClick: add }, "+"), /*#__PURE__*/

    React.createElement("button", { id: "subtract",
      className: "btn btn-warning",
      onClick: subtract }, "-"), /*#__PURE__*/

    React.createElement("button", { id: "multiply", className: "btn btn-warning", onClick: multiply }, "x"), /*#__PURE__*/
    React.createElement("button", { id: "one", className: "btn btn-default", onClick: () => append("1") }, "1"), /*#__PURE__*/
    React.createElement("button", { id: "two", className: "btn btn-default", onClick: () => append("2") }, "2"), /*#__PURE__*/
    React.createElement("button", { id: "three", className: "btn btn-default", onClick: () => append("3") }, "3"), /*#__PURE__*/
    React.createElement("button", { id: "divide", className: "btn btn-warning", onClick: divide }, "\xF7"), /*#__PURE__*/
    React.createElement("button", { id: "four", className: "btn btn-default", onClick: () => append("4") }, "4"), /*#__PURE__*/
    React.createElement("button", { id: "five", className: "btn btn-default", onClick: () => append("5") }, "5"), /*#__PURE__*/
    React.createElement("button", { id: "six", className: "btn btn-default", onClick: () => append("6") }, "6"), /*#__PURE__*/
    React.createElement("button", { id: "decimal", className: "btn btn-info", onClick: addDecimal }, "."), /*#__PURE__*/
    React.createElement("button", { id: "seven", className: "btn btn-default", onClick: () => append("7") }, "7"), /*#__PURE__*/
    React.createElement("button", { id: "eight", className: "btn btn-default", onClick: () => append("8") }, "8"), /*#__PURE__*/
    React.createElement("button", { id: "nine", className: "btn btn-default", onClick: () => append("9") }, "9"), /*#__PURE__*/
    React.createElement("button", { id: "zero", className: "btn btn-default", onClick: () => append("0") }, "0")), /*#__PURE__*/

    React.createElement("button", { id: "equals", className: "btn btn-success btn-block", onClick: calculate }, "="), /*#__PURE__*/
    React.createElement("footer", { id: "footer" }, "\xA9 2022 Van B-C.")));


};

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("App"));