

// create the projects section
const generateReadme = projectsArr => {
  return `
    <section class="my-3" id="portfolio">
      <h2 class="text-dark bg-tertiary p-2 display-inline-block">Work</h2>
      <div class="flex-row justify-space-between">
    
      ${projectsArr
        .filter(({ feature }) => !feature)
        .map(({ image, readme, name, link }) => {
          return `
          <div class="col-12 mb-2 bg-primary text-dark p-3">
            <h3 class="portfolio-item-title text-secondary bg-primary">${name}</h3>
            
            <img src="${image}" alt="project screenshot">
            <p class ="card-body text-dark bg-secondary text-dark">${readme}</p>

            <a href="${link}" class="btn"><i class="fab fa-github mr-2"></i>View Project on GitHub</a>
          </div>
        `;
        })
        .join('')}
    
      </div>
    </section>
  `;
};

// export function to generate entire page
module.exports = templateData => {
  // destructure page data by section
  const { projects, made, ...header } = templateData;

  return `
  <!DOCTYPE html>
  <html lang="en">
  
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Portfolio Demo</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
    <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
  </head>
  
  <body>
    <header>
      <div class="container flex-row justify-space-between align-center py-3 bg-">
        <h1 class="page-title text-dark bg-tertiary py-2 px-3">${header.name}</h1>
        <nav class="flex-row">
        </nav>
      </div>
    </header>
    <main class="container my-5">
  ${generateReadme(projects)}
    </main>
    <footer class="container text-center py-3">
      <h3 class="text-dark">&copy;2021 by ${header.name}</h3>
    </footer>
  </body>
  </html>
  `;
};