import axios from "axios"
//声明常量存储超时时间
const TIME_OUT_MS = 60 * 1000;



export default {

  /*
    封装axios的get请求
    @param  url 请求的地址
    @param  response 请求成功的回调
    @param  exception  请求异常的回调
   */
  get(url, response, exception) {
    axios({
      method: "get",
      url: "https://elm.cangdu.org" + url,
      timeout: TIME_OUT_MS,
      header: {
        "Content-Type": "application/json;charset=UTF-8"
      }
    }).then((result) => {
      response(result.data);
    }).catch((error) => {
      if (exception) {
        exception(error);
      } else {
        console.log(error);
      }
    });
  },
  /*
    封装axios的post请求
    @param  url 请求的地址
    @param  data 请求的参数数据
    @param  response 请求成功的回调
    @param  exception  请求异常的回调
   */
  post(url, data, response, exception) {
    axios({
      method: "post",
      url: "https://elm.cangdu.org" + url,
      data: data,
      timeout: TIME_OUT_MS,
      header: {
        "Content-Type": "application/json;charset=UTF-8"
      }
    }).then((result) => {
      response(result.data);
    }).catch((error) => {
      if (exception) {
        exception(error);
      } else {
        console.log(error);
      }
    })
  }
}
