Todoapp.Routers.Tasks = Backbone.Router.extend({
    initialize: function(options){
        this.collection = options.collection;
    },

    routes: {
        "": "index",
        "new": "/new",
        "show": "/tasks/:id"
    },

    index: function(){
        this.view = new Todoapp.Views.TasksIndex({collection: this.collection});
    }
});