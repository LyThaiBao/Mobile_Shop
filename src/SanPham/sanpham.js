import {products} from "../../data/products/products.js"
import {renderProduct} from "../../utils/renderProduct.js"
import {checkLogin} from "../../utils/checkLogin.js"
import {saveProductToCart} from "../../utils/cart.js"
function filter(){
    const form = document.getElementById("filter_form");
    const chk = document.querySelectorAll('input[name="hang"]')
    chk.forEach((box)=>{
        box.addEventListener('change',()=>{
            const data = new FormData(form);
            const values = data.getAll("hang");
            renderProduct(products,addToCart,'container_products')
        })
    })
    

}

function addToCart(product){
    const toast = new bootstrap.Toast(document.getElementById('cartToast'));
    const comFrom = document.getElementById("from");
    const toastHeader = document.getElementById("toastHeader");
    const toastBody = document.getElementById("toastBody");
        if(!checkLogin()){
            toastHeader.setAttribute('class','toast-header bg-danger')
            comFrom.innerText = "Thông Báo"
            toastBody.innerText = "Vui lòng đăng nhập";
        }
        else{
            toastHeader.setAttribute('class','toast-header bg-info')
            comFrom.innerText = "Giỏ Hàng"
            toastBody.innerText = "Đã thêm sản phẩm vào giỏ hàng!";
            saveProductToCart(product)
        }
        toast.show();
}



filter();