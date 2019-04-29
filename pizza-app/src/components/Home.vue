<template>
  <div class="row"> <!-- template下只能有一个根元素 -->
    <div class="col-sm-12 text-center" id="home">
      <div class="background">
        <h1>欢迎大家品尝Pizza！</h1>
        <h1>这里有你非常喜欢的Pizza！</h1>
        <button @click="goToMenu" class="btn btn-success">Let's order!</button>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      methods: {
        goToMenu() {
            // 跳转到上一次浏览的页面
            // this.$router.go(-1)

            // 指定跳转的地址
            // this.$router.replace('/menu')

            // 指定跳转路由的名字下
            // this.$router.replace({name: 'adminLink'})

            // 通过push进行跳转 （常用）
            // this.$router.push('/login')
            this.$router.push({name:'loginLink'})
          }
      }
    }
</script>

<style scoped>
  #home{
    background: url("../../src/assets/pizza.jpg") no-repeat;
    /*background-size: cover;*/
    height: 85vh;
    padding: 10%;
  }
  h1,h2{
    margin: 6%;
  }
  .background{
    background: #eee;
    opacity: 0.8;
    max-width: 70vw;
    margin: 0 auto;
    padding: 20px 0;
  }
</style>
