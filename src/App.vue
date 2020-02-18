<template>
    <v-app>        
        <v-simple-table fixed-header height="700px">
            <thead>
                <tr>
                    <th width="300">时间</th>
                    <th width="300">海外反应</th>
                    <th width="300">医护/病患</th>
                    <th width="300">中央反应</th>
                    <th width="300">武汉反应</th>
                    <th width="300">其他地方反应</th>
                </tr>
            </thead>
            <tr>
                <td width="400">
                    <v-timeline dense="true">
                        <v-timeline-item right="true">
                            <v-card class="elevation-2">
                                <v-card-title class="headline">2019-12-01 周日</v-card-title>
                                <v-card-text>
                                    首例患者发病时间
                                </v-card-text>
                            </v-card>
                        </v-timeline-item>
                    </v-timeline>
                </td>
                <td bgcolor="#F0F0F0">据《柳叶刀》相关论文披露，12月1日，武汉金银潭医院收治的首例新冠患者发病，无华南海鲜市场接触史</td>
                <td bgcolor="#F7F0F0"></td>
                <td bgcolor="#F0F7F0"></td>
                <td bgcolor="#F0F0F7"></td>
                <td bgcolor="#F0F7F7"></td>
            </tr>
            <tr>
                <td width="400">
                    <v-timeline dense="true">
                        <v-timeline-item right="true">
                            <v-card class="elevation-2">
                                <v-card-title class="headline">2019-12-08 周日</v-card-title>
                                <v-card-text>
                                    首次官方通报
                                </v-card-text>
                            </v-card>
                        </v-timeline-item>
                    </v-timeline>
                </td>
                <td bgcolor="#F0F0F0"></td>
                <td bgcolor="#F7F0F0">官方首次通报，首例不明原因肺炎患者发病</td>
                <td bgcolor="#F0F7F0"></td>
                <td bgcolor="#F0F0F7"></td>
                <td bgcolor="#F0F7F7"></td>
            </tr>
            <tr>
                <td width="400">
                    <v-timeline dense="true">
                        <v-timeline-item right="true">
                            <v-card class="elevation-2">
                                <v-card-title class="headline">2019-12-26 周四</v-card-title>
                                <v-card-text>
                                    上海公卫介入
                                </v-card-text>
                            </v-card>
                        </v-timeline-item>
                    </v-timeline>
                </td>
                <td bgcolor="#F0F0F0"></td>
                <td bgcolor="#F7F0F0">湖北省中西医结合医院呼吸内科主任张继先，接诊发现四名肺炎异常患者</td>
                <td bgcolor="#F0F7F0"></td>
                <td bgcolor="#F0F0F7"></td>
                <td bgcolor="#F0F7F7">上海市公共卫生临床中心科研项目，常规收集到武汉市中心医院和武汉市疾控中心的不明原因发热患者标本一份</td>
            </tr>
            <tr>
                <td width="400">
                    <v-timeline dense="true">
                        <v-timeline-item right="true">
                            <v-card class="elevation-2">
                                <v-card-title class="headline">2019-12-27 周五</v-card-title>
                                <v-card-text>
                                    首次上报
                                </v-card-text>
                            </v-card>
                        </v-timeline-item>
                    </v-timeline>
                </td>
                <td bgcolor="#F0F0F0"></td>
                <td bgcolor="#F7F0F0">张继先向医院领导汇报，医院迅速上报江汉区疾控中心</td>
                <td bgcolor="#F0F7F0"></td>
                <td bgcolor="#F0F0F7"></td>
                <td bgcolor="#F0F7F7"></td>
            </tr>
            <tr>
                <td width="400">
                    <v-timeline dense="true">
                        <v-timeline-item right="true">
                            <v-card class="elevation-2">
                                <v-card-title class="headline">2019-12-30 周一</v-card-title>
                                <v-card-text>
                                    李文亮吹哨
                                </v-card-text>
                            </v-card>
                        </v-timeline-item>
                    </v-timeline>
                </td>
                <td bgcolor="#F0F0F0"></td>
                <td bgcolor="#F7F0F0">17:48 武汉市中心医院眼科医生李文亮在同学群中发布信息：“华南水果海鲜市场确诊了7例SARS，在我们医院急诊科隔离”</td>
                <td bgcolor="#F0F7F0">国家疾控中心主任高福看到武汉卫健委内部通知，连夜了解情况，并通知国家卫健委领导</td>
                <td bgcolor="#F0F0F7">武汉市卫健委印发《关于做好不明原因肺炎救治工作的紧急通知》，要求严格信息上报，并强调“未经授权任何单位、个人不得擅自对外发布救治信息”</td>
                <td bgcolor="#F0F7F7"></td>
            </tr>
            <tr>
                <td width="400">
                    <v-timeline dense="true">
                        <v-timeline-item right="true">
                            <v-card class="elevation-2">
                                <v-card-title class="headline">2019-12-31 周二</v-card-title>
                                <v-card-text>
                                    国家卫健委专家组抵达武汉
                                </v-card-text>
                            </v-card>
                        </v-timeline-item>
                    </v-timeline>
                </td>
                <td bgcolor="#F0F0F0"></td>
                <td bgcolor="#F7F0F0"></td>
                <td bgcolor="#F0F7F0">国家卫健委专家组抵达武汉指导疫情处理</td>
                <td bgcolor="#F0F0F7">武汉市卫健委首次公开通报27例病毒性肺炎病例，调查未发现明显人传人现象，未发现医务人员感染</td>
                <td bgcolor="#F0F7F7"></td>
            </tr>
            <tr>
                <td width="400">
                    <v-timeline dense="true">
                        <v-timeline-item right="true">
                            <v-card class="elevation-2">
                                <v-card-title class="headline">2020-01-01 周三</v-card-title>
                                <v-card-text>
                                    武汉辟谣
                                </v-card-text>
                            </v-card>
                        </v-timeline-item>
                    </v-timeline>
                </td>
                <td bgcolor="#F0F0F0"></td>
                <td bgcolor="#F7F0F0"></td>
                <td bgcolor="#F0F7F0">国家卫健委成立以马晓伟主任为组长的疫情应对处置领导小组。</td>
                <td bgcolor="#F0F0F7">华南海鲜市场闭市修整。<br/>武汉市公安局通报称，一些网民在网络上发布、转发不实信息，造成不良社会影响，已传唤8名违法人员</td>
                <td bgcolor="#F0F7F7"></td>
            </tr>
            <tr>
                <td width="400">
                    <v-timeline dense="true">
                        <v-timeline-item right="true">
                            <v-card class="elevation-2">
                                <v-card-title class="headline">2020-01-02 周四</v-card-title>
                                <v-card-text>
                                    各种未经证实的信息
                                </v-card-text>
                            </v-card>
                        </v-timeline-item>
                    </v-timeline>
                </td>
                <td bgcolor="#F0F0F0"></td>
                <td bgcolor="#F7F0F0"></td>
                <td bgcolor="#F0F7F0"></td>
                <td bgcolor="#F0F0F7">海军工程大学内部文件显示，严控外来人员入校<br/>武汉病毒所所长王延轶给内部邮件称，国家卫健委要求，严禁向媒体、自媒体、社交媒体及合作的技术公司等披露任何有关这次肺炎疫情的研究资讯</td>
                <td bgcolor="#F0F7F7"></td>
            </tr>            
            <tr>
                <td width="400">
                    <v-timeline dense="true">
                        <v-timeline-item right="true">
                            <v-card class="elevation-2">
                                <v-card-title class="headline">2020-01-03 周五</v-card-title>
                                <v-card-text>
                                    李文亮被训诫
                                </v-card-text>
                            </v-card>
                        </v-timeline-item>
                    </v-timeline>
                </td>
                <td bgcolor="#F0F0F0">武汉飞往新加坡的旅客需在抵达时接受体温检测</td>
                <td bgcolor="#F7F0F0"></td>
                <td bgcolor="#F0F7F0"></td>
                <td bgcolor="#F0F0F7">李文亮因此前在同学群发信息一事，被警方训诫，签署《训诫书》</td>
                <td bgcolor="#F0F7F7"></td>
            </tr>
            <tr>
                <td width="400">
                    <v-timeline dense="true">
                        <v-timeline-item right="true">
                            <v-card class="elevation-2">
                                <v-card-title class="headline">2020-01-04 周六</v-card-title>
                                <v-card-text>
                                    香港启动应变
                                </v-card-text>
                            </v-card>
                        </v-timeline-item>
                    </v-timeline>
                </td>
                <td bgcolor="#F0F0F0">香港政府启动“严重”应变级别</td>
                <td bgcolor="#F7F0F0"></td>
                <td bgcolor="#F0F7F0"></td>
                <td bgcolor="#F0F0F7"></td>
                <td bgcolor="#F0F7F7"></td>
            </tr>
            <tr>
                <td width="400">
                    <v-timeline dense="true">
                        <v-timeline-item right="true">
                            <v-card class="elevation-2">
                                <v-card-title class="headline">2020-01-05 周日</v-card-title>
                                <v-card-text>
                                    武汉常规通报
                                </v-card-text>
                            </v-card>
                        </v-timeline-item>
                    </v-timeline>
                </td>
                <td bgcolor="#F0F0F0"></td>
                <td bgcolor="#F7F0F0"></td>
                <td bgcolor="#F0F7F0"></td>
                <td bgcolor="#F0F0F7">武汉卫健委通报不明原因的病毒性肺炎患者59例，初步调查表明，未发现明确的人传人证据，未发现医务人员感染</td>
                <td bgcolor="#F0F7F7">上海市公共卫生临床中心从患者标本中检出类SARS冠状病毒，立即向上海市、上海市卫健委和国家卫健委等主管部门报告</td>
            </tr>
            <tr>
                <td width="400">
                    <v-timeline dense="true">
                        <v-timeline-item right="true">
                            <v-card class="elevation-2">
                                <v-card-title class="headline">2020-01-06 周一</v-card-title>
                                <v-card-text>
                                    武汉地方两会召开，瞒报开始
                                </v-card-text>
                            </v-card>
                        </v-timeline-item>
                    </v-timeline>
                </td>
                <td bgcolor="#F0F0F0"></td>
                <td bgcolor="#F7F0F0">距华南海鲜市场较近的新华医院一呼吸内科医生出现发热症状，根据肺部CT磨玻璃状阴影，确认为“疑似病人”</td>
                <td bgcolor="#F0F7F0"></td>
                <td bgcolor="#F0F0F7">武汉地方两会召开</td>
                <td bgcolor="#F0F7F7"></td>
            </tr>
            <tr>
                <td width="400">
                    <v-timeline dense="true">
                        <v-timeline-item right="true">
                            <v-card class="elevation-2">
                                <v-card-title class="headline">2020-01-07 周二</v-card-title>
                                <v-card-text>
                                    新型冠状病毒感染多位医护人员
                                </v-card-text>
                            </v-card>
                        </v-timeline-item>
                    </v-timeline>
                </td>
                <td bgcolor="#F0F0F0"></td>
                <td bgcolor="#F7F0F0">武汉华中科技大学同济医学院附属协和医院为一名69岁病人做了脑外科手术，导致1名医生，13名护士被感染</td>
                <td bgcolor="#F0F7F0">习近平主持召开中央政治局常委会会议，对新型冠状病毒肺炎疫情防控工作提出要求</td>
                <td bgcolor="#F0F0F7">武汉地方两会继续召开</td>
                <td bgcolor="#F0F7F7">21时，实验室检出一种新型冠状病毒，武汉病毒性肺炎病院检测结果初步评估专家确定，病原体是新型冠状病毒</td>
            </tr>            
        </v-simple-table>
    </v-app>
</template>

<script>
    export default {
        data: () => ({
            alignTop: false,
            avatar: false,
            dense: false,
            fillDot: false,
            hideDot: false,
            icon: false,
            iconColor: false,
            left: false,
            reverse: false,
            right: false,
            small: false,
        }),
    }
</script>