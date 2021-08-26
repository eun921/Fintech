import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AxiosTest from "./pages/AxiosTest";
import NewsSearch from "./pages/NewsSearch";
import AuthResult from "./pages/AuthResult";
import AddUser from "./pages/AddUser";
import Main from "./pages/Main";
import Balance from "./pages/Balance";
import QrCode from "./pages/QrCode";
import QrcodeReader from "./pages/QrcodeReader";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/axios" exact>
          <AxiosTest></AxiosTest>
        </Route>
        <Route path="/news" exact>
          <NewsSearch></NewsSearch>
        </Route>
        <Route path="/adduser" exact>
          <AddUser></AddUser>
        </Route>
        <Route path="/authResult" exact>
          <AuthResult></AuthResult>
        </Route>
        <Route path="/main" exact>
          <Main></Main>
        </Route>
        <Route path="/balance" exact>
          <Balance></Balance>
        </Route>
        <Route path="/qrcode" exact>
          <QrCode></QrCode>
        </Route>
        <Route path="/qrreader" exact>
          <QrcodeReader></QrcodeReader>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;