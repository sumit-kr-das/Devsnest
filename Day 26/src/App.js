import './App.scss';
import {Provider} from "react-redux";
import {createStore} from "redux";

import InputForm from "./components/InputForm";
import Output from "./components/Output";

import rootReducer from "./redux";

const Store = createStore(rootReducer);

function App() {
  return (
    <Provider store={Store}>
      <div className="App">
        <InputForm/>
        <Output/>
      </div>
    </Provider>
  );
}

export default App;
