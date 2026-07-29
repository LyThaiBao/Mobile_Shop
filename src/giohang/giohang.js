
document.querySelectorAll(".fa-heart").forEach(icon => {
    icon.parentElement.addEventListener("click", function(){
        icon.classList.toggle("fa-regular");
        icon.classList.toggle("fa-solid");
        if(icon.classList.contains("fa-solid")){
            icon.style.color = "red";
        }
        else{
            icon.style.color = "";
        }
    });
});
// Tăng giảm số lượng
document.querySelectorAll(".quantity").forEach(quantity => {
    const minus = quantity.children[0];
    const number = quantity.children[1];
    const plus = quantity.children[2];
    plus.addEventListener("click",()=>{
        let value = Number(number.innerText);
        value++;
        number.innerText = value;
        updateTotal();
    });
    minus.addEventListener("click",()=>{
        let value = Number(number.innerText);
        if(value > 1){
            value--;
            number.innerText = value;
            updateTotal();
        }
    });
});
// Xóa sản phẩm
document.querySelectorAll(".fa-trash-can").forEach(icon=>{
    icon.parentElement.addEventListener("click",()=>{
        let item = icon.closest(".cart-item");
        item.remove();
        updateTotal();
    });
});
// Tính tiền
function updateTotal(){
    let total = 0;
    document.querySelectorAll(".cart-item").forEach(item=>{
        let checkbox = item.querySelector("input[type='checkbox']");
        if(checkbox.checked){
            let priceText = item.querySelector(".price-red").innerText;
            let price = Number(
                priceText
                .replaceAll(".","")
                .replace("đ","")
            );
            let quantity = Number(
                item.querySelector(".quantity span").innerText
            );
            total += price * quantity;
        }
    });
    let subtotal = document.querySelector(".left strong");
    if(subtotal){
        subtotal.innerText = 
        total.toLocaleString("vi-VN") + "đ";
    }
    let grand = document.querySelector(".grand");
    if(grand){
        grand.innerText =
        total.toLocaleString("vi-VN") + "đ";
    }
}
// Checkbox thay đổi
document.querySelectorAll(
    "input[type='checkbox']"
)
.forEach(check=>{
    check.addEventListener(
        "change",
        updateTotal
    );
});

updateTotal();