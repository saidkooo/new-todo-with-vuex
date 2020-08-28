<template>
    <div class="add-task">
        <button class="buttons add__buttons" v-show="!adding" v-on:click="addTask">Add</button>
        <div class="add-task__add" v-show="adding">
            <div class="input-areas">
                <input type="text" v-model="newTitle">
                <textarea v-model="newDescription"></textarea>
            </div>
            <div class="add-buttons">
                <button class="buttons add-button" v-on:click="addAccept(newTitle, newDescription)">Accept</button>
                <button class="buttons add-cancel" v-on:click="addCancel">Cancel</button>
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

<style scoped>
    .input-areas {
        width: 500px;
        display: flex;
        flex-direction: column;
    }

    .input-areas input {
        height: 25px;
        font-size: 20px;
    }

    .input-areas textarea {
        font-size: 20px;
    }

    .add-buttons {
        width: 500px;
        text-align: center;
        display: flex;
        justify-content: space-around;
        padding: 30px 0 30px 0;
    }

    .add__buttons {
        margin: 30px 0 30px 0;
    }
</style>