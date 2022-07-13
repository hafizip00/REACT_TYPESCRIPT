import { useReducer } from "react";

const initialState = {
  count: 0,
};
type CounterState = {
  count: number;
};

type Action = {
  type: string;
  payload: number;
};

const reducer = (state: CounterState, action: Action) => {
  switch (action.type) {
    case "INC":
      return { count: state.count + action.payload };
    case "DEC":
      return { count: state.count - action.payload };
    default:
      return state;
  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({ type: "INC", payload: 10 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "DEC", payload: 10 })}>
        Decrement
      </button>
    </div>
  );
};

export default Counter;
