document.addEventListener('DOMContentLoaded', async () => {
    const index = document.getElementById('destinations');
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
      let order = 0;
      data.forEach(item => {
        if (item.active) {
          const { city, description, img } = item;
          order += 1;
          const mainDiv = document.createElement('div');
          mainDiv.classList.add('w-full', 'bg-white', 'rounded-xl', 'shadow-md', 'overflow-hidden');


          const flexDiv = document.createElement('div');
          flexDiv.classList.add('w-full','md:flex');

          const imgDiv = document.createElement('div');
          imgDiv.classList.add('md:shrink-0');

          const imgElement = document.createElement('img');
          imgElement.classList.add('h-48', 'w-full', 'object-cover', 'md:h-full', 'md:w-96');
          imgElement.src = `/img/touristDestine/${img}`
          imgElement.alt = `Image of ${city}`;

          const contentDiv = document.createElement('div');
          contentDiv.classList.add('p-8');

          const titleDiv = document.createElement('div');
          titleDiv.classList.add('uppercase', 'tracking-wide', 'text-sm', 'text-indigo-500', 'font-semibold');
          titleDiv.textContent = city;

          const descriptionParagraph = document.createElement('p');
          descriptionParagraph.classList.add('mt-2', 'text-slate-500');
          descriptionParagraph.textContent = description;

          imgDiv.appendChild(imgElement);

          contentDiv.appendChild(titleDiv);
          contentDiv.appendChild(descriptionParagraph);
          
          if(order%2==0){
            flexDiv.appendChild(imgDiv);
            flexDiv.appendChild(contentDiv);
          }else{
            flexDiv.appendChild(contentDiv);
            flexDiv.appendChild(imgDiv);
          }
          mainDiv.appendChild(flexDiv);
          index.appendChild(mainDiv);
        }
      });
    } catch (error) {
      console.error('Error fetching destinations:', error);
    }
  });
