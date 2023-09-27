import './App.css';
import Weather from './modules/weather/Weather';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: "GET_WEATHER" })
  }, [])

  return (
    <div className="App">
      <Weather />
    </div>
  );
}

export default App;
