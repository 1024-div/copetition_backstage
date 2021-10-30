<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column type="expand">
      <template #default="props">
        <p>State: {{ props.row.state }}</p>
        <p>City: {{ props.row.city }}</p>
        <p>Address: {{ props.row.address }}</p>
        <p>Zip: {{ props.row.zip }}</p>
      </template>
    </el-table-column>
    <el-table-column label="创建时间" prop="date" />
    <el-table-column label="赛事名称" prop="name" />
    <el-table-column label="赛事类型" prop="name" />
    <el-table-column label="操作" prop="name">
      <template #default="scope">
        <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
        >修改</el-button
        >
        <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
        >撤销</el-button
        >
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: "CpeAdmin",
  data(){
    return {
      tableData: [
        {
          date: '2016-05-03',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036',
        },
        {
          date: '2016-05-02',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036',
        },
        {
          date: '2016-05-04',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036',
        },
        {
          date: '2016-05-01',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036',
        },
        {
          date: '2016-05-08',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036',
        },
        {
          date: '2016-05-06',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036',
        },
        {
          date: '2016-05-07',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036',
        },
      ]
    }
  }
}
</script>

<style scoped>

</style>