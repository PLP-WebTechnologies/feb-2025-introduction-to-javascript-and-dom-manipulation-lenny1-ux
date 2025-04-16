// Change text content and style
document.getElementById('changeTextBtn').addEventListener('click', function () {
  const title = document.getElementById('title');
  title.textContent = 'JavaScript is awesome!';
  title.classList.toggle('highlight');
});

// Add or remove an element dynamically
document.getElementById('toggleElementBtn').addEventListener('click', function () {
  const container = document.getElementById('container');
  const existing = document.getElementById('dynamicPara');

  if (existing) {
    container.removeChild(existing);
  } else {
    const para = document.createElement('p');
    para.id = 'dynamicPara';
    para.textContent = 'This paragraph was added with JavaScript!';
    container.appendChild(para);
  }
});
