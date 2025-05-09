<template>
  <div class="w-[100vw] h-[100vw]">
    <div class="data-screen">
      <header class="screen-header">
        <h1 class="screen-title text-3xl">数据治理全流程管控及实时监控</h1>
      </header>

      <main class="screen-content">
        <div class="left">
          <div class='top'>
            <div class="echart">
              <div class="title"></div>
              <div class="echart-box" id="echart-box">
                <chart />
              </div>
            </div>
          </div>
          <div class='bottom'>
            <div class="swipper">
              <carousel />
            </div>
          </div>
          <div class="describe"></div>
        </div>
        <div class="right">
          <div class="feature-db" ref="aniEle1">
            特征数据库
            <div class="arrow"></div>
            <div class="tip ani-item" :style="{top: '14%', left: '-64%'}">打宽</div>
            <div class="icon1 ani-item"></div>
            <div class="tip ani-item" :style="{top: '-50%', left: '-20%'}">计算</div>
            <div class="icon2 ani-item"></div>
            <div class="tip ani-item" :style="{top: '-56%', left: '53%'}">聚合</div>
            <div class="icon3 ani-item"></div>
            <div class="tip ani-item" :style="{top: '-11%', left: '111%'}">打标</div>
            <div class="icon4 ani-item"></div>
            <div class="tip ani-item" :style="{top: '56%', left: '117%'}">去重</div>
          </div>
          <div class="deep-learn">
            <span class="title">深度学习</span>
            <div class="arrow"></div>
          </div>
          <div class="data-manage" ref="aniEle2">
            <div class="arrow"></div>
            <div class="tip ani-item" :style="{top: '50%', left: '-44%'}">清洗</div>
            <div class="icon1 ani-item"></div>
            <div class="tip ani-item" :style="{top: '10%', left: '-33%'}">加工</div>
            <div class="icon2 ani-item"></div>
            <div class="tip ani-item" :style="{top: '-22%', left: '-11%'}">转换</div>
            <div class="icon3 ani-item"></div>
            <div class="tip ani-item" :style="{top: '-40%', left: '25%'}">集成</div>
            <div class="icon4 ani-item"></div>
            <div class="tip ani-item" :style="{top: '-43%', left: '64%'}">打卡</div>
            <span class="title">数据治理</span>
          </div>
          <div class="data-factory">
            <span class="title">数据仓库</span>
            <div class="arrow"></div>
          </div>
          <div class="op1">
            <div class="arrow"></div>
          </div>

          <div class="gateway">
            <span class="title">企业网关</span>
            <div class="arrow"></div>
            <div class="tob">
              <div class="t">
                <div class="label">to B</div>
              </div>
              <div class="ne-arrow"></div>
            </div>
          </div>
          <div class="data-service">
            <span class="title">数据服务</span>
            <div class="arrow"></div>

          </div>
          <div class="op2">
            <div class="arrow"></div>
          </div>
          <div class="model">
            <span class="title">模型库</span>
            <div class="arrow"></div>
            <div class="tip" v-for="(item, i) in modelTip" :key="i" :style="{top: item.pos[0], left: item.pos[1]}" >
              <span v-html="item.name"></span>
            </div>
          </div>

          <div class="earth">
            <div class="dizuo">
              <div class="t1">
                <div class="label">平台交易数据</div>
              </div>
              <div class="t2">
                <div class="label">合作渠道数据</div>
              </div>
              <div class="t3">
                <div class="label">业务应用数据</div>
              </div>
              <span class="l1">国家信用大数据创新中心</span>
              <span class="l2">国家公共信用信息中心</span>
              <div class="arrow"></div>
              <div class="in-arrow-up">
                <div class="label">回流</div>
              </div>
              <div class="in-arrow-down">
                <div class="label">下发</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, reactive } from 'vue'
import * as echarts from 'echarts'
import { useWindowSize } from '@vueuse/core'
import carousel from './carousel.vue'
import chart from './chart.vue'
import { modelList } from './data'

const modelTip = reactive(modelList)
const aniEle1 = ref<HTMLElement | null>(null)
  const aniEle2 = ref<HTMLElement | null>(null)

const startAnimation1 = () => {
  if (aniEle1.value) {
    aniEle1.value.classList.add('ani')
    setTimeout(() => {
      aniEle1.value?.classList.remove('ani')
      setTimeout(startAnimation1, 100) // 短暂延迟后重新开始动画
    }, 3300)
  }
}

const startAnimation2 = () => {
  if (aniEle2.value) {
    aniEle2.value.classList.add('ani')
    setTimeout(() => {
      aniEle2.value?.classList.remove('ani')
      setTimeout(startAnimation2, 100) // 短暂延迟后重新开始动画
    }, 3300)
  }
}

onMounted(() => {
  startAnimation1()
  startAnimation2()
})
</script>

<style lang="less" scoped>

.bg(@url) {
  background-image: ~"url('@/assets/images/screen2/@{url}')";
    background-position: center center;
    background-repeat: no-repeat;
    background-size: contain;
}

.ani .ani-item {
  opacity: 0;
  animation: fadeInUp 3.3s ease-out infinite;
}

.ani-item:nth-child(2) { animation-duration: 3; animation-delay: 0.3s; }
.ani-item:nth-child(3) { animation-duration: 2.4; animation-delay: 0.9s; }
.ani-item:nth-child(4) { animation-delay: 1.2s; }
.ani-item:nth-child(5) { animation-delay: 1.5s; }
.ani-item:nth-child(6) { animation-delay: 1.8s; }
.ani-item:nth-child(7) { animation-delay: 2.1s; }
.ani-item:nth-child(8) { animation-delay: 2.4s; }
.ani-item:nth-child(9) { animation-delay: 3s; }
.ani-item:nth-child(10) { animation-delay: 3.3s; }

@keyframes fadeInUp {
  0% {
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  100% {
    opacity: 1;
  }
}

.data-screen {
  position: relative;
    width: 1920px;
    height: 1080px;
    margin: 0 auto;
    .bg('bg.jpg');
    overflow: hidden;
    padding: 0 66px;
    box-sizing: border-box;
    z-index: 10;
}

.screen-header {
  height: 74px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background: linear-gradient(to right, rgba(0,0,0,0), rgba(14,165,233,0.2), rgba(0,0,0,0));
}

.screen-title {
  font-size: 28px;
  font-weight: bold;
  background: linear-gradient(to bottom, #ffffff, #0ea5e9);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  letter-spacing: 2px;
  font-size: 44px;
}

.screen-content {
  height: calc(100% - 74px);
  display: flex;

  .left {
    position: relative;
    width: 25%;

    .describe {
      position: absolute;
      right: -188px;
      top: 0;
      bottom: 0;
      width: 600px;
      .bg('describe.png');
    }

    .top {
      height: 45%;

      .echart {
        padding-top: 20px;
        height: 100%;
      }

      .title {
        height: 40px;
        .bg('echart-title.png');
        background-position: left center;
      }

      .echart-box {
        height: calc(100% - 40px);
      }
    }

    .bottom {
      position: relative;
      height: 55%;

      .swipper {
        position: relative;
        left: 10%;

      }
    }

  }

  .right {
    position: relative;
    width: 75%;
    // background-color: #9fcbe0;

    >div {
      position: absolute;

      .title {
        position: absolute;
        font-size: 14px;
        color: #fff;
      }

      .arrow {
        position: absolute;
      }
    }

    .deep-learn {
      top: 12%;
      left: 26%;
      width: 150px;
      height: 150px;
      .bg('deep-learn.png');

      .title {
        bottom: -1em;
        left: 50%;
        transform: translateX(-50%);
      }

      .arrow {
        top: 2%;
        right: -73%;
        width: 130px;
        height: 77px;
        .bg('r6.png');
        /* 渐进出现动画 */
    animation: fadeIn 2s ease-in-out infinite;
    transform-origin: left center;
    opacity: 0;
    /* 动态遮罩方向（关键！） */
    mask: linear-gradient(
      to right,
        transparent 0%,
        black 20%,
        black 80%,
        transparent 100%
    );
    mask-size: 300% 100%; /* 扩大遮罩区域 */
      }

    }

    /* 动画定义 */
@keyframes fadeIn {
  0% {
    opacity: 0;
    mask-position: -100% 0; /* 从左侧开始 */
  }
  50% {
    opacity: 1;
    mask-position: 0% 0;
  }
  100% {
    opacity: 0;
    mask-position: 100% 0;
  }
}

    .earth {
      top: 20%;
      left: 32%;
      right: 25%;
      bottom: 39%;
      .bg('earth.png');
    }

    .data-manage {
      top: 28%;
      left: 9%;
      width: 163px;
      height: 148px;
      .bg('data-manage.png');

      .title {
        bottom: 1em;
        left: 10%;
        transform: translateX(-50%);
      }

      .arrow {
        top: -65%;
        right: -45%;
        width: 128px;
        height: 84px;
        .bg('r7.png');
      }

      .tip {
        position: absolute;
	width: 45px;
	height: 45px;
	background-color: #08446c;
	border-radius: 22px;
  font-size: 12px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
      }

      .icon1 {
        position: absolute;
        top: 40%;
        left: -31%;
        .bg('blue/r4.png');
        background-size: cover;
        width: 10px;
        height: 16px;
      }

      .icon2 {
        position: absolute;
        top: 3%;
        left: -14%;
        .bg('blue/r3.png');
        width: 16px;
        background-size: cover;
        height: 16px;
      }

      .icon3 {
        position: absolute;
        top: -21%;
        left: 16%;
        .bg('blue/r1.png');
        width: 16px;
        background-size: cover;
        height: 16px;
      }

      .icon4 {
        position: absolute;
        top: -31%;
        left: 54%;
        .bg('blue/r2.png');
        width: 16px;
        background-size: cover;
        height: 16px;
      }
    }

    .data-factory {
      top: 53%;
      left: 14%;
      width: 197px;
      height: 168px;
      .bg('data-factory.png');

      .title {
        top: 10px;
        left: 71%;
        transform: translateX(-50%);
      }

      .arrow {
        top: -62%;
    left: -25%;
    width: 71px;
    height: 130px;
        .bg('r5.png');
      }
    }

    .op1 {
      bottom: 15%;
      left: 27%;
      width: 80px;
      height: 80px;
      .bg('op1.png');

      .arrow {
        top: -70%;
        left: -100%;
        width: 83px;
        height: 94px;
        .bg('r4.png');
      }
    }

    .gateway {
      bottom: 13%;
      right: 17%;
      width: 153px;
      height: 191px;
      .bg('gateway.png');

      .arrow {
        top: 50%;
    left: -64%;
        width: 128px;
        height: 90px;
        .bg('r12.png');
      }
      .title {
        bottom: -0.2em;
    right: 20%;
    color: #54f0b9;
      }
      .tob {
        position: absolute;
        bottom: -15%;
        left: -20%;

        .t {
          position: absolute;
        .bg('tob.png');
        width: 45px;
        height: 45px;

        .label {
          position: absolute;
          color: #dbfeff;
          bottom: -1.5em;
          width: 100px;
          left: 50%;
          font-size: 13px;
          transform: translateX(-50%);
          text-align: center;
        }
        }

        .ne-arrow {
          position: absolute;
          bottom: 0;
    right: -82px;
        width: 50px;
        height: 39px;
        .bg('r13.png');
        }
      }
    }

    .data-service {
      bottom: 27%;
      right: 2%;
      width: 188px;
      height: 203px;
      .bg('data-service.png');

      .title {
        bottom: 1em;
    right: 10%;
      }

      .arrow {
        bottom: -36%;
    left: -11%;
        width: 107px;
        height: 105px;
        .bg('r11.png');
      }


    }

    .op2 {
      top: 36%;
      right: 7%;
      width: 80px;
      height: 80px;
      .bg('op2.png');

      .arrow {
        bottom: -155%;
    left: 34%;
        width: 87px;
        height: 126px;
        .bg('r10.png');
      }
    }

    .model {
      top: 14%;
      right: 14%;
      width: 220px;
      height: 170px;
      .bg('model.png');

      .arrow {
        bottom: -17%;
    right: -11%;
        width: 116px;
        height: 88px;
        .bg('r9.png');
      }

      .title {
        top: 20%;
    left: -7%;
      }

      .tip {
        position: absolute;
	width: 45px;
	height: 45px;
	background-color: #093a52;
	border-radius: 22px;
  font-size: 12px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
      }
    }

    .feature-db {
      top: 8%;
      left: 50%;
      width: 100px;
	height: 99px;
	background-image: linear-gradient(180deg,
		rgba(255, 222, 0, 0.99) 0%,
		rgba(227, 223, 104, 0.99) 100%),
	linear-gradient(
		#08dbf9,
		#08dbf9);
	background-blend-mode: normal,
		normal;
    text-align: center;
    line-height: 99px;
	border-radius: 49px;

  .tip {
        position: absolute;
	width: 45px;
	height: 45px;
	background-color: #344134;
	border-radius: 22px;
  font-size: 12px;
  color: #e3df68;
  display: flex;
  align-items: center;
  justify-content: center;
      }



      .icon1 {
        position: absolute;
        top: -7%;
        left: -31%;
        .bg('yellow/r1.png');
        background-size: cover;
        width: 10px;
        height: 16px;
      }

      .icon2 {
        position: absolute;
        top: -37%;
        left: 33%;
        .bg('yellow/r2.png');
        width: 16px;
        background-size: cover;
        height: 16px;
      }

      .icon3 {
        position: absolute;
        top: -23%;
        left: 100%;
        .bg('yellow/r3.png');
        width: 16px;
        background-size: cover;
        height: 16px;
      }

      .icon4 {
        position: absolute;
        top: 36%;
        left: 129%;
        .bg('yellow/r4.png');
        width: 16px;
        background-size: cover;
        height: 16px;
      }



  &::after {
    content: "";
    position: absolute;
    top: -10px;
    left: -10px;
    width: 120px;
	height: 120px;
	border-radius: 59%;
	border: solid 1px #08dbf9;
	opacity: 0.3;
  }

  .arrow {
        bottom: -10%;
    right: -146%;
        width: 128px;
        height: 48px;
        .bg('r8.png');
      }
    }


    .dizuo {
      position: absolute;
      bottom: 0%;
      left: 50%;
      transform: translate(-50%, 100%);
      width: 580px;
    height: 425px;
      .bg('dizuo.png');

      .arrow {
        top: 43%;
    left: 5%;
        width: 141px;
        height: 48px;
        .bg('r3.png');
      }

      .l1, .l2 {
        position: absolute;
        color: #fcff5b;
      }

      .l1 {
        top: 3%;
        left: 50%;
        transform: translateX(-50%);
      }

      .l2 {
        top: 44%;
        left: 50%;
        transform: translateX(-50%);
      }

      .t1,.t2,.t3 {
        position: absolute;
        .bg('boll.png');
        background-size: 45px 45px;
        width: 95px;
        height: 45px;

        .label {
          position: absolute;
          color: #dbfeff;
          bottom: -1.5em;
          width: 100px;
          left: 50%;
          font-size: 13px;
          transform: translateX(-50%);
          text-align: center;
        }
      }

      .t1 {
        top: 52%;
        left: 25%;
      }

      .t2 {
        top: 57%;
        left: 50%;
        transform: translateX(-50%);
      }

      .t3 {
        top: 52%;
        right: 25%;
      }

      .in-arrow-up {
        position: absolute;
        top: 8%;
        left: 25%;
        width: 46px;
        height: 129px;
        .bg('r2.png');

        .label {
          position: absolute;
          color: #54f0b9;
          top: 42%;
          width: 40px;
          left: -100%;
          font-size: 16px;
          transform: translateY(-50%);
          text-align: center;
        }
      }

      .in-arrow-down {
        position: absolute;
        top: 8%;
        right: 28%;
        width: 56px;
        height: 130px;
        .bg('r1.png');

        .label {
          position: absolute;
          color: #08dbf9;
          top: 42%;
          width: 40px;
          right: -100%;
          font-size: 16px;
          transform: translateY(-50%);
          text-align: center;
        }
      }

    }

  }
}



@media screen and (max-width: 1920px) {
  html,
  body {
      overflow: hidden;
  }
  .data-screen {
      position: absolute;
      left: 50%;
      top: 50%;
      margin-left: -960px;
      margin-top: -540px;
  }
}
</style>../../assets/china.json
