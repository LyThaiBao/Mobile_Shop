// =========================
// 1. GALLERY - ĐỔI ẢNH
// =========================

const mainImage = document.getElementById("mainImage");
const thumbs = document.querySelectorAll(".thumb");

thumbs.forEach(function (thumb) {

    thumb.addEventListener("click", function () {

        // Đổi ảnh lớn
        mainImage.src = thumb.src;

        // Xóa trạng thái active
        thumbs.forEach(function (item) {
            item.classList.remove("active");
        });

        // Thêm active cho ảnh đang chọn
        thumb.classList.add("active");
    });

});


// =========================
// 2. THÔNG TIN SẢN PHẨM
// =========================

const product = {
    id: 1,
    name: "Mẫu điện thoại A 256GB",
    price: 24990000,
    oldPrice: 27990000,
    image: "../../public/imgs/products/sanpham1/i_1.webp",
    storage: "256GB"
};


// =========================
// 3. THÊM GIỎ HÀNG
// =========================

function addToCart(product) {

    const toastElement = document.getElementById("cartToast");

    const toast = new bootstrap.Toast(toastElement);

    const comFrom = document.getElementById("from");

    const toastHeader = document.getElementById("toastHeader");

    const toastBody = document.getElementById("toastBody");


    // Kiểm tra đăng nhập
    if (!checkLogin()) {

        toastHeader.setAttribute(
            "class",
            "toast-header bg-danger text-white"
        );

        comFrom.innerText = "Thông Báo";

        toastBody.innerText = "Vui lòng đăng nhập.";

    } else {

        toastHeader.setAttribute(
            "class",
            "toast-header bg-info"
        );

        comFrom.innerText = "Giỏ Hàng";

        toastBody.innerText =
            "Đã thêm sản phẩm vào giỏ hàng!";

        saveProductToCart(product);
    }

    // Hiện Toast
    toast.show();
}


// =========================
// 4. KIỂM TRA ĐĂNG NHẬP
// =========================

function checkLogin() {

    const user = localStorage.getItem("user");

    if (user) {
        return true;
    }

    return false;
}


// =========================
// 5. LƯU SẢN PHẨM
// =========================

function saveProductToCart(product) {

    let cart = JSON.parse(
        localStorage.getItem("cart")
    ) || [];

    // Kiểm tra sản phẩm đã có chưa
    const existingProduct = cart.find(
        item => item.id === product.id
    );

    if (existingProduct) {

        existingProduct.quantity += 1;

    } else {

        cart.push({
            ...product,
            quantity: 1
        });

    }

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );
}


// =========================
// 6. GẮN NÚT THÊM GIỎ HÀNG
// =========================

const addCartButton =
    document.querySelector(".add-cart");

if (addCartButton) {

    addCartButton.addEventListener("click", function () {

        addToCart(product);

    });

}