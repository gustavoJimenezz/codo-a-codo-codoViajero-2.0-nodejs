const fetchExcursions = async (selectedValue = '') => {
  try {
    const response = await fetch(`/excursions/filter/${selectedValue}`);
    
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const excursions = await response.json();
    const excursionsContainer = document.getElementById('excursionsContainer');
    excursionsContainer.innerHTML = '';

    excursions.forEach(excursion => {
      const excursionDiv = document.createElement('div');
      excursionDiv.className = "flex flex-col w-full gap-5 p-2 mx-auto bg-white shadow-lg select-none sm:p-4 sm:h-64 rounded-2xl sm:flex-row relative border border-gray-300 overflow-hidden";
      excursionDiv.innerHTML = `
        <div class="bg-gray-200 h-52 sm:h-full sm:w-72 rounded-xl">
          <img src="/img/excursions/${excursion.img}" alt="${excursion.name}" class="h-full w-full object-cover sm:h-72" />
        </div>
        <div class="flex flex-col flex-1 gap-5 sm:p-2">
          <h3 class="mt-1.5 text-2xl font-medium text-gray-900">${excursion.name}</h3>
          <p class="mt-1.5 line-clamp-3 text-gray-700">${excursion.description}</p>
          <div class="flex gap-3 mt-auto">
            <div class="flex items-center justify-center w-20 h-8 bg-indigo-600 rounded-full">
              <span class="text-white font-bold text-xl">${excursion.price} $</span>
            </div>
            <div class="flex items-center justify-center w-20 h-8 bg-indigo-600 rounded-full">
              <span class="text-white font-bold text-xl">${excursion.duration} hs</span>
            </div>
            <div class="w-40 h-8 ml-auto rounded-full">
              <button type="button" class="block w-full rounded bg-indigo-600 px-4 py-3 text-sm font-medium text-white transition hover:scale-105">Reservar</button>
            </div>
          </div>
        </div>
      `;
      excursionsContainer.appendChild(excursionDiv);
    });

  } catch (error) {
    console.error('Fetch error:', error);
  }
};

window.onload = () => {
  fetchExcursions();
};

document.getElementById('searchBtn').addEventListener('click', () => {
  const selectedValue = document.getElementById('filterExcursions').value;
  fetchExcursions(selectedValue);
});
