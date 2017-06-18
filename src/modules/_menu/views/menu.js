import Template from './menu.html'

export default Marionette.View.extend({

    template: _.template(Template),

    className: 'menu',

    triggers: {
        'click .logout': 'logoutPressed',
        'click .hello-beer': 'helloBeerPressed'
    }
})
