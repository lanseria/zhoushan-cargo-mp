import { defineComponent, onShow, ref } from '@vue-mini/core';

defineComponent(() => {
  const greeting = ref('欢迎使用 Vue Mini');
  onShow(() => {
    console.log('hello');
    setTimeout(() => {
      greeting.value = 'hello';
    }, 1000)
  })
  return {
    greeting,
  };
});
