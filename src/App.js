import { BrowserRouter, Switch, Route } from "react-router-dom";
import ContactUs from "./components/ContactUs/ContactUs";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";


function App() {
  return (
    <>
      <BrowserRouter>
          <Navbar/><br /><br /><br />
          <Switch>
            <Route path='/' exact component={Home}></Route>
            <Route path='/contact-us' exact component={ContactUs}></Route>
            <Route path='/news' exact component={News}></Route>


            {/* <Route component={ErrorPage}></Route> */}
          </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
