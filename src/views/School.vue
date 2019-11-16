<template>
  <div id="school">
    <background-img>
      <div class="normalHeader">
        <banner src="imgs/school/schoolguide_bg.jpg" />
        <div class="nhCover" />
      </div>
    </background-img>
    <v-card flat>
      <v-container fluid grid-list-md>
        <v-layout row wrap style="margin:0 4%;">
          <v-flex v-for="(item, i) in shcools" :key="i" xs4>
            <v-card class="pa-3 ma-2" style="height: 900px">
              <v-card-title primary-title>
                <div class="headline">{{ item.title }}</div>
              </v-card-title>
              <v-img :src="require('@/assets/imgs/school/'+ item.bgImage)" aspect-ratio="1" />
              <p>{{ item.desc }}</p>
              <v-layout row align-center flex>
                <v-flex>
                  <v-img :src="require('@/assets/imgs/school/' + item.icon)" aspect-ratio="1" />
                </v-flex>
                <v-layout xs6 column flex>
                  <v-flex>{{ item.schoolName }}</v-flex>
                  <v-flex>{{ item.schoolText }}</v-flex>
                </v-layout>
              </v-layout>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "School",
  components: {
    Banner: () => import("@/components/base/Banner"),
    BackgroundImg: () => import("@/components/base/BackgroundImg")
  },
  data: () => ({
    shcools: [
      {
        title: "上海同济大学工商管理学硕士（MBA）",
        bgImage: "school_bg1.jpg",
        desc:
          "同济大学经济与管理学院 MBA项目始于 1993年，是经国务院学位办首批认定的工商管理硕士专业（MBA）教学正式单位之一。该项目的目标是培养具有全球视野，社会责任感及创新精神，…",
        icon: "school_icon1.jpg",
        schoolName: "同济大学",
        schoolText: "TONGJI UNIVERSITY",
        linkUrl: ""
      },
      {
        title: "复旦泛海国际金融学院工商管理硕士（MBA）",
        bgImage: "school_bg2.jpg",
        desc:
          "复旦大学泛海国际金融学院（Fanhai International School of Finance, Fudan University，简称FISF）是复旦大学联袂中国泛海…",
        icon: "school_icon2.jpg",
        schoolName: "复旦泛海",
        schoolText: "FANHAI INTERNATIONAL SCHOOL OF FINANCE",
        linkUrl: ""
      },
      {
        title: "上海财经大学工商管理学硕士（MBA）",
        bgImage: "school_bg3.jpg",
        desc:
          "上海财经大学的商学教育始于1917年南京高等师范学校创办的商科，是我国最早开始举办MBA教育的高校之一。作为我国最具实力的一所财经院校，在举校体制的有力支持下其MBA教育已经成…",
        icon: "school_icon3.jpg",
        schoolName: "上海财经大学",
        schoolText: "COLLEGE OF BUSINESS",
        linkUrl: ""
      },
      {
        title: "上海交大高金工商管理学硕士(MBA)",
        bgImage: "school_bg4.jpg",
        desc:
          "上海交通大学上海高级金融学院（高金）是上海市人民政府为实现将上海建设成为国际金融中心的国家战略，依托上海交通大学，由著名海外华人学者牵头，按照国际一流商学院模式创立的国际化金融…",
        icon: "school_icon4.jpg",
        schoolName: "交大高金",
        schoolText: "SHANGHAI ADVANCED INSTITUTE OF FINANCE",
        linkUrl: ""
      },
      {
        title: "上海交大安泰工商管理学硕士（MBA）",
        bgImage: "school_bg5.jpg",
        desc:
          "上海交通大学是我国历史最悠久、享誉海内外的著名高等学府之一，是教育部直属并与上海市共建的全国重点大学。经过122年的不懈努力，上海交通大学已经成为一所“综合性、研究型、国际化”…",
        icon: "school_icon5.png",
        schoolName: "交大安泰",
        schoolText: "ANTAI COLLEGE",
        linkUrl: ""
      },
      {
        title: "复旦大学工商管理学硕士（MBA）",
        bgImage: "school_bg6.jpg",
        desc:
          "复旦大学是我国大学中最早设立工商管理教育体系的学校，早在1917年就创设了商科，并在1929年正式成立了商学院。 原国务院副总理李岚清就是商学院1952年的毕业生,...",
        icon: "school_icon6.jpg",
        schoolName: "复旦大学",
        schoolText: "FUDAN UNIVERSITY",
        linkUrl: ""
      }
    ]
  })
};
</script>
