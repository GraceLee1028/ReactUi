import './App.css';
import LeButton from './components/button';
import Gallery from './components/galley';
import Profile from "./components/Profile";
const personList = [{
  name:'lee',
  age:1000
},{
  name:'pro',
  age:200
}]
function App() {
  const profileList = personList.map((person,index)=>{
    return (
      <Profile isCheck={index%2===0} person={person} />
    )
  })
  return (
    <div className="App">
      <Gallery>
        {profileList}
          <LeButton>按钮</LeButton>
      </Gallery>
    </div>
  );
}

export default App;
