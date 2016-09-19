var vueApp = new Vue({
    el: '#vueApp',
    data: {
        todos: [{ name: 'Task' }],
        currTodo: "",
    },
    methods: {
        addTodo: function(){
            this.todos.push({name:this.currTodo,editing:false});
            this.currTodo = "";
        },
        remove: function(todo) {
            var index = this.todos.indexOf(todo);
            this.todos.splice(index,1);
        },
        edit: function(todo) {
            var index = this.todos.indexOf(todo);
            this.todos[index].editing = true;
        },
        save: function(todo) {
            var index = this.todos.indexOf(todo);
            this.todos[index].editing = false;
        },
    }
})