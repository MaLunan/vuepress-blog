//分页
<template>
  <div class="formcreate">
    <el-form ref="formdata" :model="formdata" label-width="80px">
      <el-form-item label="类型">
         <el-select v-model="formdata.type" clearable placeholder="请选择">
            <el-option
            v-for="item in typelist"
            :key="item.value"
            :label="item.label"
            :value="item.value">
            </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="展示样式">
         <el-select v-model="formdata.arrangement" clearable placeholder="请选择">
            <el-option
            v-for="item in arrangementList"
            :key="item.value"
            :label="item.label"
            :value="item.value">
            </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="是否禁用">
         <el-checkbox v-model="formdata.disabled">
        </el-checkbox>
      </el-form-item>
      <el-form-item label="校验规则">
         <el-input
            type="textarea"
            :rows="2"
            placeholder="JSON格式"
            v-model="formdata.rule">
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="create">立即创建</el-button>
        <el-button @click="remove">清空</el-button>
    </el-form-item>
    </el-form>
    <!-- <create-form id="formcreate" v-model="fApi" :rule="rule" :option="option"></create-form>  -->
  </div>
</template>

<script>
export default {
  data() {
    return {
    //动态表单配置
    fApi: {},
    rule: [],
    option: {//动态表单配置
    ref: "formName",
    global: {
        "*": {
            props: {
            disabled: false
            }
        },
        },
        on:{

        },
        submitBtn:false,
        resetBtn:false,
    },
    formdata:{
        type:'',
        arrangement:'',
        disabled:false,
        rule:''
    },
    arrangementList:[
        {
            label:'一行一列',
            value:'24'
        },{
            label:'一行两列',
            value:'12'
        },{
            label:'一行三列',
            value:'8'
        },{
            label:'一行四列',
            value:'6'
        },
    ],
      typelist:[
        {
            label:'Radio 单选框',
            value:'Radio'
        },
        {
            label:'Checkbox 多选框',
            value:'Checkbox'
        },
        {
            label:'Input 输入框 ',
            value:'Input'
        },
        {
            label:'InputNumber 计数器',
            value:'InputNumber'
        },
        {
            label:'Select 选择器',
            value:'Select'
        },
        {
            label:'Cascader 级联选择器',
            value:'Cascader'
        },
        {
            label:'Switch 开关',
            value:'Switch'
        },
        {
            label:'Slider 滑块',
            value:'Slider'
        },
        {
            label:'TimePicker 时间选择器',
            value:'TimePicker'
        },
        {
            label:'DatePicker 日期选择器',
            value:'DatePicker'
        },
        {
            label:'DateTimePicker 日期时间选择器',
            value:'DateTimePicker'
        },
        {
            label:'Upload 上传',
            value:'Upload'
        },
        {
            label:'Rate 评分',
            value:'Rate'
        },
        {
            label:'ColorPicker 颜色选择器',
            value:'ColorPicker'
        },
        {
            label:'Transfer 穿梭框',
            value:'Transfer'
        },
      ]
    };
  },
  mounted() {},
  methods: {
      //创建表单
      create(){

      },
      //清空表单
      remove(){
          this.formdata={
            type:'',
            arrangement:'',
            disabled:false,
            rule:''
        }
      }
  }
};
</script>

<style lang='scss' scoped>
.formcreate{
    margin-top:50px;
    margin-bottom: 20px;
}
</style>