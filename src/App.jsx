import './App.css';
import { CalculatorProvider } from './CalculatorContext/CalculatorContext';
import RouterComponent from './Routes/RoutesApp';
import CalculatorComponent from './Components/CalculatorComponent';

function App() {
  return (
    <>
      <CalculatorProvider>
      <h1>Soy App dentro de Provider</h1>
        <RouterComponent />
        <CalculatorComponent />
      </CalculatorProvider>
    </>
  );
}

export default App;
