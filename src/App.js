import './App.css';
import Display from './components/Display/Display';
import Navbar from './components/Navbar/Navbar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Display></Display>
    </div>
  );
}

export default App;
