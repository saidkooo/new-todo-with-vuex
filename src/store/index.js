import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export const store = new Vuex.Store ({
    state: {
        tasks: [],
    },
    getters: {
        TASKS: state => {
            return state.tasks;
        },
    },
    mutations: {
        ADD_TASK(state, newTask) {
            state.tasks.push(newTask)
        },
        EDIT_TASK(state, {index, title, description, month, day}) {
            state.tasks.splice(index, 1, {title, description, month, day})
        },
        DELETE_TASK(state, id) {
            state.tasks.splice(id, 1)
        },
    },
    actions: {
        ADD_TASK(context, newTask) {
            context.commit("ADD_TASK", newTask)
        },
        EDIT_TASK(context, {index, title, description, month, day}) {
            context.commit("EDIT_TASK", {index, title, description, month, day})
        },
        DELETE_TASK(context, id) {
            context.commit("DELETE_TASK", id)
        },
    },
    plugins: [createPersistedState()],
})