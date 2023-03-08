import "./App.css";
import { Joaco } from "./components/Joaco";
import { Rodrigo } from "./components/Rodrigo";
import { Romina } from "./components/Romina";
import { Rama } from "./components/Rama";
import { Selene } from "./components/Selene";
import { Tani } from "./components/Tani";
import { Ivan } from "./components/Ivan";
import { Gustavo } from "./components/Gustavo";

function App() {
  return (
    <div className="App">
      <h1>Hello Team</h1>
      <Gustavo/>
      <Joaco />
      <Rama />
      <Rodrigo />
      <Romina />
      <Selene />
      <Tani/>
      <Ivan/>
    </div>
  );
}

export default App;
