<template>

  <el-container class="main-body">
    <el-header>
      <header class="header fixed-top d-flex align-items-center">
        <div
            class="container-fluid d-flex align-items-center justify-content-between"
        >
          <router-link to="/">
            <div class="logo d-flex align-items-center me-auto me-xl-0">
              <!-- Uncomment the line below if you also wish to use an image logo -->
              <!-- <img src="../assets/img/logo.png" alt=""> -->
              <h1>Append</h1>
              <span>.</span>
            </div>
          </router-link>

          <!-- Nav Menu -->
          <nav id="navmenu" class="navmenu" style="font-size: larger">
            <ul>
              <li>
                <router-link to="/home">Home</router-link>
              </li>
              <li>
                <router-link to="/download" style="color: #0a58ca">Upload</router-link>
              </li>
            </ul>

            <i class="mobile-nav-toggle d-xl-none bi bi-list"></i>
          </nav>
          <!-- End Nav Menu -->

          <router-link to="/blog" class="btn-getstarted"> Blog</router-link>
        </div>
      </header>
    </el-header>

    <el-main>
      <el-button @click="dialogVisible = true">文件上传</el-button>
      <el-dialog
          title="提示"
          :visible.sync="dialogVisible"
          width="30%"
      >
        <el-upload
            className="upload-demo"
            drag
            action="http://localhost:3333/upload"
            multiple>
          <i className="el-icon-upload"></i>
          <div className="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        </el-upload>
      </el-dialog>
      <el-input
          style="width: auto"
          placeholder="请输入查找的文件"
          v-model="input"
          clearable>
      </el-input>
      <div class="grid-content bg-purple">
        <el-table
            ref="filterTable"
            :data="filteredTableData"
            border
            :default-sort="{prop: 'date', order: 'descending'}"
            style="width: 100%">
          <el-table-column
              prop="date"
              label="日期"
              width="200">
          </el-table-column>
          <el-table-column
              prop="name"
              label="文件名"
              :filter-method="filterHandler"
              width="300">
          </el-table-column>
          <el-table-column
              prop="url"
              label="文件链接">
          </el-table-column>
          <el-table-column
              fixed="right"
              label="操作"
              width="100">
            <template slot-scope="scope">
              <el-button @click="FileDownload(scope.row)" type="text" size="small">下载</el-button>
              <el-button @click.native.prevent="FileDelete(scope.$index, scope.row,tableData)" type="text" size="small">
                删除
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>

    </el-main>
  </el-container>

</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      baseurl: 'http://localhost:3333',
      input: '',
      dialogVisible: false,
      tableData: [{
        date: '2016-05-03',
        name: 'web-1.0-SNAPSHOT.jar',
        url: 'http://114.55.110.183:8080/download/web-1.0-SNAPSHOT.jar'
      }, {
        date: '2016-05-02',
        name: '123.txt',
        url: 'http://114.55.110.183:8080/download/123.txt'
      }, {
        date: '2016-05-04',
        name: 'index.html',
        url: 'http://114.55.110.183:8080/download/index.html'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        url: 'http://114.55.110.183:8888/files'
      }, {
        date: '2016-05-08',
        name: '王小虎',
        url: 'http://114.55.110.183:8888/files'

      }, {
        date: '2016-05-06',
        name: '王小虎',
        url: 'http://114.55.110.183:8888/files'
      }, {
        date: '2016-05-07',
        name: '王小虎',
        url: 'http://114.55.110.183:8888/files'
      }]
    }
  },
  methods: {
    filterHandler(value, row) {
      return row.name.includes(this.input)
    },
    async getTableData() {
      try {
        const response = await axios.get(this.baseurl + '/getFileList'); // 替换为你的后端接口地址
        const data = response.data
        this.tableData = data.data
        console.log(this.tableData)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
    async FileDownload(row) {
      try {
        const response = await axios.get(this.baseurl + '/downloadFile', {
          params: {
            url: row.url,
            filename: row.name
          }
        });
        // 处理响应
        console.log(response);
        // 触发文件下载
        const blob = new Blob([response.data]);
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = row.name; // 使用后端返回的文件名
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
    FileDelete(index, row, tabledata) {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(async () => {
        try {
          console.log(row.id)
          const response = await axios.get(this.baseurl + '/deleteFile', {
            params: {
              id: row.id
            }
          });
          tabledata.splice(index, 1);
          console.log(response)
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        } catch (error) {
          console.error('Error fetching data:', error);
          this.$message({
            type: 'error',
            message: '删除失败'
          });
        }
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    }
  },
  computed: {
    filteredTableData() {
      const keyword = this.input.toLowerCase();
      return this.tableData.filter(data => !keyword || data.name.toLowerCase().includes(keyword));
    },
  },
  mounted() {
    this.getTableData()
  }
}
</script>

<style scoped>
.main-body {
  background-image: url('../assets/img/hero-bg.jpg');
}
</style>
