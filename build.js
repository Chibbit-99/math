fetch('/build/ui.html')
  .then(response => response.text())
  .then(html => {
    document.open();
    document.write(html);
    document.close();

    // Add components
    const components = document.createElement('script');
    script.src = '/scripts/components.js';
    script.type = 'text/javascript';
    document.body.appendChild(components);

    // Run main script
    const script = document.createElement('script');
    script.src = '/scripts/main.js';
    script.type = 'text/javascript';
    document.body.appendChild(script);
  })
  .catch(error => console.error('Error fetching the HTML:', error));
