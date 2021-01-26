
<template>
  <div>
    <div class="head">
      <div class="info-box">
        <img src="../assets/logo.png" alt="前端技术分享演示系统">
        <div class="head-title">前端技术分享演示系统</div>
      </div>
      <div class="btn-box">
        <router-link to="/news" class="button button--sketch">技术列表</router-link>
        <router-link to="/about" class="button button--psd">关于系统</router-link>
      </div>

    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
      handleClick (path) {
        this.$router.push({ path: path })
      }
    }
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
.head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 90px;
  text-align: center;
  position: sticky;
  top: 0;
  z-index: 102;
  padding: 10px 60px;
  border-bottom: 1px solid #ebebeb;
  background-color: #fff;
  &-title {
    font-size: 24px;
    font-weight: bold;
  }
  .info-box {
    display: flex;
    align-items: center;
    img {
      width: 35px;
      height: 35px;
      margin-right: 8px;
    }
  }
  .button {
    display: inline-block;
    max-width: 130px;
    padding: 0 33px;
    height: 42px;
    line-height: 36px;
    border-radius: 42px;
    font-size: 10px;
    letter-spacing: 0.065em;
    text-transform: uppercase;
    font-weight: 700;
    font-family: Montserrat, Helvetica, sans-serif;
    background-color: #f6f6f6;
    border: 2px solid transparent;
    cursor: pointer;
    color: #333435;
    text-align: center;
    text-decoration: none;
    transition: background-color 0.25s ease-out, box-shadow 0.25s ease;
    margin-left: 10px;
  }
  .button--sketch {
    background-color: transparent;
    border: 2px solid #f7b157;
  }
  .button--sketch:hover,
  .button--sketch:focus,
  .button--sketch:active {
    background-color: #f7b157;
    color: white;
    box-shadow: none;
  }
  .button--psd {
    background-color: transparent;
    border: 2px solid #3583fb;
  }
  .button--psd:hover,
  .button--psd:focus,
  .button--psd:active {
    background-color: #3583fb;
    color: white;
    box-shadow: none;
  }
}
</style>
