import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

const AddProduct = (props) => {
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    props.onAdd(data);
    history.push("/admin/product");
  };

  console.log(props.products);
  return (
    <div>
      <div className=" mt-3 pb-2 mb-3 border-bottom ">
        <h2 className="h2 text-center ">Thêm sản phẩm</h2>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label className="form-label ">Tên sản phẩm</label>
          <input
            type="text"
            className="form-control"
            {...register("name", { required: true })}
          />
          {errors.name && (
            <span className="text-danger">
              Không được để trống tên sản phẩm
            </span>
          )}
        </div>
        <div className="mb-3">
          <label className="form-label ">Nhà sản xuất</label>
          <input
            type="text"
            className="form-control"
            {...register("company", { required: true })}
          />
          {errors.name && (
            <span className="text-danger">
              Không được để trống nhà sản xuất
            </span>
          )}
        </div>
        <div className="mb-3">
          <label className="form-label">Giá sản phẩm</label>
          <input
            type="number"
            className="form-control"
            {...register("price", { required: true, maxLength: 10 })}
          />
          {errors.price && (
            <span className="text-danger">
              Không được để trống giá sản phẩm{" "}
            </span>
          )}
        </div>

        <div className="mb-3">
          <label className="form-label">Ảnh sản phẩm</label>
          <input
            type="text"
            className="form-control"
            {...register("image", { required: true })}
          />
          {errors.img && (
            <span className="text-danger">
              Không được để trống ảnh sản phẩm{" "}
            </span>
          )}
        </div>
        <div className="mb-3">
          <label className="form-label">Tình trạng</label>
          <select className="form-control" {...register("status")}>
            <option value="false">hết hàng</option>
            <option value="true">còn hàng</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          {" "}
          Thêm sản phẩm
        </button>
      </form>
    </div>
  );
};
export default AddProduct;
