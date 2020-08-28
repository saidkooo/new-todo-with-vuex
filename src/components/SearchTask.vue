<template>
    <div class="search">
        <input class="search__input" type="text" v-model="searchValue">
        <button class="search__button" v-on:click="search(searchValue)">Search</button>
        <div class="search__list" v-for="(result, id) in searchList" :key="id">
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
        }
    },
    methods: {
        search(value) {
            if (value.length > 0) {
                this.searchList = this.tasks.filter(task => task.title.toLowerCase() === value.toLowerCase())
                console.log(this.searchList)
            } else alert("Enter search value")
        }
    }
}
</script>