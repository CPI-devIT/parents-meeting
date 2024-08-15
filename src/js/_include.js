// fancybox
import { Fancybox } from "@fancyapps/ui";
Fancybox.bind("[data-fancybox]");

// modal
import GraphModal from 'graph-modal';
new GraphModal('question');

// burger
import {burger} from './templates/_burger.js'
burger()

//scroll

const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};

