// Import our custom CSS
import '../scss/styles.scss'
// Import only the Bootstrap components we need
import { Dropdown, Offcanvas, Popover } from 'bootstrap';
import { panel } from './panel';

// Create an example popover
document.querySelectorAll('[data-bs-toggle="popover"]')
  .forEach(popover => {
    new Popover(popover)
  })


panel.metodos()



