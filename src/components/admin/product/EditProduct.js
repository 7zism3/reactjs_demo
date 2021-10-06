import { useForm } from "react-hook-form";
import { useHistory, useParams } from "react-router-dom";
import Product from "./Product";

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
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input
          type="text"
          {...register("name", { required: true })}
          placeholder="Tên sản phẩm"
          value={productEidt.name}
        />
        <br />
        {errors.name && <span>Field name is require</span>}
      </div>
      <div>
        <input
          type="price"
          {...register("price", { required: true })}
          placeholder="Giá sản phẩm"
          value={productEidt.price}
        />
        <br />
        {errors.price && <span>Field price is require</span>}
      </div>
      <div>
        <textarea {...register("desc")} placeholder="mô tả sản phẩm"></textarea>
      </div>
      <button type="submit">Chỉnh sửa sản phẩm</button>
    </form>
  );
};
export default EditProduct;
