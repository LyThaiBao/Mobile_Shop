

function validateAndSubmitContact() {
    const contactForm = document.getElementById("contactForm");

    if (!contactForm) return;

    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const regexPhone = /(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/;

    contactForm.addEventListener('submit', function (e) {
        e.preventDefault(); 

        const fullName = document.getElementById("fullName").value.trim();
        const phoneNumber = document.getElementById("phoneNumber").value.trim();
        const emailInput = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (!fullName || !phoneNumber || !emailInput || !message) {
            alert("Vui lòng điền đầy đủ tất cả các trường thông tin!");
            return;
        }

        if (!regexEmail.test(emailInput)) {
            alert("Email không đúng định dạng hợp lệ! (Ví dụ đúng: abc@gmail.com)");
            return;
        }

        if (!regexPhone.test(phoneNumber)) {
            alert("Số điện thoại không hợp lệ! Vui lòng nhập đúng số điện thoại di động Việt Nam.");
            return; 
        }

        alert(`Gửi thông tin liên hệ thành công!\nCảm ơn bạn ${fullName}, chúng tôi sẽ phản hồi lại trong thời gian sớm nhất.`);
        
        contactForm.reset();
    });
}



validateAndSubmitContact();