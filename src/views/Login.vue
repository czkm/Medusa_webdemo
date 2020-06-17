<template>
  <div class="login">
    <h1>This is an login page</h1>
    <!-- 测试组建引入 -->

    <el-row style="margin:20px">
      <el-button @click="handler_registered()">注册接口</el-button>

      <el-button @click="handler_login()">登陆接口</el-button>
      <el-button type="success" @click="handler_scanning()">扫描接口</el-button>
      <el-button type="warning" @click="handler_list_query()">列表接口</el-button>
      <el-button type="info" @click="handler_imfomation_query()">主动扫描目标漏洞列表接口</el-button>

      <el-button type="danger" @click="handler_medusa_query()">详细内容查询接口</el-button>

      <el-button type="primary" @click="handler_generate_word()">扫描报告生成</el-button>
      <el-button type="primary" @click="handler_download_word()">扫描报告下载</el-button>
      <Mybtn title='test1' :btn_width='110' :btn_hight='40' :ClickPromise='handler_login'/>
      <Mybtn title='test2' :btn_width='120' :btn_hight='20' :ClickPromise='handler_registered'/>

      <Mybtn />
    </el-row>
    <h1>接口返回值</h1>
    {{info}}
  </div>
</template>

<script>
import Mybtn from "../components/Mybtn.vue";
import {
  login,
  registered,
  scanning,
  list_query,
  imfomation_query,
  medusa_query,
  generate_word,
  download_word
} from "../api/rules";
export default {
  data() {
    return {
      info: "点击按钮发送请求",
      token: null,
      file_name: null
    };
  },
  components: {
    Mybtn
  },
  methods: {
    handler_login() {
      let parms = {
        username: "ascotbe",
        passwd: "1"
      };
      login(parms).then(res => {
        this.info = res;
        this.token = res.message;
      });
    },
    handler_registered() {
      let parms = {
        show_name: "7777777",
        username: "ascotbe",
        passwd: "1",
        email: "1@qq.com"
      };
      registered(parms).then(res => {
        this.info = res;
      });
    },
    handler_list_query() {
      if (this.token == null) {
        return this.$message.warning("请先登陆");
      }
      let parms = {
        token: this.token
      };
      list_query(parms).then(res => {
        this.info = res;
      });
    },
    handler_scanning() {
      if (this.token == null) {
        return this.$message.warning("请先登陆");
      }
      let parms = {
        url: "www.ascotbe.com",
        token: this.token,
        threads: 200,
        module: "all",
        header: "None",
        proxy: "127.0.0.1:8080"
      };
      scanning(parms).then(res => {
        this.info = res;
      });
    },
    handler_imfomation_query() {
      if (this.token == null) {
        return this.$message.warning("请先登陆");
      }
      let parms = {
        token: this.token,
        sid: "1"
      };
      imfomation_query(parms).then(res => {
        this.info = res;
      });
    },
    handler_medusa_query() {
      if (this.token == null) {
        return this.$message.warning("请先登陆");
      }
      let parms = {
        token: this.token,
        ssid: "1"
      };
      medusa_query(parms).then(res => {
        this.info = res;
      });
    },
    handler_generate_word() {
      if (this.token == null) {
        return this.$message.warning("请先登陆");
      }
      let parms = {
        token: this.token,
        sid: "1"
      };
      generate_word(parms).then(res => {
        this.file_name = res.message;
        this.info = res;
      });
    },
    handler_download_word() {
      if (this.token == null) {
        return this.$message.warning("请先登陆");
      }
      if (this.file_name == null) {
        return this.$message.warning("请先生成报告");
      }
      let parms = {
        token: this.token,
        file_name: this.file_name
      };
      download_word(parms).then(res => {
        let url = window.URL.createObjectURL(new Blob([res.data]));
        let link = document.createElement("a");
        link.style.display = "none";
        link.href = url;
        link.setAttribute("download", this.file_name); // 自定义下载文件名（如exemple.txt）
        document.body.appendChild(link);
        link.click();
      });
    }
  }
};
</script>
<style lang="scss">
</style>