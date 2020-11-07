// import logo from './logo.svg';
import './App.css';
import Box from './components/box';
import ReduxComponent from './components/redux_comp';

function App() {
  return (
    <div className="box">
      <Box />
      <ReduxComponent number={9999} name={'Leo'} />
    </div>
  );
}

export default App;
