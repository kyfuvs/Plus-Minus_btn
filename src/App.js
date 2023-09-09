// App.js
import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement, double, single} from './actions';

const App = ({ count, myCount, increment, decrement, double, single }) => {
  return (
    <div>
      <h1>Counter 1: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <h1>Counter 2: {myCount}</h1>
      <button onClick={double}>* 2 (Double)</button>
      <button onClick={single}>/ 2 (Single)</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  count: state.counter.count, // Accessing the count from the 'counter' reducer
  myCount: state.myCounter.myCount, // Accessing the myCount from the 'myCounter' reducer
});

const mapDispatchToProps = {
  increment,
  decrement,
  double,
  single,

};

export default connect(mapStateToProps, mapDispatchToProps)(App);
