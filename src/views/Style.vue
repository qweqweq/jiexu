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
  export default {
    name: 'Style',
    components: {
      Banner: () => import('@/components/base/Banner'),
      BackgroundImg: () => import('@/components/base/BackgroundImg')
    },
    data: () => ({
      teachers: [
        {
          name: '王力',
          title: '英语辅导教师',
          text: 'English Instructor',
          desc:
            '十六年英文培训经验，帮助逾五万名学子进入研究生学府，培训出3年英语头魁（94分），帮助很多四级没过的学员如愿考入理想院校。十余年应试与非应试英文教学经验，考研大纲解析人，考研原题解析人。独创多种阅读理解“快速解题方法。被复旦大学商学院邀请为EMBA学生辅导考前冲刺课程，获得大量积极评价，连续两年受复旦大学邀请，为管理学院IMBA新生讲授英语课程。曾为新东方集团2005年教师擂台大赛第一名，2004、2005、2006年连续三年被评为”新东方年度教师“称号。',
          avator: 'teacher_1.jpg'
        },
        {
          name: '杨方荣',
          title: '英语辅导教师',
          text: 'English Instructor',
          desc:
            '长期从事管理类联考、托福、雅思、四六级等英语培训，并参与四六级及研究生入学考试阅卷工作，对管理类联考英语讲解生动，授课应用性高、信息量大，讲解多种英语考试技巧，使学员英语水平在短期内发生质变，帮助考生顺利通过英语考试。',
          avator: 'teacher_2.jpg'
        },
        {
          name: '叶笑',
          title: '数学辅导教师',
          text: 'Math Instructor',
          desc:
            '十多年管理类联考数学教学经验。主讲MBA数学联考题型，数学试题解题方法新颖，提倡一题多解、巧解选择题，并在如何控制解题时间等多种技巧方面有深刻理解，授课通俗易懂，风趣幽默，深受学员好评。',
          avator: 'teacher_3.jpg'
        },
        {
          name: '殷玖利',
          title: '数学辅导教师',
          text: 'Math Instructor',
          desc:
            '殷玖利，数学博士，江苏省高校青年骨干教师，管理类联考数学培训名师，上课富有激情，善于总结归纳解题方法和技巧，对数学考试快速解题有独到的见解，被历届考生称为实战大师。',
          avator: 'teacher_4.jpg'
        },
        {
          name: '胡一百',
          title: '语文辅导教师',
          text: 'Writing Instructor',
          desc:
            '复旦大学博士后. 多年管理类联考语文写作教学经验，谙习考试技巧，强调批判思维的训练以及应试技巧的培养，能够让考生在较短时间内掌握写作技巧及套路，提倡举一反三、以不变应万变的方式快速完成写作部分。授课内容化复杂为简单，通俗易懂，诙谐有趣。风格诙谐有趣，谙习考试技巧。',
          avator: 'teacher_5.jpg'
        },
        {
          name: '王诚',
          title: '逻辑辅导教师',
          text: 'Logic Instructor',
          desc:
            '复旦大学MBA，专业硕士考前辅导名师，多年来致力于专业硕士逻辑领域的研究和教学工作，精于把握命题方向和考生应试心理，对于考生的思维养成和应试方法有一套完整的理论；逻辑技巧独辟蹊径，可以帮助考生有效节省备考时间、提高成绩。',
          avator: 'teacher_6.jpg'
        }
      ]
    })
  };
</script>
