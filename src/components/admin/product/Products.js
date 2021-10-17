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

export default function Products(props) {
  const { url } = useRouteMatch();

  const products = props.products;
  console.log(props);

  const removeItem = async (id) => {
    props.onRemoveItem(id);
  };

  return (
    <div>
      <div className="flex-wrap pt-3 pb-2 mb-3 d-flex justify-content-between flex-md-nowrap align-items-center border-bottom">
        <h1 className="h2">Sản phẩm</h1>
        <div className="mb-2 btn-toolbar mb-md-0">
          <div className="btn-group me-2">
            <NavLink to={`/admin/product/add`} activeClassName="active">
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
        <div>
          <table className="table table-striped table-sm">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Hình ảnh</th>
                <th scope="col">Tên sản phẩm</th>
                <th scope="col">Hãng sản xuất</th>
                <th scope="col">Giá</th>
                <th scope="col">Tình trạng</th>
                <th scope="col">Hành động</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr>
                  <td>{product.id}</td>
                  <td>
                    <img
                      src={product.image}
                      alt="Sheep"
                      width="120"
                      height="65"
                    />
                  </td>
                  <td>{product.name}</td>
                  <td>{product.company}</td>
                  <td>{product.price}</td>
                  <td>
                    {product.status === true ? (
                      <span className="text-primary">còn hàng</span>
                    ) : (
                      <span className="text-danger">hết hàng</span>
                    )}
                  </td>
                  <td>
                    <NavLink
                      to={`/admin/product/${product.id}/edit`}
                      activeClassName="active"
                    >
                      <button className="btn btn-danger">Chỉnh sửa</button>
                    </NavLink>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => removeItem(product.id)}
                    >
                      Xóa
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
