import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  useRouteMatch,
} from "react-router-dom";
import EditProduct from "./EditProduct";

export default function Table(props) {
  const { url } = useRouteMatch();

  const products = props.products;
  console.log(props);

  const removeItem = async (id) => {
    props.onRemoveItem(id);
  };

  return (
    <div>
      <table className="table table-striped table-sm">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Hình ảnh</th>
            <th scope="col">Tên sản phẩm</th>
            <th scope="col">Hãng sản xuất</th>
            <th scope="col">Giá</th>
            <th scope="col">Hành động</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr>
              <td>{product.id}</td>
              <td class="w-25">
                <img
                  src={product.image}
                  className="img-fluid img-thumbnail"
                  alt="Sheep"
                />
              </td>
              <td>{product.name}</td>
              <td>{product.company}</td>
              <td>{product.price}</td>
              <td>
                <NavLink to={`product/${product.id}`} activeClassName="active">
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
      <Switch>
        <Route path={`${url}/:id`} exact>
          Detail Product
        </Route>
        <Route path={`${url}/:id/edit`}>
          <EditProduct {...props} />
        </Route>
      </Switch>

      {/* <Switch>
        <Route exact path={url}>
          {props.products.map((item, index) => (
            <div key={index}>
              <Link to={`/product/${item.id}`}>{item.name}</Link>
              <button onClick={() => removeProduct(item.id)}>Delete</button>
              <Link to={`/product/${item.id}/edit`}>Edit</Link>
            </div>
          ))}
        </Route>
        <Route path={`${url}/add`}>
          <AddProduct {...props} />
        </Route>
        <Route path={`${url}/:id`} exact>
          Detail Product
        </Route>
        <Route path={`${url}/:id/edit`}>
          <Edit {...props} />
        </Route>
      </Switch> */}
    </div>
  );
}
