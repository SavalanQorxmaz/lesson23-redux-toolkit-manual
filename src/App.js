import Counter from "./features/counter/Counter";
import Header from "./components/Header";
import ColorChanger from "./features/colorChanger/ColorChanger";

function App() {
  return (
    <div className="App">
      <Header/>
    <Counter/>
    <ColorChanger/>

    </div>
  );
}

export default App;
