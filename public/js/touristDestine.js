const contTouristDestine = document.getElementById('cont-tourist-destine');

const getTuristDestination = async () => {

    try {
        const response = await fetch('/touristDestinations', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });

        const data = await response.json();
        let alter = 0;

        data.forEach(item => {
            if(item.active){
                alter += 1

                let city = item.city;
                let description = item.description;
                let img = item.img

                const mainDiv = document.createElement('div');
                mainDiv.classList.add('flex', 'h-80', 'w-full', 'm-auto', 'gap-2');

                const subDiv1 = document.createElement('div');
                subDiv1.classList.add('basis-3/6', 'p-4');
                const subDiv2 = document.createElement('div');
                subDiv2.classList.add('basis-3/6', 'p-4');

                const divImg = document.createElement('div');
                divImg.classList.add('h-full', 'bg-cover', 'bg-no-repeat', 'bg-center')
                divImg.style.backgroundImage = `url('../img/touristDestine/${img}')`;

                const heading = document.createElement('h4');
                heading.classList.add('text-4xl', 'text-center', 'text-orange-500', 'font-black', 'p-2')
                heading.textContent = city;


                const paragraph = document.createElement('p');
                paragraph.classList.add('leading-loose', 'text-orange-500', 'text-xl', 'font-bold');
                paragraph.textContent = description;


                if(alter%2 === 0){
                    subDiv1.appendChild(divImg)
                    subDiv1.classList.add('shadow-xl')
                    subDiv2.appendChild(heading);
                    subDiv2.appendChild(paragraph);
                    subDiv2.classList.add('text-black', 'text-center')
                    
                }else{
                    subDiv2.appendChild(divImg)
                    subDiv2.classList.add('shadow-xl')

                    subDiv1.appendChild(heading);
                    subDiv1.appendChild(paragraph);
                    subDiv1.classList.add('text-black', 'text-center')
                }
                
                mainDiv.appendChild(subDiv2);
                mainDiv.appendChild(subDiv1);
                contTouristDestine.appendChild(mainDiv);
            }
        });
    } catch (error) {
        console.log("error", error.message);
    }
}

getTuristDestination();