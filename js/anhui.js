            //1. 加载安徽省地图的矢量数据
            //2. 在Ajax的回调函数中注册地图矢量数据 echarts.registerMap('anhui', 矢量地图数据)
            //3. 配置geo的type为'map', map为'anhui' 
            //4. 通过zoom调整缩放比例
            //5. 通过center调整中心点 
            const wenyi = {
                '安徽博物馆':'https://www.ahm.cn/',
                '安徽省博物馆':'https://www.ahm.cn/',
                '安徽省地质博物馆':'http://www.ahgm.org.cn/',
                '宿州市博物馆':'https://www.sz-museum.com/',
                '安徽中国徽州文化博物馆':'http://www.hzwhbwg.com/#/home',
                '淮北市博物馆':'http://www.hbbwg.net/',
                '蚌埠市博物馆':'https://www.ahbbmuseum.com/',
                '垓下遗址':'https://baike.baidu.com/item/%E5%9E%93%E4%B8%8B%E9%81%97%E5%9D%80/23612123',
                '凤阳明中都皇故城':'https://baike.baidu.com/item/%E6%98%8E%E4%B8%AD%E9%83%BD%E7%9A%87%E6%95%85%E5%9F%8E%E5%8F%8A%E7%9A%87%E9%99%B5%E7%9F%B3%E5%88%BB/3493990?fromModule=search-result_lemma-recommend',
                '和县猿人遗址':'https://baike.baidu.com/item/%E5%92%8C%E5%8E%BF%E7%8C%BF%E4%BA%BA%E9%81%97%E5%9D%80?fromModule=lemma_search-box',
                '曹氏家族墓群':'https://baike.baidu.com/item/%E6%9B%B9%E6%B0%8F%E5%AE%B6%E6%97%8F%E5%A2%93%E7%BE%A4?fromModule=lemma_search-box',
                '李白墓':'https://baike.baidu.com/item/%E6%9D%8E%E7%99%BD%E5%A2%93/806956?fromModule=lemma_search-box',
                '大工山－凤凰山铜矿遗址':'https://baike.baidu.com/item/%E5%A4%A7%E5%B7%A5%E5%B1%B1-%E5%87%A4%E5%87%B0%E5%B1%B1%E9%93%9C%E7%9F%BF%E9%81%97%E5%9D%80?fromModule=lemma_search-box'
            }
            var mCharts = echarts.init(document.getElementById('provinceMap'))
            $.get('js/anhui.json', function (ret) {
            console.log(ret)
            echarts.registerMap('anhui', ret)
            var mapOpt = {
                title: {
                    text: '安徽省文物数量',
                    // subtext: '数据来自 中国文物局',
                    // sublink:'http://www.ncha.gov.cn/col/col2262/index.html',
                    x: 'center',
                    y: 0,
                    textStyle: {
                        color: '#000'
                    }
                },
                tooltip: {
                    trigger: 'item',
                    formatter: function (params) {
                        // console.log(params)
                        if (params.name) {
                            return params.name + ' : ' + (isNaN(params.value) ? 0 : parseInt(params.value));
                        }
                    }
                },
                visualMap: {//视觉映射组件
                    top: '55%',
                    left: '3%',
                    min: 0,
                    max: 430000,
                    // text: ['High', 'Low'],
                    realtime: false,  //拖拽时，是否实时更新
                    calculable: true,  //是否显示拖拽用的手柄
                    inRange: {
                        color: ['lightskyblue', 'yellow', 'orangered']
                    }
                },
                geo: [
                    {
                      map: 'anhui',
                    //   center: [117.22,31.80],
                    //   layoutSize: '100%',
                    //   layoutCenter: ['50%', '50%'],
                         itemStyle: {
                    // 隐藏地图
                              normal: {
                              opacity: 0, // 为 0 时不绘制该图形
                         }
                    // //   regions: regionsArr,
                    //   aspectScale: 1, //用于 scale 地图的长宽比
                    //   zoom: 1,
                      top: 35
                    }
                  ],
                series: [
                    {
                        name: '文遗热度',
                        type: 'map',
                        mapType: 'anhui',
                        roam: false,//是否开启鼠标缩放和平移漫游
                        itemStyle: {//地图区域的多边形 图形样式
                            normal: {//是图形在默认状态下的样式
                                label: {
                                    show: false,//是否显示标签
                                    textStyle: {
                                        color: "black"
                                    }
                                }
                            },
                            zoom: 1,  //地图缩放比例,默认为1
                            emphasis: {//是图形在高亮状态下的样式,比如在鼠标悬浮或者图例联动高亮时
                                label: {show: true}
                            }
                        },
                        top: "8%",//组件距离容器的距离
                        data: [
                            {name: '合肥市', value: 421746},
                            {name: '芜湖市', value: 5734},
                            {name: '蚌埠市', value: 8782},
                            {name: '淮南市', value: 7951},
                            {name: '马鞍山市', value: 7936},
                            {name: '淮北市', value: 6756},
                            {name: '铜陵市', value: 10238},
                            {name: '安庆市', value: 19772},
                            {name: '黄山市', value: 208283},
                            {name: '滁州市', value: 24743},
                            {name: '阜阳市', value: 145261},
                            {name: '宿州市', value: 13749},
                            {name: '六安市', value: 12217},
                            {name: '亳州市', value: 5893},
                            {name: '池州市', value: 7354},
                            {name: '宣城市', value: 10327}
                        ]
                    },
                    {
                        name: '博物馆',
                        type: 'effectScatter', // 系列类型, 必须是 'effectScatter', 'scatter', 'effectScatter', 'lines', 'graph', 'heatmap'
                        coordinateSystem: 'geo', // 该系列使用的坐标系 可选: 'cartesian2d','polar','geo'
                        // 标记的图形, 标记类型包括 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 
                        // 'pin', 'arrow', 'none'
                        symbol: 'circle', 
                        symbolSize: 10, // 标记的大小
                        // 图形的样式

                        itemStyle: {
                            normal:{
                                color: '＃800080',
                                borderColor: '＃800080',
                                borderWidth: 1
                            }

                        },
                        // 系列中的数据内容数组, 数组项通常为具体的数据项
                        data: [
                          { name: '安徽省博物馆', value: [117.22,31.80,100000] ,},
                          { name: '安徽博物馆', value: [117.22,31.80,100000] },
                          { name: '安徽省地质博物馆', value: [117.22,31.80,100000] },
                          { name: '宿州市博物馆', value: [116.96,33.64,100000] },
                          { name: '安徽中国徽州文化博物馆', value: [118.27,29.72,100000] },
                          { name: '淮北市博物馆', value: [116.80,33.95,100000] },
                          { name: '蚌埠市博物馆', value: [117.39,32.91,100000] }
                         
                        ]
                      },
                      {
                        name: '遗迹',
                        type: 'effectScatter', // 系列类型, 必须是 'effectScatter', 'scatter', 'effectScatter', 'lines', 'graph', 'heatmap'
                        coordinateSystem: 'geo', // 该系列使用的坐标系 可选: 'cartesian2d','polar','geo'
                        // 标记的图形, 标记类型包括 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 
                        // 'pin', 'arrow', 'none'
                        symbol: 'circle', 
                        symbolSize: 10, // 标记的大小
                        // 图形的样式

                        itemStyle: {
                            normal:{
                                color: '＃800080',
                                borderColor: '＃800080',
                                borderWidth: 1
                            }

                        },
                        // 系列中的数据内容数组, 数组项通常为具体的数据项
                        data: [
                          { name: '垓下遗址', value: [117.56,33.32,350000] },
                          { name: '凤阳明中都皇故城', value: [117.55,32.88,350000] },
                          { name: '和县猿人遗址', value: [118.21,31.89,350000] },
                          { name: '曹氏家族墓群', value: [115.78,33.86,350000] },
                          { name: '李白墓', value: [118.52,31.49,350000] },
                          { name: '大工山－凤凰山铜矿遗址', value: [115.89,39.80,350000] }
                        ]
                      }
                ]
            };

            mCharts.setOption(mapOpt)
            mCharts.on('click',function(params){
                console.log(params.name);
                // myChart.setOption(option);
                if(params.name == '安徽省博物馆' || params.name == '安徽博物馆' || params.name == '安徽省地质博物馆' || params.name == '宿州市博物馆' || params.name == '安徽中国徽州文化博物馆' || params.name == '淮北市博物馆' || params.name == '蚌埠市博物馆' || params.name == '垓下遗址' || params.name == '凤阳明中都皇故城' || params.name == '和县猿人遗址' || params.name == '曹氏家族墓群' || params.name == '李白墓' || params.name == '大工山－凤凰山铜矿遗址'  ){
                    window.open(
                        wenyi[params.name],
                        '_blank' // <- This is what makes it open in a new window.  
                    )
                }
            });
            })
