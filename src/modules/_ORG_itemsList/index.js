import ItemsListView from './views/itemsList'

var itemsListView

function start() {
    showExampleView()
}

function showExampleView() {

    itemsListView = new ItemsListView({
        collection: new Backbone.Collection(
            [{name: 'Item1'}, {name: 'Item2'}, {name: 'Item3'}]
        )
    })

    itemsListView.on({

        'childview:itemPressed': (view) => {
            Broker.channel('example').trigger('start', view.model)
        }
    })

    Broker.channel('screen').trigger('start', {
        type: 'snap',
        title: 'Items List',
        contentView: itemsListView,
        menuView: Broker.channel('menu').request('getView')
    })
}


// API definition
const API = {
  start
}
Broker.channel('itemsList').on(API)
export default API
