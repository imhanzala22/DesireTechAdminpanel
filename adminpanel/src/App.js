import { Route, BrowserRouter, Switch } from "react-router-dom";
import Feedback from "./Component/feedback/feedback";
import Home from "./Component/home/home";
import LogIn from "./Component/login/login";
import Product from "./Component/newproduct/product";
import Setting from "./Component/Settings/Settings";
import Updateproduct from "./Component/updateproduct/updateproduct";


function App() {
  return (
    
    <BrowserRouter>
      <Switch>
        
      <Route path='/Home' exact  component={Home}/>
      <Route path='/feedback' exact  component={Feedback}/>
      <Route path='/Settings' exact  component={Setting}/>      
      <Route path='/product' exact  component={Product}/>      
      <Route path='/Updateproduct' exact  component={Updateproduct}/>      
      <Route path='/' exact  component={LogIn}/>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
