import logo from './logo.svg';
import './App.css';
import Header from './components/Layout/Header';
import Intro from './components/Layout/Intro';
import Detail from './components/Layout/Detail';
import DetailApp from './components/Layout/DetailApp';
import BtnDow from './components/Layout/BtnDow';

function App() {
  return (
    <div className="App">
      <Header/>
      <Intro/>
      <Detail/>
      <DetailApp/>
      <BtnDow/>
    </div>
  );
}

export default App;
