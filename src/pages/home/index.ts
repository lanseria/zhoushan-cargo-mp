import { defineComponent, onShow, ref } from '@vue-mini/core'
import { requestTest } from '@/composable/api'

defineComponent(() => {
  const greeting = ref('欢迎使用 Vue Mini')
  onShow(async () => {
    setTimeout(() => {
      greeting.value = 'hello'
    }, 1000)
    const res = await requestTest()
    console.log(res)
  })
  return {
    greeting,
  }
})
