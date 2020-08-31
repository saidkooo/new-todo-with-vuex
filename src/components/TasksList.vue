<template>
    <div class="task-list">
        <div class="search">
            <div class="search__form">
                <input class="search__input" type="text" v-model="searchValue" v-on:keyup.enter="search(searchValue)">
                <button class="button cancel__search__button" v-on:click="cancelSearch" v-show="searchValue.length > 0">❌</button>
                <button class="button search__button" v-on:click="search(searchValue)">🔍</button>
            </div>
            <div class="search__list" 
            v-for="(result, id) in searchList" 
            :key="id"
            v-show="searching">
            </div>
        </div>
        <Task :task="task"
        v-for="(task, index) in tasks"
        :key="index"
        :index="index"
        v-show="!searching"/>
    </div>
</template>
<script>

import Task from "./Task";
export default {
    name: "TasksList",
    components: {Task},
    props: ["tasks"],
    data() {
        return {
            searchValue: "",
            searchList: [],
            searching: false,
        }
    },
    methods: {
        search(value) {
            if (value.length > 0) {
                this.searching = true
                this.searchList = this.tasks.filter(task => task.title.toLowerCase() === value.toLowerCase())
                console.log(this.searchList)
            } else alert("Enter search value")
        },
        cancelSearch() {
            this.searching = false
            this.searchValue = ""
        }
    }
}
</script>

<style scoped>
    .task-list {
        width: 30%;
        max-height: 600px;
    }
    .search {
        padding-bottom: 50px;
    }
    .search__form {
        width: 100%;
        min-height: 20px;
        display: flex;
    }
    .search__input {
        height: 30px;
        border: none;
        outline: none;
        -webkit-appearance: none;
        width: 100%;
        vertical-align: middle;
        font-size: 20px;
        padding-left: 10px;
    }
    .search__button {
        background: white;
        width: 30px;
        border: none;
        cursor: pointer;
    }
    .cancel__search__button {
        background: white;
        width: 30px;
        border: none;
        cursor: pointer;
    }

</style>