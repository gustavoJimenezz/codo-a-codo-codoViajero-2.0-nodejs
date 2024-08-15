document.addEventListener('DOMContentLoaded', () => {
    const index = document.getElementById('index');

    if (!index) {
        console.error('No se encontró el contenedor #cont-tourist-destine');
        return;
    }

    const getTuristDestination = async () => {
        try {
            const response = await fetch('/touristDestinations', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            if (!response.ok) {
                throw new Error('Error en la respuesta de la red');
            }

            const data = await response.json();
            let alter = 0;

            data.forEach(item => {
                if (item.active) {
                    alter += 1;

                    const { city, description, img } = item;

                    const mainDiv = document.createElement('div');
                    mainDiv.classList.add('flex', 'h-80', 'bg-slate-700', 'gap-4');

                    const subDiv1 = document.createElement('div');
                    subDiv1.classList.add('bg-white ', 'w-full','h-full', 'basis-3/6', 'p-4');

                    const subDiv2 = document.createElement('div');
                    subDiv2.classList.add('bg-white ', 'w-full','h-full', 'basis-3/6', 'p-4');


                    //- div(class='bg-slate-700 h-80 flex gap-4')
                    //-   div(class='bg-white w-full h-full')
                    //-   div(class='bg-white w-full h-full')
                    //- div(class='bg-slate-700 h-80 flex gap-4')
                    //-   div(class='bg-white w-full h-full')
                    //-   div(class='bg-white w-full h-full')
                    //- div(class='bg-slate-700 h-80 flex gap-4')
                    //-   div(class='bg-white w-full h-full')
                    //-   div(class='bg-white w-full h-full')
                    //- div(class='bg-slate-700 h-80 flex gap-4')
                    //-   div(class='bg-white w-full h-full')
                    //-   div(class='bg-white w-full h-full')

     

                    // mainDiv.appendChild(subDiv1);
                    // mainDiv.appendChild(subDiv2);
                    index.appendChild(mainDiv);
                }
            });
        } catch (error) {
            console.error("Error al obtener destinos turísticos:", error.message);
        }
    };

    getTuristDestination();
});
