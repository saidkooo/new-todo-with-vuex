<template>
    <div class="task">
        <div class="task__item" v-show="!editing">
            <div class="task__item__" v-on:dblclick="editTask">
                <h3 class="task__item__header">{{ task.title }}</h3>
                <p class="task__item__text">{{ task.description }}</p>
            </div>
            <div class="task__item__buttons">
                <button class="edit" v-on:click="editTask">Edit</button>
                <button class="delete" v-on:click="deleteTask(index)">Delete</button>
            </div>
        </div>

        <div class="task__item" v-show="editing">
            <div class="task__item__">
                <input class="task__item__header" v-model="task.title">
                <textarea class="task__item__text" v-model="task.description"></textarea>
            </div>
            <div class="task__item__buttons">
                <button class="edit" v-on:click="acceptEditing(index, task.title, task.description)">Accept</button>
                <button class="delete" v-on:click="cancelEditing">Cancel</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Task",
    props: ["task", "index"],
    data() {
        return {
            editing: false,
        }
    },
    methods: {
        editTask() {
            this.editing = true
        },
        acceptEditing(index, title, description) {
            this.editing = false
            this.$store.dispatch("EDIT_TASK", {index, title, description})
        },
        cancelEditing() {
            this.editing = false
        },
        deleteTask(index) {
            this.$store.dispatch("DELETE_TASK", index)
            console.log("hello")
        },
    }
}
</script>