// add navbar to html
class HomeNavbar extends HTMLElement {
  connectedCallback() {
    // Get the current filename (e.g., "about.html") to highlight the active link
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    this.innerHTML = `
      <nav>
        <ul>
          <li><a href="index.html" class="${currentPage === 'index.html' ? 'active' : ''}">Home</a></li>
          <li><a href="about.html" class="${currentPage === 'about.html' ? 'active' : ''}">About</a></li>
          <li><a href="contact.html" class="${currentPage === 'contact.html' ? 'active' : ''}">Contact</a></li>
        </ul>
      </nav>
    `;
  }
}
customElements.define('home-navbar', HomeNavbar);

// add navbar to html
class SiteNavbar extends HTMLElement {
  connectedCallback() {
    // Get the current filename (e.g., "about.html") to highlight the active link
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    this.innerHTML = `
      <nav>
        <ul>
          <li><a href="../index.html" class="${currentPage === 'index.html' ? 'active' : ''}">Home</a></li>
          <li><a href="../about.html" class="${currentPage === 'about.html' ? 'active' : ''}">About</a></li>
          <li><a href="../contact.html" class="${currentPage === 'contact.html' ? 'active' : ''}">Contact</a></li>
        </ul>
      </nav>
    `;
  }
}
customElements.define('site-navbar', SiteNavbar);


// add footer to html
class SiteFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<footer><p>2026 - Physics Alcove</p></footer>`;
  }
}
customElements.define('site-footer', SiteFooter);
