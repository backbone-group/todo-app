var Todoapp = {
    Models: {},
    Views: {},
    Collections: {},
    Routers: {},

    initialize: function(){
        //create instances of models here
        this.tasks = new Todoapp.Collections.Tasks();
        this.router = new Todoapp.Routers.Tasks({collection: this.tasks});
        // this.view = new Todoapp.Views.TasksIndex({collection: this.tasks});
        //because we added a router, we moved the creation of the new Index view to the index router function
        Backbone.history.start(); //this generates events that tell the browser that new routes are hit even though it's a single page app that isn't refreshing
        this.tasks.fetch();
    }
}


