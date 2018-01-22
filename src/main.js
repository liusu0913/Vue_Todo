import Vue from 'vue'
import App from './App.vue'
import moment from 'moment'

Vue.filter('time',(value, formatString)=>{
	// value是过滤的额值
	formatString = formatString || 'YYYY-MM-DD HH:mm:ss';
	// formatString是过滤出来的格式
  return moment(value).format(formatString); // value可以是普通日期 20170723
  // return moment.unix(value).format(formatString); // 这是时间戳转时间
});
new Vue({
  el: '#app',
  render: h => h(App)
})
