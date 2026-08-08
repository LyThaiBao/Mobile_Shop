import {products} from "../../data/products/products.js"
import {checkLogin} from "../../utils/checkLogin.js"
import {renderProduct} from "../../utils/renderProduct.js"
import {saveProductToCart} from "../../utils/cart.js"
import {checkEmail} from "../../utils/checkEmail.js"
import { loadLang } from "../../utils/lang.js"
const productsShow = products.slice(7,11);



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


renderProduct(productsShow,addToCart,'container_products');
loadLang();

