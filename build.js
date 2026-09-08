fetch('/build/ui.html')
  .then(response => response.text())
  .then(html => {
    document.open();
    document.write(html);
    document.close();

    // Dynamically create and load the script
    const script = document.createElement('script');
    script.src = '/scripts/main.js';
    script.type = 'text/javascript';
    document.body.appendChild(script);
  })
  .catch(error => console.error('Error fetching the HTML:', error));
