import Vue from "vue";
import VueX from "vuex";

Vue.use(VueX);

const states = {};

const store = new VueX.Store({
	states
});

export default store;