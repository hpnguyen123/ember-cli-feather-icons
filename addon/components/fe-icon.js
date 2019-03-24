import Component from '@ember/component';
import layout from '../templates/components/fe-icon';
import { computed }  from '@ember/object';

let sizes = {
    'sm': 20,
    'md': 24,
    'lg': 36,
    'xlg': 48,
};

export default Component.extend({
  layout,
  tagName: "icon",
  "stroke-width": 2,
  stroke: "currentColor",
  size: 'md',
  width: computed('size', function() {
    let size = this.get('size');
    return sizes[size] || 24;
  }),

  height: computed('size', function() {
    let size = this.get('size');
    return sizes[size] || 24;
  })

}).reopenClass({
  positionalParams: ['icon-name']
});