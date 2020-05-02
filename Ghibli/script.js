const app = document.getElementById('root');
const logo = document.createElement('img');
const container = document.createElement('container');

logo.src = 'logo.png'
container.setAttribute('class', 'container');

app.appendChild(logo);
app.appendChild(container);

fetch('https://ghibliapi.herokuapp.com/films') 
  .then(response => {
    if (response.ok) {
      return response.json();
    }

    const errorMessage = document.createElement('marquee');

    errorMessage.textContent = `Gah, it's not working!`
    app.appendChild(errorMessage);
  })
  .then(data => {
    data.forEach(movie => {
      const card = document.createElement('div');
      const h1 = document.createElement('h1');
      const p = document.createElement('p');

      card.setAttribute('class', 'card');
      h1.textContent = movie.title;
      movie.description = movie.description.substring(0, 300);
      p.textContent = `${movie.description}...`;

      container.appendChild(card);
      card.appendChild(h1);
      card.appendChild(p);
    })
  })
