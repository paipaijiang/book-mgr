<template>
<div class="auth">
	<div class="bg"></div>
	<div class="title-info">
		<img src="../../../public/titlebg.png" alt="">
		<h2 class="title">图书管理系统后台</h2>
	</div>

	<div class="form">
		<a-tabs>
    		<a-tab-pane key="1" tab="登录">
    			<div class="item">

    				<a-input size="large" placeholder="账户">
    				<template  v-slot:prefix>
                    <UserOutlined />
                    </template>
    				</a-input>
    			</div>
    			<div class="item">
    				
                    <a-input size="large" placeholder="密码">
                	<template  v-slot:prefix>
                    <LockOutlined />
                    </template>
    				</a-input>
    				
    			</div>
    			<div class="item">
    				<a href="">忘记密码</a>
    			</div>
    			<div class="item">
    				<a-button size="large" type="primary">
    					登录
    				</a-button>
    			</div>
        	</a-tab-pane>
        	<a-tab-pane key="2" tab="注册">
    			<div class="item">
    				<a-input size="large" placeholder="账户">
    				<template  v-slot:prefix>
                    <UserOutlined />
                    </template>
    				</a-input>
    			</div>
    			<div class="item">
    				<a-input size="large" placeholder="密码">
                	<template  v-slot:prefix>
                    <LockOutlined />
                    </template>
    				</a-input>
    			</div>
    			<div class="item">
    				<a-input size="large" placeholder="邀请码">
    				<template  v-slot:prefix>
    				<MailOutlined />
    				</template>
    				</a-input>
    			</div>
    			
    			<div class="item">
    				<a-button size="large" type="primary">
    					注册
    				</a-button>
    			</div>
        	</a-tab-pane>
  		</a-tabs>
	</div>
</div>
</template>

<script src="./index.js"></script>
<style lang="scss" scpoed>
	@import './index.scss';
</style>