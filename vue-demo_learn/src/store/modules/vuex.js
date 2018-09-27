//初始化数据 state
const state = {
	shop_list: [{
		id: 11,
		name: "鱼香肉丝",
		price: 12,
	}, {
		id: 22,
		name: "宫保鸡丁",
		price: 14,
	}, {
		id: 34,
		name: "拍黄瓜",
		price: 10,
	}, {
		id: 47,
		name: "小炒肉",
		price: 30,
	}, {
		id: 50,
		name: "米饭",
		price: 2,
	}],

	//添加到购物车
	added: []
}
//同步操作
const mutations = {
	//添加到购物车
	add(state, {
		id
	}) {
		//find()方法返回通过测试（函数内判断）的数组的第一个元素的值。
		var record = state.added.find(n => n.id == id);
		if(!record) {
			state.added.push({
				id,
				num: 1
			})
		} else {
			record.num++
		}
	},
	//清除购物车
	clearAll(state) {
		state.added = []
	},
	//删除购物车制定内容
	del(state, item) {
		state.added.forEach((n, i) => {
			if(n.id == item.id) {
				//console.info(11,n)
				//找到index的下标值
				state.added.splice(i, 1)
			}
		})
	}
}
//异步操作
const actions = {
	//添加到购物车
	addToCart({
		commit
	}, item) {
		commit('add', {
			id: item.id
		})
	},
	//清除购物车
	clearAllCart({
		commit
	}) {
		commit('clearAll')
	},
	//删除购物车的指定的商品
    delProduct({commit},product){
        commit('del',product)
    },
}

//getter 抛出数据。
const getters = {
	//商品列表
	shoplist: state => state.shop_list,
	//购物车列表
	cartProducts: state => {
		return state.added.map(({
			id,
			num
		}) => {
			let product = state.shop_list.find(n => n.id == id)
			return {
				...product,
				num
			}
		})
	},
	//计算总价
	totalPrice: (state, getters) => {
		let total = 0;
		getters.cartProducts.forEach(n => {
			total += n.price * n.num
		})
		return total;
	},
	//计算总数量
	totalNum: (state, getters) => {
		let total = 0;
		getters.cartProducts.forEach(n => {
			total += n.num
		})
		return total;
	},
}

export default {
	state,
	mutations,
	actions,
	getters
}