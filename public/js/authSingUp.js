document.addEventListener('DOMContentLoaded', () => {

    document.getElementById('btnFormSignup').addEventListener('submit', async (event) => {
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        const divMessage = document.getElementById('divMessage');
        const message = "Passwords do not match";

        if (password != confirmPassword) {
            divMessage.textContent = message;
            return;
        }
    });
});