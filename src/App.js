import './App.css';
import Header from './components/header';
import Main from './components/main';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
     <Header />
     {/* <Main /> */}
     <Footer author={"Aaron Imbrock"}/>
    </div>
  );
}

export default App;
