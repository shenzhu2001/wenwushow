var sun = document.getElementById('container');
var myChartSun = echarts.init(sun);

var dataSun = [{
        name: '浪漫主义',
        itemStyle: {
            color: '#da0d68'
        },
        children: [{
                name: '李白',
                value: 1107,
                itemStyle: {
                    color: '#975e6d'
                },
                children: [{
                    name: '诗歌数量：1107',
                    value: 1107,
                    itemStyle: {
                        color: '#975e6d'
                    }
                }]
            },
            {
                name: '李贺',
                value: 256,
                itemStyle: {
                    color: '#e0719c'
                },
                children: [{
                    name: '诗歌数量：256',
                    value: 256,
                    itemStyle: {
                        color: '#e0719c'
                    }
                }]
            },
            {
                name: '李商隐',
                value: 629,
                itemStyle: {
                    color: '#e0719c'
                },
                children: [{
                    name: '诗歌数量：629',
                    value: 629,
                    itemStyle: {
                        color: '#e0719c'
                    }
                }]
            },
            {
                name: '杜牧',
                value: 511,
                itemStyle: {
                    color: '#e0719c'
                },
                children: [{
                    name: '诗歌数量：511',
                    value: 511,
                    itemStyle: {
                        color: '#e0719c'
                    }
                }]
            },
        ]
    },
    {
        name: '现实主义',
        itemStyle: {
            color: '#da1d23'
        },
        children: [{
                name: '杜甫',
                value: 1593,
                itemStyle: {
                    color: '#dd4c51'
                },
                children: [{
                    name: '诗歌数量：1593',
                    value: 1593,
                    itemStyle: {
                        color: '#dd4c51'
                    }
                }]
            },
            {
                name: '卢纶',
                value: 347,
                itemStyle: {
                    color: '#dd4c51'
                },
                children: [{
                    name: '诗歌数量：347',
                    value: 347,
                    itemStyle: {
                        color: '#dd4c51'
                    }
                }]
            },
            {
                name: '罗隐',
                value: 491,
                itemStyle: {
                    color: '#dd4c51'
                },
                children: [{
                    name: '诗歌数量：491',
                    value: 491,
                    itemStyle: {
                        color: '#dd4c51'
                    }
                }]
            },
            {
                name: '白居易',
                value: 3061,
                itemStyle: {
                    color: '#c94a44'
                },
                children: [{
                    name: '诗歌数量：3061',
                    value: 3061,
                    itemStyle: {
                        color: '#c94a44'
                    }
                }]
            },
            {
                name: '皮日休',
                value: 462,
                itemStyle: {
                    color: '#dd4c51'
                },
                children: [{
                    name: '诗歌数量：462',
                    value: 462,
                    itemStyle: {
                        color: '#dd4c51'
                    }
                }]
            },
            {
                name: '杜荀鹤',
                value: 326,
                itemStyle: {
                    color: '#f7a128'
                },
                children: [{
                    name: '诗歌数量：326',
                    value: 326,
                    itemStyle: {
                        color: '#f7a128'
                    }
                }]
            },
            {
                name: '元稹',
                value: 950,
                itemStyle: {
                    color: '#f7a128'
                },
                children: [{
                    name: '诗歌数量：950',
                    value: 950,
                    itemStyle: {
                        color: '#f7a128'
                    }
                }]
            },
            {
                name: '张籍',
                value: 447,
                itemStyle: {
                    color: '#dd4c51'
                },
                children: [{
                    name: '诗歌数量：447',
                    value: 447,
                    itemStyle: {
                        color: '#dd4c51'
                    }
                }]
            },
        ]
    },
    {
        name: '山水田园',
        itemStyle: {
            color: '#ebb40f'
        },
        children: [{
                name: '王维',
                value: 397,
                itemStyle: {
                    color: '#e1c315'
                },
                children: [{
                    name: '诗歌数量：397',
                    value: 397,
                    itemStyle: {
                        color: '#e1c315'
                    }
                }]
            },
            {
                name: '刘禹锡',
                value: 867,
                itemStyle: {
                    color: '#e1c315'
                },
                children: [{
                    name: '诗歌数量：867',
                    value: 867,
                    itemStyle: {
                        color: '#e1c315'
                    }
                }]
            },
            {
                name: '司空图',
                value: 452,
                itemStyle: {
                    color: '#e1c315'
                },
                children: [{
                    name: '诗歌数量：452',
                    value: 452,
                    itemStyle: {
                        color: '#e1c315'
                    }
                }]
            },
            {
                name: '韦庄',
                value: 393,
                itemStyle: {
                    color: '#e1c315'
                },
                children: [{
                    name: '诗歌数量：393',
                    value: 393,
                    itemStyle: {
                        color: '#e1c315'
                    }
                }]
            },
            {
                name: '皎然',
                value: 520,
                itemStyle: {
                    color: '#e1c315'
                },
                children: [{
                    name: '诗歌数量：520',
                    value: 520,
                    itemStyle: {
                        color: '#e1c315'
                    }
                }]
            },
            {
                name: '张九龄',
                value: 229,
                itemStyle: {
                    color: '#e1c315'
                },
                children: [{
                    name: '诗歌数量：229',
                    value: 229,
                    itemStyle: {
                        color: '#e1c315'
                    }
                }]
            },
            {
                name: '孟浩然',
                value: 266,
                itemStyle: {
                    color: '#b09733'
                },
                children: [{
                    name: '诗歌数量：266',
                    value: 266,
                    itemStyle: {
                        color: '#b09733'
                    }
                }]
            },
            {
                name: '韦应物',
                value: 576,
                itemStyle: {
                    color: '#b09733'
                },
                children: [{
                    name: '诗歌数量：576',
                    value: 576,
                    itemStyle: {
                        color: '#b09733'
                    }
                }]
            },
            {
                name: '柳宗元',
                value: 193,
                itemStyle: {
                    color: '#b09733'
                },
                children: [{
                    name: '诗歌数量：193',
                    value: 193,
                    itemStyle: {
                        color: '#b09733'
                    }
                }]
            }
        ]
    },
    {
        name: '边塞诗派',
        itemStyle: {
            color: '#187a2f'
        },
        children: [{
                name: '高适',
                value: 269,
                itemStyle: {
                    color: '#a2b029'
                },
                children: [{
                    name: '诗歌数量：269',
                    value: 269,
                    itemStyle: {
                        color: '#a2b029'
                    }
                }]
            },
            {
                name: '卢纶',
                value: 347,
                itemStyle: {
                    color: '#a2b029'
                },
                children: [{
                    name: '诗歌数量：347',
                    value: 347,
                    itemStyle: {
                        color: '#a2b029'
                    }
                }]
            },
            {
                name: '岑参',
                value: 404,
                itemStyle: {
                    color: '#718933'
                },
                children: [{
                    name: '诗歌数量：404',
                    value: 404,
                    itemStyle: {
                        color: '#718933'
                    }
                }]
            },
            {
                name: '李颀',
                value: 125,
                itemStyle: {
                    color: '#5e9a80'
                },
                children: [{
                    name: '诗歌数量：125',
                    value: 125,
                    itemStyle: {
                        color: '#5e9a80'
                    }
                }]
            },
            {
                name: '王昌龄',
                value: 209,
                itemStyle: {
                    color: '#5e9a80'
                },
                children: [{
                    name: '诗歌数量：209',
                    value: 209,
                    itemStyle: {
                        color: '#5e9a80'
                    }
                }]
            },
            {
                name: '李益',
                value: 172,
                itemStyle: {
                    color: '#5e9a80'
                },
                children: [{
                    name: '诗歌数量：172',
                    value: 172,
                    itemStyle: {
                        color: '#5e9a80'
                    }
                }]
            }
        ]
    }
];
var optionSun = {
    series: {
        type: 'sunburst',
        data: dataSun,
        nodeClick: false,
        radius: [0, '95%'],
        sort: null,
        emphasis: {
            focus: 'descendant'
        },
        levels: [
            {},
            {
                r0: '10%',
                r: '30%',
                itemStyle: {
                    borderWidth: 2
                },
                label: {
                    rotate: 'tangential'
                }
            },
            {
                r0: '30%',
                r: '60%',
                label: {
                    align: 'right'
                }
            },
            {
                r0: '60%',
                r: '62%',
                label: {
                    position: 'outside',
                    padding: 3,
                    silent: false
                },
                itemStyle: {
                    borderWidth: 3
                }
            }
        ]
    }
};
myChartSun.setOption(optionSun);



// 定义树图点击事件
myChartSun.on('click', function(params) {
    console.log("param::", params.name);
    //根据点击出现不同内容
    $("#poem").html(getPoem(params.name));
    $("#thing").html(getThing(params.name));
})

function getPoem(name) {
    author = "<p style=\"text-align: center;\"><span style=\"text-align: center;\">--" + name + "</span>"
    if (name == "李白") {
        title = "<br><br><br><h4 style=\"text-align: center;\">《送孟浩然之广陵》</h4>";
        content = "<br><br>故人西辞黄鹤楼，<br><br>烟花三月下扬州。<br><br>孤帆远影碧空尽，<br><br>唯见长江天际流。</p>";
        return title + author + content;
    } else if (name == "李贺") {
        title = "<br><br><br><h4 style=\"text-align: center;\">《雁门太守行》</h4>";
        content = "<br><br>黑云压城城欲摧，甲光向日金鳞开。<br><br>角声满天秋色里，塞上燕脂凝夜紫。<br><br>半卷红旗临易水，霜重鼓寒声不起。<br><br>报君黄金台上意，提携玉龙为君死！</p>";
        return title + author + content;
    } else if (name == "李商隐") {
        title = "<br><br><br><h4 style=\"text-align: center;\">《锦瑟》</h4>";
        content = "<br><br>锦瑟无端五十弦，<br><br>一弦一柱思华年。<br><br>庄生晓梦迷蝴蝶，<br><br>望帝春心托杜鹃。</p>";
        return title + author + content;
    } else if (name == "杜牧") {
        title = "<br><br><br><h4 style=\"text-align: center;\">《泊秦淮》</h4>";
        content = "<br><br>烟笼寒水月笼沙，<br><br>夜泊秦淮近酒家。<br><br>商女不知亡国恨，<br><br>隔江犹唱后庭花。</p>";
        return title + author + content;
    } else if (name == "杜甫") {
        title = "<br><br><br><h4 style=\"text-align: center;\">《客至》</h4>";
        content = "<br><br>舍南舍北皆春水，但见群鸥日日来。<br><br>花径不曾缘客扫，蓬门今始为君开。<br><br>盘飧市远无兼味，樽酒家贫只旧醅。<br><br>肯与邻翁相对饮，隔篱呼取尽馀杯。</p>";
        return title + author + content;
    } else if (name == "卢纶") {
        title = "<br><br><br><h4 style=\"text-align: center;\">《塞下曲·其三》</h4>";
        content = "<br><br>月黑雁飞高，<br><br>单于夜遁逃。<br><br>欲将轻骑逐，<br><br>大雪满弓刀。</p>";
        return title + author + content;
    } else if (name == "罗隐") {
        title = "<br><br><br><h4 style=\"text-align: center;\">《蜂》</h4>";
        content = "<br><br>不论平地与山尖，<br><br>无限风光尽被占。<br><br>采得百花成蜜后，<br><br>为谁辛苦为谁甜？</p>";
        return title + author + content;
    } else if (name == "白居易") {
        title = "<br><br><br><h4 style=\"text-align: center;\">《赋得古原草送别》</h4>";
        content = "<br><br>离离原上草，一岁一枯荣。<br><br>野火烧不尽，春风吹又生。<br><br>远芳侵古道，晴翠接荒城。<br><br>又送王孙去，萋萋满别情。</p>";
        return title + author + content;
    } else if (name == "皮日休") {
        title = "<br><br><br><h4 style=\"text-align: center;\">《天竺寺八月十五日夜桂子》</h4>";
        content = "<br><br>玉颗珊珊下月轮，<br><br>殿前拾得露华新。<br><br>至今不会天中事，<br><br>应是嫦娥掷与人。</p>";
        return title + author + content;
    } else if (name == "杜荀鹤") {
        title = "<br><br><br><h4 style=\"text-align: center;\">《自叙》</h4>";
        content = "<br><br>酒瓮琴书伴病身，熟谙时事乐于贫。<br><br>宁为宇宙闲吟客，怕作乾坤窃禄人。<br><br>诗旨未能忘救物，世情奈值不容真。<br><br>平生肺腑无言处，白发吾唐一逸人。</p>";
        return title + author + content;
    } else if (name == "元稹") {
        title = "<br><br><br><h4 style=\"text-align: center;\">《离思五首·其四》</h4>";
        content = "<br><br>曾经沧海难为水，<br><br>除却巫山不是云。<br><br>取次花丛懒回顾，<br><br>半缘修道半缘君。</p>";
        return title + author + content;
    } else if (name == "张籍") {
        title = "<br><br><br><h4 style=\"text-align: center;\">《秋思》</h4>";
        content = "<br><br>洛阳城里见秋风，<br><br>欲作家书意万重。<br><br>复恐匆匆说不尽，<br><br>行人临发又开封。</p>";
        return title + author + content;
    } else if (name == "柳宗元") {
        title = "<br><br><br><h4 style=\"text-align: center;\">《溪居》</h4>";
        content = "<br><br>久为簪组累，幸此南夷谪。<br><br>闲依农圃邻，偶似山林客。<br><br>晓耕翻路草，夜榜响溪石。<br><br>来往不逢人，长歌楚天碧。</p>";
        return title + author + content;
    } else if (name == "韦应物") {
        title = "<br><br><br><h4 style=\"text-align: center;\">《淮上喜会梁川故友》</h4>";
        content = "<br><br>江汉曾为客，相逢每醉还。<br><br>浮云一别后，流水十年间。<br><br>欢笑情如旧，萧疏鬓已斑。<br><br>何因北归去，淮上对秋山。</p>";
        return title + author + content;
    } else if (name == "孟浩然") {
        title = "<br><br><br><h4 style=\"text-align: center;\">《过故人庄》</h4>";
        content = "<br><br>故人具鸡黍，邀我至田家。<br><br>绿树村边合，青山郭外斜。<br><br>开轩面场圃，把酒话桑麻。<br><br>待到重阳日，还来就菊花。</p>";
        return title + author + content;
    } else if (name == "张九龄") {
        title = "<br><br><br><h4 style=\"text-align: center;\">《彭蠡湖上》</h4>";
        content = "<br><br>庐山直阳浒，孤石当阴术。<br><br>一水云际飞，数峰湖心出。<br><br>象类何交纠，形言岂深悉。<br><br>且知皆自然，高下无相恤。</p>";
        return title + author + content;
    } else if (name == "皎然") {
        title = "<br><br><br><h4 style=\"text-align: center;\">《惜暮景》</h4>";
        content = "<br><br>疏阴花不动，<br><br>片景松梢度<br><br>夏日旧来长，<br><br>佳游何易暮。</p>";
        return title + author + content;
    } else if (name == "韦庄") {
        title = "<br><br><br><h4 style=\"text-align: center;\">《江外思乡》</h4>";
        content = "<br><br>年年春日异乡悲，<br><br>杜曲黄莺可得知。<br><br>更被夕阳江岸上，<br><br>断肠烟柳一丝丝。</p>";
        return title + author + content;
    } else if (name == "司空图") {
        title = "<br><br><br><h4 style=\"text-align: center;\">《故乡杏花》</h4>";
        content = "<br><br>寄花寄酒喜新开，<br><br>左把花枝右把杯。<br><br>欲问花枝与杯酒，<br><br>故人何得不同来。</p>";
        return title + author + content;
    } else if (name == "刘禹锡") {
        title = "<br><br><br><h4 style=\"text-align: center;\">《戏赠看花诸君子》</h4>";
        content = "<br><br>紫陌红尘拂面来，<br><br>无人不道看花回。<br><br>玄都观里桃千树，<br><br>尽是刘郎去后栽。</p>";
        return title + author + content;
    } else if (name == "王维") {
        title = "<br><br><br><h4 style=\"text-align: center;\">《山居秋暝》</h4>";
        content = "<br><br>空山新雨后，天气晚来秋。<br><br>明月松间照，清泉石上流。<br><br>竹喧归浣女，莲动下渔舟。<br><br>随意春芳歇，王孙自可留。</p>";
        return title + author + content;
    } else if (name == "高适") {
        title = "<br><br><br><h4 style=\"text-align: center;\">《塞上》</h4>";
        content = "<br><br>东出卢龙塞，浩然客思孤。<br><br>亭堠列万里，汉兵犹备胡。<br><br>边尘涨北溟，虏骑正南驱。<br><br>转斗岂长策，和亲非远图。</p>";
        return title + author + content;
    } else if (name == "卢纶") {
        title = "<br><br><br><h4 style=\"text-align: center;\">《和张仆射塞下曲·其三》</h4>";
        content = "<br><br>月黑雁飞高，<br><br>单于夜遁逃。<br><br>欲将轻骑逐，<br><br>大雪满弓刀。</p>";
        return title + author + content;
    } else if (name == "岑参") {
        title = "<br><br><br><h4 style=\"text-align: center;\">《逢入京使》</h4>";
        content = "<br><br>故园东望路漫漫，<br><br>双袖龙钟泪不干。<br><br>马上相逢无纸笔，<br><br>凭君传语报平安。</p>";
        return title + author + content;
    } else if (name == "李颀") {
        title = "<br><br><br><h4 style=\"text-align: center;\">《古从军行》</h4>";
        content = "<br><br>野云万里无城郭，雨雪纷纷连大漠。<br><br>胡雁哀鸣夜夜飞，胡儿眼泪双双落。<br><br>闻道玉门犹被遮，应将性命逐轻车。<br><br>年年战骨埋荒外，空见蒲桃入汉家。</p>";
        return title + author + content;
    } else if (name == "王昌龄") {
        title = "<br><br><br><h4 style=\"text-align: center;\">《出塞》</h4>";
        content = "<br><br>秦时明月汉时关，<br><br>万里长征人未还。<br><br>但使龙城飞将在，<br><br>不教胡马度阴山。</p>";
        return title + author + content;
    } else if (name == "李益") {
        title = "<br><br><br><h4 style=\"text-align: center;\">《夜发军中》</h4>";
        content = "<br><br>半夜军书至，匈奴寇六城。<br><br>中坚分暗阵，太乙起神兵。<br><br>出没风云合，苍黄豺虎争。<br><br>今日边庭战，缘赏不缘名。</p>";
        return title + author + content;
    }
}

function getThing(name) {
    if ((name == "浪漫主义") || (name == "现实主义") || (name == "边塞诗派") || (name == "山水田园")) {
        console.log("name::", name);
        return;
    }
    var thing = document.getElementById('thing');
    var myChartThing = echarts.init(thing);
    var data_x = {
        "李益": ["桃李", "空山", "古寺"],
        "皎然": ["胡笳", "瀚海", "天山", "剑", "落日", "秋月", "戟", "孤城", "刁斗", "旌旗"],
        "王维": ["落日", "孤城", "羌笛", "凉州", "阳关", "剑", "大漠", "孤烟", "旌旗", "戟", "画角", "瀚海", "秋月", "刁斗", "天山"],
        "罗隐": ["梅花", "松", "柳", "黄昏", "落日", "落花", "杜鹃", "寒月", "孤舟"],
        "张九龄": ["落日", "剑", "楼兰"],
        "皮日休": ["松", "柳", "黄昏", "孤舟", "菊花"],
        "元稹": ["柳", "菊花", "黄昏", "杜鹃", "古塞", "松", "梅花", "鸿雁", "禾黍", "落花", "寒月", "落日"],
        "韦庄": ["剑", "雨雪", "琵琶", "落日", "旌旗", "孤城", "羌笛", "秋月", "戟", "瀚海", "画角", "楼兰", "金鼓"],
        "王昌龄": ["桃李", "柴门", "古寺", "空山", "禅房", "空林"],
        "高适": ["桃李", "古木", "葵藿", "空山", "柴门", "空林"],
        "韦应物": ["落日", "剑", "戟", "孤烟", "秋月", "雨雪", "阴山", "孤城"],
        "杜牧": ["雨", "佳人", "青山", "梅", "明月", "菊", "孤云", "松柏", "天阶", "瑶池", "落叶", "剑", "酒杯", "杨柳", "梧桐", "江水"],
        "卢纶": ["柳", "松", "秋云", "寒月", "落日", "禾黍", "落花", "菊花", "孤舟", "梅花", "鸿雁", "古塞", "杜鹃"],
        "司空图": ["金鼓", "剑", "孤烟", "戟", "落日"],
        "白居易": ["菊花", "柳", "黄昏", "松", "梅花", "寒月", "落日", "落花", "孤舟", "秋云", "杜鹃", "禾黍"],
        "刘禹锡": ["凉州", "羌笛", "剑", "雨雪", "云海", "旌旗", "秋月", "孤城", "烽火", "古道", "戟", "画角", "雁飞", "琵琶", "辕门", "阴山", "落日"],
        "岑参": ["古木", "空山", "荆扉", "菊花", "柴门", "寺僧", "伯夷", "道人", "麦苗", "叔齐", "空林", "禅房"],
        "张籍": ["柳", "菊花", "松", "落日", "落花", "禾黍", "危城"],
        "李白": ["菊", "剑", "梅", "明月", "雨", "松柏", "杨柳", "瑶池", "孤云", "江水", "青山", "梧桐", "青草", "佳人", "酒杯", "落叶", "青丝", "大鹏", "青鸟", "蓬山"],
        "李贺": ["剑", "青山", "雨", "梅", "杨柳", "菊", "明月", "松柏", "青鸟", "佳人", "酒杯", "青丝", "青草"],
        "李颀": ["禅房", "荆扉", "菊花", "空山", "桃李", "空林", "柴门", "接舆"],
        "李商隐": ["梧桐", "梅", "雨", "明月", "菊", "瑶池", "杨柳", "江水", "孤云", "佳人", "落叶", "剑", "蓬山", "青鸟", "青草", "天阶", "青山", "松柏"],
        "杜甫": ["柳", "落花", "松", "菊花", "落日", "梅花", "鸿雁", "古塞", "黄昏", "孤舟", "暮砧", "秋云", "寒月", "啼猿", "高江", "急峡", "杜鹃", "禾黍", "枯棕", "枯楠"],
        "杜荀鹤": ["松", "柳", "孤舟", "寒月", "落日", "菊花", "鸿雁"],
        "孟浩然": ["剑", "琵琶", "凉州", "羌笛", "胡笳", "云海", "落日", "孤烟", "沙碛"],
        "柳宗元": ["剑", "孤城", "戟", "落日", "秋月", "辕门", "古道", "大漠", "雨雪"]
    };
    var data_y = {
        "李益": [3, 3, 1],
        "皎然": [1, 2, 2, 9, 6, 1, 1, 2, 1, 1],
        "王维": [13, 1, 1, 2, 4, 13, 1, 6, 7, 3, 2, 3, 3, 1, 2],
        "罗隐": [4, 15, 32, 2, 2, 1, 1, 1, 10],
        "张九龄": [3, 10, 1],
        "皮日休": [79, 16, 2, 6, 1],
        "元稹": [62, 2, 6, 5, 1, 49, 2, 2, 4, 4, 2, 5],
        "韦庄": [23, 1, 6, 2, 3, 1, 1, 2, 2, 1, 2, 1, 1],
        "王昌龄": [1, 1, 1, 2, 1, 1],
        "高适": [4, 1, 2, 2, 2, 1],
        "韦应物": [4, 6, 3, 1, 2, 1, 1, 1],
        "杜牧": [88, 8, 6, 22, 17, 7, 4, 1, 1, 2, 2, 12, 3, 2, 2, 1],
        "卢纶": [24, 34, 3, 3, 5, 3, 2, 2, 2, 1, 3, 1, 1],
        "司空图": [2, 7, 1, 1, 1],
        "白居易": [12, 188, 20, 221, 9, 5, 7, 11, 16, 6, 7, 7],
        "刘禹锡": [2, 3, 24, 1, 2, 21, 3, 2, 2, 3, 11, 2, 1, 1, 1, 2, 2],
        "岑参": [1, 6, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1],
        "张籍": [19, 1, 22, 1, 4, 6, 1],
        "李白": [6, 116, 30, 74, 77, 8, 10, 6, 4, 15, 23, 16, 2, 11, 1, 11, 5, 3, 8, 1],
        "李贺": [31, 4, 32, 7, 2, 4, 6, 2, 1, 1, 1, 1, 1],
        "李颀": [2, 1, 1, 4, 3, 1, 1, 1],
        "李商隐": [2, 16, 82, 3, 7, 4, 8, 6, 1, 7, 2, 17, 4, 2, 1, 1, 1, 1],
        "杜甫": [79, 3, 83, 11, 36, 9, 9, 3, 7, 22, 2, 5, 2, 4, 1, 1, 5, 4, 1, 1],
        "杜荀鹤": [28, 16, 2, 1, 2, 1, 1],
        "孟浩然": [6, 2, 3, 2, 2, 1, 4, 1, 1],
        "柳宗元": [5, 1, 4, 3, 3, 1, 2, 2, 2]
    };
    var option = {
        title: {
            text: name,
            // textAlign: "auto",
            // textVerticalAlign: "middle"
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [{
            type: 'category',
            // data: ['Mon', 'Tue', 'Wed', 'Thu'],
            data: data_x[name],
            axisTick: {
                alignWithLabel: true
            }
        }],
        yAxis: [{
            type: 'value'
        }],
        series: [{
            name: '出现数量',
            type: 'bar',
            barWidth: '50%',
            // data: [10, 52, 200, 334],
            data: data_y[name]
        }]
    };
    myChartThing.setOption(option);

}