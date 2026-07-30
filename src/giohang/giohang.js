// =========================
// TĂNG GIẢM SỐ LƯỢNG
// =========================

document.querySelectorAll(".quantity").forEach(quantity => {

    const minus = quantity.children[0];
    const number = quantity.children[1];
    const plus = quantity.children[2];

    // Tăng
    plus.addEventListener("click", () => {

        let value = Number(number.innerText);

        value++;

        number.innerText = value;

        updateTotal();
    });


    // Giảm
    minus.addEventListener("click", () => {

        let value = Number(number.innerText);

        if (value > 1) {

            value--;

            number.innerText = value;

            updateTotal();
        }
    });

});


// =========================
// XÓA SẢN PHẨM
// =========================

document.querySelectorAll(".delete-btn").forEach(button => {

    button.addEventListener("click", () => {

        const item = button.closest(".cart-item");

        if (item) {

            item.remove();

            updateTotal();
            updateProductCount();
        }

    });

});


// =========================
// TÍNH TỔNG TIỀN
// =========================

function updateTotal() {

    let total = 0;


    document.querySelectorAll(".cart-item").forEach(item => {

        // Lấy giá
        const priceText =
            item.querySelector(".price-red").innerText;

        const price = Number(
            priceText
                .replace(/\./g, "")
                .replace("đ", "")
                .trim()
        );


        // Lấy số lượng
        const quantity =
            Number(
                item.querySelector(".quantity span").innerText
            );


        // Tính
        total += price * quantity;

    });


    // Hiển thị tạm tính
    const subtotal =
        document.querySelector(".summary-row strong");


    if (subtotal) {

        subtotal.innerText =
            total.toLocaleString("vi-VN") + "đ";

    }


    // Hiển thị tổng cộng
    const grandTotal =
        document.querySelector(".summary-total strong");


    if (grandTotal) {

        grandTotal.innerText =
            total.toLocaleString("vi-VN") + "đ";

    }

}


// =========================
// CẬP NHẬT SỐ SẢN PHẨM
// =========================

function updateProductCount() {

    const items =
        document.querySelectorAll(".cart-item");


    const title =
        document.querySelector(".cart-title h1");


    if (title) {

        title.innerHTML =
            `Giỏ hàng <span>(${items.length} sản phẩm)</span>`;

    }

}


// =========================
// KHỞI ĐỘNG
// =========================

updateTotal();

updateProductCount();