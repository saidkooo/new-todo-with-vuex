<template>
    <div class="task">
        <div class="task__view" v-show="!editing">
            <div class="task__view__text" v-on:dblclick="editTask">
                <input class="task__view__checkbox" type="checkbox" name="done" v-model="task.done">
                <h3 class="task__view__title">{{ task.title }}</h3>
                <p class="task__view__description">{{ task.description }}</p>
                <p class="task__view__date">{{ task.day }} / {{ task.month }}</p>
            </div>
            <div class="task__view__buttons">
                <button class="button" v-on:click="editTask">✒️</button>
                <button class="button" v-on:click="deleteTask(index)">❌</button>
            </div>
        </div>

        <div class="task__editing" v-show="editing">
            <div class="task">
                <input class="task" v-model="task.title">
                <textarea class="task" v-model="task.description"></textarea>
            </div>
            <div class="task">
                <button class="button" v-on:click="acceptEditing(index, task.title, task.description, editedDate)">✔️</button>
                <button class="button" v-on:click="cancelEditing">❌</button>
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
            editedDate: new Date()
        }
    },
    methods: {
        editTask() {
            this.editing = true
        },
        acceptEditing(index, title, description, editedDate) {
            this.editing = false
            let month = editedDate.getMonth()+1
            let day = editedDate.getDate()
            this.$store.dispatch("EDIT_TASK", {index, title, description, month, day})
        },
        cancelEditing() {
            this.editing = false
        },
        deleteTask(index) {
            this.$store.dispatch("DELETE_TASK", index)
        },
    }
}
</script>

<style scoped>
    .task__view {
        display: flex;
        justify-content: space-between;
        align-items: center;
        align-self: center;
        background: white;
        padding: 5px;
        border: 1px solid darkgray;
    }

    .task__view__text {
        width: 80%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .task__view__buttons {
        width: 12%;
        display: flex;
        justify-content: space-between;
    }
    .task__view__buttons .button {
        border: 1px solid #36454f;
        width: 30px;
        height: 30px;
        border-radius: 5px;
        background: #36454f;
        cursor: pointer;
    }
    
</style>