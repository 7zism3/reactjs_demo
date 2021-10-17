import React, { useEffect, useState } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import { signOut, isAuthenticate } from "../../auth";
import { useLocation } from "react-router-dom";
const Header = () => {
  const history = useHistory(); // Sau khi logout thì quay về trang nào đó
  const { pathname } = useLocation(); // PathName: Để lấy cái đường dẫn sau domain ví dụ: dantri.com/[pathname]
  const [isLogged, setIsLogged] = useState(false); // Set state để sau này check trạng thái đã đăng nhập hay chưa
  const { username, sub, email } = isAuthenticate(); // Lấy thông tin từ localStorage: email, id để hiển thị ra ngoài và check quyền
  useEffect(() => {
    // Render sau khi return chạy
    isAuthenticate() && setIsLogged(true); // Nếu mà thằng user đăng nhập (có thông tin localStorage) thì set state là true
  }, [pathname, isLogged]); // UseEffect được gọi là khi thằng pathname hoặc thằng state thay đổi
  const checkLogin = () => {
    if (pathname !== "/signin" && isLogged) {
      // Nếu pathname thay đổi (!= signin) và đã đăng nhập
      return (
        <>
          <Link
            exact
            className="nav-link"
            aria-current="page"
            to={sub == 1 ? "/admin" : "/user/dashboard"}
          >
            Admin
          </Link>
          <Link
            className="nav-link "
            style={{ cursor: "pointer" }}
            onClick={() =>
              signOut(() => {
                setIsLogged(false);
                history.push("/");
              })
            }
          >
            Đăng xuất
          </Link>
        </>
      );
    } else if (pathname === "/signin" && isLogged) {
      // Nếu đã login và truy cập vào đường dẫn /signin
      return <Redirect to="/" />;
    } else {
      // Ngược lại khi signout
      return (
        <>
          <Link to="/signin" className="nav-link">
            Đăng nhập
          </Link>

          <Link className="nav-link" to="/signup">
            Đăng ký
          </Link>
        </>
      );
    }
  };
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light fixed-top ">
        <div className="container ">
          <div className="navbar-nav">
            <div className="nav-item text-nowrap">
              <a className="nav-link px-3" href="/">
                Shop of Thuỷ
              </a>
            </div>
          </div>
          <a className="navbar-brand" href="#"></a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ml-auto">
              <li>{checkLogin()}</li>
              <li className="nav-item">
                <Link to="/admin">
                  {" "}
                  <a className="nav-link" href="#">
                    Sản phẩm
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/admin">
                  {" "}
                  <a className="nav-link" href="#">
                    Services
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/">
                  {" "}
                  <a className="nav-link" href="#">
                    Shop
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <div className=" nav-item">
            <Link to="/cart">
              {" "}
              <a className="nav-link text" href="#">
                Giỏ hàng
              </a>{" "}
            </Link>
          </div>

          <li>
            <a className=" text-light" href="#">
              {" "}
              {username} {email}
            </a>
          </li>
        </div>
      </nav>
    </header>
  );
};

export default Header;
