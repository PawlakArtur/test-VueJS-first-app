var vueApp = new Vue({
    el: '#vueApp',
    data: {
        todos: [
            { name: 'Learn JavaScript', editing: false},
            { name: 'Learn Vue.js', editing: false},
            { name: 'Write first task', editing: false},
            { name: 'Build Something Awesome', editing: false}
        ],
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
});

var vm = new Vue({
    el: '#demo',
    data: {
        firstName: 'Foo',
        lastName: 'Bar'
    },
    computed: {
        fullName: function () {
            return this.firstName + ' ' + this.lastName
        }
    }
})