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
$(".menu__btn, .menu a").on("click", function () {
    $(".header__top-inner").toggleClass("header__top-inner--active");
  });

