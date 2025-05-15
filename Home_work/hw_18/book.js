fetch('book.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('book-info');
    container.innerHTML = `
      <p><strong>Title:</strong> ${data.title}</p>
      <p><strong>Author:</strong> ${data.author}</p>
      <p><strong>Year:</strong> ${data.year}</p>
    `;
  })
  .catch(error => {
    console.error('Ошибка при загрузке JSON:', error);
  });