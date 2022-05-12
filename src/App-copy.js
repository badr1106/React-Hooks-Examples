import React from "react";
import "./App.css";
import ClassCounter from "./components/ClassCounter";
import ClassCounterOneEffect from "./components/ClassCounterOneEffect";
import ClassCounterTwo from "./components/ClassCounterTwo";
import ClassIntervalCounter from "./components/ClassIntervalCounter";
import ClassMouseEffect from "./components/ClassMouseEffect";
import ComponentAReducerContext from "./components/ComponentA-Reducer-Context";
import ComponentBReducerContext from "./components/ComponentB-Reducer-Context";
import ComponentC from "./components/ComponentC-Context";
import ComponentCReducerContext from "./components/ComponentC-Reducer-Context";
import CounterOneReducer from "./components/CounterOneReducer";
import CounterThreeReducer from "./components/CounterThreeReducer";
import CounterTwoReducer from "./components/CounterTwoReducer";
import DataFetching from "./components/DataFetching";
import HookCounter from "./components/HookCounter";
import HookCounterFour from "./components/HookCounterFour";
import HookCounterOneEffect from "./components/HookCounterOneEffect";
import HookCounterThree from "./components/HookCounterThree";
import HookCounterTwo from "./components/HookCounterTwo";
import HookIntervalCounter from "./components/HookIntervalCounter";
import HookMouseContainerEffect from "./components/HookMouseContainerEffect";
import HookMouseEffect from "./components/HookMouseEffect";
import DataFetchingOne from "./components/DataFetchingOneUseState";
import DataFetchingTwo from "./components/DataFetchingTwoUseReducer";
import ParentComponent from "./components/ParentComponentCallBack";
import Counter from "./components/CounterMemo";
import ClassTimer from "./components/ClassTimerRef";
import FocusInput from "./components/FocusInputRef";
import HookTimer from "./components/HookTimerRef";
import DocTitleOne from "./components/DocTitleOneCustom";
import DocTitleTwo from "./components/DocTitleTwoCustom";
import CounterOne from "./components/CounterOneCustom";
import CounterTwo from "./components/CounterTwoCustom";
import UserForm from "./components/UserFormCustomOne";
import UserFormCustom from "./components/UserFormCustomTwo";

// export const UserContext = React.createContext();
// export const ChannelContext = React.createContext();

// Use Context with UseReducer

// export const CountContext = React.createContext();
// const initialState = 0;
// const reducer = (state, action) => {
//   switch (action) {
//     case "increment":
//       return state + 1;
//     case "decrement":
//       return state - 1;
//     case "reset":
//       return initialState;
//     default:
//       return state;
//   }
// };

function App() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <ClassCounter />
      <ClassCounterTwo />
      <ClassMouseEffect />
      <ClassCounterOneEffect />
      <ClassIntervalCounter />
      <HookCounter />
      <HookCounterTwo />
      <HookCounterThree />
      <HookCounterFour />
      <HookCounterOneEffect />
      <HookMouseEffect />
      <HookMouseContainerEffect />
      <HookIntervalCounter />
      <DataFetching />
      <UserContext.Provider value={"AboBadr"}>
        <ChannelContext.Provider value={"Raye2"}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider>
      <CounterOneReducer />
      <CounterTwoReducer />
      <CounterThreeReducer />
      <CountContext.Provider
        value={{ countState: count, countDispatch: dispatch }}
      >
        <div className="App">
          Count - {count}
          <ComponentAReducerContext />
          <ComponentBReducerContext />
          <ComponentCReducerContext />
        </div>
      </CountContext.Provider>
      <DataFetchingOne />
      <DataFetchingTwo />
      <ParentComponent />
      <Counter />
      <FocusInput />
      <ClassTimer />
      <HookTimer />
      <DocTitleOne />
      <DocTitleTwo />
      <CounterOne />
      <CounterTwo />
      <UserForm />
      <UserFormCustom />
    </div>
  );
}

export default App;
