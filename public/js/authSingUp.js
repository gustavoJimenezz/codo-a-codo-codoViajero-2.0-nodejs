document.addEventListener('DOMContentLoaded', () => {

    document.getElementById('btnFormSignup').addEventListener('click', async (event) => {
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        const divMessage = document.getElementById('divMessage');
        const message = "Passwords do not match";

        if (password != confirmPassword) {
            divMessage.textContent = message;
            return;
        }

        const name = document.getElementById('name').value;
        const lastname = document.getElementById('lastname').value;
        const email = document.getElementById('email').value;

        const body = {
            name: name,
            lastname: lastname,
            email: email,
            password: password
        };

        const url = `/user/register`;
        const respose = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        })

        if(respose){
            alert("response positivo");
        }

        window.location.replace("/auth/login");
    });
});