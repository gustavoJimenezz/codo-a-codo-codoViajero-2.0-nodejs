// Selecciona el contenedor donde se agregarán los divs
const indexDiv = document.getElementById('index');

// Crea el contenedor principal con flex-col y gap-2
const container = document.createElement('div');
container.classList.add('flex', 'flex-col', 'gap-2', 'h-96');

// Define los colores y los textos para los divs hijos
const divs = [
  { color: 'bg-red-500', text: '1' },
  { color: 'bg-blue-500', text: '2' },
  { color: 'bg-green-500', text: '3' },
  { color: 'bg-yellow-500', text: '4' },
  { color: 'bg-purple-500', text: '5' },
  { color: 'bg-pink-500', text: '6' },
];

// Crea y agrega cada div hijo al contenedor
divs.forEach(({ color, text }) => {
  const childDiv = document.createElement('div');
  childDiv.classList.add('h-96', color); // Prueba con h-44
  childDiv.textContent = text;
  container.appendChild(childDiv);
});

// Agrega el contenedor al div principal
indexDiv.appendChild(container);
