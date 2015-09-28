Todoapp.Collections.Tasks = Backbone.Collection.extend({
    model: Todoapp.Models.Task,
    url: '/tasks'
});