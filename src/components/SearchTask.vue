<template>
    <div class="search">
        <form class="search__form">
            <input class="search__input" type="text" v-model="searchValue" v-on:keyup.enter="search(searchValue)">
            <button class="button cancel__search__button" v-on:click="cancelSearch" v-show="searchValue.length > 0">❌</button>
            <button class="button search__button" v-on:click="search(searchValue)" >🔍</button>
        </form>
        <div class="search__list" 
            v-for="(result, id) in searchList" 
            :key="id"
            v-show="searching">
                <h3>{{ result.title }}</h3>
                <p>{{ result.description }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "SearchTask",
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
                this.searchList = this.tasks.filter(task => task.title.toLowerCase() === value.toLowerCase())
            } else alert("Enter search value")
        },
        cancelSearch() {
            this.searching = false
            this.searchValue = ""
        }
    }
    /*methods: {
        search(value) {
            if (value.length > 0) {
                this.searchList = this.tasks.filter(task => task.title.toLowerCase() === value.toLowerCase())
                this.searching = true
            } else alert("Enter search value")
        },
        cancelSearch() {
            this.searching = false
            this.searchValue = ""
        }
    }*/
}
</script>

<style>
    .search {
        width: 30%;
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