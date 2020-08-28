<template>
    <div class="task-list">
        <div class="search">
            <div class="search__area">
                <input class="search__input" type="text" v-model="searchValue">
                <div class="search__buttons">
                    <button class="buttons search__button" v-on:click="search(searchValue)">Search</button>
                    <button class="buttons cancel" v-on:click="cancelSearch">Cancel</button>
                </div>
            </div>
            <div class="search__list" 
            v-for="(result, id) in searchList" 
            :key="id"
            v-show="searching">
                <h3>{{ result.title }}</h3>
                <p>{{ result.description }}</p>
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
            searchList: [],
            searching: false,
            searchValue: "",
        }
    },
    methods: {
        search(value) {
            if (value.length > 0) {
                this.searchList = this.tasks.filter(task => task.title.toLowerCase() === value.toLowerCase())
                this.searching = true
            } else alert("Enter search value")
        },
        cancelSearch() {
            this.searching = false
        }
    }
}
</script>

<style scoped>
    .search__input {
        width: 500px;
        height: 25px;
        font-size: 20px;
    }
    .search__buttons {
        width: 500px;
        text-align: center;
        display: flex;
        justify-content: space-around;
        padding: 30px 0 30px 0;
    }


</style>