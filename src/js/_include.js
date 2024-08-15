// fancybox
import { Fancybox } from "@fancyapps/ui";
Fancybox.bind("[data-fancybox]");

// modal
import GraphModal from 'graph-modal';
new GraphModal('question');

// burger
import {burger} from './templates/_burger.js'
burger()

// smooth scroll
// const links = document.querySelectorAll('.header__nav a')
// links.forEach((link) => {
//     link.addEventListener('click', (e) => {
//         e.preventDefault()
//     })
// })

import SmoothScroll from '../../node_modules/smooth-scroll/dist/smooth-scroll.polyfills.min.js'

// const scroll = new SmoothScroll('a[data-anchor]', {
//     header: '.header',
//     clip: true
// });

// const links = document.querySelectorAll('a[href*="#"]');

// links.forEach((link) => {
//     link.addEventListener('click', (e) => {
//         e.preventDefault();
//         scroll.animateScroll(link.getAttribute('data-anchor'));
//     });
// });
