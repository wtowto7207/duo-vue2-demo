<template>
    <div class="todo-wrap">
        <div class="todo-list-input-wrap">
            <input class="todo-list-input" type="text" v-model="todone" v-on:keyup.enter="todoneIt" placeholder="今天要对朵朵做些什么呢？" autofocus="autofocus">
        </div>
        <div class="todo-item" v-for="(todo,index) in todos" :key="index" @click="doneIt(todo)">
            <label :class="{ 'todo-content-done': todo.done, 'todo-content-undo': todo.done }">{{index + 1}}.{{todo.value}}</label>
            <time class="tode-content-created">{{todo.created | date}}</time>
            <div class="todo-delete" @click="deleteIt(index)">
                <span class="todo-delete-text">删除</span>
            </div>
        </div>
    </div>
</template>

<style scoped>
    @import '../assets/todo.css';
</style>

<script>
    import moment from "moment";
    import 'moment/locale/zh-cn';
    import { Toast } from "mand-mobile";
    moment.locale('zh-cn');
    export default {
        data() {
            return {
                title: 'todo list',
                todone: '',
                todos: []
            }
        },
        methods: {
            doneIt(item) {
                item.done = !item.done;
            },
            deleteIt(index) {
                var vm = this;
                vm.todos.splice(index, 1);
            },
            todoneIt() {
                var vm = this;
                var todo = {
                    value: '',
                    done: false,
                    created: Date.now()
                };
                if (vm.todone.trim() !== '' ) {
                    todo.value = vm.todone;
                    vm.todos.push(todo);
                    vm.todone = '';
                }else {
                    Toast.info('请输入内容');
                    return
                }
            }
        },
        filters: {
            date(val) {
                return moment(val).calendar();
            }
        }
    }
</script>
