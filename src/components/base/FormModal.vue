<template>
  <v-layout
    row
    justify-center
  >
    <v-dialog
      v-model="visible"
      width="360px"
    >
      <v-card>
        <v-card-title class="headline">
          请先填写联系信息
        </v-card-title>
        <v-form>
          <v-container>
            <v-layout
              column
              style="padding: 0px 5%;"
            >
              <v-text-field
                label="姓名*"
                solo
                v-model="name"
                :rules="[rules.required]"
              />
              <v-text-field
                label="手机号*"
                solo
                v-model="phone"
                :rules="[rules.required, rules.isPhoneNum]"
              />
              <v-text-field
                label="报考专业"
                solo
                v-model="profession"
              />
              <v-text-field
                label="所在行业"
                solo
                v-model="industry"
              />
              <v-text-field
                label="公司规模"
                solo
                v-model="company_size"
              />
              <v-text-field
                label="公司职位"
                solo
                v-model="company_position"
              />
              <v-text-field
                label="毕业院校"
                solo
                v-model="graduated_school"
              />
            </v-layout>
          </v-container>
        </v-form>
        <v-card-actions>
          <v-spacer />
          <v-btn
            color="white"
            style="background: gray;"
            flat="flat"
            @click="changeStatus"
          >
            取消
          </v-btn>
          <v-btn
            color="white"
            style="background: #2296f3;"
            flat="flat"
            @click="sendInfos"
          >
            发送
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>
<script>
  import { postClients } from '@/graphql/api.js';
  import isEmpty from  'lodash/isEmpty';
  export default {
    name: 'FormModal',
    props: {
      show: {
        type: Boolean,
        default: false
      }
    },
    watch: {
      show(newVal, oldVal) {
        if (newVal !== oldVal) this.visible = !this.visible;
      }
    },
    data () {
      return {
        visible: false,
        rules: {
          required: value => !!value || '必填项哦',
          isPhoneNum: value => !!/^1(3|4|5|6|7|8|9)\d{9}$/.test(value) || '请输入正确的手机号哦'
        },
        name: null,
        phone: null,
        profession: null,
        industry: null,
        company_size: null,
        company_position: null,
        graduated_school: null,
        formData: {}
      };
    },
    methods: {
      changeStatus () {
        this.$emit('showModal', false);
      },
      sendInfos() {
        this.formData = {
          name: this.name,
          phone: this.phone,
          profession: this.profession,
          industry: this.industry,
          company_size: this.company_size,
          company_position: this.company_position,
          graduated_school: this.graduated_school
        };
        if (isEmpty(this.formData)) {
          this.changeStatus();
          return;
        }
        postClients(this.formData)
        .then(res => {
          this.resetFormData();
          this.changeStatus();
        })
        .catch(e => {
          throw new Error(e)
        })
      },
      resetFormData() {
        this.name = null;
        this.phone = null;
        this.profession = null;
        this.industry = null;
        this.company_size = null;
        this.company_position = null;
        this.graduated_school =null
        this.formData = {};
      }
    }
  };
</script>
