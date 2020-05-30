new Vue({
    el: '#app',
    data: {
        todos: [],
        todo: {
            title: '',
            completed: false,
        },
    },
    //GET
    mounted: function () {
        // fetch('http://jsonplaceholder.typicode.com/todos')
        //     .then((res) => {
        //         return res.json()
        //     })
        //     .then((todos) => {
        //         this.todos = todos
        //     })
        axios.get('http://jsonplaceholder.typicode.com/todos').then((res) => {
            this.todos = res.data
        })
    },
    //POST
    methods: {
        onSubmit: function () {
            // fetch('http://jsonplaceholder.typicode.com/todos', {
            //     method: 'POST',
            //     body: JSON.stringify(this.todo),
            //     headers: {
            //         'Content-Type': 'application/json',
            //     },
            // })
            //     .then((res) => {
            //         return res.json()
            //     })
            //     .then((todo) => {
            //         this.todos.unshift(todo)
            //     })
            axios.post('http://jsonplaceholder.typicode.com/todos', this.todo).then((res) => {
                this.todos.unshift(res.data)
            })
        },
    },
})
