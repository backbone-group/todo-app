App.Views.TaskShow = Backbone.View.extend({

    model: App.Models.Task,
    
    className: 'task',

    initialize: function() {
        this.listenTo(this.model, 'change', this.render);
        this.render();
    },

    render: function() {
        var html = JST['tasks/task_show'](this.model.attributes);
        this.$el.html(html);
    }
    
});
