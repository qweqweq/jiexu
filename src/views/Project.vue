<template>
  <div id="project" flex column>
    <background-img>
      <div class="normalHeader">
        <banner src="imgs/project/project_bg1.jpg" />
        <div class="nhCover" />
      </div>
    </background-img>
    <v-container grid-list-xl>
      <v-tabs grow class="pa-3" style="flex:1">
        <v-tab
          v-for="(item, i) in tabs"
          :key="i"
          :href="`#tab-${i}`"
        >
          {{ item.title }}
        </v-tab>

        <v-tab-item
          v-for="(item, i) in tabs"
          :key="i"
          :value="`tab-${i}`"
        >
          <v-card
            flat
            tile
          >
            <v-img :src="require('@/assets/imgs/project/project_bg1.jpg')"></v-img>
            <v-card-text>{{ tabs[i].header }}</v-card-text>
            <v-card-text>{{ tabs[i].text }}</v-card-text>
            <v-card-text>{{ tabs[i].secondTitle }}</v-card-text>
            <v-flex row align-center justify-space-between style="display: flex;flex-wrap: wrap;">
              <v-card-text style="width: 40%; word-break: break-all" v-for="(ele, j) in tabs[i].schools" :key="j">{{ele.name}}<br/>{{ele.url}}</v-card-text>
            </v-flex>
          </v-card>
        </v-tab-item>
      </v-tabs>
    </v-container>
  </div>
</template>

<script>
  export default {
    name: 'Project',
    components:{
      Banner: () => import("@/components/base/Banner"),
      BackgroundImg: () => import("@/components/base/BackgroundImg")
    },
    data: () => ({
      tabs: [{ 
        title:'MBA',
        header: '工商管理硕士简介',
        text: '工商管理硕士（MBA）是工商管理类硕士研究生学位，MBA是培养能够胜任工商企业和经济管理部门高层管理工作需要的务实型、复合型和应用型高层次管理人才，兼具理论与实践相结合，而其他硕士研究生只是培养科研型和教学型人才，偏向理论，不参与实践；MBA的招生对象一般为大学本科毕业、并有三年以上工作实践经验的国家机关事业单位干部和工商企业管理人员及技术人员，而其他硕士研究生可以招收应届毕业生，也可以招收在职人员；培养方式不同，MBA教育从本质上讲是一种专业实践，特别强调在掌握现代管理理论和方法的基础上，通过商业案例分析、实战观摩、分析与决策技能训练等培养学生的实际操作技能，使学生接受知识与技能、个性与心理、目标与愿望等方面的挑战，更具有职业竞争的实力，而其他研究生则侧重于理论学习、学术研究。MBA 学位由美国哈佛大学商学院（HBS）创立，并逐步被全球各大商学院认可，开设相关课程，设立相关学位。',
        secondTitle: '上海目前十二所高校十四个院校招收MBA项目',
        schools: [
          {
            name: '上海交大安泰经济管理学院 ',
            url: 'http://mba.sjtu.edu.cn/index.html'
          },
          {
            name:'上海交大高级金融学院',
            url: 'http://www.saif.sjtu.edu.cn/'
          },
          {
            name:'复旦大学经济管理学院',
            url: 'http://www.fdsm.fudan.edu.cn/fdmba/'
          },
          {
            name:'复旦大学泛海国际金融学院',
            url: 'http://www.fisf.fudan.edu.cn/'
          },
          {
            name:'同济大学经济管理学院',
            url: 'http://mba.tongji.edu.cn/'
          },
          {
            name:'华东师范大学经济管理学院',
            url: 'http://www.mba.ecnu.edu.cn/main.htm'
          },
          {
            name:'华东理工大学商学院',
            url: 'http://mba.ecust.edu.cn/'
          },
          {
            name:'东华大学旭日工商管理学院',
            url: 'http://mba.dhu.edu.cn/'
          },
          {
            name:'上海外国语学院国际工商管理学院',
            url: 'http://mba.shisu.edu.cn/'
          },
          {
            name:'上海大学管理学院',
            url: 'http://pk.shmtuedu.cn/'
          },
          {
            name:'上海海事大学经济管理学院',
            url: 'http://www.ms.shu.edu.cn/'
          },
          {
            name:'上海理工大学管理学院',
            url: 'http://mba.usst.edu.cn/'
          },
           {
            name:'上海对外经贸大学MBA教育中心',
            url: 'http://mba.suibe.edu.cn/'
          }
        ]
      },
      {
        title:'EMBA',
        header: '公共管理硕士',
        text: '公共管理硕士(Master of Public Administration，缩写为MPA)专业学位是以公共管理学科及其他相关学科为基础的研究生教育项目，是为政府部门及非政府公共机构培养从事公共管理、公共事务和公共政策研究分析等方面的高层次应用型、复合型公共管理专门人才。公共管理硕士专业学位研究生教育的产生与公共管理事业的发展密切相关。从1924年美国锡拉丘兹大学马克斯韦尔公民与公共事务学院率先开展后，公共管理硕士专业学位教育在世界范围内蓬勃发展，目前已经成为很多国家培养高层次应用型公共管理人才的主要途径之一。',
        secondTitle: '上海目前十二所高校招收MPA项目',
        schools: [
          {
            name: '上海交大国际公共事务学院',
            url: 'http://www.mpa.sjtu.edu.cn/'
          },
          {
            name:'复旦大学国际关系与公共事务学院',
            url: 'http://www.mpa.fudan.edu.cn/' 
          }
        ]
      },
      {
        title:'MEM',
        header: '公共管理硕士',
        text: '公共管理硕士(Master of Public Administration，缩写为MPA)专业学位是以公共管理学科及其他相关学科为基础的研究生教育项目，是为政府部门及非政府公共机构培养从事公共管理、公共事务和公共政策研究分析等方面的高层次应用型、复合型公共管理专门人才。公共管理硕士专业学位研究生教育的产生与公共管理事业的发展密切相关。从1924年美国锡拉丘兹大学马克斯韦尔公民与公共事务学院率先开展后，公共管理硕士专业学位教育在世界范围内蓬勃发展，目前已经成为很多国家培养高层次应用型公共管理人才的主要途径之一。',
        secondTitle: '上海目前十二所高校招收MPA项目',
        schools: [
          {
            name: '上海交大国际公共事务学院',
            url: 'http://www.mpa.sjtu.edu.cn/'
          },
          {
            name:'复旦大学国际关系与公共事务学院',
            url: 'http://www.mpa.fudan.edu.cn/'
          }
        ]
      },
      {
        title:'MPAcc',
        header: '公共管理硕士',
        text: '公共管理硕士(Master of Public Administration，缩写为MPA)专业学位是以公共管理学科及其他相关学科为基础的研究生教育项目，是为政府部门及非政府公共机构培养从事公共管理、公共事务和公共政策研究分析等方面的高层次应用型、复合型公共管理专门人才。公共管理硕士专业学位研究生教育的产生与公共管理事业的发展密切相关。从1924年美国锡拉丘兹大学马克斯韦尔公民与公共事务学院率先开展后，公共管理硕士专业学位教育在世界范围内蓬勃发展，目前已经成为很多国家培养高层次应用型公共管理人才的主要途径之一。',
        secondTitle: '上海目前十二所高校招收MPA项目',
        schools: [
          {
            name: '上海交大国际公共事务学院',
            url: 'http://www.mpa.sjtu.edu.cn/'
          },
          {
            name:'复旦大学国际关系与公共事务学院',
            url: 'http://www.mpa.fudan.edu.cn/'
          }
        ]
      },
      {
        title:'MPA',
        header: '公共管理硕士',
        text: '公共管理硕士(Master of Public Administration，缩写为MPA)专业学位是以公共管理学科及其他相关学科为基础的研究生教育项目，是为政府部门及非政府公共机构培养从事公共管理、公共事务和公共政策研究分析等方面的高层次应用型、复合型公共管理专门人才。公共管理硕士专业学位研究生教育的产生与公共管理事业的发展密切相关。从1924年美国锡拉丘兹大学马克斯韦尔公民与公共事务学院率先开展后，公共管理硕士专业学位教育在世界范围内蓬勃发展，目前已经成为很多国家培养高层次应用型公共管理人才的主要途径之一。',
        secondTitle: '上海目前十二所高校招收MPA项目',
        schools: [
          {
            name: '上海交大国际公共事务学院',
            url: 'http://www.mpa.sjtu.edu.cn/'
          },
          {
            name:'复旦大学国际关系与公共事务学院',
            url: 'http://www.mpa.fudan.edu.cn/'
          }
        ]
      }]
    })
  }
</script>
