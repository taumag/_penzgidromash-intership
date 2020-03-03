import Barba from 'barba.js';
import 'mocha';
import { commonComponents } from '../../common/js/commonComponents';

Barba.BaseView.extend({
    namespace: 'tests',
    onEnter() {
        mocha.setup('bdd');
    },
    async onEnterCompleted() {
        await commonComponents.preloader.preloading;
        mocha.run();
    },
    onLeave() {

    },
    onLeaveCompleted() {

    },
}).init();
