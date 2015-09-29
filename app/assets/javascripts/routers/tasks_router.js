App.Routers.Tasks = Backbone.Router.extend({
    
    initialize: function(options) {
        this.collection = options.collection;
    },

    routes: {
        "": "index",
        "new": "new",
        "tasks/:id": "show"
    },

    index: function() {
        this.view = new App.Views.TasksIndex({collection: this.collection});
    },

    new: function() {

    },

    show: function() {

    }
});
