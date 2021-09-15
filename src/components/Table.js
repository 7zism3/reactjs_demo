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
          <td>1</td>
          <td>Điều hoà T0123</td>
          <td>Toshiba</td>
          <td>3.000.0000</td>
          <td>
            <button className="btn btn-danger">Xóa</button>
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td>Điều hoà LG3412</td>
          <td>LG</td>
          <td>10.100.000</td>
          <td>
            <button className="btn btn-danger">Xóa</button>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
