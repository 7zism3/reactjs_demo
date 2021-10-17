import React from "react";
import Header from "../admin/Header";
import Nav from "../admin/Nav";
const AdminLayout = (props) => {
  return (
    <>
      <div>
        <Header />
        <div className="container-fluid">
          <div className="row">
            <Nav />
            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
              {props.children}
            </main>
          </div>
        </div>
      </div>
    </>
  );
};
export default AdminLayout;
