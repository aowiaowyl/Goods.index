<template>
  <div>
    <mt-header fixed title="我爱我的购物商城"></mt-header>

    <router-view></router-view>

    <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/chat">
				<span class="mui-icon mui-icon-email"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item" to="/contact">
				<span class="mui-icon mui-icon-contact">
          <span class="mui-badge">9</span>
        </span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" to="/map">
				<span class="mui-icon mui-icon-gear"></span>
				<span class="mui-tab-label">设置</span>
			</router-link>
		</nav>
    
  </div>
</template>

<script>

</script>

<style>
body {
	background-color: #fff;
	padding: 40px 0 50px;
}
p {
  color:#333;
}
ul {
	margin: 0;
	padding-left: 5px;
}

</style>
