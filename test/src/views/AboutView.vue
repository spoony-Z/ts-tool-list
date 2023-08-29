<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="dianji">点击</button>
  </div>
</template>

<script lang="ts">
/** 测试方法数据 */
import { 
  dataList, 
  testArr1, 
  testArr2,
  testArrObj1,
  testArrObj2,
 } from "./AboutViewApi";

/** 测试方法 */
import { 
  getPromises, 
  getNode, 
  getParentIdAll, 
  arrAndSet,
  arrIntersection,
  arrDifference,
} from "./test-api/method-collection";

import { isString } from "./test-api/regular";
import { downLoadFile, fileUrlType } from "./test-api/file";
import { defineComponent } from 'vue'
// import { arrAndSet } from "./test-api/typeJudgment";

export default defineComponent({
  data(){
    return {
      files: `https://oss.168wangxiao.com/thesis/c3b75e2257d948f8840b579528ca1762.pdf`,
      file1: "https://168wangxiao.oss-cn-beijing.aliyuncs.com/thesis/template/03975737241bc5f56c91e431e219c418.xlsx"
    }
  },
  created() {

    // const base64 = `https://cexatu.168wangxiao.com/sch/static/img/500.5492b5.png`

    // getPromises(base64).then(res => {
    //   console.log(res);
    // })
    // console.log("isString方法", isString());
    // console.log("arrAndSet方法222", arrAndSet(testArrObj2, testArrObj1));
    // console.log("getNode方法", getNode(dataList, 'children', 'label', "一级1"))
    // console.log("getParentIdAll方法", getParentIdAll(dataList, 'id', 10 ,'children'))
    console.log("arrAndSet", arrAndSet(testArr1, testArr2));
    console.log("arrIntersection", arrIntersection(testArr1, testArr2));
    console.log("arrDifference", arrDifference(testArr1,testArr2))
    console.log('fileUrlType', fileUrlType(this.files));
    console.log('fileUrlType', fileUrlType(this.file1));
    
  },
  methods: {
    dianji(): void {
      downLoadFile(this.files);
    }
  }
});
</script>
