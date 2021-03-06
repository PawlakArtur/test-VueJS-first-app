var MyComponent = Vue.extend({
    props: ['msg'],
    template: '<div>Hello {{msg}}</div>'
})
Vue.component('my-component', MyComponent)
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
        background: 'blue',
        font: {
            'black': false,
            'white': false
        },
        border: {
            'pink': true
        },
        transition: true
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
    },
    computed: {
        getBorder: function() {
            return this.border;
        }
    }
});

var vm = new Vue({
    el: '#demo',
    data: {
        firstName: 'Foo',
        lastName: 'Bar',
        showFullName: true,
        showNames: true
    },
    computed: {
        fullName: {
            // getter
            get: function () {
                return this.firstName + ' ' + this.lastName
            },
            // setter
            set: function (newValue) {
                var names = newValue.split(' ')
                this.firstName = names[0]
                this.lastName = names[names.length - 1]
            }
        }
    }
})