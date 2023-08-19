import './App.css';
import SmartPhone from './components/smartPhone';
import TwinCards from './components/twinCards';
import Barner from './components/barner';
import Footer from './components/footer';
import Watches from './components/Watches';
import ProductNews from './components/productNews';

function App() {
  return (

    <div className="App">
      <Barner />
      <SmartPhone />
      <TwinCards />
      <Watches />
      <ProductNews />
      <Footer />
    </div>

  );
}

export default App;
