import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { useEditProductMutation, useGetProductQuery } from "../apiSlice/product";
import { useAppDispatch } from "../app/hook";
import { IProduct } from "../interfaces/product";
import { fetchProduct } from "../slice/product";


type Props = {};

const ProductEdit = (props: Props) => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<IProduct>();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const { id } = useParams();
    const [editProduct] = useEditProductMutation();
    const onSubmit: SubmitHandler<IProduct> = (data) => {
        editProduct(data)
        navigate("/admin/products")
    };
    useEffect(() => {
        (async () => {
            const { payload: products } = await dispatch(fetchProduct(id as any));
            reset(products as IProduct);
        })();
    }, [id]);
    
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
                <input type="file" {...register("image")} />
                
                <label htmlFor="">Số Lượng</label><br />
                <input type="number" {...register("quantity", { required: true })} />
                {errors.quantity && <span>Bắt buộc phải nhập trường này!</span>}<br />
                <label htmlFor="">Mô tả</label><br />
                <input type="string" {...register("description", { required: true })} />
                {errors.description && <span>Bắt buộc phải nhập trường này!</span>}<br />
                <button>Submit</button>
            </form>
        </div>
    );
};

export default ProductEdit;
