import './App.css';
import Gallery from './components/galley';
import FormDemo from './components/formDemo';
import WalkStop from './components/walkStop';
import CountWait from './components/countWait';
function App() {
  return (
    <div className="App">
      <Gallery></Gallery>
      <hr/>
      <FormDemo></FormDemo>
      <hr/>
      <WalkStop></WalkStop>
      <hr/>
      <CountWait></CountWait>
    </div>
  );
}

export default App;
