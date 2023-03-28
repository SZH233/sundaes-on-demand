import logo from "./logo.svg";
import "./App.css";

import SummaryForm from "./pages/summary/SummaryFrom";
import Options from "./pages/entry/Options";

function App() {
  return (
    <>
      <Options optionType={'scoops'}/>
      <SummaryForm />
    </>
  );
}

export default App;
