import logo from './logo.svg';
import './App.css';
import Teste from './components/Teste';
import Teste2 from './components/Teste2';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import List from './components/List';
function App() {


  return (
    <div className="App">
      <SayMyName nome="Cleiton" />
      <SayMyName nome="Lian" />
      <Teste2 />
      <Teste />
      <h1>Minha Lista:</h1>
      <List />
      <Pessoa nome="Cleitin" 
      idade='25' 
      foto='https://sapl.saomigueldoaraguaia.go.leg.br/media/sapl/public/parlamentar/41/03_-_cleitinho.png.256x256_q85_box-0%2C0%2C591%2C590_crop_detail.png' />
</div>
  );
}

export default App;
