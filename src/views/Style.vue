<template>
  <div id="style">
    <background-img>
      <div class="normalHeader">
        <banner src="imgs/teacher/style_bg.jpg" />
        <div class="nhCover" />
      </div>
    </background-img>
    <v-card flat>
      <v-container
        fluid
        grid-list-md
      >
        <v-layout
          flex
          xs12
          align-center
          justify-center
          column
          style="text-align:center"
        >
          <p class="title light-blue--text lighten-1">
            十余年管理类联考资深授课教师
          </p>
          <p
            class="subtitle-1 light-blue--text lighten-1"
          >
            More than ten years of senior teachers in management exams
          </p>
        </v-layout>
        <v-layout
          row
          wrap
          style="margin:0 8%;"
          class="hidden-sm-and-down"
        >
          <v-flex
            v-for="(item, i) in teachers"
            :key="i"
            xs3
          >
            <v-card
              class="pa-3 ma-2"
              style="height: 680px"
            >
              <v-img
                :src="require('@/assets/imgs/teacher/'+ item.avator)"
                aspect-ratio="1"
              />
              <v-card-title primary-title>
                <v-layout
                  column
                  align-center
                  justify-center
                  class="light-blue--text darken-4"
                >
                  <div class="headline">
                    {{ item.name }}
                  </div>
                  <div>{{ item.title }}</div>
                  <div>{{ item.text }}</div>
                </v-layout>
              </v-card-title>
              <div>{{ item.desc }}</div>
            </v-card>
          </v-flex>
        </v-layout>
        <v-layout
          row
          wrap
          style="margin:0;"
          class="hidden-lg-and-up"
        >
          <v-flex
            v-for="(item, i) in teachers"
            :key="i"
          >
            <v-card
              class="pa-3 ma-2"
              style="height: 680px"
            >
              <v-img
                :src="require('@/assets/imgs/teacher/'+ item.avator)"
                aspect-ratio="1"
              />
              <v-card-title primary-title>
                <v-layout
                  column
                  align-center
                  justify-center
                  class="light-blue--text darken-4"
                >
                  <div class="headline">
                    {{ item.name }}
                  </div>
                  <div>{{ item.title }}</div>
                  <div>{{ item.text }}</div>
                </v-layout>
              </v-card-title>
              <div>{{ item.desc }}</div>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </div>
</template>

<script>
  import {
    mapGetters
  } from 'vuex';
  export default {
    name: 'Style',
    components: {
      Banner: () => import('@/components/base/Banner'),
      BackgroundImg: () => import('@/components/base/BackgroundImg')
    },
    computed: {
      ...mapGetters(['teachers'])
    }
  };
</script>
