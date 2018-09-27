import Vue from 'vue'
import Vuex from 'vuex'

import cart from './modules/vuex.js'

Vue.use(Vuex)



export default new Vuex.Store({
	modules:{
		cart
	}
	
})
