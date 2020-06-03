<template>
  <div>
    <el-row>
      <el-col :span="24">
        <basic-container>
          <p style="text-align: center">
            <img src="https://img.shields.io/badge/Release-V2.5.0-green.svg" alt="Downloads"/>
            <img src="https://img.shields.io/badge/JDK-1.8+-green.svg" alt="Build Status"/>
            <img src="https://img.shields.io/badge/Spring%20Cloud-Greenwich.SR5-blue.svg" alt="Coverage Status"/>
            <img src="https://img.shields.io/badge/Spring%20Boot-2.1.13.RELEASE-blue.svg" alt="Downloads"/>
            <a target="_blank" href="https://www.aabb.com">
              <img src="https://img.shields.io/badge/Saber%20Author-Small%20Chill-ff69b4.svg" alt="Downloads"/>
            </a>
            <a target="_blank" href="https://www.aabb.com">
              <img src="https://img.shields.io/badge/Copyright%20-@BladeX-%23ff3f59.svg" alt="Downloads"/>
            </a>
          </p>
        </basic-container>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="16">
        <basic-container>
          <el-collapse v-model="activeNames" @change="handleChange">
            <el-collapse-item title="欢迎使用" name="1">
              <div>1.</div>
              <div>2.</div>
            </el-collapse-item>
          </el-collapse>
        </basic-container>
      </el-col>
      <el-col :span="8">
        <el-row>
          <basic-container>
            <div class="el-font-size">
              <span>产品名称</span>
              <el-divider direction="vertical"/>
              <span><el-tag>企业级微服务开发平台</el-tag></span>
            </div>
          </basic-container>
        </el-row>
        <el-row>
          <basic-container>
            <el-collapse v-model="logActiveNames" @change="handleChange">
              <el-collapse-item title="2出" name="15">
                <div>1.</div>
              </el-collapse-item>
            </el-collapse>
          </basic-container>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import {mapGetters} from "vuex";

  export default {
    name: "wel",
    data() {
      return {
        activeNames: ['1', '2', '3', '5'],
        logActiveNames: ['15']
      };
    },
    computed: {
      ...mapGetters(["userInfo"]),
    },
    created() {
    },
    methods: {
      handleChange(val) {
        window.console.log(val);
      }
    }
  };
</script>

<style>
  .el-font-size {
    font-size: 14px;
  }
</style>

