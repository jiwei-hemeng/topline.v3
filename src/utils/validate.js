// 判断是否是微信浏览器
export function isWechart() {
  let ua = navigator.userAgent.toLowerCase();
  return ua.match(/MicroMessenger/i) === "micromessenger";
}
// 判断是否是手机号
export function isPhone(value) {
  const reg = /^1\d{10}$/;
  return reg.test(value);
}
// 判断是否是身份证号(第二代)
export function isIdCard(value) {
  const reg = /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
  return reg.test(value);
}
// 判断是否是邮箱
export function isEmail(value) {
  const reg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
  return reg.test(value);
}
// 判断是否中文
export function isChina(value) {
  const reg = /^[\u4E00-\u9FA5]{2,4}$/;
  return reg.test(value);
}
// 判断是否是银行卡卡号
export function isBackCardNumber(value) {
  const reg = /^[1-9]\d{11,19}$/;
  return reg.test(value);
}
// 获取URL参数的对象
export function getURLParameters(url) {
  const str = url.match(/([^?=&]+)(=([^&]*))/g) || [];
  return str.reduce(
    (a, v) => (
      (a[decodeURIComponent(v.slice(0, v.indexOf("=")))] = decodeURIComponent(
        v.slice(v.indexOf("=") + 1)
      )),
      a
    ),
    {}
  );
}
