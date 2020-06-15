import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  counter: state
});

const mapDispatchToProps = dispatch => ({
    addOne: () => dispatch({ type: "ADDONE" }),
    addTen: () => dispatch({ type: "ADDTEN" }),
    rmvOne: () => dispatch({ type: "RMVONE" }),
    rmvTen: () => dispatch({ type: "RMVTEN" }),

  });
  
  const CounterComponent = ({ counter, addOne, addTen, rmvOne, rmvTen }) => (
    <div>
      <p>{counter}</p>
      <button onClick={addOne}>+ 1</button>
      <button onClick={addTen}>+ 10</button>
      <button onClick={rmvOne}>- 1</button>
      <button onClick={rmvTen}>- 10</button>
    </div>
  );
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(CounterComponent);