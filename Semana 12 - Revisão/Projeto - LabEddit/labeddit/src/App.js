import Router from "./router/Router";
import GlobalStyles from "./styles/GlobalStyles";
import { AllPages } from './styles/AppStyles'

function App() {
  return (
    <AllPages>
      <GlobalStyles />
      <Router />
    </AllPages>
  );
}

export default App;
