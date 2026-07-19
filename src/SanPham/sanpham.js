import {products} from "../../data/products/products.js"
import {renderProduct} from "../../utils/renderProduct.js"
import {checkLogin} from "../../utils/checkLogin.js"
import {saveProductToCart} from "../../utils/cart.js"
import { clearRenderProduct } from "../../utils/clearRenderProduct.js";



function matchRange(product, min, max) {
    return product.variants.some(v => v.newPrice >= min && v.newPrice < max);
}

function filter(){
    const form = document.getElementById("filter_form");
    const chkBrand = document.querySelectorAll('input[name="hang"]');
    const chkPrice = document.querySelectorAll('input[name="gia"]');
    // Moi vao hien thị tất cả sản phẩm
    renderProduct(products, addToCart, 'container_products');

    // Hàm áp dụng đồng thời cả 2 điều kiện
    function applyFilter(){
        const data = new FormData(form);
        const brand = data.getAll("hang");
        const price = data.get("gia"); 

        let result = products;

        if (brand.length > 0){
            result = result.filter(p => brand.includes(p.brand));
        }

        if (price){
            const [min, max] = price.split("-").map(Number);
            result = result.filter(p => matchRange(p, min, max));
        }

        clearRenderProduct("container_products");
        renderProduct(result, addToCart, 'container_products');
    }

    // Cả 2 nhóm input đều gọi chung 1 hàm applyFilter
    chkBrand.forEach((box)=> box.addEventListener('change', applyFilter));
    chkPrice.forEach((p)=> p.addEventListener('change', applyFilter));
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