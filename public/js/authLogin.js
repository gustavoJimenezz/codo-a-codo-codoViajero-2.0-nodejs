document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('btnLogin').addEventListener('click', async (event) => {
        event.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        try {
            const url = `/auth/verifyUser`;
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({ email, password })
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
  
            const data = await response.json();
            window.location.replace("/");
        } catch (error) {
            console.error(error);
        }
    });

    document.getElementById('btnSingUp').addEventListener('click', function () {
        window.location.href = '/auth/singUp';
    });
});