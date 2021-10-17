import React from "react";
import { Link } from "react-router-dom";
const Main = (props) => {
  return (
    <div className="container marin">
      {/* HERO SECTION*/}
      <section className="py-5 ">
        <div className="container p-0 ">
          <div className="row ">
            {/* SHOP SIDEBAR*/}

            {/* SHOP LISTING*/}
            <div className="col-lg-9 order-1 order-lg-2 mb-5 mb-lg-0">
              <div className="row mb-3 align-items-center">
                <div className="col-lg-6 mb-2 mb-lg-0">
                  <p className="text-small text-muted mb-0">
                    Mua sắm thả ga không lo về giá.
                  </p>
                </div>
                <div className="col-lg-6">
                  <ul className="list-inline d-flex align-items-center justify-content-lg-end mb-0">
                    <li className="list-inline-item text-muted mr-3">
                      <a className="reset-anchor p-0" href="#">
                        <i className="fas fa-th-large" />
                      </a>
                    </li>
                    <li className="list-inline-item text-muted mr-3">
                      <a className="reset-anchor p-0" href="#">
                        <i className="fas fa-th" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <select
                        className="selectpicker ml-auto"
                        name="sorting"
                        data-width={200}
                        data-style="bs-select-form-control"
                        data-title="Default sorting"
                      >
                        <option value="default">Default sorting</option>
                        <option value="popularity">Popularity</option>
                        <option value="low-high">Price: Low to High</option>
                        <option value="high-low">Price: High to Low</option>
                      </select>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row">
                {/* PRODUCT*/}
                {props.products.map((product, index) => (
                  <div className="col-lg-4 col-sm-6">
                    <div className="product text-center">
                      <div className="mb-3 position-relative">
                        <div className="badge text-white badge-" />
                        <Link className="d-block" to={`/details/product/:id`}>
                          <img className="img-fluid " src={product.img} />
                        </Link>
                        <div className="product-overlay">
                          <ul className="mb-0 list-inline">
                            <li>
                              <a
                                className="btn btn-sm btn-danger"
                                href="cart.html"
                              >
                                Thêm vào giỏ
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <h6>
                        {" "}
                        <a className="btn btn-sm btn-danger" href="detail.html">
                          {product.name}{" "}
                        </a>
                        <a className="  ">
                          {product.status === "true" ? (
                            <span className=" btn btn-sm btn-light text-info ">
                              còn hàng
                            </span>
                          ) : (
                            <span className=" btn btn-sm btn-dark ">
                              hết hàng
                            </span>
                          )}
                        </a>
                      </h6>
                      <p className="btn btn-sm btn-info ">
                        {product.price}VNĐ{" "}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* PAGINATION*/}
              <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-center justify-content-lg-end">
                  <li className="page-item">
                    <a className="page-link" href="#" aria-label="Previous">
                      <span aria-hidden="true">«</span>
                    </a>
                  </li>
                  <li className="page-item active">
                    <a className="page-link" href="#">
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#" aria-label="Next">
                      <span aria-hidden="true">»</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Main;
