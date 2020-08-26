<template>
  <div class="city-list">
    <div class="content">
      <div class="area">
        <h2 class="title border-topbottom">当前城市</h2>
        <ul class="hot-wrap">
          <li class="border-rightbottom">
            <a href="#">北京</a>
          </li>
        </ul>
      </div>
      <div class="area">
        <h2 class="title border-topbottom">热门城市</h2>
        <ul class="hot-wrap">
          <li class="border-rightbottom">
            <a href="#">北京</a>
          </li>
          <li class="border-rightbottom">
            <a href="#">北京</a>
          </li>
          <li class="border-rightbottom">
            <a href="#">北京</a>
          </li>
          <li class="border-rightbottom">
            <a href="#">北京</a>
          </li>
          <li class="border-rightbottom">
            <a href="#">北京</a>
          </li>
        </ul>
      </div>

      <div class="area">
        <h2 class="title border-topbottom">A</h2>
        <ul class="hot-wrap">
          <li class="border-rightbottom">
            <a href="#">北京</a>
          </li>
          <li class="border-rightbottom">
            <a href="#">北京</a>
          </li>
          <li class="border-rightbottom">
            <a href="#">北京</a>
          </li>
          <li class="border-rightbottom">
            <a href="#">北京</a>
          </li>
          <li class="border-rightbottom">
            <a href="#">北京</a>
          </li>
        </ul>
      </div>
      <div class="area">
        <h2 class="title border-topbottom">B</h2>
        <ul class="hot-wrap">
          <li class="border-rightbottom">
            <a href="#">北京</a>
          </li>
          <li class="border-rightbottom">
            <a href="#">北京</a>
          </li>
          <li class="border-rightbottom">
            <a href="#">北京</a>
          </li>
          <li class="border-rightbottom">
            <a href="#">北京</a>
          </li>
          <li class="border-rightbottom">
            <a href="#">北京</a>
          </li>
        </ul>
      </div>

      <div class="area">
        <h2 class="title border-topbottom">B</h2>
        <ul class="hot-wrap">
          <li class="border-rightbottom">
            <a href="#">北京</a>
          </li>
          <li class="border-rightbottom">
            <a href="#">北京</a>
          </li>
          <li class="border-rightbottom">
            <a href="#">北京</a>
          </li>
          <li class="border-rightbottom">
            <a href="#">北京</a>
          </li>
          <li class="border-rightbottom">
            <a href="#">北京</a>
          </li>
        </ul>
      </div>
      <div class="area">
        <h2 class="title border-topbottom">B</h2>
        <ul class="hot-wrap">
          <li class="border-rightbottom">
            <a href="#">北京</a>
          </li>
          <li class="border-rightbottom">
            <a href="#">北京</a>
          </li>
          <li class="border-rightbottom">
            <a href="#">北京</a>
          </li>
          <li class="border-rightbottom">
            <a href="#">北京</a>
          </li>
          <li class="border-rightbottom">
            <a href="#">北京</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CityList'
}
</script>

<style lang="scss" scoped>
  .city-list {
    overflow: hidden;
    position: absolute;
    top: 1.75rem;
    left: 0;
    right: 0;
    bottom:0;
    // background:red;
    .area {
    .title {
      line-height: .7rem;
      background: #eee;
      padding: 0 .15rem;
    }
    .border-topbottom {
      &::before {
        border-color: #ccc;
      }
      &::after {
        border-color: #ccc;
      }
      
    }
    .hot-wrap {
      display: flex;
      flex-wrap: wrap;
      .border-rightbottom {
        &:before {
          border-color: #ccc;
        } 
        &:after {
          border-color: #ccc;
        }
      }
      li {
        width: 33.33%;
        height: 0;
        padding-bottom: 11.73%;
        text-align: center;
        line-height: .9rem;
        a {
          font-size: .28rem;
        }
      }
    }
  }

  }
  
</style>