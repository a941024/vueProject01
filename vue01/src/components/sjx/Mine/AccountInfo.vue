<template>
  <div id="account">
    <van-nav-bar title="账户信息" left-arrow @click-left="onClickLeft"/>
    <van-cell-group :class="{one:true}">
      <van-cell title="头像" value="内容" is-link>
        <input type="file">
      </van-cell>
      <van-cell title="用户名" value="" is-link/>
      <van-cell title="收货地址" value="" is-link/>
    </van-cell-group>
    <van-cell-group title="账号绑定">
      <van-cell is-link @click="showPopup">
        <template slot="title">
          <van-icon class-prefix="iconfont" class="iconfont icon-shouji shouji"/>
          <span class="custom-title">手机</span>
        </template>
      </van-cell>
      <van-popup v-model="show">
        <i class="iconfont icon-jinggao warn"/>
        <p :class="{tips:true}">请在手机App中设置</p>
        <van-button type="primary" size="normal" :class="{btn:true}" @click="showPopup">确定</van-button>
      </van-popup>
    </van-cell-group>
    <van-cell-group title="安全设置">
      <van-cell title="登录密码" value="修改" is-link/>
    </van-cell-group>
    <van-button type="danger" size="normal">退出登录</van-button>
  </div>
</template>

<script>
  export default {
    name: "AccountInfo",
    data() {
      return {
        show: false
      }
    },
    methods: {
      onClickLeft() {
        console.log('返回')
      },
      showPopup() {
        this.show = !this.show;
      }
    }
  }
</script>

<style scoped>
  #account {
    height: 100%;
    width: 100%;
  }

  .van-nav-bar {
    background-color: #3190e8;
  }

  .van-nav-bar__arrow {
    color: #fff;
    font-size: 1.2rem;
  }

  .van-nav-bar__title {
    color: whitesmoke;
    font-weight: bold;
    font-size: 0.9rem;
  }

  .van-button--danger {
    background: #d8584a;
    width: 96%;
    margin-top: 1.5rem;
    margin-left: 0.3rem;
    border-radius: 0.4rem;
  }

  .van-button {
    line-height: 0;
    height: 1.7rem;
  }

  .one {
    margin-top: 0.4rem;
  }

  .van-popup--center {
    border-radius: .25rem;
    width: 14.05rem;
  }

  .btn {
    width: 100%;
    font-size: 1rem;
    font-weight: bold;
    background-color: #4cd964;
  }

  .warn {
    color: #f8cb86;
    font-size: 5rem;
    display: inline-block;
    margin-left: 4.5rem;
    margin-top: 1rem;
  }

  .tips {
    font-size: 0.85rem;
    text-align: center;
    margin: 0.8rem 0;
  }

  @font-face {
    font-family: "iconfont";
    src: url('//at.alicdn.com/t/font_1452142_rqhxba00wc.eot?t=1570861474183'); /* IE9 */
    src: url('//at.alicdn.com/t/font_1452142_rqhxba00wc.eot?t=1570861474183#iefix') format('embedded-opentype'), /* IE6-IE8 */ url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAUkAAsAAAAACgAAAATYAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDMgqHDIYBATYCJAMUCwwABCAFhG0HXBuhCCMRtntQApH9RQJPxfOaDKniFREgH15DE6rNUP2aRzzjDxoRCZHGN8FD71/vuXhv8WkG0kbGTuqkSkd2Qpf9YQlvAAxty+NNGnideDRNn5aQNK0LaQ4Vqr9qm2m0ZCd5m5uhfkxho97BVthffnpGWsoKl4bxDWgbnP/gmOmibTbMs9lcsoIqAEcDHlD1R2skP9g/vb2ov0l4/qXtwHAwboYA7ESTiWhs7hyIFQ3LBEpmTpsyDuuYHr2ELLCqzDlHNWIPBla5VT4Cdnd/XnwmX1hBYih4a+/kponUuoy+eLXGrTMyEAj2ZwVKp0ABmYAGMW+ufSaqH89EYW9ENbXQ/J0ViXQZLptrbF+8253EV6S0yz88UGgkAoQJyz0JW5vQ4DKMBQUuG3+eYixYkNAXL3wuciOO2AFvEMkglsPKxK5USpWJzvLNn9n0pU9LJjPCkaNbeAZrRLlZcGx6/iNn+0FrlGgee7mF5Q8oV9HKD9I6HptvD91rbp51V7mSzQSCw3mDQwhlhBRCNIx7U3S43MazrmsU6DE4ryAV8izrViSvPpH/mk1df/DdKhOUaNr2hSBgHH0MsMZOXcOhV0wRcpJpdoGpN5ztDKi40T/Su6mM2R9kDtJZqwcGlmldoPWyBlTU6G9vZ82YLv29x2UdB4w0n/UX6814ldt9Y2D19O7JuVVsf8vQVDFWraFNWImlzI0iXYYHmyPCtZYDJFtOsUykOFKaIQL6YVEHX8f15pelj6zoLe8Y6/m++rDt/KCq6ntD/+LtpHL5qJ+7jubP715V9rVhotFYmjLm8KWz3o0Z9ogL5w6XNlye6XVpeEJv3MeNuWd32g6+2AvcP6OePFFnEie4Xjf8utI+efOm3FebNmfk6wnx02ODQiceOBU9+OHQosBkaaYlZTvTLmY5Y/dnXSzbn52UZsrkwKKhDwfHnGx3RHoFqR1j447PSptTK/fdvEl2QfudOf/5xND/c97Hdiu4OcKn0Oeur0kSofW9m2UP8h3v0+jTQ0LKYq5lq2U8dnRbtowdP3aL5dpmQeQjVSJ0HIPiBsWjklhVe1n//aNdcqWQXi4of/7oVw4qRqHFLVHtMU7lUKbDEdUS0+4EB5kOR0t0e7QTHGgdDre2O6OHGf0n2N/ae00eGPttq8Xc8YfbDNMo3XLL2jtvy6Agadt+lsCXkl/lfgC1TP4GdypStXeTU9dU3e9xGVe+/9djfCq/WdN/0bGXd/fVyedOsz7/R6WgIfj1Cdbs000RGwxdbzR+PWDQn9+WXDbSdsANtz/v9uMMgqFVYC0LABILUaCwkojU2Eww8KAQTKzUgJ0MWk57EMA8FELbgHQ2JhD4cgEk3lwFhS+PkRr7FgyC+QomvkKBncEi4IIep3ARZndlzARLyP9gCuqVmmTXK32hHtuMR0Vd6g/ZmhCEXjCZemKPvI8ddtKRiALF1MEj3Q7blmBgqrEQrxIZUt9X857JK6hzdlwZM8ESyP+AKahXMVp2U9//Qj22GS9p2mD/IVszORDiEayBfMr7tZqey2w76QgRla1STB3wgBVbiRMwzF9UYyEe1RbRIcWnYWpduXd8ZfcaC/76LflChpBCCS0MYXKeUGW9/pPNbElTEhyFxsVMat2mqFjZisbarDW31zojxwE=') format('woff2'),
    url('//at.alicdn.com/t/font_1452142_rqhxba00wc.woff?t=1570861474183') format('woff'),
    url('//at.alicdn.com/t/font_1452142_rqhxba00wc.ttf?t=1570861474183') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */ url('//at.alicdn.com/t/font_1452142_rqhxba00wc.svg?t=1570861474183#iconfont') format('svg'); /* iOS 4.1- */
  }

  .iconfont {
    font-family: "iconfont" !important;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .shouji {
    font-size: 1rem;
    color: white;
    background: rgb(16, 174, 255);
    border-radius: 0.1rem;
    font-weight: 600;
    padding: 0.1rem;
  }

  .icon-shouji:before {
    content: "\e605";
  }

  .icon-jinggao:before {
    content: "\e609";
  }
</style>
