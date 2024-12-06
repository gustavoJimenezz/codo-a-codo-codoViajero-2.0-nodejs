document.getElementById('applyFilter').addEventListener('click', async (event) => {
  event.preventDefault();

  const selectedValue = document.getElementById('idCiudadSelect').value;
  if (!selectedValue) {
    alert('Por favor, selecciona un destino.');
    return;
  }

  try {
    const response = await fetch(`/excursions/json/${selectedValue}`);

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const excursions = await response.json();
    console.log(excursions);

    const excursionsContainer = document.getElementById('divExcurions');
    excursionsContainer.innerHTML = '';

    excursions.forEach(excursion => {
      const excursionDiv = document.createElement('div');
      excursionDiv.innerHTML = `
        <a href="#" class="block rounded-lg p-4 shadow-sm shadow-indigo-100">
          <img alt="" src="/img/excursions/${excursion.img}" class="h-56 w-full rounded-md object-cover">

          <div class="mt-2">
              <dl>
                  <div>
                      <dt class="sr-only">Title</dt>
                      <dd class="font-medium">${excursion.name}</dd>
                  </div>
                  <div>
                      <dt class="sr-only">Description</dt>
                      <dd class="text-sm text-gray-500">${excursion.description}</dd>
                  </div>
              </dl>

              <div class="mt-6 flex items-center gap-8 text-xs">
                  <div class="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <line x1="12" y1="1" x2="12" y2="23"></line>
                          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                      </svg>
                      <div class="mt-1.5 sm:mt-0">
                          <p class="text-gray-500">Price</p>
                          <p class="font-medium">${excursion.price}</p>
                      </div>
                  </div>

                  <div class="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z"></path>
                          <path d="M19 6l-7 6V2.5"></path>
                      </svg>
                      <div class="mt-1.5 sm:mt-0">
                          <p class="text-gray-500">Duration</p>
                          <p class="font-medium">${excursion.duration} hs</p>
                      </div>
                  </div>
              </div>
          </div>
      </a>
      `;
      excursionsContainer.appendChild(excursionDiv);
    });
    
  } catch (error) {
    console.error('Fetch error:', error);
  }
});


document.getElementById('reset').addEventListener('click', async (event)=>{
  const selectedValue = document.getElementById('idCiudadSelect');
  selectedValue.value = '0'

})

// const resetButton = document.getElementById('reset');
//   if (resetButton) {
//     resetButton.addEventListener('click', (event) => {
//       const selectedValue = document.getElementById('idCiudadSelect');
//       const filterPriceFrom = document.getElementById('FilterPriceFrom');
//       const filterPriceTo = document.getElementById('FilterPriceTo');

//       selectedValue.value = '0';
//       filterPriceFrom.value = '0';
//       filterPriceTo.value = '0';
//     })
//   }

