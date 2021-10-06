import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";

import AddProduct from "./admin/product/AddProduct";
import Product from "./admin/product/Product";

export default function Routes(props) {
  return (
    <Router>
      <nav
        id="sidebarMenu"
        className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
      >
        <div className="pt-3 position-sticky">
          <ul className="nav flex-column">
            <li className="nav-item">
              <NavLink to="/" activeClassName="active" exact>
                <span data-feather="home" />
                Dashboard
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/product" activeClassName="active">
                <span data-feather="file" />
                Sản phẩm
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/orders" activeClassName="active">
                <span data-feather="shopping-cart" />
                Đơn hàng
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>

      <Switch>
        <Route path="/" exact>
          <Product {...props} />
        </Route>
        <Route path="/product" exact>
          <Product {...props} />
        </Route>
        <Route path="/product/add">
          <AddProduct {...props} />
        </Route>
      </Switch>
    </Router>
  );
}
