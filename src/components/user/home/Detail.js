import React from "react";
// import { get } from "../../api/product";
import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
const Detail = (props) => {
  console.log(props.products);
  const [product, setproduct] = [props.products];
  const { id } = useParams();
  const history = useHistory();

  // useEffect(() => {
  //     const getProduct = async () => {
  //         try {
  //             const { data } = await get(id);
  //             setproducts(data);
  //             console.log(setproducts)
  //         } catch (error) { }
  //     };
  //     getProduct();
  // }, []);
  // history.push("/admin/product");
  return (
    <div className="container-fluid ">
      <div className="row no-gutter mt-5">
        <div className="col-md-6 d-none d-md-flex bg-image">
          {/* <img src={props.products.img} className=" w-100 " /> */}
          <img
            src="https://assets.adidas.com/images/w_600,f_auto,q_auto/c7227d99699243099c24ac5e00406c2c_9366/Giay_co_lung_Forum_trang_FY4976_01_standard.jpg"
            className=" w-100 "
          />
        </div>
        <div className="col-md-6 bg-light">
          <div className="login d-flex align-items-center py-5">
            <div className="container">
              <div className="row">
                <div className="col-lg-10 col-xl-7 mx-auto">
                  <h3 className="">Chi tiết sản phẩm </h3>
                  <p className="text-muted mb-4">Giảm 5% khi mua online</p>
                  <form>
                    <div className="form-group mb-3">
                      <label>Tên sản phẩm : Căn phòng riêng ta </label>
                    </div>
                    <div className="form-group mb-3">
                      <label>Giá sản phẩm:10 VND</label>
                    </div>
                    <div className="form-group mb-3">
                      <label>Tình trạng :Còn hàng</label>
                    </div>
                    <button
                      type="submit"
                      className="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm"
                    >
                      Buy
                    </button>
                    <div className="text-center d-flex justify-content-between mt-4">
                      <p>
                        Snippet by{" "}
                        <a
                          href="https://bootstrapious.com/snippets"
                          className="font-italic text-muted"
                        >
                          <u>Boostrapious</u>
                        </a>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
