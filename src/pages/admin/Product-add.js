import { useEffect, router } from "@/uilities";
import { products } from "@/data";
import { v4 as uuidv4 } from 'uuid';
const AdminProductAddPage = () => {
        useEffect (() => {
            const form = document.getElementById("form-add");
            const productName= document.getElementById("product-name");
            const productPrice = document.getElementById("product-price");

            form.addEventListener('submit', function(e){
                e.preventDefault();
                const newProduct = {
                    id: uuidv4(),
                    name: productName.value,
                    price: productPrice.value
                };
                //Them mang vao
                    products.push(newProduct);
                    console.log(products);  
                //redirect sang router
                    router.navigate("/admin");
        });
    });
  return /*html*/`
            <div class="container">
             <h1>Thêm sản phẩm </h1>
            <form action="" id="form-add">
                  <div class="form-group mb-3">
                    <label for=""> Tên sản phẩm</label>
                    <input type="text" id="product-name" class="form-control"/>
                  </div>
                  <div class="form-group mb-3">
                    <label for=""> Giá: </label>
                    <input type="text" id="product-price" class="form-control"/>
                  </div>
                  <div class="form-group">
                    <button class="btn btn-primary">Thêm sản phẩm </button>
                  </div>
            </form>
            </div>
  `
}

export default AdminProductAddPage;