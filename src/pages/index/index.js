import Barba from 'barba.js';
import { commonComponents } from '../../common/js/commonComponents';

Barba.BaseView.extend({
    namespace: 'index',
    onEnter() {

    },
    async onEnterCompleted() {
        await commonComponents.preloader.preloading;
        objectFitPolyfill();
        document.querySelector(document.location.hash).scrollIntoView();
    },
    onLeave() {

    },
    onLeaveCompleted() {

    },
}).init();
