import React from "react";
const headerClient = () => {
  return (
    <div className="bgHeader">
      <div className="container mx-auto flex justify-between items-center">
        <img
          className="logoa w-12 md:w-28 pl-3 pt-2"
          src="../img/tikilogo.jpg"
          alt="logoa"
        />
        <ul className="flex">
          <input
            className="search ml-32"
            type="text"
            placeholder="Tìm sản phẩm, danh mục hay thương hiệu mong muốn ..."
          />
          <span className="btnSearch">
            {" "}
            <img
              className="logos w-12 pr-1"
              src="../img/icons.png"
              alt="logoa"
            />{" "}
            <a className="hvtimkiem" href="/">
              Tìm Kiếm
            </a>
          </span>
          <li>
            <a href="/">
              <img className="logouser" src="../img/usericon.png" alt="logo" />
            </a>
            <a className="dndk text-white block px-4 hover:text-white" href="/">
              Đăng Nhập / Đăng Ký
              <br />
              <p>Tài Khoản ▼</p>
            </a>
          </li>
          <li className="flex">
            <a href="/">
              <img className="logoshoping" src="../img/admin.png" alt="" />
            </a>
            <a
              className="dndk1 text-white block px-4 hover:text-white mt-3"
              href=""
            >
              Admin
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default headerClient;
