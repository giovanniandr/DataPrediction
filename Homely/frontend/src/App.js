import './App.css';
import Navbar from "./components/Navbar/Navbar";
import MapCluster from "./components/Map/MapCluster";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <MapCluster />
    </div>
  );
}



export default App;
