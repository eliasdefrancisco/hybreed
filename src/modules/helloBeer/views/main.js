import Template from './main.html'

export default Marionette.View.extend({

    template: _.template(Template),

    className: 'helloBeer',

    ui: {
        btnBeer: '#btn-beer',
        inBeers: '#in-beers'
    },

    events: {
        'click @ui.btnBeer': 'beerPressed'
    },

    onAttach() {

    },

    beerPressed() {
        this.trigger('showMeBeers', this.ui.inBeers.val().trim())
    }
})
