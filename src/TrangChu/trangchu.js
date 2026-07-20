import {products} from "../../data/products/products.js"
import {checkLogin} from "../../utils/checkLogin.js"
import {renderProduct} from "../../utils/renderProduct.js"
import {saveProductToCart} from "../../utils/cart.js"

const productsShow = products.slice(7,11);
renderProduct(productsShow,addToCart,'container_products');

function  checkEmail(){
    const modal = new bootstrap.Modal(document.getElementById('notifyModal'));
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const boxEmail = document.getElementById("box_email");
    const btn = document.getElementById("trigger");
    const error = document.getElementById("email_error");
    btn.addEventListener('click',()=>{
       if(!boxEmail.value.trim()){
            error.innerText = "Không được để email trống";
            return;
       }
       if(!regex.test(boxEmail.value.trim())){
        error.innerText = "Email không hợp lệ!"
        return;
       }
   
           modal.show();
           boxEmail.value = error.innerText = ""; 
    })

}

function addToCart(product){
    const toast = new bootstrap.Toast(document.getElementById('cartToast'));
    const comeFrom = document.getElementById("from");
    const toastHeader = document.getElementById("toastHeader");
    const toastBody = document.getElementById("toastBody");
        if(!checkLogin()){
            toastHeader.setAttribute('class','toast-header bg-danger')
            comeFrom.innerText = "Thông Báo"
            toastBody.innerText = "Vui lòng đăng nhập";
        }
        else{
            toastHeader.setAttribute('class','toast-header bg-info')
            comeFrom.innerText = "Giỏ Hàng"
            toastBody.innerText = "Đã thêm sản phẩm vào giỏ hàng!";
            saveProductToCart(product)
        }
        toast.show();
}

checkEmail()
// renderHighLightProduct();
