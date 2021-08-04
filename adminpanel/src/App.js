import { Route, BrowserRouter, Switch } from "react-router-dom";
import LogIn from "./Component/login/login";


function App() {
  return (
    
    <BrowserRouter>
      <Switch>
      <Route path='/' exact  component={LogIn}/>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
