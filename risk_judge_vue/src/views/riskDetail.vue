<template>
    <div class="container">
        <div class="title">风险事件详情</div>
        <div id="echart"></div>
    </div>
</template>

<script>
import { mapState } from "vuex"

export default {
    mounted() {
        // this.riskData = this.$route.params
        console.log('接参数', this.riskData)
        this.echart()
    },
    data() {
        return {
            // riskData: {} 
        }
    },
    computed:{
        ...mapState(["riskData"]) // 从列表页接收的风险事件数据
    },
    methods: {
        echart() {
            var mychart = this.$echarts.init(document.getElementById('echart'))
            var option = {
                title: {
                    text: this.riskData.event_name,
                    textStyle: {
                        fontSize: 16,
                        fontWeight: 550,
                        color: '#666'
                    }

                },
                tooltip: {},
                animationDurationUpdate: 1500,
                animationEasingUpdate: 'quinticInOut',
                series: [
                    {
                        type: 'graph',
                        layout: 'none',
                        focusNodeAdjacency: true,
                        symbolSize: 50,
                        draggable: true,
                        roam: true,
                        label: {
                            show: true
                        },
                        edgeSymbol: ['none', 'arrow'],
                        edgeSymbolSize: [4, 100],
                        edgeLabel: {
                            fontSize: 20
                        },
                        data: [
                            {
                                id: 1,
                                name: 'Client1',
                                symbol: 'rect',
                                symbolSize: 70,
                                value: '远程访问',
                                x: -100,
                                y: 300
                            },
                            {
                                id: 2,
                                name: 'Client2',
                                value: '10',
                                x: 100,
                                y: 300
                            }
                        ],
                        links: [
                            {
                                source: 0,
                                target: 1,
                                label: {
                                    show: true,
                                },
                                lineStyle: {
                                    width: 3,
                                    curveness: 0
                                }
                            }
                        ]
                    }
                ]
            }
            mychart.setOption(option)
        }
    }
}
</script>
<style lang="scss" scoped>
.container {
    padding: 10px 20px;

    .title {
        font-size: 18px;
        font-weight: 700;
        color: #ffffff;
        background-color: #6694ed;
        line-height: 50px;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        // text-align: left;
        padding-left: 20px;
        margin-bottom: 10px;
    }

    #echart {
        width: 100%;
        height: 400px;
        border: 1px solid red;
    }
}
</style>