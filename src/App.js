import Navbar from './shared/navbar';
import './App.css';
import Search from './components/search'
import Footer from './shared/footer'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Search/>
      <Footer/>
    </div>
  );
}

export default App;
