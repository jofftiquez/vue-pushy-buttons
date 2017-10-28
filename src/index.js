import _VuePushyButtons from './components/vue-pushy-buttons';

const VuePushyButtons = {
  install(Vue, options) {
    console.warn('Installing...');
    _VuePushyButtons(Vue);
  }
}

export default VuePushyButtons;