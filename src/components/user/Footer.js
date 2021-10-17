import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="footer-distributed mt-5 ">
        <div className="footer-left">
          <h3>
            Điện lạnh <span>Ánh Dương</span>
          </h3>
          <p className="footer-links">
            <a href="#" className="link-1">
              Home
            </a>
            <a href="#">Hỏi đáp</a>
            <a href="#">Thông tin</a>
            <a href="#">Liên hệ</a>
          </p>
          <p className="footer-company-name">Company Name © 2021</p>
        </div>
        <div className="footer-center">
          <div>
            <i className="fa fa-map-marker" />
            <p>
              <span>429 Vườn Lài </span> p.Phú Thọ Hoà - q.Tân Phú - TP.HCM
            </p>
          </div>
          <div>
            <i className="fa fa-phone" />
            <p>035 7897 375</p>
          </div>
          <div>
            <i className="fa fa-envelope" />
            <p>
              <a href="mailto:dienlanhanhduong@gmail.com">
                dienlanhanhduong@gmail.com
              </a>
            </p>
          </div>
        </div>
        <div className="footer-right">
          <p className="footer-company-about">
            <span>Thông tin Điện lạnh Ánh Dương</span>
            <p className="text-light fs-6">
              {" "}
              Hơn 15 năm trong nghề sửa chữa và cũng cấp các sản phẩm điện lạnh
              tại tp.HCM Hãy đến với chsung tôi, ngay!
            </p>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
