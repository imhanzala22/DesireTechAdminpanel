import { Route, BrowserRouter, Switch } from "react-router-dom";
import Home from "./Component/home/home";
import LogIn from "./Component/login/login";
import Setting from "./Component/Settings/Settings";


function App() {
  return (
    
    <BrowserRouter>
      <Switch>
        
      <Route path='/Home' exact  component={Home}/>
      <Route path='/Settings' exact  component={Setting}/>
      <Route path='/' exact  component={LogIn}/>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
