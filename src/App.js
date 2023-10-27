import { Header, About } from './containers';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About/>
    </div>
  );
}

export default App;
