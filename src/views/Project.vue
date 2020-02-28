<template>
  <div id="project" flex column>
    <background-img>
      <div class="normalHeader">
        <banner src="imgs/project/project_bg1.jpg" />
        <div class="nhCover" />
      </div>
    </background-img>
    <v-container grid-list-xl>
      <v-tabs grow background-color="indigo" dark class="pa-3" style="flex:1">
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
              <v-card-text style="width: 40%; word-break: break-all; cursor: pointer;" v-for="(ele, j) in tabs[i].schools" :key="j">
                <a @click="openUrlWindow(ele.url)">{{ele.name}}<br/>{{ele.url}}</a>
              </v-card-text>
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
        header: '高级工商管理硕士简介',
        text: 'MBA(Executive Master of Business Administration)是“高层管理人员工商管理硕士”的英文缩写。EMBA研究生教育旨在培养具有高度政治素养、责任心和职业道德的高层管理者，使他们通过系统学习，全面掌握现代企业管理理论和决策方法，深入了解国内外企业的商业模式，具备在复杂的国内外经济、社会和技术环境下制定企业发展战略、进行企业日常经营管理决策、领导企业参与国内外竞争的能力和知识。根据国务院学位委员会办公室的[2002]64号文，EMBA研究生毕业后将授予国家承认的EMBA硕士学位。',
        secondTitle: '上海目前六所高校七个院校招收EMBA项目',
        schools: [
          {
            name: '上海交大安泰经济管理学院',
            url: 'http://emba.saif.sjtu.edu.cn/'
          },
          {
            name:'上海交大高级金融学院',
            url: 'http://emba.sjtu.edu.cn/' 
          },
          {
            name:'复旦大学管理学院',
            url: 'http://www.fdsm.fudan.edu.cn/AboutUs/index.aspx' 
          },
          {
            name:'同济大学经济管理学院',
            url: 'http://sem.tongji.edu.cn/embach/' 
          },
          {
            name:'上海财经大学商学院',
            url: 'http://cob.sufe.edu.cn/EMBA' 
          },
          {
            name:'华东理工大学商学院',
            url: 'http://emba.ecust.edu.cn/' 
          },
          {
            name:'上海海事大学经济管理学院',
            url: 'http://emba.eduego.com/college-17.html' 
          }
        ]
      },
      {
        title:'MEM',
        header: '工程管理硕士',
        text: '工程管理硕士（Master of Engineering Management，简称MEM）是2010由中国工程院提议，委托清华大学进行学科论证，同年批复新设置的一种专业学位。工程管理是针对工程实践而进行的决策、计划、组织、指挥、协调与控制。包括：重大工程建设项目决策的技术经济论证和实施中的管理;重要复杂的新产品、设备、装备在开发、制造、生产过程中的管理;技术创新、技术改造、转型、转轨、与国际接轨的管理;产业、工程和科技的重大布局与发展战略的研究与管理等。随着现代工程出现了规模巨大、决策流程复杂、涉及技术种类众多、组织结构庞大、历时漫长、参与人员众多等趋势。工程管理在现代工程中的重要性使得工程管理人员在现代工程实践中扮演着越来越重要的角色。',
        secondTitle: '上海目前八所高校十个院校招收MEM项目',
        schools: [
          {
            name: '上海交大机械与动力工程学院',
            url: 'http://jdgs.sjtu.edu.cn/'
          },
          {
            name:'上海交大电子信息与电气工程学院',
            url: 'http://mem.seiee.sjtu.edu.cn/'
          },
          {
            name:'上海交大材料科学与工程学院',
            url: 'http://smse.sjtu.edu.cn/'
          },
          {
            name:'同济大学经济管理学院',
            url: 'http://sem2.tongji.edu.cn/me/'
          },
          {
            name:'上海财经大学信息管理与工程学院',
            url: 'http://sime.shufe.edu.cn/home/index'
          },
          {
            name:'华东理工商学院',
            url: 'http://mem.ecust.edu.cn/'
          },
          {
            name:'东华大学旭日工商学院',
            url: 'http://mba.dhu.edu.cn/'
          },
           {
            name:'东华大学机械工程学院',
            url: 'http://meccol.dhu.edu.cn/'
          },
          {
            name:'东华计算计科学与技术学院',
            url: 'http://cst.dhu.edu.cn/'
          },
          {
            name:'上海理工大学管理学院',
            url: 'http://mem.usst.edu.cn/'
          },
          {
            name:'上海海事大学管理学院',
            url: 'http://mem.shmtu.edu.cn/'
          },
          {
            name:'电力学院继续教育学院',
            url: 'http://jjxy.shiep.edu.cn/'
          }
        ]
      },
      {
        title:'MPAcc',
        header: '会计硕士',
        text: '会计硕士（Masterof Professional Accounting，简称MPAcc，是经教育部、国务院学位办批准设立的一种专业学位，是培养具有良好职业道德，系统掌握现代会计理论与实务以及相关领域的知识与技能，具备会计工作领导能力的高素质会计人才。会计硕士MPAcc是国家基于培养面向会计职业的应用型、高层次、高素质会计专门人才的需要而新设立的一种学位类型。与会计学学术性学位相比，更侧重实际能力的培养；更突出会计职业实务工作的要求；更注重学术性与职业性的紧密结合；更强调系统掌握现代会计学、审计学、财务管理以及相关领域的知识和技能，对会计实务有充分的了解，具有很强的解决实际问题的能力。',
        secondTitle: '上海目前八家高校招收在职项目，七家高校招收全日制项目',
        schools: [
          {
            name: '复旦大学管理学院（在职项目）',
            url: 'http://www.fdsm.fudan.edu.cn/mpacc/'
          },
          {
            name:'上海大学管理学院（全日制项目、在职项目）',
            url: 'http://www.ms.shu.edu.cn/'
          },
          {
            name:'交通大学经济管理学院（全日制项目） ',
            url: 'http://mpacc.sjtu.edu.cn/'
          },
          {
            name:'东华大学旭日管理学院（全日制项目、在职项目）',
            url: 'http://mba.dhu.edu.cn/'
          },
          {
            name:'上海财经大学会计学院（全日制项目、在职项目）',
            url: 'http://mpacc.shufe.edu.cn/'
          },
          {
            name:'上海对外经贸大学研究生院（全日制项目、在职项目）',
            url: 'http://www.suibe.edu.cn/'
          },
          {
            name:'同济大学经济管理学院（在职项目）',
            url: 'http://mpacc.tongji.edu.cn/'
          },
          {
            name:'上海国家会计学院研究生部（全日制项目、在职项目）',
            url: 'https://www.snai.edu/'
          },
           {
            name:'华东理工大学商学院（全日制项目、在职项目）',
            url: 'http://mpacc.ecust.edu.cn/'
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
          },
          {
            name: '同济大学经济管理学院',
            url: 'http://mpa.tongji.edu.cn/'
          },
          {
            name:'华东师范公共管理学院',
            url: ' http://www.mpa.ecnu.edu.cn/'
          },
          {
            name: '上海财大信息管理与工程学院',
            url: 'http://mpa.shufe.edu.cn/'
          },
          {
            name:'华东政法政治与公共管理学院',
            url: 'http://www.mpa.ecupl.edu.cn/'
          },
          {
            name: '华东理工社会公共管理学院',
            url: 'http://cpsa.ecust.edu.cn/'
          },
          {
            name:'东华大学人文学院',
            url: 'http://mpa.dhu.edu.cn/'
          },
          {
            name: '市委党校行政学院',
            url: 'http://www.sdx.sh.cn/'
          },
          {
            name:'上海理工管理学院',
            url: 'http://mpa.usst.edu.cn/'
          },
          {
            name: '上海师范法政学院',
            url: 'http://fazheng.shnu.edu.cn/'
          },
          {
            name:'上海海洋MPA教育中心',
            url: 'http://wfxy.shou.edu.cn/'
          }
        ]
      }]
    }),
    methods: {
      openUrlWindow: function(url){
        window.open(url, "_blank")
      },
    }
  }
</script>
