var App = {
    
    Collections: {},
    Models: {},
    Views: {},
    Routers: {},
    
    initialize: function() {
        this.tasks = new App.Collections.Tasks();
        this.router = new App.Routers.Tasks({collection: this.tasks});
        Backbone.history.start();
        this.tasks.fetch();
    }
};

