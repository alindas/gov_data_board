<template>
  <!-- 右上角 -->
  <div class="luan">
    
    <div class="swiper-container">
      <!-- <swiper
       class="swiper-wrapper"
        :slides-per-view="5"
        :space-between="7"
        :loop="true"
        :freeMode="true"
        :paginationClickable="true"
        :direction="'vertical'"
        :allowTouchMove="false"
        :modules="modules"
        :autoplay="{
          delay: 5000,
          disableOnInteraction: false
        }"
      >
        <swiper-slide v-for="(item,index) in list" :key="index">
          <div class="clearfix">
            <div class="swiper-slide-txt flex justify-between text-[#ffffff] text-[16px] gap-[15px]">
              <div class="whitespace-nowrap">任务号：{{generate19DigitUUID() || '-'}}</div>
              <div class="whitespace-nowrap">数据类型：中标数据</div>
            </div>
            <div class="swiper-slide-txt flex text-[#ffffff] text-[16px]">
              <template v-for="(item2,index2) in item">
                <div class="flex-1 flex flex-col align-center" :key="index2" v-if="index2 !== '任务号'">
                  <div class="text-[#ffbf5f] whitespace-nowrap">{{item2}}</div>
                  <div class="whitespace-nowrap">{{index2}}</div>
                </div>
              </template>
            </div>
          </div>
        </swiper-slide>
      </swiper> -->
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,index) in list" :key="index">
          <div class="clearfix">
            <div class="swiper-slide-txt flex justify-between text-[#ffffff] text-[16px] gap-[15px]">
              <div class="whitespace-nowrap">任务号：{{generate19DigitUUID() || '-'}}</div>
              <div class="whitespace-nowrap">数据类型：中标数据</div>
            </div>
            <div class="swiper-slide-txt flex text-[#ffffff] text-[16px]">
              <template v-for="(item2,index2) in item">
                <div class="flex-1 flex flex-col align-center" :key="index2" v-if="index2 !== '任务号'">
                  <div class="text-[#ffbf5f] whitespace-nowrap">{{item2}}</div>
                  <div class="whitespace-nowrap">{{index2}}</div>
                </div>

              </template>
            </div>
          </div>
        </div>
      </div>
      <img src="@/assets/images/left.png" alt="" class="swiper-left-img" />
      <img src="@/assets/images/left.png" alt="" class="swiper-right-img" />
    </div>
  </div>
  <!-- 右上角结束 -->
</template>

<script setup lang="ts">
import { onUnmounted, onMounted, reactive } from "vue";


// 生成19位的UUID
const generate19DigitUUID = () => {
    // 生成一个足够长的随机数字字符串，然后截取前19位
    const randomPart = Math.random().toString().slice(2); // 去除"0."
    const timestampPart = Date.now().toString();
    
    // 组合时间戳和随机数，确保长度足够
    let combined = timestampPart + randomPart;
    
    // 如果组合后长度不足，继续添加随机数
    while (combined.length < 16) {
        combined += Math.random().toString().slice(2);
    }
    
    // 截取前19位
    return combined.slice(0, 19);
}
// 模拟数据
const list = reactive([
  {
    "任务号": generate19DigitUUID(),
    "数据量": 1000,
    "已快审数": 1000,
    "去标注": 200,
    "已抽检": 80,
    "已验收": 80,
    "已上架": 1000
  },
  {
    "任务号": generate19DigitUUID(),
    "数据量": 1000,
    "已快审数": 1000,
    "去标注": 150,
    "已抽检": 85,
    "已验收": 85,
    "已上架": 850
  },
  {
    "任务号": generate19DigitUUID(),
    "数据量": 1000,
    "已快审数": 1000,
    "去标注": 99,
    "已抽检": 90,
    "已验收": 90,
    "已上架": 763
  },
  {
    "任务号": generate19DigitUUID(),
    "数据量": 1000,
    "已快审数": 1000,
    "去标注": 303,
    "已抽检": 70,
    "已验收": 70,
    "已上架": 1000
  },
  {
    "任务号": generate19DigitUUID(),
    "数据量": 1000,
    "已快审数": 1000,
    "去标注": 59,
    "已抽检": 94,
    "已验收": 94,
    "已上架": 941
  },
  {
    "任务号": generate19DigitUUID(),
    "数据量": 1000,
    "已快审数": 1000,
    "去标注": 208,
    "已抽检": 79,
    "已验收": 79,
    "已上架": 531
  },
  {
    "任务号": generate19DigitUUID(),
    "数据量": 1000,
    "已快审数": 1000,
    "去标注": 89,
    "已抽检": 91,
    "已验收": 91,
    "已上架": 1000
  }
]);


// const list = reactive([
//   {
//     "任务号": "298b261e0e10f98987802854b410dd38",
//     "任务类别": "接入作业",
//     "作业名称": "企业荣誉",
//     "数据量": 2078885,
//     "来源数据源": "MYSQL.xnjdfvhj",
//     "目标数据源": "Greenplum.scduhfd"
//   },
//   {
//     "任务号": "d5419f3a2f044031a93db14677c79041",
//     "任务类别": "转换作业",
//     "作业名称": "施工许可",
//     "数据量": 19213,
//     "来源数据源": "MYSQL.xnjdfvhj",
//     "目标数据源": "Greenplum.scduhfd"
//   },
//   {
//     "任务号": "624f95f2ea0d4952a70c87f99df47fe3",
//     "任务类别": "打标作业",
//     "作业名称": "备案信息表",
//     "数据量": 108505,
//     "来源数据源": "MYSQL.xnjdfvhj",
//     "目标数据源": "Greenplum.scduhfd"
//   },
//   {
//     "任务号": "c4ef8927e9fba234c677c1fe9239d333",
//     "任务类别": "去重作业",
//     "作业名称": "中标违规表",
//     "数据量": 195,
//     "来源数据源": "MYSQL.xnjdfvhj",
//     "目标数据源": "Greenplum.scduhfd"
//   },
//   {
//     "任务号": "f292e20ce5b14b1eb70fc5143bf7afcc",
//     "任务类别": "接入作业",
//     "作业名称": "合同公告表",
//     "数据量": 378997,
//     "来源数据源": "MYSQL.xnjdfvhj",
//     "目标数据源": "Greenplum.scduhfd"
//   },
//   {
//     "任务号": "d2050726580e4c96be5cb2d56f460fa0",
//     "任务类别": "打标作业",
//     "作业名称": "资质信息表",
//     "数据量": 137238,
//     "来源数据源": "MYSQL.xnjdfvhj",
//     "目标数据源": "Greenplum.scduhfd"
//   },
//   {
//     "任务号": "287a01b5a4c24e4e9efd65ceb36e4a3b",
//     "任务类别": "入库作业",
//     "作业名称": "行业标准表",
//     "数据量": 5169,
//     "来源数据源": "MYSQL.xnjdfvhj",
//     "目标数据源": "Greenplum.scduhfd"
//   },
//   {
//     "任务号": "5997a99b55984504b44742e32bc31a65",
//     "任务类别": "接入作业",
//     "作业名称": "中标数据表",
//     "数据量": 7561,
//     "来源数据源": "MYSQL.xnjdfvhj",
//     "目标数据源": "Greenplum.scduhfd"
//   },
//   {
//     "任务号": "d51dab6e15f1492c98e73d0d9eb43e18",
//     "任务类别": "转换作业",
//     "作业名称": "行政处罚表",
//     "数据量": 53028,
//     "来源数据源": "MYSQL.xnjdfvhj",
//     "目标数据源": "Greenplum.scduhfd"
//   },
//   {
//     "任务号": "026e071a26f94a1f88cc96f5457a942f",
//     "任务类别": "打标作业",
//     "作业名称": "资质撤销注销表",
//     "数据量": 1264,
//     "来源数据源": "MYSQL.xnjdfvhj",
//     "目标数据源": "Greenplum.scduhfd"
//   },
//   {
//     "任务号": "f4cd10c9e54c493e8908e1dbdf0dbcda",
//     "任务类别": "去重作业",
//     "作业名称": "技术人员表",
//     "数据量": 87,
//     "来源数据源": "MYSQL.xnjdfvhj",
//     "目标数据源": "Greenplum.scduhfd"
//   },
//   {
//     "任务号": "365899065937458283261f32e6764e0b",
//     "任务类别": "接入作业",
//     "作业名称": "招标异常公告表",
//     "数据量": 800,
//     "来源数据源": "MYSQL.xnjdfvhj",
//     "目标数据源": "Greenplum.scduhfd"
//   },
//   {
//     "任务号": "c64a19d1c3ad4a53c232ec54042519ad",
//     "任务类别": "转换作业",
//     "作业名称": "建筑信用分表",
//     "数据量": 160800,
//     "来源数据源": "MYSQL.xnjdfvhj",
//     "目标数据源": "Greenplum.scduhfd"
//   },
//   {
//     "任务号": "ff508cae6aef4bb6af66476747d3aed9",
//     "任务类别": "打标作业",
//     "作业名称": "中标候选人表",
//     "数据量": 20000,
//     "来源数据源": "MYSQL.xnjdfvhj",
//     "目标数据源": "Greenplum.scduhfd"
//   },
//   {
//     "任务号": "15217df351944f8da671be71172b1b5b",
//     "任务类别": "去重作业",
//     "作业名称": "技术人员表",
//     "数据量": 85,
//     "来源数据源": "MYSQL.xnjdfvhj",
//     "目标数据源": "Greenplum.scduhfd"
//   },
//   {
//     "任务号": "82a5c10955cb4253a7d36ffced61928e",
//     "任务类别": "入库作业",
//     "作业名称": "中标数据表",
//     "数据量": 33282,
//     "来源数据源": "MYSQL.xnjdfvhj",
//     "目标数据源": "Greenplum.scduhfd"
//   },
//   {
//     "任务号": "97e52d2a239944459076fba5ac16e1de",
//     "任务类别": "接入作业",
//     "作业名称": "工商照面信息表",
//     "数据量": 3361,
//     "来源数据源": "MYSQL.xnjdfvhj",
//     "目标数据源": "Greenplum.scduhfd"
//   },
//   {
//     "任务号": "db9a98717cb54351bd7aa16d373c894a",
//     "任务类别": "转换作业",
//     "作业名称": "工商照面信息表",
//     "数据量": 2836,
//     "来源数据源": "MYSQL.xnjdfvhj",
//     "目标数据源": "Greenplum.scduhfd"
//   },
//   {
//     "任务号": "e40a7f7bdc5e41d7b598bd4688f0d223",
//     "任务类别": "打标作业",
//     "作业名称": "司法拍卖表",
//     "数据量": 4796,
//     "来源数据源": "MYSQL.xnjdfvhj",
//     "目标数据源": "Greenplum.scduhfd"
//   },
//   {
//     "任务号": "bab8662ea39945178070e092d86a73c7",
//     "任务类别": "去重作业",
//     "作业名称": "专利信息表",
//     "数据量": 3989,
//     "来源数据源": "MYSQL.xnjdfvhj",
//     "目标数据源": "Greenplum.scduhfd"
//   },
//   {
//     "任务号": "1422cad046a7487f8308bd8b2ba22f92",
//     "任务类别": "入库作业",
//     "作业名称": "企业经纬度表",
//     "数据量": 897,
//     "来源数据源": "MYSQL.xnjdfvhj",
//     "目标数据源": "Greenplum.scduhfd"
//   },
//   {
//     "任务号": "8045bdc8f0ff4e5c87df83eb580bbefd",
//     "任务类别": "接入作业",
//     "作业名称": "年报基础信息表",
//     "数据量": 1589,
//     "来源数据源": "MYSQL.xnjdfvhj",
//     "目标数据源": "Greenplum.scduhfd"
//   },
//   {
//     "任务号": "8d35e104d0754f0fb36e826664d076fa",
//     "任务类别": "入库作业",
//     "作业名称": "法律诉讼表",
//     "数据量": 3802,
//     "来源数据源": "MYSQL.xnjdfvhj",
//     "目标数据源": "Greenplum.scduhfd"
//   }
// ])

let timer: any = null;

onMounted(() => {
  // 启动定时器，每3秒执行一次
  timer = setInterval(() => {
    const wrapper = document.querySelector('.swiper-wrapper');
    if (wrapper) {
      const firstSlide = wrapper.firstElementChild;
      if (firstSlide) {
        wrapper.removeChild(firstSlide);
        wrapper.appendChild(firstSlide);
      }
    }
  }, 5000);
});

onUnmounted(() => {
  // 清除定时器
  if (timer) {
    clearInterval(timer);
    timer = null;
  }
});
</script>

<style lang="less" scoped>
.luan {
  position: absolute;
  right: 0;
  top: 0;
  width: 562px;
  height: 400px;
  padding-right: 100px;
  position: absolute;
  padding-left: 27px;
  overflow: hidden;
  margin-top: 30px;
  z-index: 2;
  background: url(@/assets/images/luan_bg.png) no-repeat;
  background-position-y: center;
  .swiper-slide-txt{
    font-size: 14px !important;
  }
}

div.swiper-slide {
  border: solid 1px #55597e;
  padding: 2px;
  width: 380px;
  position: relative;
  -webkit-transition: width 2s;
  -moz-transition: width 2s;
  transition: width 2s;
  height: 78px;
}
.swiper-slide:nth-of-type(3) {
  width: 462px;
  .swiper-slide-txt{
    font-size: 16px!important;
  }
}
.swiper-slide > div {
  color: white;
  background-image: linear-gradient(-90deg, #233379 0%, #2f44a1 100%);
  padding: 0 12px;
}
.swiper-slide:nth-of-type(3) > div {
  background-image: linear-gradient(-90deg, #515ffd 0%, #3e98f6 50%, #2dcdef 100%);
}
.f30 {
  font-size: 30px;
}
.fb {
  font-weight: bold;
}
.swiper-slide-right {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  height: 52px;
}
.swiper-slide-right > span:first-child {
  padding-top: 7px;
}
.swiper-slide-left {
  padding: 10px 0 1px 0;
}
.swiper-container {
  width: 562px;
  height: 420px;
  position: absolute;
  overflow: hidden;
  margin-top: 3px;
}
.swiper-wrapper{
  margin-right: 100px;
  padding-left: 17px;
  width: 100%;
  height: 100%;
  flex-direction: column;
}
.swiper-slide {
  margin-bottom: 9px;
}

.swiper-slide:nth-of-type(1) {
  transform: skew(-30deg, 0deg);
  margin-left: 40px;
  opacity: 0.2;
}
.swiper-slide:nth-of-type(2) {
  transform: skew(-15deg, 0deg);
  margin-left: 14px;
  opacity: 0.4;
}
.swiper-slide:nth-of-type(3) {
  transform: skew(0);
  margin-left: 7px;
}
.swiper-slide:nth-of-type(4) {
  transform: skew(15deg);
  margin-left: 15px;
  opacity: 0.4;
}
.swiper-slide:nth-of-type(5) {
  transform: skew(30deg);
  margin-left: 43px;
  opacity: 0.2;
}
.swiper-slide:nth-of-type(6) {
  transform: skew(30deg);
  margin-left: 43px;
  opacity: 0.1;
}
.swiper-slide:nth-of-type(7) {
  transform: skew(30deg);
  margin-left: 43px;
  opacity: 0;
}
.swiper-slide:nth-of-type(8) {
  transform: skew(30deg);
  margin-left: 43px;
  opacity: 0;
}
.swiper-left-img {
  position: absolute;
  left: 5px;
  top: -16px;
  height: 410px;
}
.swiper-right-img {
  position: absolute;
  right: 67px;
  top: -13px;
  z-index: -1;
  height: 410px;
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
</style>
