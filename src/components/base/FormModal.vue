<template>
  <v-layout
    row
    justify-center
  >
    <v-dialog
      v-model="show"
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
                :rules="[rules.required]"
              />
              <v-text-field
                label="手机号*"
                solo
                :rules="[rules.required]"
              />
              <v-text-field
                label="报考专业"
                solo
              />
              <v-text-field
                label="所在行业"
                solo
              />
              <v-text-field
                label="公司规模"
                solo
              />
              <v-text-field
                label="公司职位"
                solo
              />
              <v-text-field
                label="毕业院校"
                solo
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
            @click="changeStatus"
          >
            发送
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>
<script>
  export default {
    name: 'FormModal',
    props: {
      show: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        rules: {
          required: value => !!value || '必填项哦'
        }
      };
    },
    methods: {
      changeStatus () {
        this.$emit('showModal', false);
      }
    }
  };
</script>
