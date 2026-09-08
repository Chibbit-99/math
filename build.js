fetch('/build/ui.html')
  .then(response => response.text())
  .then(html => {
    document.write(html);
    document.close(); // Good practice to close the stream after document.write
  })
  .catch(error => console.error('Error fetching the HTML:', error));
