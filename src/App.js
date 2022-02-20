import logo from './logo.svg';
import './App.css';
import { Outlet, Link } from "react-router-dom";


const Main = () => <h1>Hello world</h1>;

function App() {
  return (
      <div className="App">
        <header className="App-header">
          <div className="Header-title">
            ConnectU
        </div>
        <Link to="/discoverpeople">Discover</Link> |{" "}
        <Link to="/profile">Profile</Link>
        </header>
        <Outlet />
      </div>
  );
}

export default App;
