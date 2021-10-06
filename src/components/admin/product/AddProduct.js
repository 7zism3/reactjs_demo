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
    history.push("/product");
  };
  console.log(props.products);
  return (
    <div>
      <h1>ththththht</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            type="text"
            {...register("name", { required: true })}
            placeholder="Tên sản phẩm"
          />
          <br />
          {errors.name && <span>Field name is require</span>}
        </div>
        <div>
          <textarea
            {...register("company")}
            placeholder="Hãng sản phẩm"
          ></textarea>
        </div>
        <div>
          <input
            type="price"
            {...register("price", { required: true })}
            placeholder="Giá sản phẩm"
          />
          <br />
          {errors.price && <span>Field price is require</span>}
        </div>

        <button type="submit">Thêm sản phẩm</button>
      </form>
    </div>
  );
};
export default AddProduct;
