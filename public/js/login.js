document.getElementById('btnLogin').addEventListener('click', async (event) => {

    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const url = `/auth/verifyUser`;
        const response = await fetch(url,{
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                email, 
                password
            })
        });
            
        if (!response.ok) {
            throw new Error('Network response was not ok');
            return;
        }

        data = await response.json()
        console.log(data);

      
    } catch (error) {
        
    }

})