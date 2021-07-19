/* eslint-disable function-paren-newline */
/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import axios from 'axios';
import props from '../props';

Vue.use(Vuex);

const initialState = {
    activeDeviceId: null,
    deviceId: null,
    searchResult: {},
    context: {},
};

export default new Vuex.Store({
    plugins: [createPersistedState()],
    state: initialState,
    mutations: {
        clear(state) {
            Object.assign(state, initialState);
        },

        activeDeviceId: (state, id) => {
            state.activeDeviceId = id;
        },
        deviceId: (state, id) => {
            state.deviceId = id;
        },
        searchResult: (state, result) => {
            state.searchResult = result;
        },
        context: (state, context) => {
            state.context = context;
        },
    },
});
