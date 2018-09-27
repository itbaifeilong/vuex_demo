<template>
	<div class="cart">
		<div class="top">
			<h3>vuex购物车demo</h3>
		</div>
		<div class="main">
			<h4>商品信息</h4>
			<table class="table table-hover table-bordered">
				<thead>
					<tr>
						<th>id</th>
						<th>名称</th>
						<th>价格</th>
						<th>操作</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="(shop,index) in shoplist">
						<td>{{shop.id}}</td>
						<td>{{shop.name}}</td>
						<td>{{shop.price}}</td>
						<td>
							<div @click='addToCart(shop)' class="btn btn-info">加入购物车</div>
						</td>
					</tr>
				</tbody>
			</table>
			
			<div class="bottom">
				<button type="button" class="btn" @click="btn()">进入购物车</button>
			</div>
		</div>
	</div>
</template>

<script>
	import {mapActions} from 'vuex'
	export default{
		data(){
			return{
				shoplist:[]
			}
		},
		computed:{
			
		},
		created(){
			//通过基本方法来进行调取。
			this.shoplist = this.$store.getters.shoplist;
		},
		methods:{
			btn(){
				this.$router.push('/cart1');
			},
			//2中写法。第一种是通过方法来进行vuex调取方法。
			//第二种是通过vuex的辅助函数来进行调取vuex里面action的方法
			addToCart(shop){
				this.$store.dispatch('addToCart',shop)
			}
			//...mapActions(['addToCart'])
		}
	}
</script>

<style scoped lang="less">
	* {
		margin: 0;
		padding: 0;
	}
	
	.cart {
		width: 100%;
		height: 100%;
		.top {
			color: white;
			width: 100%;
			height: 10%;
			background: blue;
			text-align: center;
		}
		.top h3 {
			padding-top: 1%;
		}
		.main{
			width: 100%;
			height: 50%;
			padding-top: 1%;
		}
		.table{
			width: 90%;
			height: auto;
			margin: auto;
			text-align: center;
		}
		.table tr,th{
			text-align: center;
		}
		.main h4{
			padding-bottom: 1%;
			padding-left: 70px;
		}
		.bottom{
			float: right;
			margin-top: 1%;
		}
		.bottom button{
			color: black;
			width: 100px;
			margin-right:70px;
		}
	}
</style>