// import './App.css';
import ClassComponent from './components/ClassComponent';
import FunctionComponent from './components/FunctionComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          ClassComponent
        </p>
       
        <ClassComponent />
        <p>
          FunctionComponent
        </p>

        <FunctionComponent/>

      </header>
    </div>
  );
}

export default App;
