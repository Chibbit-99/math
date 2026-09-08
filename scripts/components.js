console.log(performance.now(), "loading ui components")

// Find all elements with the 'component' attribute
const components = document.querySelectorAll('[component]');

// Loop through each element and fetch its corresponding HTML
components.forEach(async (element) => {
  const componentName = element.getAttribute('component');
  const url = `/build/components/${componentName}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const htmlContent = await response.text();
    element.innerHTML = htmlContent;
  } catch (error) {
    console.error(`Failed to load component "${componentName}" from ${url}:`, error);
  }
});
