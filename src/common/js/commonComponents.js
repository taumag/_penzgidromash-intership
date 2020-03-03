import ScrollMagic from 'scrollmagic/scrollmagic/minified/ScrollMagic.min.js';
import LazyLoad from 'vanilla-lazyload';
import { callbackExit, callbackLoaded } from './helpers';
import Preloader from '../../components/preloader/preloader';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import SandwichMenu from '../../components/sandwich-menu/sandwich-menu';
import Callbacks from '../../components/callbacks/callbacks';

const commonComponents = {};
const initCommonComponents = () => {
    commonComponents.preloader = new Preloader(document.querySelector('.preloader'));
    commonComponents.header = new Header(document.querySelector('.header'));
    commonComponents.footer = new Footer(document.querySelector('.footer'));
    commonComponents.sandwichMenu = new SandwichMenu(document.querySelector('.sandwich-menu'));
    commonComponents.callbacks = new Callbacks();
    commonComponents.ctrl = new ScrollMagic.Controller();
    commonComponents.lazyLoad = new LazyLoad({
        elements_selector: '.lazy',
        callback_exit: callbackExit,
        callback_loaded: callbackLoaded,
    });
};
export {
    initCommonComponents,
    commonComponents,
};
