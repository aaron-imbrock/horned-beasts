import './App.css';
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
     <Header title="Horned Beasts"/>
     <Main />
     <Footer author="Aaron Imbrock"/>
    </div>
  );
}

export default App;