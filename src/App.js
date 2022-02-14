// import logo from './logo.svg';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Services from './components/Services';

function App() {
  return (
    <>
       <Header />
       <Home />
       <About />
       <Services />
       <Contact />
       <Footer />
       
    </>
  );
}

export default App;
