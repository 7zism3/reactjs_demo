import { useForm } from "react-hook-form";
import { useHistory, useParams } from "react-router-dom";
import Product from "./Products";

const EditProduct = (props) => {
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { id } = useParams();
  const productEidt = props.products[id];
  const onSubmit = async (data) => {
    props.onEditItem(id, data);
  };

  return (
    <div>
      <div className="justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom ">
        <h2 className="h2 text-center ">Chỉnh sửa sản phẩm</h2>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label className="form-label ">Tên sản phẩm </label>
          <input
            type="text"
            className="form-control"
            {...register("name", { required: true })}
            defaultValue={productEidt.name}
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
            defaultValue={productEidt.company}
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
            defaultValue={productEidt.price}
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
            defaultValue={productEidt.image}
          />
          {errors.img && (
            <span className="text-danger">
              Không được để trống ảnh sản phẩm{" "}
            </span>
          )}
        </div>
        <div className="col-md-3 d-none d-md-flex bg-image">
          <img src={productEidt.image} w-100 />
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
          Chỉnh sửa{" "}
        </button>
      </form>
    </div>
  );
};
export default EditProduct;
