import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import AddProduct from "./admin/product/AddProduct";
import EditProduct from "./admin/product/EditProduct";
import Products from "./admin/product/Products";
import AdminLayout from "./layouts/Admin";
import UserLayout from "./layouts/User";
import Signin from "./user/Signin";
import Signup from "././user/Signup";
import Detail from "./user/home/Detail";
import Main from "./user/home/Main";
import Dashboard from "./admin/Dashboard";

export default function Routes(props) {
  return (
    <Router>
      <Switch>
        <Route exact path="/admin/:path?/:path?/:path?">
          <AdminLayout>
            <Switch>
              <Route exact path="/admin">
                <Dashboard />
              </Route>
              <Route exact path="/admin/product">
                <Products {...props} />
              </Route>
              <Route exact path="/admin/product/add">
                <AddProduct {...props} />
              </Route>
              <Route exact path="/admin/product/:id/edit">
                <EditProduct {...props} />
              </Route>
            </Switch>
          </AdminLayout>
        </Route>

        <Route>
          <UserLayout>
            <Switch>
              <Route exact path="/">
                <Main {...props} />
              </Route>
              <Route exact path="/signup">
                <Signup {...props} />
              </Route>
              <Route exact path="/signin">
                <Signin {...props} />
              </Route>
              <Route exact path="/details/product/:id">
                <Detail {...props} />
              </Route>
            </Switch>
          </UserLayout>
        </Route>
      </Switch>
    </Router>
  );
}
