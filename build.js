console.log(performance.now(), "starting build...");

// Helper function to dynamically load a script and return a Promise
function loadScript(src, type = 'text/javascript') {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = src;
    script.type = type;
    
    // Resolve the promise when the script finishes loading
    script.onload = () => resolve();
    script.onerror = () => reject(new Error(`Failed to load script: ${src}`));
    
    document.body.appendChild(script);
  });
}

// Async function to handle the sequential build process
async function buildApp() {
  try {
    const response = await fetch('/build/ui.html');
    const html = await response.text();
    
    document.open();
    document.write(html);
    document.close();

    // 1. Wait for components.js to finish loading and executing
    await loadScript('/scripts/components.js');

    // 2. Wait for main.js to finish loading and executing
    await loadScript('/scripts/main.js');

    console.log(performance.now(), "NBHSmath v0.1 alpha build complete!");
  } catch (error) {
    console.error('Error during the build process:', error);
  }
}

// Execute the build
buildApp();
