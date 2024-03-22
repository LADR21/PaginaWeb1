const listaLibros = document.getElementById('lista-libros');

const libros = [
  {
    nombre: 'El Principito',
    autor: 'Antoine de Saint-Exupéry',
    color: 'rojo',
    tomo: 1
  },
  {
    nombre: 'Cien años de soledad',
    autor: 'Gabriel García Márquez',
    color: 'verde',
    tomo: 1
  },
  {
    nombre: 'El Quijote',
    autor: 'Miguel de Cervantes',
    color: 'azul',
    tomo: 2
  },
  {
    nombre: 'Harry Potter y la piedra filosofal',
    autor: 'J.K. Rowling',
    color: 'rojo',
    tomo: 1
  },
  {
    nombre: 'El juego de Ender',
    autor: 'Orson Scott Card',
    color: 'azul',
    tomo: 1
  }
];

function filtrarLibros(libros, nombre, autor, color, tomo) {
  return libros.filter(libro => {
    const nombreCoincide = libro.nombre.toLowerCase().includes(nombre.toLowerCase());
    const autorCoincide = libro.autor.toLowerCase().includes(autor.toLowerCase());
    const colorCoincide = color === '' || libro.color === color;
    const tomoCoincide = tomo === 0 || libro.tomo === tomo;
    return nombreCoincide && autorCoincide && colorCoincide && tomoCoincide;
  });
}

function mostrarLibros(libros) {
  listaLibros.innerHTML = '';
  libros.forEach(libro => {
    const li = document.createElement('li');
    li.innerHTML = `
      <h3>${libro.nombre}</h3>
      <p>Autor: ${libro.autor}</p>
      <p>Color: ${libro.color}</p>
      <p>Tomo: ${libro.tomo}</p>
    `;
    listaLibros.appendChild(li);
  });
}

const formularioFiltros = document.querySelector('.filtros form');

formularioFiltros.addEventListener('submit', (e) => {
  e.preventDefault();
  const nombre = document.getElementById('nombre').value;
  const autor = document.getElementById('autor').value;
  const color = document.getElementById('color').value;
  const tomo = parseInt(document.getElementById('tomo').value);
  const librosFiltrados = filtrarLibros(libros, nombre, autor, color, tomo);
  mostrarLibros(librosFiltrados);
});

mostrarLibros(libros);
