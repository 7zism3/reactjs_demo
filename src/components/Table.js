export default function Table(props) {
  return (
    <table className="table table-striped table-sm">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Tên sản phẩm</th>
          <th scope="col">Hãng sản xuất</th>
          <th scope="col">Giá</th>
          <th scope="col">Hành động</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>props</td>
          <td>random</td>
          <td>data</td>
          <td>placeholder</td>
          <td>
            <button className="btn btn-danger">Xóa</button>
          </td>
        </tr>
        <tr>
          <td>1,002</td>
          <td>placeholder</td>
          <td>irrelevant</td>
          <td>visual</td>
          <td>
            <button className="btn btn-danger">Xóa</button>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
