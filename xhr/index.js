const url = new URL('https://jsonplaceholder.typicode.com/comments');

const xhr = new XMLHttpRequest();

xhr.open('GET', url);
xhr.responseType = 'json';
xhr.send();

xhr.onload = function() {
  const posts = xhr.response;

  const root = document.querySelector('#root');
  const ul = document.createElement('ul');

  posts.forEach(post => {
    const li = document.createElement('li');
    const anchor = document.createElement('a');

    anchor.innerText = 'Name: ' + `${post.name}`;
    anchor.setAttribute(
      'href',
      `https://jsonplaceholder.typicode.com/comments/${post.id}`
    );

    li.appendChild(anchor);
    ul.appendChild(li);
  });

   root.appendChild(ul);
}

xhr.onerror = function() {
  console.log(`Network Error`);
}
