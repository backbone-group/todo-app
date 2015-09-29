App.Views.TasksIndex = Backbone.View.extend({
    initialize: function() {
        this.listenTo(this.collection, 'add', this.add);
        this.render();
    },

    render: function() {
        $(".container").empty();
        $(".container").append(this.$el);
    },

    add: function(model) {
        var view = new App.Views.TaskShow({model: model});
        this.$el.append(view.$el);
    }
});
