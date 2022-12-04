import { responsiveArray } from 'antd/es/_util/responsiveObserve';
import { AxiosPromise } from 'axios';
import { IProduct } from '../interfaces/product';
import instance from './instance';

export const getProducts = async (): Promise<IProduct[]> => {
    return await instance.get('/products');
}
export const getProduct = async (id: number): Promise<IProduct> => {
    return await instance.get(`/products/${id}`);
}
export const addProduct = async (product: IProduct) => {
    return await instance.post('/products', product);
}
export const removeProduct = async (id: number) => {
    return await instance.delete(`/products/${id}`);
}
export const updateProduct = async (product: IProduct) => {
    return await instance.put(`/products/${product.id}`, product);
}
export const upload = (data : any) =>{
    return   fetch("https://api.cloudinary.com/v1_1/anhdht/image/upload", {
        method: "post",
        body: data,
    }).then((resp) => resp.json())
}