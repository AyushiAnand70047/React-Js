import "./App.css"
import Title from "./Title.jsx"
import Description from "./Description.jsx";
import ProductTab from "./ProductTab.jsx";
import MsgBox from "./MsgBox.jsx";

function App() {
  return (
  <>
    <MsgBox userName="Ayushi" textColor="blue"/>
    <MsgBox userName="Anand" textColor="green"/>
    <ProductTab/>
  </>
  );
}

export default App
