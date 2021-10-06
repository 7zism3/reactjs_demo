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
    try {
      const response = await fetch(
        // bắt đầu call api
        "https://5e79b4b817314d00161333da.mockapi.io/product",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data), // chuyển đổi dữ liệu sang string và gửi dữ liệu(data) từ form lên server
        }
      );
      const product = await response.json(); // server trả về dữ liệu, chuyển đổi sang json và gán vào biến product
      props.onAdd(product);
      history.push("/product");
    } catch (error) {
      console.log(error);
    }
  };
  return (
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
        <input
          type="price"
          {...register("price", { required: true })}
          placeholder="Giá sản phẩm"
        />
        <br />
        {errors.price && <span>Field price is require</span>}
      </div>
      <div>
        <textarea {...register("desc")} placeholder="mô tả sản phẩm"></textarea>
      </div>
      <button type="submit">Thêm sản phẩm</button>
    </form>
  );
};
export default AddProduct;
