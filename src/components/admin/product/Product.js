import Table from "./Table";
import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  useRouteMatch,
} from "react-router-dom";

import AddProduct from "./AddProduct";
import EditProduct from "./EditProduct";

export default function Product(props) {
  const { url } = useRouteMatch();

  return (
    <div>
      <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <div className="flex-wrap pt-3 pb-2 mb-3 d-flex justify-content-between flex-md-nowrap align-items-center border-bottom">
          <h1 className="h2">Sản phẩm</h1>
          <div className="mb-2 btn-toolbar mb-md-0">
            <div className="btn-group me-2">
              <NavLink to="/addProduct" activeClassName="active">
                <button
                  type="button"
                  className="btn btn-sm btn-outline-secondary"
                >
                  Thêm sản phẩm
                </button>
              </NavLink>
            </div>
          </div>
        </div>
        <div className="table-responsive">
          <Table {...props} />
        </div>
      </main>
      <Switch>
        <Route path="/addProduct" exact>
          <AddProduct {...props} />
        </Route>
        <Route path="/product/:id" exact>
          <EditProduct {...props} />
        </Route>
      </Switch>
    </div>
  );
}
