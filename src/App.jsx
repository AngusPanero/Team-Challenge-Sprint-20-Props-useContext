import './App.css';
import { CalculatorProvider } from './CalculatorContext/CalculatorContext';
import RouterComponent from './Routes/RoutesApp';
import CalculatorComponent from './Components/CalculatorComponent';

function App() {
  return (
    <>
      <CalculatorProvider>
        <RouterComponent />
        <CalculatorComponent />
      </CalculatorProvider>
    </>
  );
}

export default App;
