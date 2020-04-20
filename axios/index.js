// const url = 'https://jsonplaceholder.typicode.com/comments';
// axios.get(url);

axios({
  method: 'get',
  url: 'https://jsonplaceholder.typicode.com/comments',
  responseType: 'json'
})
  .then(response => {
    const root = document.querySelector('#root');
    const ul = document.createElement('ul');

    response.data.forEach(post => {
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
  })
  .catch(error => console.log(error))
  .finally(() => console.log('axios End'));
