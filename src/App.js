import logo from './logo.svg';
import './App.css';
import Menu from './components/Menu.js';
import Product from './components/Product.js';
import Counter from './components/Counter.js';
import GreenHello from './components/GreenHello';

// obrazok
import imageSuciastka from './suciastka.jpg';

function App() {
  return (
    <div className="App">
      <GreenHello name="Richard" />
      <GreenHello name="Filip" />
      <Menu />
      <Counter />
      <Product name="Piano" description="Yamaha keyboard 220" sale="true" saleValue="50%"/>
      <Product name="Husle" description="Uzasne mega husle z roku 1776" sale="true" saleValue="25%" />
      <Product name="Bicie" description="Super bicie" />
      <img src={imageSuciastka} />
    </div>
  );
}

export default App;
