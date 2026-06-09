const form = document.getElementById('mango');
const gallery = document.getElementById('pera');
const errorDiv = document.getElementById('cereza');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const title = document.getElementById('imageTitle').value;
  const url = document.getElementById('imageUrl').value;

  
  if (!title || !title.trim()) {
    errorDiv.textContent = 'Error: El título no puede estar vacío.';
    errorDiv.style.display = 'block';
    return;
  }

  if (!url || !url.trim()) {
    errorDiv.textContent = 'Error: La URL no puede estar vacía.';
    errorDiv.style.display = 'block';
    return;
  }

  
  errorDiv.textContent = '';
  errorDiv.style.display = 'none';
  
  const card = document.createElement('div');
  card.className = 'manzana';

  const img = document.createElement('img');
  img.alt = title;
  img.style.maxWidth = '100%';
  img.style.display = 'block';
  img.style.marginBottom = '0.5rem';

  img.onload = function() {
    const caption = document.createElement('p');
    caption.textContent = title;

   
    const controls = document.createElement('div');
    controls.className = 'platano';

    const btnFav = document.createElement('button');
    btnFav.type = 'button';
    btnFav.className = 'naranja uva';
    btnFav.textContent = 'Favorito';
    btnFav.addEventListener('click', function() {
      card.classList.toggle('durazno');
      btnFav.classList.toggle('limon');
    });

    const btnDelete = document.createElement('button');
    btnDelete.type = 'button';
    btnDelete.className = 'naranja fresa';
    btnDelete.textContent = 'Eliminar';
    btnDelete.addEventListener('click', function() {
      card.remove();
    });

    controls.appendChild(btnFav);
    controls.appendChild(btnDelete);

    card.appendChild(img);
    card.appendChild(caption);
    card.appendChild(controls);
    gallery.appendChild(card);
    form.reset();
  };

  img.onerror = function() {
    errorDiv.textContent = 'Error: No se pudo cargar la imagen desde la URL proporcionada.';
    errorDiv.style.display = 'block';
  };

  
  img.src = url;
});
