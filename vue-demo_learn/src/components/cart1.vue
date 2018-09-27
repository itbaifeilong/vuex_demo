<template>
	<div>
		<div>
			<button type="button" @click="btn()">返回</button>
		</div>
		<h4>已选商品</h4>
		<table class="table table-hover table-bordered">
			<thead>
				<tr>
					<th>id</th>
					<th>名称</th>
					<th>价格</th>
					<th>数量</th>
					<th>操作</th>
					
					
					
				</tr>
			</thead>
			<tbody>
				<tr v-for='(shop,index) in cartProducts'>
					<td>{{shop.id}}</td>
					<td>{{shop.name}}</td>
					<td>{{shop.price}}</td>
					<td>{{shop.num}}</td>
					<td>
						<div @click='delProduct(shop)' class="btn btn-danger btn-sm">删除</div>
					</td>
				</tr>
				<tr v-if="!cartProducts.length">
					<td colspan="5" class="text-center">您的购物车空空如也。。。</td>
				</tr>
			</tbody>
		</table>
		<div>
			<div class="item-wrapper">
				<div class='item'>总数：<strong>{{totalNum}}</strong></div>
				<div class='item'>总价：<strong>{{totalPrice}}</strong></div>
				<div class="item btn btn-danger" @click='clearAllCart'>清空购物车</div>
			</div>
		</div>
	</div>
</template>

<script>
	import {
		mapGetters,
		mapActions
	} from "vuex";

	export default {
		name: 'cart',
		data() {
			return {
				cartProducts: [],
				totalNum: null,
				totalPrice: null
			}
		},
		computed: {
			//...mapGetters(['cartProducts']),
			//...mapGetters(['totalPrice', 'totalNum'])
		},
		created() {
			//created里面的cartProducts，totalPrice，totalNum相当于 computed 通过辅助函数进行。把vuex里面的getters的数据返回来。
			this.cartProducts = this.$store.getters.cartProducts;
			this.totalPrice = this.$store.getters.totalPrice;
			this.totalNum = this.$store.getters.totalNum;
		},
		
		//methods里面的delProduct(删除)，clearAllCart(清空)相当于辅助函数。把vuex里面的action方法，调用过来进行操作。
		methods: {
			btn() {
				this.$router.push('/')
			},
			//...mapActions(['delProduct']) == 
			delProduct(shop) {
				this.$store.dispatch('delProduct', {
					id: shop.id
				})
				this.cartProducts = this.$store.getters.cartProducts;
				this.totalPrice = this.$store.getters.totalPrice
				this.totalNum = this.$store.getters.totalNum
			},
			//	...mapActions(['clearAllCart'])
			clearAllCart() {
				this.$store.dispatch('clearAllCart')
				this.cartProducts = this.$store.getters.cartProducts;
				this.totalPrice = this.$store.getters.totalPrice
				this.totalNum = this.$store.getters.totalNum
			}
		}
	}
</script>

<style scoped>
	.item-wrapper {
		display: flex;
		background-color: #dfdfdf;
		align-items: center;
		justify-content: center;
	}
	
	.item {
		flex: 1;
	}
</style>