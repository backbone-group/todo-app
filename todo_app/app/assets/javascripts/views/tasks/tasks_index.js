//Tasks Collection view will listen for a new model to be added to the Tasks Collection
Todoapp.Views.TasksIndex = Backbone.View.extend({
    initialize: function(){
        this.listenTo(this.collection, 'add', this.add);
        this.render();
    },

    render: function(){
        $('.container').empty();
        $('.container').append(this.$el)
    },

    add: function(model){
        var taskView = new Todoapp.Views.TaskShow({model: model});
        taskView.render();
        this.$el.append(taskView.$el)
    }

});