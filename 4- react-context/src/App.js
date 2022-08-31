import ThemeContextProvider from './Context/ThemeContext';
import './App.css';
import Content from './Components/Content/Content';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
      <Content/>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
