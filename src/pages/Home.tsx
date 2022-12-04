import React from "react";
import { DeleteOutlined } from "@ant-design/icons";
import { Button, message, Popconfirm } from "antd";
import {
  useGetProductsQuery,
  useRemoveProductMutation,
} from "../apiSlice/product";
import { IProduct } from "../interfaces/product";
import { Link } from "react-router-dom";


const Home = () => {
    const { data: products = [], isLoading, error } = useGetProductsQuery();
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error</div>;
  return (
    <div>
      <div className="bg">
        <div className="container">
          <div className="tieuDe1">
            <span className="tieuDe">Trang chủ</span>
            <span className="tieuDe">-</span>
            <span className="tieuDe">Điện thoại</span>
          </div>

          <div className="cot">
            <div className="danhmuc">
              <h6>Danh mục sản phẩm</h6>

              <p className="sizeH">ĐỊA CHỈ NHẬN HÀNG</p>
              <p className="diachi">Q. Hoàn Kiếm, P. Hàng Trống, Hà Nội</p>
              <p className="">
                <a className="noidungdanhmuc1">ĐỔI ĐỊA CHỈ </a>
              </p>

              <p className="sizeH">NƠI BÁN</p>
              <p className="">
                <input type="checkbox" />
                <a className="noidungdanhmuc"> Hà Nội </a>
              </p>
              <p className="">
                <input type="checkbox" />
                <a className="noidungdanhmuc"> Hồ Chí Minh </a>
              </p>
              <p className="">
                <input type="checkbox" />
                <a className="noidungdanhmuc"> Tây Ninh </a>
              </p>
              <p className="">
                <input type="checkbox" />
                <a className="noidungdanhmuc"> Đà Nẵng </a>
              </p>
              <p className="">
                <input type="checkbox" />
                <a className="noidungdanhmuc"> Thái Bình </a>
              </p>

              <p className="">
                <a className="noidungdanhmuc1">Xem thêm ▼ </a>
              </p>

              <p className="sizeH">THƯƠNG HIỆU</p>
              <p className="">
                <input type="checkbox" />
                <a className="noidungdanhmuc"> CHONMUA 365 </a>
              </p>
              <p className="">
                <input type="checkbox" />
                <a className="noidungdanhmuc"> Deli </a>
              </p>
              <p className="">
                <input type="checkbox" />
                <a className="noidungdanhmuc"> Stabilo </a>
              </p>
              <p className="">
                <input type="checkbox" />
                <a className="noidungdanhmuc"> Pentel </a>
              </p>
              <p className="">
                <input type="checkbox" />
                <a className="noidungdanhmuc"> Thiên Long </a>
              </p>

              <p className="">
                <a className="noidungdanhmuc1">Xem thêm ▼ </a>
              </p>
              <p className="sizeH">NHÀ CUNG CẤP</p>
              <p className="">
                <input type="checkbox" />
                <a className="noidungdanhmuc"> Nhà sách Fahasa </a>
              </p>
              <p className="">
                <input type="checkbox" />
                <a className="noidungdanhmuc"> Tiki Trading </a>
              </p>
              <p className="">
                <input type="checkbox" />
                <a className="noidungdanhmuc"> Minhhabooks </a>
              </p>
              <p className="">
                <input type="checkbox" />
                <a className="noidungdanhmuc"> Times Books </a>
              </p>
              <p>
                <input type="checkbox" />
                <a className="noidungdanhmuc"> Info book </a>
              </p>

              <p className="">
                <a className="noidungdanhmuc1">Xem thêm ▼ </a>
              </p>
              <p className="sizeH">GIAO HÀNG</p>
              <p className="">
                <input type="radio" />
                <a className="noidungdanhmuc"> Hàng Nội Địa </a>
              </p>
              <p className="">
                <input type="radio" />
                <a className="noidungdanhmuc"> Hàng Quốc Tế </a>
              </p>
            </div>
            <div className="bangTin">
              <div className="listProduct">
                <h4>Điện thoại</h4>
                <div>
                  <img
                    src="https://salt.tikicdn.com/ts/banner/8a/04/77/9b68f1bed7587656860b8985d753b538.png"
                    className="banner"
                  />
                </div>
                <div className="noiDung">
                  <a className="chuNoiDung">Phổ biến</a>
                  <a className="chuNoiDung">Bán chạy</a>
                  <a className="chuNoiDung">Hàng mới</a>
                  <a className="chuNoiDung">Giá thấp đến cao</a>
                  <a className="chuNoiDung">Giá cao đến thấp</a>
                </div>
              </div>

              <div className="noidungSP">
              {products.map((product: any) => (
                <div className="sanpham"  key={product.id}>
                  <Link to={`detail/${product.id}`}>
                 <a  className="sanPham"> 
                    <img className="img" width={'180px'} src={product.image} alt="" />
                    {/* <img
                      src="https://salt.tikicdn.com/ts/upload/5d/4c/f7/0261315e75127c2ff73efd7a1f1ffdf2.png"
                      width="68"
                      height="14"
                      className="thuonghieu"
                    /> */}

                    <p className="tensp">{product.name}</p>
                    <span className="daBan">Đã bán 100</span>
                    <p className="gia">{product.price}</p>
                    <div className="tangqua">
                      Tặng tới 307 ASA (106k ₫) <br />≈ 3.8% hoàn tiền
                    </div>
                    <div className="Ship">
                      <span className="ship">Freeship+</span>
                      <span className="ship">Trả góp</span>
                    </div> <br />
                    <hr className=""/>
                    <div className="vanChuyen">
                      <span>
                        <img
                          width="32"
                          height="16"
                          src="https://salt.tikicdn.com/ts/upload/9e/13/50/6d16b5e1d219857bd23572ce049e59e2.png"
                          alt="icon-astra"
                        />
                      </span>
                      <span className="vanchuyen">Giao ngày mai</span>
                    </div>
                  </a></Link>
                </div>
                 ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
