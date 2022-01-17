<template>
  <div class="install">
      <h2>安装</h2>
      <div class="content">
          <p>打开终端运行下列命令：</p>
          <div class="code">&nbsp;&nbsp;npm&nbsp;&nbsp;install&nbsp;&nbsp;bohua-ui</div>
      </div>
  </div>
</template>

<script lang="ts">
export default {
    name: 'Install'
}
</script>

<style lang="scss" scoped>
.install {
    padding: 10px 0;
    h2 {
        margin-top: 30px;
        padding-bottom: 10px;
        border-bottom: 1px solid #eaecef;
    }
    .content {
        margin-top: 30px;
        p {
            margin-bottom: 20px;
        }
        .code {
            box-shadow: 0 8px 24px #ebedf0;
            border-radius: 12px;
            position: relative;
            margin-bottom: 25px;
            padding: 15px;
            color: #009afe;
            &::after {
                content: '';
                width: 4px;
                height: 100%;
                position: absolute;
                left: 0;
                top: 0;
                background: #33ccff;
                border-top-left-radius: 12px;
                border-bottom-left-radius: 12px;
            }
        }
    }
}
</style>