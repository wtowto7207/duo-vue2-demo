<template>
    <div>
        <div class="tabs">
            <ul>
                <li>
                    <router-link :to="{ name : 'Home' }" tag="li">
                        <div><img src="/assets/images/home.svg"></div>
                        <div>首页</div>
                    </router-link>
                </li>
                <li>
                    <router-link :to="{ name : 'Categories' }" tag="li">
                        <div><img src="/assets/images/category.svg"></div>
                        <div>分类</div>
                    </router-link>
                </li>
                <li>
                    <router-link :to="{ name : 'ShoppingCart' }" tag="li">
                        <div><img src="/assets/images/cart.svg"></div>
                        <div>购物车</div>
                    </router-link>
                </li>
                <li>
                    <router-link :to="{ name : 'Me' }" tag="li">
                        <div><img src="/assets/images/me.svg"></div>
                        <div>我</div>
                    </router-link>
                </li>
            </ul>
        </div>
        <div class="content">
            <router-view></router-view>
        </div>
    </div>
</template>

<style scoped>
    
</style>

<script>
import "../assets/less/site.less"
    export default {
    
    }
</script>


