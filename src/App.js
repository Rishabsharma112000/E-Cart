import { Route, Switch} from "react-router-dom";
import Cart from "./components/Cart";
import Home from "./components/Home";
import { Login } from "./components/Login";
import Navbar from "./components/Navbar";
import { Product } from "./components/Product";
import { ProductView } from "./components/ProductView";
import { Register } from "./components/Register";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Product} />
        <Route exact path="/products/:id" component={ProductView} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      </Switch>
    </>
  );
}

export default App;
