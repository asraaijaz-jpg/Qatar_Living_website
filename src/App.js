import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Component/Header';
import Home from './Component/Home';
import Footer from './Component/Footer';

function App() {
  return (
    <div className="App">
     <Header/>
     <Home/>
     <Footer/>

    </div>
  );
}

export default App;

// On Windows : Shift + Alt + F. for code justification
