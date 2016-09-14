var vueApp = new Vue({
    el: '#vueApp',
    data: {
        message: 'Hello Vue.js',
        newToDo: '',
        todos: [
            { text: 'Learn JavaScript' },
            { text: 'Learn Vue.js '},
            { text: 'Build Something Awesome'}
        ]
    },
    methods: {
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('')
        },
        addTodo: function () {
            var text = this.newTodo.trim()
            if (text) {
                this.todos.push({text: text})
                this.newTodo = ''
            }
        },
        removeToDo: function (index) {
            this.todos.splice(index, 1)
        }
    }
})