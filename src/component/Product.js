import React, { useEffect, useState } from "react";


const product = [
    {id:1,name:"Quần áo"},
    {id:2,name:"Máy tính"},
    {id:3,name:"Thiết bị gia dụng"},
    {id:4,name:"Mỹ phẩm"},
]
function Product() {
    // const [fullname, setFullname] = useState({ name: "jonh", familyName: "Evans" });
    // const [titlle, setTitle] = useState("dfsdf");
    // const [count ,setCount] = useState(0)
    const [productId, setProductId] = useState("1");
    const [selectProduct,setSelectProduct] = useState([]);

    useEffect(() => {
            
            for( let item in product){
                if(product[item].id == productId){
                    
                    setSelectProduct(product[item])
                }
            }
            console.log(selectProduct);
            
    },[productId]);

    return (
        <div>
           <select value={productId} onChange={e=>setProductId(e.target.value)}>
            <option value="1">{product[0].name}</option>
            <option value="2">{product[1].name}</option>
            <option value="3">{product[2].name}</option>
            <option value="4">{product[3].name}</option>
           </select>
        <input type="text" value={selectProduct.id} />
        <input type="text" value={selectProduct.name}  />
        </div>
    ); 
}
export default Product;