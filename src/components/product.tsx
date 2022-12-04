import { DeleteOutlined } from "@ant-design/icons";
import { Button, message, Popconfirm } from "antd";
import {
  useGetProductsQuery,
  useRemoveProductMutation,
} from "../apiSlice/product";
import { IProduct } from "../interfaces/product";
import { Link } from "react-router-dom";

const Product = () => {
  const { data: products = [], isLoading, error } = useGetProductsQuery();
  // console.log(products);

  const [removeProduct] = useRemoveProductMutation();

  const removeItem = (id: any) => {
    // console.log(id);
    removeProduct(id);
    message.info("Xoá Sản Phẩm Thành Công!!!");
  };
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;
  return (
    <div className=" ">
      <table className="w-full table-auto">
        <thead>
          <tr className="bg-green-600">
            <th className="text-center py-2">
              <span className="text-gray-100 font-semibold ">ID</span>
            </th>
            <th className="text-center py-2">
              <span className="text-gray-100 font-semibold ">Tên sản phẩm</span>
            </th>
            <th className="text-center py-2">
              <span className="text-gray-100 font-semibold">Hình ảnh</span>
            </th>

            <th className="text-center py-2">
              <span className="text-gray-100 font-semibold">Giá cả</span>
            </th>

            <th className="text-center py-2">
              <span className="text-gray-100 font-semibold">Số lượng</span>
            </th>

            <th className="text-center py-2">
              <span className="text-gray-100 font-semibold">Mô tả</span>
            </th>

            <th className="text-center py-2">
              <span className="text-gray-100 font-semibold">Tùy chọn</span>
            </th>
          </tr>
        </thead>

        <tbody className="bg-gray-200">
          {products.map((product: IProduct) => (
            <tr
              className="bg-white border-b-2 border-gray-200"
              key={product.id}
            >
              <td className="text-center py-[20px]">
                <span>{product.id}</span>
              </td>
              <td className="py-[20px] text-center">
                <div>{product.name}</div>
              </td>
              <td className="py-[20px]">
                <img
                  className="h-[156px] w-[120px] m-auto"
                  src={product.image}
                  alt=""
                />
              </td>

              <td className="text-center py-[20px]">
                <span>{product.price}</span>
              </td>
              <td className="text-center py-[20px]">
                <span>{product.quantity}</span>
              </td>
              <td className="text-center py-[20px]">
                <span>{product.description}</span>
              </td>

              <td className="text-center py-[20px]">
                
                  <Link to={`${product.id}/update`}>
                    <Button type="primary" danger>
                      Sửa
                    </Button>
                  </Link>
                
                <a className="pl-[6px]">
                  <Popconfirm
                    placement="top"
                    title="Bạn có chắc chắn muốn xóa không?"
                    onConfirm={() => removeItem(product.id)}
                    okText="Có"
                    cancelText="Hủy"
                  >
                    <Button type="primary" danger>
                      Xóa
                    </Button>
                  </Popconfirm>
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Product;
