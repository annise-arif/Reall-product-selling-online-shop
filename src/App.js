import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import Ans1 from './components/questionAns/Ans1/Ans1';
import Ans2 from './components/questionAns/Ans2/Ans2';

function App() {
  return (
    <div>
        <Header></Header>
        <Shop></Shop>
        <Ans1></Ans1>
        <Ans2></Ans2>
    </div>
  );
}

export default App;
