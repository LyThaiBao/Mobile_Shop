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
            comeFrom.setAttribute('data-lang','toast.notifyTitle')
            toastBody.innerText = "Vui lòng đăng nhập";
            toastBody.setAttribute('data-lang','toast.loginRequired');
        }
        else{
            toastHeader.setAttribute('class','toast-header bg-info')
            comeFrom.innerText = "Giỏ Hàng"
            comeFrom.setAttribute('data-lang','toast.cartTitle')
            toastBody.innerText = "Đã thêm sản phẩm vào giỏ hàng!";
            toastBody.setAttribute('data-lang','toast.addSuccess')
            saveProductToCart(product)
        }
        // trứoc khi gọi show thì mình check lang trước
        loadLang();
        toast.show();
}


renderProduct(productsShow,addToCart,'container_products');
loadLang();

