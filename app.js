/* global Vue */

new Vue({
  el: '#exercise',
  data: {
    altClasses: {
      highlight: true,
      shrink: false
    }
  },

  methods: {
    startEffect: function() {
      var vm = this;
      setInterval(function() {
        console.log(vm.altClasses);
        vm.altClasses.highlight = !vm.altClasses.highlight;
        vm.altClasses.shrink = !vm.altClasses.shrink;
      }, 1000);
    }
  }
});