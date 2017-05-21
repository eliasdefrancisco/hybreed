import DemoTemplate from './demo.html'

export default Marionette.View.extend({
    template: _.template(DemoTemplate),
    tagName: 'div',
    ui: {
      datepicker: '.datepicker'
    },

    onAttach: function() {
      console.log('On Render')

      console.log('this', this)

      // Datepicker init
      $(this.ui.datepicker).pickadate({
        selectMonths: true, // Creates a dropdown to control month
        selectYears: 15 // Creates a dropdown of 15 years to control year
      });

      $('select').material_select();

      $('.dropdown-button').dropdown();

      $('.tooltipped').tooltip();

    }

})
