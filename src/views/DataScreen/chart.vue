<template>
    <div class="dashboard">
        <!-- 左侧环形图 -->
        <div class="pie-container">
            <div class="pie-chart-outer" :style="outerStyle">
              <div class="pie-chart-inner" :style="innerStyle">
                <div class="pie-center">
                    <div class="total-number">
                      <CountUp :endVal="total" :duration="2" :options="{ separator: ',' }" :startVal="pre_total" :useEasing="true" :useGrouping="true" :decimal="''" :autoplay="true">
                      </CountUp></div>
                    <div class="total-label">总作业数</div>
                </div>
              </div>
            </div>
            <div class="pie-chart">

            </div>
        </div>

        <!-- 右侧数据列表 -->
        <div class="stats-list">
            <div class="stat-item failed">
                <div class="color-indicator"></div>
                <div class="stat-label">运行失败</div>
                <div class="stat-value">
                  <CountUp :endVal="chartData.failed" :duration="2" :options="{ separator: ',' }" :startVal="pre_failed" :useEasing="true" :useGrouping="true" :decimal="''" :autoplay="true">
                  </CountUp>
                </div>
            </div>

            <div class="stat-item running">
                <div class="color-indicator"></div>
                <div class="stat-label">正在运行</div>
                <div class="stat-value">
                  <CountUp :endVal="chartData.running" :duration="2" :options="{ separator: ',' }" :startVal="pre_running" :useEasing="true" :useGrouping="true" :decimal="''" :autoplay="true">
                  </CountUp>
                </div>
            </div>

            <div class="stat-item completed">
                <div class="color-indicator"></div>
                <div class="stat-label">已完成</div>
                <div class="stat-value">
                  <CountUp :endVal="chartData.completed" :duration="2" :options="{ separator: ',' }" :startVal="pre_completed" :useEasing="true" :useGrouping="true" :decimal="''" :autoplay="true">
                  </CountUp>
                </div>
            </div>

            <div class="stat-item pending">
                <div class="color-indicator"></div>
                <div class="stat-label">待运行</div>
                <div class="stat-value">
                  <CountUp :endVal="chartData.pending" :duration="2" :options="{ separator: ',' }" :startVal="pre_pending" :useEasing="true" :useGrouping="true" :decimal="''" :autoplay="true">
                  </CountUp>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, reactive, computed, watch } from 'vue'
import CountUp from 'vue-countup-v3'

const resetData = () => {
  pre_failed.value = 0
  pre_running.value = 0
  pre_completed.value = 0
  pre_pending.value = 0
  pre_total.value = 0
  failed.value = 9163
  running.value = 55449
  completed.value = 78518
  pending.value = 36297
}

// 更新单个数据项
const updateDataItem = (item: any) => {
  const oldValue = item.value
  const increment = Math.floor(Math.random() * 91) + 10 // 10-100随机数
  const newValue = oldValue + increment
  item.value = newValue
}

// 设置凌晨重置定时器
const setMidnightReset = () => {
  const now = new Date()
  const midnight = new Date(now)
  midnight.setHours(24, 0, 0, 0)
  const timeUntilMidnight = midnight.getTime() - now.getTime()

  midnightTimeout = setTimeout(() => {
    resetData()
    setMidnightReset() // 设置下一天的定时器
  }, timeUntilMidnight)
}



const pre_failed = ref(0)
const pre_running = ref(0)
const pre_completed = ref(0)
const pre_pending = ref(0)
const pre_total = ref(0)
const failed = ref(9163)
const running = ref(55449)
const completed = ref(78518)
const pending = ref(36297)
const outerStyle = ref({})
const innerStyle = ref({})

const total = computed(() => {
  return failed.value + running.value + completed.value + pending.value
})

watch(total, (newValue) => {
  let _f = failed?.value ?? 9163
  let _r = running?.value ?? 55449
  let _c = completed?.value ?? 78518
  let _p = pending?.value ?? 36297
  // 更新环形图的样式
  const _failed = Math.floor(_f / newValue * 100)
  const _running = Math.floor((_r + _f) / newValue * 100)
  const _completed = Math.floor((_c + _r) / newValue * 100)
  // const pending = pending.value / newValue * 100

  outerStyle.value = {
    background: `conic-gradient(
      #071326 0% 0.5%,
      #332f1b 0.5% ${_failed}%,
      #071326 ${_failed}% ${_failed + 0.5}%,
      #052a46 ${_failed + 0.5}% ${_running}%,
      #071326 ${_running}% ${_running + 0.5}%,
      #063b41 ${_running + 0.5}% ${_completed}%,
      #071326 ${_completed}% ${_completed + 0.5}%,
      #091e42 ${_completed + 0.5}% 100%)`
  }
  // console.log(_failed, _running, _completed, outerStyle.value)

  innerStyle.value = {
    background: `conic-gradient(
      #071326 0% 0.5%,
      #ffac54 0.5% ${_failed}%,
      #071326 ${_failed}% ${_failed + 0.5}%,
      #1890ff ${_failed + 0.5}% ${_running}%,
      #071326 ${_running}% ${_running + 0.5}%,
      #1ee7e7 ${_running + 0.5}% ${_completed}%,
      #071326 ${_completed}% ${_completed + 0.5}%,
      #2f54eb ${_completed + 0.5}% 100%
    )`,
  }
}, { immediate: true })

const chartData = reactive({
  failed: failed,
  running: running,
  completed: completed,
  pending: pending,
})

// 定时器
let updateInterval: NodeJS.Timeout
let midnightTimeout: NodeJS.Timeout



onMounted(() => {


  // 设置定时更新
  updateInterval = setInterval(() => {
    pre_failed.value = failed.value
    pre_running.value = running.value
    pre_completed.value = completed.value
    pre_pending.value = pending.value
    pre_total.value = total.value
    updateDataItem(failed)
    updateDataItem(running)
    updateDataItem(completed)
    updateDataItem(pending)
  }, 30 * 60 * 1000) // 每30分钟更新一次

  // 设置凌晨重置
  setMidnightReset()
})

onUnmounted(() => {
  // 清理定时器
  clearInterval(updateInterval)
  clearTimeout(midnightTimeout)
})
</script>

<style scoped lang="less">
.dashboard {
  height: 100%;
            display: flex;
            align-items: center;
            padding: 30px 0;
        }

        /* 环形图样式 */
        .pie-container {
            position: relative;
            width: 180px;
            height: 180px;
        }

        .pie-chart-outer {
            width: 100%;
            height: 100%;
            border-radius: 50%;
            background: conic-gradient(
                #071326 0% 0.5%,
                #332f1b 0.5% 23%,        /* 运行失败 */
                #071326 23% 23.5%,
                #052a46 23.5% 47%,       /* 正在运行 */
                #071326 47% 47.5%,
                #063b41 47.5% 78%,       /* 已完成 */
                #071326 78% 78.5%,
                #091e42 78.5% 100%      /* 待运行 */
            );
            position: relative;
        }

        .pie-chart-inner {
          position: absolute;
            top: 10%;
            left: 10%;
            width: 80%;
            height: 80%;
            border-radius: 50%;
            background: conic-gradient(
                #071326 0% 0.5%,
                #ffac54 0.5% 23%,        /* 运行失败 */
                #071326 23% 23.5%,
                #1890ff 23.5% 47%,       /* 正在运行 */
                #071326 47% 47.5%,
                #1ee7e7 47.5% 78%,       /* 已完成 */
                #071326 78% 78.5%,
                #2f54eb 78.5% 100%      /* 待运行 */
            );
            position: relative;
        }

        .pie-center {
            position: absolute;
            width: 90%;
            height: 90%;
            background-color: #071326;
            color: #a1b7c3;
            border-radius: 50%;
            top: 5%;
            left: 5%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

        .total-number {
            font-size: 24px;
            font-weight: bold;
            margin-bottom: 5px;
        }

        .total-label {
            font-size: 16px;
            color: rgba(255, 255, 255, 0.7);
        }

        /* 右侧数据列表 */
        .stats-list {
            flex: 1;
            padding-left: 40px;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }

        .stat-item {
            display: flex;
            align-items: center;
        }

        .color-indicator {
            width: 10px;
            height: 10px;
            margin-right: 15px;
        }

        .stat-label {
            font-size: 18px;
            width: 100px;
            color: #fff;
        }

        .stat-value {
          font-family: 'Digital Display';
            font-size: 38px;
            font-weight: bold;
            margin-left: auto;
        }

        /* 颜色定义 */
        .failed {
          .color-indicator {
            background-color: #ffac54;

          }
          .stat-value {
            color: #ffac54;
          }

        }   /* 运行失败 - 橙色 */
        .running {
          .color-indicator {
            background-color: #1890ff;

          }
          .stat-value {
            color: #1890ff;
          }
         }  /* 正在运行 - 蓝色 */
        .completed {
          .color-indicator {
            background-color: #1ee7e7;

          }
          .stat-value {
            color: #1ee7e7;
          }
         } /* 已完成 - 青绿色 */
        .pending {
          .color-indicator {
            background-color: #2f54eb;

          }
          .stat-value {
            color: #2f54eb;
          }
         }  /* 待运行 - 紫色 */
</style>
