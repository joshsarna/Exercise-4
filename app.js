/* global Vue */

new Vue({
  el: '#exercise',
  data: {
    altClasses: {
      highlight: true,
      shrink: false
    },
    userClass: '',
    otherUserClass: '',
    isDisplayed: true,
    backgroundColor: '',
    barLength: 0
  },

  methods: {
    startEffect: function() {
      var vm = this;
      setInterval(function() {
        console.log(vm.altClasses);
        vm.altClasses.highlight = !vm.altClasses.highlight;
        vm.altClasses.shrink = !vm.altClasses.shrink;
      }, 1000);
    },

    startProgress: function() {
      var vm = this;
      setInterval(function() {
        vm.barLength += 10;
      }, 1500);
    }
  }
});