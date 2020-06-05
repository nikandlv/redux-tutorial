import React from "react";
import "./App.css";
import { Provider, useDispatch, connect, useSelector } from "react-redux";
import store from "./data/store";
import { IncreaseCount, DecreaseCount, SetCount } from "./data/actions";

function App() {
  return (
    <Provider store={store}>
      <CounterLayout />
    </Provider>
  );
}

export default App;

function CounterLayout() {
  return (
    <div>
      <CounterActions />
      <WrappedCounterViewer />
    </div>
  );
}

// Somewhere deep in the application
function CounterActions() {
  // awesome hook that wont effect rerenders!
  const dispatch = useDispatch();

  const increase = (_) => dispatch(IncreaseCount);
  const decrease = (_) => dispatch(DecreaseCount);
  const clear = (_) => dispatch(SetCount(0));

  return (
    <div>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
      <button onClick={clear}>clear</button>
    </div>
  );
}

function CounterViewer(props) {
  // Avoid using this hook. this hook causes extra rerenders, It's easier but not the best idea
  // const count = useSelector((state) => state.count);
  return <h1>{props.count}</h1>;
}

/* 
  can be simplified to (state) => ({ count: state.count }) as a parameter
  everytime the count changes the component will receive the new count value.
  connect prevents extra rerenders 
  it also passes dispatch as a prop
*/
const mapStateToProps = (state) => {
  return {
    count: state.count,
  };
};

const WrappedCounterViewer = connect(mapStateToProps)(CounterViewer);
