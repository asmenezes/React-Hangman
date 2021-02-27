import logo from './logo.svg';
import './App.css';
import Main from './components/main'
function App() {
  let list = [
    "Python",
    "Good",
   "Bad",
  "React",
  'reinforce',
  'stumble',
  'hypnothize',
  'deliver',
  'reputation',
  'recovery',
  'opposition',
  'lounge',
  'tempt',
  'knife',
  'fate',
  'modest',
  'table',
  'sample',
  'dream',
  'on',
  'registration',
  'plant',
  'restaurant',
  'assault']
  let choice = list[Math.floor(Math.random() * list.length)];
  return (
<div>
  <Main choice = {choice}/>

 </div>
                    
  
  );
}

export default App;
