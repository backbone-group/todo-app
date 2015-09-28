Todoapp.Views.TaskShow = Backbone.View.extend({
    model: Todoapp.Models.Task,
    className: 'task',

    initialize: function(){
        this.listenTo(this.model, "change", this.render);
        this.render();
    },

    render: function(){
        //JST is an object on front-end that ejs will load all templates into
        var html = JST['tasks/task_show'](this.model.attributes);
        this.$el.html(html);
    }
});