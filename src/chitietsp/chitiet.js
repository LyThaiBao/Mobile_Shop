const mainImage = document.getElementById("mainImage");

const thumbs = document.querySelectorAll(".thumb");

thumbs.forEach((thumb) => {

    thumb.addEventListener("click", () => {

        // Đổi ảnh lớn
        mainImage.src = thumb.src;

        // Xóa active cũ
        thumbs.forEach((item) => {
            item.classList.remove("active");
        });

        // Thêm active mới
        thumb.classList.add("active");

    });

});