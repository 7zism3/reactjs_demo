import React from "react";
import Header from "../user/Header";
import Footer from "../user/Footer";

const UserLayout = (props) => {
  return (
    <>
      <Header> website</Header>
      <main>{props.children}</main>
      <Footer> footer </Footer>
    </>
  );
};
export default UserLayout;
