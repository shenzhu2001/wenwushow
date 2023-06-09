        //自动切换定时器， 自动切换项目
        let timer = null, nows = -1;
 
        //初始Echarts实例对象
        const oMap = echarts.init(document.querySelector('#map-box'));
 
 
        //指定加载省、市、县、区 （注：这里是重点！！！，zunyi是zunyi.js中大数据变量，而用引号括起来的'zunyi'是要在map: 'zunyi',中加载的变量）
        echarts.registerMap('zunyi', zunyi);
 
        //（注：由于这里没有用模块化方式导入，所以把zunyi.json文件改为zunyi.js文件，并在里面用一个zunyi常量来引入的）
 
 
        //如果你当前环境支持模块化导入方式的话可以直接导入xxxx.json文件，就不用向上面改成js文件后用常量来引入
        //echarts.registerMap('zunyi', require('./js/zunyi.json'));
 
        //（注：想问zunyi.json文件是从哪里来的（或者 是想要其他省、市、县区等），请再向下看！！）
 
 
        //图片相关配置信息
        oMap.setOption({
            //标题文本配置
            title: {
                text: '中国 贵州省 遵义市 地理图形',
                textStyle: {
                    color: 'white',
                    fontStyle: 'normal',
                    fontWeight: 'bold',
                    fontSize: 32,
                    lineHeight: 80,
                    textBorderColor: 'green',
                    textBorderWidth: 1,
                    textShadowColor: 'green',
                    textShadowBlur: 10,
                    textShadowOffsetX: 2,
                    textShadowOffsetY: 2
                }
            },
 
            //提示框组件(可以设置在多种地方)       
            tooltip: {
                show: true, //是否显示提示框组件，包括提示框浮层和 axisPointer。
                trigger: 'item', //触发类型。item,axis,none
                enterable: true,//鼠标是否可进入提示框浮层中，默认为false，
                showContent: true,          //是否显示提示框浮层
                triggerOn: 'mousemove',//提示框触发的条件(mousemove|click|none)  
                showDelay: 0,               //浮层显示的延迟，单位为 ms，默认没有延迟，也不建议设置。在 triggerOn 为 'mousemove' 时有效。
                textStyle: {
                    color: 'white',
                    fontSize: 12
                },
                padding: [0, 8],
                hideDelay: 10,             //浮层隐藏的延迟
                formatter: (o) => (o.data) ? `<section class="map-hover-box"><div class="map-hover-mov"><h3>建筑地址：${o.name}</h3></div><i></i></section>` : '',
                // backgroundColor: 'green',  //提示框浮层的背景颜色。
                // borderColor: "white",  //图形的描边颜色
                // borderWidth: 2,
                alwaysShowContent: true,
                transitionDuration: 1,      //提示框浮层的移动动画过渡时间，单位是 s，设置为 0 的时候会紧跟着鼠标移动。
            },
 
            //地理坐标系组件。地理坐标系组件用于地图的绘制，支持在地理坐标系上绘制散点图，线集。
            geo: {
                show: true,
                map: 'zunyi',
                roam: false,
                top: 90,
                left: 306,
                zoom: 1.02,
                aspectScale: 0.9,
                itemStyle: {
                    normal: {
                        opacity: 1,              //图形透明度 0 - 1
                        borderColor: "yellow",  //图形的描边颜色
                        borderWidth: 2,          //描边线宽。为 0 时无描边。
                        borderType: 'solid',     //柱条的描边类型，默认为实线，支持 'solid', 'dashed', 'dotted'。
                        areaColor: "yellow",   //图形的颜色 #eee
                    }
                }
            },
 
            //系列列表。每个系列通过 type(map, scatter, bar, line, gauge, tree.....) 决定自己的图表类型
            series: [{
                name: '贵州省遵义市',
                map: 'zunyi',
                type: "scatter",
                coordinateSystem: "geo",
                symbolSize: 0,
                silent: 'none',
                data: zunyiData.map(item => {
                    return {
                        name: item.name,
                        value: [item.lng, item.lat]
                    };
                })
            },
            {
                map: 'zunyi',
                type: "map",
                zoom: 1,                //当前视角的缩放比例。
                aspectScale: 0.9,       //这个参数用于 scale 地图的长宽比。geoBoundingRect.width / geoBoundingRect.height * aspectScale
                roam: false,            //是否开启鼠标缩放和平移漫游。默认不开启
                label: {
                    show: false,
                    textStyle: {
                        color: "white",
                        fontSize: 12,
                        backgroundColor: ''  //文字背景色
                    }
                },
 
                itemStyle: {
                    normal: {
                        borderColor: "#00ff00",     //图形的描边颜色
                        borderWidth: 2,             //描边线宽。为 0 时无描边。
                        borderType: 'solid',        //柱条的描边类型，默认为实线，支持 'solid', 'dashed', 'dotted'。
                        areaColor: "rgba(0, 186, 0, 0.8)",   //图形的颜色 #eee
                        shadowBlur: 100,            //图形阴影的模糊大小。该属性配合 shadowColor,shadowOffsetX, shadowOffsetY 一起设置图形的阴影效果。
                        shadowColor: '#002900',     //阴影色
                        shadowOffsetX: 20,          //X轴阴影
                        shadowOffsetY: -20,         //Y轴阴影
 
                        label: {
                            show: true,
                            textStyle: {
                                color: "white",
                                fontSize: 14
                            }
                        }
                    },
                    //鼠标移入时
                    emphasis: {
                        borderColor: "#005b89",
                        borderWidth: "1",
                        areaColor: "yellow",
                        label: {
                            show: false,
                            textStyle: {
                                color: "purple",
                                fontSize: 14
                            }
                        }
                    },
 
                    effect: {
                        show: true,
                        shadowBlur: 10,
                        loop: true
                    },
                },
                
                //自定义图片数组对象[{}, {}...]
            }, ...zunyiData.map((item, index) => {
                return {
                    type: "scatter",
                    coordinateSystem: "geo",
                    //自定义图片的 位置（lng, lat）
                    data: [{ name: item.name, value: [item.lng, item.lat] }],
                    //自定义图片的 大小
                    symbolSize: [80, 60],
                    //自定义图片的 路径
                    symbol: `image://img/icon/icon (${index}).png`
                }
            })
            ]
        });
 
        //自动切换
        const autoShow = (length) => {
            nows = (nows + 1) % length;
            oMap.dispatchAction({
                type: 'showTip',
                seriesIndex: 0,
                dataIndex: nows
            });
        };
 
        //每隔5秒钟自动切换到下一个数据点
        autoShow(zunyiData.length);
        clearInterval(timer);
        timer = window.setInterval(() => {
            autoShow(zunyiData.length);
        }, 5000);
 
        // 点击事件
        oMap.on('click', function (res) {
            console.log(res);
            if('scatter' === res.componentSubType){
                alert(`点击了 ${res.name} 图标`);
            }
            if('map' === res.componentSubType){
                alert(`点击了 ${res.name} 地图`);
            }
        });