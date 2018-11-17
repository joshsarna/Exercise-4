/* global Vue */

new Vue({
  el: '#exercise',
  data: {
    isHighlighted: true
  },

  methods: {
    startEffect: function() {
      var vm = this;
      setInterval(function() {
        console.log('again');
        vm.isHighlighted = !vm.isHighlighted;
      }, 1000);
    }
  },
});