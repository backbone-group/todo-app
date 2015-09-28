var Todoapp = {
    Models: {},
    Views: {},
    Collections: {},
    Routers: {},

    initialize: function(){
        //create instances of models here
        this.tasks = new Todoapp.Collections.Tasks();
        this.view = new Todoapp.Views.TasksIndex({collection: this.tasks});
        this.tasks.fetch();
    }
}


