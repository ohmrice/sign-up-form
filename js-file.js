const checkValues = (() => {
    const inputs = document.querySelectorAll(".input");
    const confirmMsg  = document.querySelector(".confirm-message");
    const submitBtn = document.querySelector("#submit-button");

    submitBtn.addEventListener("click", (event) => {
        for (let i = 0; i < inputs.length; i++) {
            if (inputs[i].hasAttribute('required')) {
                inputs[i].classList.add("invalid-input");
                if (!inputs[i].checkValidity()){
                    inputs[i].classList.add("error");
                }           
            }    
        }
        if (!passwordsMatch) {
            let confirm = document.querySelector("#confirm-password");
            confirm.classList.add("error");
            event.preventDefault();

        }
    });

    inputs.forEach((textField) => textField.addEventListener("focus", () => {
        if (textField.hasAttribute('required')) {
            textField.classList.add("invalid-input");
        }    
        if (textField.name === "confirm-password" || textField.name === "password") {
            let password1 = document.querySelector("#password");
            let password2 = document.querySelector("#confirm-password");
            textField.addEventListener("input", () => confirmPassword(password1, password2));
        }
    }));

    let passwordsMatch = false;

    function confirmPassword (pw1, pw2) {   
            if (pw1.value === pw2.value) {
                passwordsMatch = true;
                pw2.style.backgroundColor = "rgb(238, 234, 216)";
                pw2.style.borderColor = "rgb(238, 234, 216)";
                confirmMsg.textContent = "Passwords match";
                confirmMsg.style.color = "rgb(126, 148, 98)";
                return;
            }
            confirmMsg.textContent = "Passwords do not match";
            confirmMsg.style.color = "rgb(230, 33, 79)";
            pw2.style.backgroundColor = "rgb(245, 130, 157)";
            pw2.style.borderColor = "rgb(230, 33, 79)";
            passwordsMatch = false;
    }
})();
