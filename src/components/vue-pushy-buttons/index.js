import '../../../lib/css/pushy-buttons/pushy-buttons.min.css';

export default (Vue) => {
  Vue.component('v-pushy-btn', {
    template: '<button :class="generateClasses">{{ label }}</button>',
    props: {
      label: {
        type: String,
        default: 'Pushy'
      },
      size: {
        type: String,
        default: 'lg'
      },
      color: {
        type: String,
        default: 'green'
      }
    },
    data() {
      return {}
    },
    methods: {
      generateClasses() {
        let _classes = `btn `;
        return _classes += `btn--${ this.size } btn--${ this.color }`;
      }
    }
  });
}