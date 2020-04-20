const url = 'https://jsonplaceholder.typicode.com/comments';

fetch(url)
  .then(response => response.json())
  .then(posts => {
    const root = document.querySelector('#root');

    const ul = document.createElement('ul');

    posts.forEach(post => {
      const li = document.createElement('li');
      const anchor = document.createElement('a');

      anchor.innerText = 'Name: ' + `${post.name}` ;
      anchor.setAttribute(
        'href',
        `https://jsonplaceholder.typicode.com/comments/${post.id}`
      );

      li.appendChild(anchor);

      ul.appendChild(li);
    });

    root.appendChild(ul);
  });