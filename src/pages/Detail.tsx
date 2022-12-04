
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { useGetProductQuery } from "../apiSlice/product";
import { useAppDispatch } from "../app/hook";
import { IProduct } from "../interfaces/product";





const Detail = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<IProduct>();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const { id } = useParams();
    const { data: products, isLoading, error } = useGetProductQuery(id as any);
    console.log(products);
    
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error</div>;
    
  return (
    <div>


<div className="duongdan flex">
        <p className="pr-2"><a className="duongdantext" href="/">Trang chủ</a> </p>
        <p className="pr-2"> - <a className="duongdantext" href="/">Điện thoại</a> </p>
        <p className="pr-2"> - <a className="duongdantext" href="/"></a>{products?.name} </p>
        </div>
                <div className="bd1">
                <div className="bd2">
                   
                
                
                  
            <div className="chitietsanpham flex">
            <div>
                <img className="anhsachchitiet" src={products?.image} alt="" width="653px"/>
                <p className="flex pl-3"/>Chia sẻ đến:
                <img src="https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/social-facebook.svg" alt="" />
                <img src="https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/social-messenger.svg" alt="" />
                <img src="https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/social-pinterest.svg" alt="" />
                <img src="https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/social-twitter.svg" alt="" />
                <img src="https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/social-copy.svg" alt="" />
            <p/>
            </div>
         
                <div className="chiale">
                    
                    <div className="motasachngan">{products?.description}</div>
                    
                    <div className="tieudesachchitiet"> {products?.name}</div>
                   
                    <div className="flex pl-2">
                    
                    
                    <p className="sachdaban pl-2 pr-2"></p>
                    <p className="sachdaban">(Xem 1 đánh giá)</p>

                    <p className="sachdaban pl-2 pr-2">|</p>
                    <p className="sachdaban">Đã bán 23</p>
                    </div>
                    <div className="banggiatien">

                    <div className="flex">
                    <div className="giasachchitiet pr-4"></div>
                    <div className="giasalechitiet pr-4"> </div>
                    <div className="phantramsalechitiet"> -20% </div>
                    
                    </div>

                    <div className=""><img className="logosale1 pb-3" width="150" src="https://salt.tikicdn.com/ts/upload/51/ac/cc/528e80fe3f464f910174e2fdf8887b6f.png"/>
                    </div>
                    <div className="thuongchitiet"><p className="thuongchitiettext">Thưởng lên đến 7,21 ASA ≈ 3.510 Xu</p>
                    </div>
                    </div>


                    <div className="khoangcach pt-3">
                    </div>

                    <div className="salegiamgia">
                    <div className="giamgia">
                    <p className="pt-2">14 Mã Giảm Giá</p>
                    </div>
                    <div className="flex">
                    <p className="phieugiamgia">Giảm 20K</p>
                    <p className="phieugiamgia">Giảm 200K</p>
                    <p className="phieugiamgia">Giảm 2Tr</p>
                    
                    </div>
                    </div>

                    <div className="khoangcach pt-3">
                    </div>

                    <div className="diachichitiet flex">
                    <p className="pt-2 pr-1 cursor-pointer">Giao đến <span className="gachchan"> Q. Hoàn Kiếm, P. Hàng Trống, Hà Nội</span> - </p> 
                    <p className="doidiachichitiet pt-2 cursor-pointer">Đổi địa chỉ</p>
                    </div>
                    <div className="khoangcach pt-3">
                    </div>
                    <p className="textslsp" >Số Lượng</p>
                    <div className="flex pb-6 pl-3">
                    <button className="btnsl" type="submit">-</button>
                    <input className="soluongsp" type="text" value="1"/>
                    <button  className="btnsl" type="submit">+</button>
                    </div>
                    <div className="canlebtn">
                    <button  className="btnsl1" type="submit">Chọn Mua</button>
                    </div>
            </div> 
            </div>
       
          
            
            <div className="khoangtrang"></div> 
            <div className="bd1sp">
            
            
            

            <div className="bd2">
            <p className="sizeH2 pl-4">Đánh Giá - Nhận Xét Từ Khách Hàng</p>
           
            
            </div> 

            <div className="khoangtrang"></div> 

            <div className="bd2">
            <p className="sizeH2 pl-4">Khám Phá Thêm</p>
            </div> 
            </div> 
            <div className="bd2">



           
            </div>
      

       



    
    </div>
    </div>
    </div>

  )
}

export default Detail