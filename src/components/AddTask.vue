<template>
    <div class="add-task">
        <button class="button add__task__button" v-show="!adding" v-on:click="addTask">Add</button>
        <div class="add-task__add" v-show="adding">
            <div class="input-areas">
                <input type="text" v-model="newTitle">
                <textarea v-model="newDescription"></textarea>
            </div>
            <div class="add-task__buttons">
                <button class="button " v-on:click="addAccept(newTitle, newDescription, done, date)">Accept</button>
                <button class="button" v-on:click="addCancel">Cancel</button>
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
            done: false,
            date: new Date(),
        }
    },
    methods: {
        addTask(){
            this.adding = true
        },
        addAccept(title, description, done, date){
            if (title.length > 0 && description.length > 0) {
                let month = date.getMonth()+1
                let day = date.getDate()
                this.$emit("add-accept", {title, description, done, month, day})
                this.newTitle = ""
                this.newDescription = ""
                this.adding = false
            } else alert("Enter task data")
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