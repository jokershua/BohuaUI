<template>
  <table :class="{'table-border': border}" class="bo-table">
    <thead class="bo-table-thead">
        <tr>
            <th v-for="(item, index) in columns" :key="index">
                <div class="bo-table-cell">{{ item.title }}</div>
            </th>
        </tr>
    </thead>
    <tbody :class="{'highlighted': highlighted}">
        <tr v-for="(col, index) in data" :key="index">
            <td v-for="(colTd, tdIndex) in columns" :key="tdIndex">
                <div class="bo-table-cell">{{ col[colTd.key] }}</div>
            </td>
        </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
export default {
    name: 'bo-table',
    props: {
      data: {
        type: Array,
        default() {
          return []
        }
      },
      columns: {
        type: Array,
        default() {
          return []
        }
      },
    //   表格边框
      border: {
          type: Boolean,
          default: false
      },
    //   隔行变色
      highlighted: {
          type: Boolean,
          default: false
      }
    }
}
</script>

<style lang="scss">
.bo-table {
    width: 100%;
    position: relative;
    overflow: hidden;
    box-sizing: border-box;
    border-collapse: collapse;
    flex: 1;
    max-width: 100%;
    background-color: #fff;
    font-size: 14px;
    color: #606266; 
    .bo-table-cell {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: normal;
      word-break: break-all;
      line-height: 23px;
      padding-left: 10px;
      padding-right: 10px;
      text-align: left;
    }
    thead {
      color: #909399;
      font-weight: 700;
    }
    td {
      border-bottom: 1px solid #ebeef5;
    }
    td, th {
      padding: 12px 0;
      min-width: 0;
      box-sizing: border-box;
      text-overflow: ellipsis;
      vertical-align: middle;
      position: relative;
      text-align: left;
    }
}
.table-border {
  border-top: 1px solid #ebeef5;
  border-left: 1px solid #ebeef5; 
  td, th {
    border-right: 1px solid #ebeef5;
    border-bottom: 1px solid #ebeef5;
  }
}

.highlighted {
    tr:nth-child(2n) {
        background: #f6f7fa;
    }
}
</style>
