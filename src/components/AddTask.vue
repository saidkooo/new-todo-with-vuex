<template>
    <div class="add-task">
        <button class="add__button" v-show="!adding" v-on:click="addTask">Add</button>
        <div class="add-task__add" v-show="adding">
            <div class="input-areas">
                <input type="text" v-model="newTitle">
                <textarea v-model="newDescription"></textarea>
            </div>
            <div class="add-buttons">
                <button class="add-button" v-on:click="addAccept(newTitle, newDescription)">Accept</button>
                <button class="add-cancel" v-on:click="addCancel">Cancel</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "AddTask",
    data() {
        return{
            newTitle:"",
            newDescription:"",
            adding: false,
        }
    },
    methods: {
        addTask(){
            this.adding = true
        },
        addAccept(title, description){
            if (title.length > 0 && description.length > 0) {
                this.adding = false
                this.$emit("add-accept", {title, description})
                this.newTitle = ""
                this.newDescription = ""
            }
            else alert("Enter task data")
        },
        addCancel() {
            this.adding = false
        }
    }
}
</script>