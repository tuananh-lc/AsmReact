import { Button, Form, Input } from 'antd';
import { SubmitHandler, useForm } from "react-hook-form";
import { Navigate, useNavigate } from 'react-router-dom';
import { upload } from '../api/product';
import { useAddProductMutation } from "../apiSlice/product";
import { IProduct } from "../interfaces/product";



const ProductAdd = () => {
    const [addProduct] = useAddProductMutation();
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IProduct>();
    const onSubmit: SubmitHandler<IProduct> = async (products: IProduct) => {

        try {
            const formData = new FormData()
            formData.append("file", products.image[0]);
            formData.append("upload_preset", "uizgae9q");
            formData.append("cloud_name", "anhdht");
            const image = await upload(formData)
            console.log(image);

            addProduct({ ...products, image: image.url });
            navigate("/admin/products");
        } catch (error) {

        }
    }
    return (
        <div>
            <form action="" onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="">Tên Sản Phẩm</label><br />
                <input type="text" {...register("name", { required: true })} />
                {errors.name && <span>Bắt buộc phải nhập trường này!</span>}<br />
                <label htmlFor="">Giá</label><br />
                <input type="number" {...register("price", { required: true })} />
                {errors.price && <span>Bắt buộc phải nhập trường này!</span>}<br />
                <label htmlFor="">Ảnh</label><br />
                <input type="file" {...register("image", { required: true })} />
                {errors.price && <span>Bắt buộc phải nhập trường này!</span>}<br />
                <label htmlFor="">Số Lượng</label><br />
                <input type="number" {...register("quantity", { required: true })} />
                {errors.quantity && <span>Bắt buộc phải nhập trường này!</span>}<br />
                <label htmlFor="">Mô tả</label><br />
                <input type="string" {...register("description", { required: true })} />
                {errors.description && <span>Bắt buộc phải nhập trường này!</span>}<br />
                <button>Submit</button>
            </form>
            <hr />
        </div>
    );
};

export default ProductAdd;
