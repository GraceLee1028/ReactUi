import './App.css';
import Gallery from './components/galley';
import FormDemo from './components/formDemo';
import WalkStop from './components/walkStop';
function App() {
  return (
    <div className="App">
      <Gallery></Gallery>
      <hr/>
      <FormDemo></FormDemo>
      <hr/>
      <WalkStop></WalkStop>
    </div>
  );
}

export default App;
