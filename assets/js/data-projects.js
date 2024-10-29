const data = [
  {
    src: './assets/img/portfolio/tv-shows-network/tv-networks-desktop.png',
    alt: 'Image from the TV Show Network app',
    title: 'TV Shows Network',
    tools: 'HTML, SCSS, JavaScript',
    href: './portfolio/tv-network.html'
  },
  {
    src: './assets/img/portfolio/geoenergy-congress/geoenergy-congress-desktop.png',
    alt: 'Image from the Geoenergy Congress 2023',
    title: 'Geoenergy Congress 2023',
    tools: 'HTML, CSS, JavaScript',
    href: './portfolio/geoenergy-congress.html'
  },
  {
    src: './assets/img/masonry-portfolio/masonry-portfolio-2.jpg',
    alt: '',
    title: 'Product 1',
    tools: 'Lorem ipsum, dolor sit',
    href: './portfolio-details.html'
  },
];

const projectContainer = document.querySelector('.isotope-container');

let allProjectsTemplate = '';

data.forEach(project => {
  allProjectsTemplate += `
    <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
      <img src="${project.src}" class="img-fluid" alt="${project.alt}">
      <div class="portfolio-info">
        <h4>${project.title}</h4>
        <p>${project.tools}</p>
        <a href="${project.src}" title="${project.title}" data-gallery="portfolio-gallery-product" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
        <a href="${project.href}" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a>
      </div>
    </div><!-- End Portfolio Item -->

  `; 
});

projectContainer.innerHTML = allProjectsTemplate;