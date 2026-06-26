export const attractions = [
  {
    id: 1,
    name: '故宫博物院',
    city: '北京',
    region: '华北',
    category: '历史文化',
    suitable_for: ['全年龄段'],
    best_season: '春秋',
    best_months: ['4月', '5月', '9月', '10月'],
    rating: 4.8,
    ticket_price: 60,
    open_time: '08:30-17:00（旺季）/ 08:30-16:30（淡季），周一闭馆',
    suggested_duration: '4-6小时',
    description:
      '故宫博物院位于北京市中心，是中国明清两代的皇家宫殿，旧称紫禁城。故宫博物院建立于1925年，是中国最大的古代文化艺术博物馆，收藏有大量古代艺术珍品，是中国古代建筑艺术的精华。',
    highlights: ['世界现存规模最大的古建筑群', '馆藏文物180余万件', '三大殿气势恢宏', '珍宝馆与钟表馆不容错过'],
    images: [],
    transportation: {
      airport: { name: '北京首都国际机场', distance: '30公里', duration: '约50分钟车程' },
      train: { nearest_station: '北京站', distance: '3公里', duration: '约15分钟车程' },
      bus: { routes: ['1路', '52路', '观光1线'], description: '天安门东/天安门西站下车' },
      self_driving: { route: '导航至"故宫博物院"，建议停在周边停车场', parking: '周边有多个收费停车场' },
      tips: '地铁1号线天安门东站/天安门西站出站步行即达，最为便捷。'
    },
    best_travel_time: {
      best_season: '春秋',
      best_months: ['4月', '5月', '9月', '10月'],
      daily_time: '建议早上8:30开馆即入场，避开人流高峰',
      peak_season: '4月-10月（旺季）',
      off_season: '11月-次年3月（淡季）',
      avoid_time: '国庆黄金周、五一假期人流量极大'
    },
    travel_tips: '建议提前7天在官网预约购票；参观需携带身份证；建议穿舒适的鞋子，游览面积很大。',
    coordinates: { lat: 39.9163, lng: 116.3972 }
  },
  {
    id: 2,
    name: '八达岭长城',
    city: '北京',
    region: '华北',
    category: '历史文化',
    suitable_for: ['青年', '中年'],
    best_season: '春秋',
    best_months: ['4月', '5月', '9月', '10月'],
    rating: 4.7,
    ticket_price: 40,
    open_time: '06:30-19:00（旺季）/ 07:00-18:00（淡季）',
    suggested_duration: '3-5小时',
    description:
      '八达岭长城是明长城中保存最完好、最具代表性的一段，位于北京市延庆区。它是万里长城的精华所在，地势险要，城关坚固，被誉为"不到长城非好汉"的打卡胜地。',
    highlights: ['明长城精华段', '好汉坡打卡', '缆车俯瞰全景', '长城博物馆'],
    images: [],
    transportation: {
      airport: { name: '北京首都国际机场', distance: '70公里', duration: '约90分钟车程' },
      train: { nearest_station: '八达岭站（S2线）', distance: '步行可达', duration: '约80分钟从市区出发' },
      bus: { routes: ['877路', '919路'], description: '德胜门乘877路直达' },
      self_driving: { route: '京藏高速（G6）八达岭出口', parking: '景区停车场充足' },
      tips: '推荐乘坐S2线城际列车，沿途风景优美，经济实惠。'
    },
    best_travel_time: {
      best_season: '春秋',
      best_months: ['4月', '5月', '9月', '10月'],
      daily_time: '建议上午8点前到达，避开团队游客高峰',
      peak_season: '4月-10月',
      off_season: '11月-次年3月',
      avoid_time: '国庆期间人满为患，建议避开'
    },
    travel_tips: '穿防滑运动鞋，部分台阶较陡；春秋早晚温差大，带外套；可自带水和零食。',
    coordinates: { lat: 40.3541, lng: 116.0202 }
  },
  {
    id: 3,
    name: '西湖',
    city: '杭州',
    region: '华东',
    category: '自然风光',
    suitable_for: ['全年龄段'],
    best_season: '全年',
    best_months: ['3月', '4月', '5月', '10月', '11月'],
    rating: 4.8,
    ticket_price: 0,
    open_time: '全天开放',
    suggested_duration: '半天至一天',
    description:
      '西湖位于浙江省杭州市，是中国十大风景名胜之一，也是世界文化遗产。西湖三面环山，一面临城，湖光山色美不胜收。"欲把西湖比西子，淡妆浓抹总相宜"，苏东坡的诗句道尽了西湖之美。',
    highlights: ['断桥残雪', '苏堤春晓', '三潭印月', '雷峰夕照', '曲院风荷'],
    images: [],
    transportation: {
      airport: { name: '杭州萧山国际机场', distance: '30公里', duration: '约50分钟' },
      train: { nearest_station: '杭州东站/杭州站', distance: '市区内', duration: '地铁可达' },
      bus: { routes: ['7路', '51路', '52路', '环湖观光车'], description: '多条公交线路环绕西湖' },
      self_driving: { route: '导航至西湖景区', parking: '节假日停车紧张，建议公交出行' },
      tips: '地铁1号线龙翔桥站出站即达湖滨；推荐骑共享单车环湖游览。'
    },
    best_travel_time: {
      best_season: '全年',
      best_months: ['3月', '4月', '5月', '10月', '11月'],
      daily_time: '清晨和傍晚景色最美，拍照效果最佳',
      peak_season: '3月-5月，10月-11月',
      off_season: '1月-2月',
      avoid_time: '黄金周游客爆满，建议避开'
    },
    travel_tips: '免费开放，部分景点另收门票；建议租自行车游览（约20元/天）；雨天西湖别有韵味。',
    coordinates: { lat: 30.2590, lng: 120.1361 }
  },
  {
    id: 4,
    name: '黄山',
    city: '黄山',
    region: '华东',
    category: '自然风光',
    suitable_for: ['青年', '中年'],
    best_season: '春秋',
    best_months: ['4月', '5月', '9月', '10月'],
    rating: 4.9,
    ticket_price: 190,
    open_time: '06:30-17:00',
    suggested_duration: '2天',
    description:
      '黄山位于安徽省黄山市，是中国十大名山之一，世界文化与自然双重遗产。以奇松、怪石、云海、温泉、冬雪五绝著称于世，自古有"五岳归来不看山，黄山归来不看岳"的美誉。',
    highlights: ['迎客松', '光明顶日出', '西海大峡谷', '天都峰', '云海奇观'],
    images: [],
    transportation: {
      airport: { name: '黄山屯溪国际机场', distance: '60公里', duration: '约70分钟车程' },
      train: { nearest_station: '黄山北站', distance: '50公里', duration: '约60分钟车程' },
      bus: { routes: ['景区换乘大巴'], description: '黄山北站/屯溪有直达景区班车' },
      self_driving: { route: '杭瑞高速/G56黄山出口', parking: '汤口换乘中心停车后乘景区大巴上山' },
      tips: '景区需在汤口换乘中心换乘景区大巴（19元/人），自驾车不能上山。'
    },
    best_travel_time: {
      best_season: '春秋',
      best_months: ['4月', '5月', '9月', '10月'],
      daily_time: '建议6:30第一批上山，可在山上住一晚看日出',
      peak_season: '4月-10月',
      off_season: '12月-次年2月（可赏雪景）',
      avoid_time: '黄金周期间山上住宿需提前数月预订'
    },
    travel_tips: '山上住宿需提前预订；带冲锋衣防风防雨；体力一般建议坐索道（云谷索道/玉屏索道）；雷雨天禁止登山。',
    coordinates: { lat: 30.1346, lng: 118.1685 }
  },
  {
    id: 5,
    name: '张家界国家森林公园',
    city: '张家界',
    region: '华中',
    category: '自然风光',
    suitable_for: ['青年', '中年'],
    best_season: '春秋',
    best_months: ['4月', '5月', '9月', '10月'],
    rating: 4.7,
    ticket_price: 228,
    open_time: '07:00-18:00',
    suggested_duration: '2-3天',
    description:
      '张家界国家森林公园位于湖南省张家界市，是中国第一个国家森林公园。以独特的石英砂岩峰林地貌著称，三千奇峰拔地而起，被誉为"缩小的仙境，放大的盆景"，《阿凡达》曾在此取景。',
    highlights: ['袁家界（阿凡达悬浮山）', '天子山', '金鞭溪', '天门山玻璃栈道', '百龙天梯'],
    images: [],
    transportation: {
      airport: { name: '张家界荷花国际机场', distance: '30公里', duration: '约40分钟车程' },
      train: { nearest_station: '张家界西站', distance: '25公里', duration: '约35分钟车程' },
      bus: { routes: ['武陵源专线'], description: '火车站/机场有直达武陵源景区的大巴' },
      self_driving: { route: '长张高速→张家界出口', parking: '景区门口有大型停车场' },
      tips: '张家界景点分散，建议报当地一日游或包车（300-500元/天）。'
    },
    best_travel_time: {
      best_season: '春秋',
      best_months: ['4月', '5月', '9月', '10月'],
      daily_time: '上午7点入园，先游袁家界再下山',
      peak_season: '4月-10月',
      off_season: '11月-次年3月',
      avoid_time: '雨季（6-7月）山路湿滑，大雾影响观景'
    },
    travel_tips: '景区面积大，建议至少安排2天；门票4天有效；带好雨具和防滑鞋；天门山需单独购票。',
    coordinates: { lat: 29.3312, lng: 110.4371 }
  },
  {
    id: 6,
    name: '九寨沟',
    city: '阿坝',
    region: '西南',
    category: '自然风光',
    suitable_for: ['全年龄段'],
    best_season: '秋季',
    best_months: ['9月', '10月', '11月'],
    rating: 4.9,
    ticket_price: 169,
    open_time: '08:30-17:00',
    suggested_duration: '1-2天',
    description:
      '九寨沟位于四川省阿坝藏族羌族自治州，是世界自然遗产、国家重点风景名胜区。以翠海、叠瀑、彩林、雪峰、蓝冰、藏情六绝闻名，被誉为"人间仙境"、"童话世界"。',
    highlights: ['五花海', '珍珠滩瀑布', '诺日朗瀑布', '长海', '五彩池'],
    images: [],
    transportation: {
      airport: { name: '九寨黄龙机场', distance: '80公里', duration: '约90分钟车程' },
      train: { nearest_station: '成都东站（需转车）', distance: '约400公里', duration: '约8小时' },
      bus: { routes: ['成都新南门车站—九寨沟直达班车'], description: '成都出发约8-10小时' },
      self_driving: { route: '成都—都江堰—汶川—茂县—松潘—九寨沟', parking: '景区停车场' },
      tips: '推荐飞九寨黄龙机场+包车，省时省力；火车到成都后可报旅行团大巴前往。'
    },
    best_travel_time: {
      best_season: '秋季',
      best_months: ['9月', '10月', '11月'],
      daily_time: '上午8:30入园，坐景区观光车从上往下游览',
      peak_season: '9月-10月（秋色最佳）',
      off_season: '12月-次年3月（可赏雪景）',
      avoid_time: '暑期雨季可能引发泥石流，需关注天气'
    },
    travel_tips: '海拔2000-3000米，注意高反；景区内统一乘坐观光车；秋季需提前一个月订票；早晚温差大。',
    coordinates: { lat: 33.2520, lng: 103.9185 }
  },
  {
    id: 7,
    name: '兵马俑',
    city: '西安',
    region: '西北',
    category: '历史文化',
    suitable_for: ['全年龄段'],
    best_season: '全年',
    best_months: ['3月', '4月', '5月', '9月', '10月'],
    rating: 4.8,
    ticket_price: 120,
    open_time: '08:30-18:00（旺季）/ 08:30-17:30（淡季）',
    suggested_duration: '2-3小时',
    description:
      '秦始皇兵马俑博物馆位于陕西省西安市临潼区，是世界第八大奇迹。三个兵马俑坑展示了秦始皇陵的宏伟陪葬阵容，气势磅礴，令人震撼，是了解秦朝历史文化的绝佳窗口。',
    highlights: ['一号坑千军万马阵列', '青铜马车', '将军俑', '跪射俑'],
    images: [],
    transportation: {
      airport: { name: '西安咸阳国际机场', distance: '55公里', duration: '约60分钟车程' },
      train: { nearest_station: '西安北站/西安站', distance: '35公里', duration: '约50分钟车程' },
      bus: { routes: ['游5/306路', '915路'], description: '西安火车站东广场乘坐直达' },
      self_driving: { route: '连霍高速/G30临潼出口', parking: '景区大型停车场，10元/次' },
      tips: '地铁9号线华清池站出站换乘公交可达；游5路（306）最实惠，7元/人。'
    },
    best_travel_time: {
      best_season: '全年',
      best_months: ['3月', '4月', '5月', '9月', '10月'],
      daily_time: '建议上午8:30开门即到，先看一号坑',
      peak_season: '3月-10月',
      off_season: '11月-次年2月',
      avoid_time: '黄金周排队时间可达2小时以上'
    },
    travel_tips: '建议请讲解员（约100元/组）或租讲解器；馆内禁止使用闪光灯；可顺游华清池。',
    coordinates: { lat: 34.3857, lng: 109.2756 }
  },
  {
    id: 8,
    name: '三亚天涯海角',
    city: '三亚',
    region: '华南',
    category: '自然风光',
    suitable_for: ['全年龄段'],
    best_season: '冬季',
    best_months: ['11月', '12月', '1月', '2月', '3月'],
    rating: 4.3,
    ticket_price: 81,
    open_time: '07:30-18:00',
    suggested_duration: '2-3小时',
    description:
      '天涯海角位于海南省三亚市，是海南的标志性景区。以天涯石、海角石、南天一柱等巨石景观闻名。碧海蓝天、椰风海韵，是冬季避寒度假的理想之地。',
    highlights: ['天涯石', '海角石', '南天一柱', '椰梦长廊', '海上日落'],
    images: [],
    transportation: {
      airport: { name: '三亚凤凰国际机场', distance: '15公里', duration: '约25分钟车程' },
      train: { nearest_station: '三亚站', distance: '20公里', duration: '约35分钟车程' },
      bus: { routes: ['16路', '25路', '29路'], description: '市区多条公交可达' },
      self_driving: { route: '海南环岛高速G98三亚出口', parking: '景区停车场' },
      tips: '三亚公交车覆盖较广，打车起步价10元；租车自驾环岛也是不错的选择。'
    },
    best_travel_time: {
      best_season: '冬季',
      best_months: ['11月', '12月', '1月', '2月', '3月'],
      daily_time: '下午3点后入园，可看海上日落',
      peak_season: '11月-次年3月',
      off_season: '5月-9月（台风季）',
      avoid_time: '暑期炎热且多台风，需谨慎出行'
    },
    travel_tips: '做好防晒（紫外线强）；可乘电瓶车游览（15元/人）；附近有海鲜市场可品尝当地美食。',
    coordinates: { lat: 18.2412, lng: 109.3454 }
  },
  {
    id: 9,
    name: '丽江古城',
    city: '丽江',
    region: '西南',
    category: '城市休闲',
    suitable_for: ['青年', '情侣'],
    best_season: '全年',
    best_months: ['4月', '5月', '9月', '10月'],
    rating: 4.5,
    ticket_price: 0,
    open_time: '全天开放',
    suggested_duration: '2-3天',
    description:
      '丽江古城位于云南省丽江市，是世界文化遗产。古城以四方街为中心，小桥流水、青石板路、纳西族民居构成了独特的古城风貌。这里也是著名的"艳遇之都"，文艺青年的天堂。',
    highlights: ['四方街', '大水车', '木府', '狮子山万古楼', '酒吧街'],
    images: [],
    transportation: {
      airport: { name: '丽江三义国际机场', distance: '28公里', duration: '约40分钟车程' },
      train: { nearest_station: '丽江站', distance: '7公里', duration: '约15分钟车程' },
      bus: { routes: ['4路', '16路'], description: '火车站/客运站有公交直达古城' },
      self_driving: { route: '大丽高速→丽江出口', parking: '古城周边有多个停车场，约30-50元/天' },
      tips: '古城内禁止机动车通行；机场大巴20元/人；打车约80-100元。'
    },
    best_travel_time: {
      best_season: '全年',
      best_months: ['4月', '5月', '9月', '10月'],
      daily_time: '清晨的古城最安静，夜晚的酒吧街最热闹',
      peak_season: '7月-8月，春节',
      off_season: '12月-次年1月',
      avoid_time: '暑期人多住宿紧张，建议提前预订'
    },
    travel_tips: '海拔2400米，注意防晒和高反；古城维护费已取消；推荐品尝腊排骨、鸡豆凉粉；周边可游玉龙雪山。',
    coordinates: { lat: 26.8721, lng: 100.2299 }
  },
  {
    id: 10,
    name: '布达拉宫',
    city: '拉萨',
    region: '西南',
    category: '历史文化',
    suitable_for: ['青年', '中年'],
    best_season: '夏季',
    best_months: ['5月', '6月', '7月', '8月', '9月'],
    rating: 4.9,
    ticket_price: 200,
    open_time: '09:30-15:00',
    suggested_duration: '2-3小时',
    description:
      '布达拉宫位于西藏拉萨市，是世界上海拔最高的宏伟建筑群，藏传佛教的圣殿。宫殿依山而建，红白相间，气势雄伟。1994年被列为世界文化遗产，是西藏最神圣的地方。',
    highlights: ['白宫', '红宫', '金顶群', '灵塔殿', '壁画长廊'],
    images: [],
    transportation: {
      airport: { name: '拉萨贡嘎国际机场', distance: '60公里', duration: '约70分钟车程' },
      train: { nearest_station: '拉萨站', distance: '8公里', duration: '约20分钟车程' },
      bus: { routes: ['8路', '13路', '24路'], description: '市区多条公交可达布达拉宫广场' },
      self_driving: { route: '川藏线/青藏线→拉萨市区', parking: '布达拉宫广场地下停车场' },
      tips: '进藏推荐坐火车，可逐步适应高海拔；拉萨市内打车10元起步；三轮车也是特色出行方式。'
    },
    best_travel_time: {
      best_season: '夏季',
      best_months: ['5月', '6月', '7月', '8月', '9月'],
      daily_time: '建议预约上午场次，光线好',
      peak_season: '5月-10月',
      off_season: '11月-次年4月（冬季寒冷）',
      avoid_time: '冬季部分时间闭馆维护，需提前查询'
    },
    travel_tips: '需提前7天在官网预约；海拔3650米，注意高反，建议先在拉萨适应1-2天；殿内禁止拍照；需着长裤。',
    coordinates: { lat: 29.6575, lng: 91.1172 }
  }
]
