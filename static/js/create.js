function validateForm() {
    var password = document.getElementById("password").value; // 비밀번호 값
    var confirmPassword = document.getElementById("confirmPassword").value; // 비밀번호 확인값

    var passwordError = document.getElementById("passwordError"); // 비밀번호 불일치 문장
    if (password !== confirmPassword) {
        passwordError.style.display = "block";
        return false;
    } else {
        passwordError.style.display = "none";
    }

    var phone = document.getElementById("phone").value;
    var phoneRegex = /^\d{3}-\d{4}-\d{4}$/; // 전화번호 형식 정규식
    var phoneError = document.getElementById("phoneError"); // 핸드폰번호 불일치 문장
    if (!phoneRegex.test(phone)) {
        phoneError.style.display = "block";
        return false;
    } else {
        phoneError.style.display = "none";
    }

    return true;
}

document.querySelector('button[type="submit"]').addEventListener('click', function(event) {
    event.preventDefault(); // 기본 동작 중단

    if (validateForm()) {
        document.getElementById("registrationForm").submit(); // 폼이 유효한 경우 최종 제출
    }
});