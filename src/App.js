import "./App.css";
import DashboardComponent from "./Components/Dashboard/Dashboard";
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";
import { Dashboard } from "@material-ui/icons";
import Posts from "./Components/Posts/Posts";

function App() {
  return (
    <div className="App">
      {/* <DashboardComponent /> */}
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={DashboardComponent} />
          <Route exact path="/posts" component={Posts} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
export default App;
