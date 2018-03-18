const Promise = require('bluebird');
require('isomorphic-fetch');

const slugs = [
  '一',
  '二',
  '九',
  '七',
  '人',
  '入',
  '八',
  '力',
  '十',
  '三',
  '上',
  '下',
  '口',
  '大',
  '女',
  '山',
  '川',
  '工',
  '刀',
  '土',
  '千',
  '夕',
  '子',
  '小',
  '丁',
  '了',
  '又',
  '丸',
  '才',
  '中',
  '五',
  '六',
  '円',
  '天',
  '手',
  '文',
  '日',
  '月',
  '木',
  '水',
  '火',
  '犬',
  '王',
  '出',
  '右',
  '四',
  '左',
  '本',
  '正',
  '玉',
  '田',
  '白',
  '目',
  '石',
  '立',
  '万',
  '久',
  '今',
  '元',
  '公',
  '内',
  '分',
  '切',
  '午',
  '友',
  '太',
  '少',
  '引',
  '心',
  '戸',
  '方',
  '牛',
  '父',
  '毛',
  '止',
  '兄',
  '冬',
  '北',
  '半',
  '古',
  '台',
  '外',
  '市',
  '広',
  '母',
  '用',
  '矢',
  '世',
  '主',
  '他',
  '代',
  '写',
  '去',
  '号',
  '央',
  '平',
  '打',
  '氷',
  '申',
  '皮',
  '皿',
  '礼',
  '休',
  '先',
  '名',
  '字',
  '年',
  '早',
  '気',
  '百',
  '竹',
  '糸',
  '耳',
  '虫',
  '村',
  '男',
  '町',
  '花',
  '見',
  '貝',
  '赤',
  '足',
  '車',
  '不',
  '仕',
  '交',
  '会',
  '光',
  '同',
  '回',
  '多',
  '当',
  '毎',
  '池',
  '米',
  '羽',
  '考',
  '肉',
  '自',
  '色',
  '行',
  '西',
  '何',
  '体',
  '作',
  '図',
  '声',
  '売',
  '弟',
  '形',
  '来',
  '社',
  '角',
  '言',
  '谷',
  '走',
  '近',
  '里',
  '麦',
  '学',
  '林',
  '空',
  '金',
  '雨',
  '青',
  '草',
  '音',
  '化',
  '地',
  '両',
  '全',
  '向',
  '安',
  '州',
  '曲',
  '有',
  '次',
  '死',
  '羊',
  '血',
  '京',
  '国',
  '夜',
  '妹',
  '姉',
  '店',
  '明',
  '東',
  '歩',
  '画',
  '直',
  '知',
  '長',
  '前',
  '南',
  '室',
  '後',
  '思',
  '星',
  '活',
  '海',
  '点',
  '科',
  '茶',
  '食',
  '首',
  '欠',
  '氏',
  '由',
  '札',
  '民',
  '辺',
  '付',
  '以',
  '失',
  '必',
  '未',
  '末',
  '校',
  '夏',
  '家',
  '弱',
  '時',
  '紙',
  '記',
  '通',
  '高',
  '強',
  '教',
  '理',
  '組',
  '船',
  '週',
  '雪',
  '魚',
  '鳥',
  '黄',
  '黒',
  '支',
  '住',
  '助',
  '医',
  '君',
  '対',
  '局',
  '役',
  '投',
  '決',
  '究',
  '身',
  '者',
  '研',
  '馬',
  '森',
  '場',
  '朝',
  '番',
  '答',
  '絵',
  '買',
  '道',
  '間',
  '雲',
  '数',
  '楽',
  '話',
  '電',
  '所',
  '事',
  '使',
  '具',
  '受',
  '和',
  '始',
  '定',
  '実',
  '服',
  '泳',
  '物',
  '苦',
  '表',
  '部',
  '乗',
  '客',
  '屋',
  '度',
  '待',
  '持',
  '界',
  '発',
  '相',
  '県',
  '美',
  '負',
  '送',
  '重',
  '談',
  '要',
  '勝',
  '仮',
  '起',
  '速',
  '配',
  '酒',
  '院',
  '終',
  '習',
  '転',
  '進',
  '落',
  '葉',
  '軽',
  '運',
  '開',
  '集',
  '飲',
  '業',
  '漢',
  '路',
  '農',
  '鉄',
  '歌',
  '算',
  '聞',
  '語',
  '読',
  '鳴',
  '線',
  '横',
  '調',
  '親',
  '頭',
  '顔',
  '病',
  '最',
  '争',
  '仲',
  '伝',
  '共',
  '好',
  '成',
  '老',
  '位',
  '低',
  '初',
  '別',
  '利',
  '努',
  '労',
  '命',
  '岸',
  '放',
  '昔',
  '波',
  '注',
  '育',
  '拾',
  '指',
  '洋',
  '神',
  '秒',
  '級',
  '追',
  '戦',
  '競',
  '良',
  '功',
  '特',
  '便',
  '働',
  '令',
  '意',
  '味',
  '勉',
  '庭',
  '息',
  '旅',
  '根',
  '流',
  '消',
  '倍',
  '員',
  '島',
  '祭',
  '章',
  '第',
  '都',
  '動',
  '商',
  '悪',
  '族',
  '深',
  '球',
  '童',
  '陽',
  '階',
  '寒',
  '悲',
  '暑',
  '期',
  '植',
  '歯',
  '温',
  '港',
  '湯',
  '登',
  '着',
  '短',
  '野',
  '泉',
  '生',
  '亡',
  '合',
  '風',
  '予',
  '反',
  '々',
  '新',
  '返',
  '問',
  '宿',
  '想',
  '感',
  '整',
  '暗',
  '様',
  '橋',
  '福',
  '緑',
  '練',
  '詩',
  '銀',
  '題',
  '館',
  '駅',
  '億',
  '器',
  '士',
  '料',
  '標',
  '殺',
  '然',
  '熱',
  '課',
  '賞',
  '輪',
  '選',
  '鏡',
  '願',
  '養',
  '像',
  '情',
  '謝',
  '映',
  '疑',
  '皆',
  '例',
  '卒',
  '協',
  '参',
  '周',
  '囲',
  '固',
  '季',
  '完',
  '希',
  '念',
  '折',
  '望',
  '材',
  '束',
  '松',
  '残',
  '求',
  '的',
  '約',
  '芸',
  '基',
  '性',
  '技',
  '格',
  '能',
  '術',
  '私',
  '骨',
  '妥',
  '雰',
  '頑',
  '寺',
  '岩',
  '帰',
  '春',
  '昼',
  '晴',
  '秋',
  '計',
  '列',
  '区',
  '坂',
  '式',
  '信',
  '勇',
  '単',
  '司',
  '変',
  '夫',
  '建',
  '昨',
  '毒',
  '法',
  '泣',
  '浅',
  '紀',
  '英',
  '軍',
  '飯',
  '仏',
  '築',
  '晩',
  '猫',
  '園',
  '曜',
  '書',
  '遠',
  '門',
  '係',
  '取',
  '品',
  '守',
  '幸',
  '急',
  '真',
  '箱',
  '荷',
  '面',
  '典',
  '喜',
  '府',
  '治',
  '浴',
  '笑',
  '辞',
  '関',
  '保',
  '弁',
  '政',
  '留',
  '証',
  '険',
  '危',
  '存',
  '専',
  '冒',
  '冗',
  '阪',
  '原',
  '細',
  '薬',
  '鼻',
  '側',
  '兵',
  '堂',
  '塩',
  '席',
  '敗',
  '果',
  '栄',
  '梅',
  '無',
  '結',
  '因',
  '常',
  '識',
  '非',
  '干',
  '是',
  '渉',
  '虚',
  '官',
  '察',
  '底',
  '愛',
  '署',
  '警',
  '恋',
  '覚',
  '説',
  '幻',
  '訓',
  '試',
  '弓',
  '告',
  '種',
  '達',
  '類',
  '報',
  '祈',
  '等',
  '汽',
  '借',
  '焼',
  '座',
  '忘',
  '洗',
  '胸',
  '脳',
  '僧',
  '禅',
  '験',
  '可',
  '許',
  '枚',
  '静',
  '句',
  '禁',
  '喫',
  '煙',
  '加',
  '節',
  '減',
  '順',
  '容',
  '布',
  '易',
  '財',
  '若',
  '詞',
  '昆',
  '閥',
  '歴',
  '舌',
  '冊',
  '宇',
  '宙',
  '忙',
  '履',
  '団',
  '暴',
  '混',
  '乱',
  '徒',
  '得',
  '改',
  '続',
  '連',
  '善',
  '困',
  '絡',
  '比',
  '災',
  '機',
  '率',
  '飛',
  '害',
  '余',
  '難',
  '妨',
  '被',
  '裕',
  '震',
  '尻',
  '尾',
  '械',
  '確',
  '嫌',
  '個',
  '圧',
  '在',
  '夢',
  '産',
  '倒',
  '臭',
  '厚',
  '妻',
  '議',
  '犯',
  '罪',
  '防',
  '穴',
  '論',
  '経',
  '笛',
  '史',
  '敵',
  '済',
  '委',
  '挙',
  '判',
  '制',
  '務',
  '査',
  '総',
  '設',
  '資',
  '権',
  '件',
  '派',
  '岡',
  '素',
  '断',
  '評',
  '批',
  '任',
  '検',
  '審',
  '条',
  '責',
  '省',
  '増',
  '税',
  '解',
  '際',
  '認',
  '企',
  '義',
  '罰',
  '誕',
  '脱',
  '過',
  '坊',
  '寝',
  '宮',
  '各',
  '案',
  '置',
  '費',
  '価',
  '勢',
  '営',
  '示',
  '統',
  '領',
  '策',
  '藤',
  '副',
  '観',
  '値',
  '吸',
  '域',
  '姿',
  '応',
  '提',
  '援',
  '状',
  '態',
  '賀',
  '収',
  '停',
  '革',
  '職',
  '鬼',
  '規',
  '護',
  '割',
  '裁',
  '崎',
  '演',
  '律',
  '師',
  '看',
  '準',
  '則',
  '備',
  '導',
  '幹',
  '張',
  '優',
  '宅',
  '沢',
  '贅',
  '施',
  '現',
  '乳',
  '呼',
  '城',
  '俳',
  '秀',
  '担',
  '額',
  '製',
  '違',
  '輸',
  '燃',
  '祝',
  '届',
  '狭',
  '肩',
  '腕',
  '腰',
  '触',
  '載',
  '層',
  '型',
  '庁',
  '視',
  '差',
  '管',
  '象',
  '量',
  '境',
  '環',
  '武',
  '質',
  '述',
  '供',
  '展',
  '販',
  '株',
  '限',
  '与',
  '含',
  '影',
  '況',
  '渡',
  '響',
  '票',
  '景',
  '抜',
  '訴',
  '訟',
  '逮',
  '補',
  '候',
  '構',
  '模',
  '捕',
  '鮮',
  '効',
  '属',
  '慣',
  '豊',
  '満',
  '肥',
  '巻',
  '捜',
  '絞',
  '輩',
  '隠',
  '掛',
  '替',
  '居',
  '造',
  '授',
  '印',
  '創',
  '復',
  '往',
  '較',
  '筆',
  '鉛',
  '貯',
  '故',
  '障',
  '従',
  '我',
  '激',
  '刺',
  '励',
  '討',
  '郵',
  '針',
  '徴',
  '怪',
  '獣',
  '突',
  '菓',
  '河',
  '振',
  '汗',
  '豚',
  '再',
  '接',
  '独',
  '占',
  '招',
  '段',
  '胃',
  '腹',
  '痛',
  '退',
  '屈',
  '悩',
  '暇',
  '織',
  '貸',
  '迷',
  '惑',
  '誘',
  '就',
  '訪',
  '怒',
  '昇',
  '眠',
  '睡',
  '症',
  '締',
  '迫',
  '靴',
  '濃',
  '端',
  '極',
  '途',
  '健',
  '康',
  '郎',
  '給',
  '逆',
  '巨',
  '庫',
  '児',
  '冷',
  '凍',
  '幼',
  '稚',
  '処',
  '博',
  '清',
  '潔',
  '録',
  '隊',
  '修',
  '券',
  '婦',
  '奇',
  '妙',
  '麗',
  '微',
  '益',
  '移',
  '程',
  '精',
  '絶',
  '並',
  '憲',
  '衆',
  '傘',
  '浜',
  '撃',
  '攻',
  '監',
  '杯',
  '乾',
  '催',
  '促',
  '欧',
  '江',
  '請',
  '雄',
  '韓',
  '壊',
  '診',
  '閣',
  '僚',
  '積',
  '督',
  '臣',
  '略',
  '航',
  '寄',
  '板',
  '街',
  '宗',
  '緊',
  '娘',
  '宴',
  '怖',
  '恐',
  '添',
  '猛',
  '烈',
  '索',
  '詰',
  '詳',
  '魅',
  '渇',
  '系',
  '婚',
  '遊',
  '旗',
  '照',
  '快',
  '版',
  '貧',
  '乏',
  '適',
  '預',
  '延',
  '翌',
  '覧',
  '懐',
  '押',
  '更',
  '枕',
  '浮',
  '漏',
  '符',
  '購',
  '越',
  '飾',
  '騒',
  '背',
  '撮',
  '盗',
  '離',
  '融',
  '編',
  '華',
  '既',
  '普',
  '豪',
  '鑑',
  '除',
  '尋',
  '幾',
  '廊',
  '掃',
  '泥',
  '棒',
  '驚',
  '嘆',
  '倉',
  '孫',
  '巣',
  '帯',
  '径',
  '救',
  '散',
  '粉',
  '脈',
  '菜',
  '貨',
  '陸',
  '似',
  '均',
  '墓',
  '富',
  '徳',
  '探',
  '偵',
  '綺',
  '序',
  '迎',
  '志',
  '恩',
  '採',
  '桜',
  '永',
  '液',
  '眼',
  '祖',
  '績',
  '興',
  '衛',
  '複',
  '雑',
  '賛',
  '酸',
  '銭',
  '飼',
  '傷',
  '党',
  '卵',
  '厳',
  '捨',
  '込',
  '密',
  '汚',
  '欲',
  '暖',
  '机',
  '秘',
  '訳',
  '染',
  '簡',
  '閉',
  '誌',
  '窓',
  '否',
  '筋',
  '垂',
  '宝',
  '宣',
  '尊',
  '忠',
  '拡',
  '操',
  '敬',
  '暮',
  '灰',
  '熟',
  '異',
  '皇',
  '盛',
  '砂',
  '漠',
  '糖',
  '納',
  '肺',
  '著',
  '蒸',
  '蔵',
  '装',
  '裏',
  '諸',
  '賃',
  '誤',
  '臓',
  '貴',
  '降',
  '丼',
  '吐',
  '奴',
  '隷',
  '芋',
  '縮',
  '純',
  '縦',
  '粋',
  '聖',
  '磁',
  '紅',
  '射',
  '幕',
  '拝',
  '薦',
  '推',
  '揮',
  '沿',
  '源',
  '劇',
  '勤',
  '歓',
  '承',
  '損',
  '枝',
  '爪',
  '豆',
  '刻',
  '腐',
  '遅',
  '彫',
  '測',
  '破',
  '舎',
  '講',
  '滞',
  '紹',
  '介',
  '己',
  '厄',
  '亀',
  '互',
  '剣',
  '寿',
  '彼',
  '恥',
  '杉',
  '汁',
  '噌',
  '炎',
  '為',
  '熊',
  '獄',
  '酔',
  '酢',
  '鍋',
  '湖',
  '銅',
  '払',
  '油',
  '醤',
  '旧',
  '姓',
  '貿',
  '将',
  '盟',
  '遺',
  '伸',
  '債',
  '及',
  '奈',
  '幅',
  '廃',
  '甘',
  '換',
  '摘',
  '核',
  '沖',
  '縄',
  '津',
  '献',
  '療',
  '継',
  '維',
  '舞',
  '伎',
  '踏',
  '般',
  '頼',
  '依',
  '鹿',
  '諾',
  '牙',
  '跳',
  '昭',
  '漁',
  '償',
  '刑',
  '募',
  '執',
  '塁',
  '崩',
  '患',
  '戻',
  '抗',
  '抵',
  '旬',
  '湾',
  '爆',
  '弾',
  '聴',
  '跡',
  '遣',
  '闘',
  '陣',
  '香',
  '兆',
  '臨',
  '削',
  '契',
  '恵',
  '抱',
  '掲',
  '狙',
  '葬',
  '需',
  '齢',
  '宜',
  '繰',
  '避',
  '妊',
  '娠',
  '致',
  '刊',
  '奏',
  '伴',
  '併',
  '傾',
  '却',
  '奥',
  '慮',
  '懸',
  '房',
  '扱',
  '抑',
  '択',
  '描',
  '盤',
  '称',
  '緒',
  '緩',
  '託',
  '賄',
  '賂',
  '贈',
  '逃',
  '還',
  '超',
  '邦',
  '鈴',
  '阜',
  '岐',
  '隆',
  '雇',
  '控',
  '壁',
  '棋',
  '渋',
  '片',
  '群',
  '仙',
  '充',
  '免',
  '勧',
  '圏',
  '埋',
  '埼',
  '奪',
  '御',
  '慎',
  '拒',
  '枠',
  '甲',
  '斐',
  '祉',
  '稲',
  '譲',
  '謙',
  '躍',
  '銃',
  '項',
  '鋼',
  '顧',
  '駐',
  '駆',
  '柱',
  '唱',
  '孝',
  '俊',
  '兼',
  '剤',
  '吹',
  '堀',
  '巡',
  '戒',
  '排',
  '携',
  '敏',
  '鋭',
  '敷',
  '殿',
  '犠',
  '獲',
  '茂',
  '繁',
  '頻',
  '殖',
  '薄',
  '衝',
  '誉',
  '褒',
  '透',
  '隣',
  '雅',
  '遜',
  '伺',
  '徹',
  '瀬',
  '撤',
  '措',
  '拠',
  '儀',
  '樹',
  '棄',
  '虎',
  '蛍',
  '蜂',
  '酎',
  '蜜',
  '墟',
  '艦',
  '潜',
  '拳',
  '炭',
  '畑',
  '包',
  '衣',
  '仁',
  '鉱',
  '至',
  '誠',
  '郷',
  '侵',
  '偽',
  '克',
  '到',
  '双',
  '哲',
  '喪',
  '堅',
  '床',
  '括',
  '弧',
  '挑',
  '掘',
  '揚',
  '握',
  '揺',
  '斎',
  '暫',
  '析',
  '枢',
  '軸',
  '柄',
  '泊',
  '滑',
  '潟',
  '焦',
  '範',
  '紛',
  '糾',
  '綱',
  '網',
  '肝',
  '芝',
  '荒',
  '袋',
  '誰',
  '珍',
  '裂',
  '襲',
  '貢',
  '趣',
  '距',
  '籍',
  '露',
  '牧',
  '刷',
  '朗',
  '潮',
  '即',
  '垣',
  '威',
  '封',
  '筒',
  '岳',
  '慰',
  '懇',
  '懲',
  '摩',
  '擦',
  '撲',
  '斉',
  '旨',
  '柔',
  '沈',
  '沼',
  '泰',
  '滅',
  '滋',
  '炉',
  '琴',
  '寸',
  '竜',
  '縁',
  '翼',
  '吉',
  '刃',
  '忍',
  '桃',
  '辛',
  '謎',
  '侍',
  '俺',
  '叱',
  '娯',
  '斗',
  '朱',
  '丘',
  '梨',
  '僕',
  '匹',
  '叫',
  '釣',
  '髪',
  '嵐',
  '笠',
  '涙',
  '缶',
  '姫',
  '棚',
  '粒',
  '砲',
  '雷',
  '芽',
  '塔',
  '澄',
  '矛',
  '肌',
  '舟',
  '鐘',
  '凶',
  '塊',
  '狩',
  '頃',
  '魂',
  '脚',
  '也',
  '井',
  '呪',
  '嬢',
  '暦',
  '曇',
  '眺',
  '裸',
  '賭',
  '疲',
  '塾',
  '卓',
  '磨',
  '菌',
  '陰',
  '霊',
  '湿',
  '硬',
  '稼',
  '嫁',
  '溝',
  '滝',
  '狂',
  '翔',
  '墨',
  '鳩',
  '穏',
  '鈍',
  '魔',
  '寮',
  '盆',
  '棟',
  '吾',
  '斬',
  '寧',
  '椅',
  '歳',
  '涼',
  '猿',
  '瞳',
  '鍵',
  '零',
  '碁',
  '租',
  '幽',
  '泡',
  '癖',
  '鍛',
  '錬',
  '穂',
  '帝',
  '瞬',
  '菊',
  '誇',
  '庄',
  '阻',
  '黙',
  '俵',
  '綿',
  '架',
  '砕',
  '粘',
  '粧',
  '欺',
  '詐',
  '霧',
  '柳',
  '伊',
  '佐',
  '尺',
  '哀',
  '唇',
  '塀',
  '墜',
  '如',
  '婆',
  '崖',
  '帽',
  '幣',
  '恨',
  '憎',
  '憩',
  '扇',
  '扉',
  '挿',
  '掌',
  '滴',
  '炊',
  '爽',
  '畳',
  '瞭',
  '箸',
  '胴',
  '芯',
  '虹',
  '帳',
  '蚊',
  '蛇',
  '貼',
  '辱',
  '鉢',
  '闇',
  '隙',
  '霜',
  '飢',
  '餓',
  '畜',
  '迅',
  '騎',
  '蓄',
  '尽',
  '彩',
  '憶',
  '溶',
  '耐',
  '踊',
  '賢',
  '輝',
  '脅',
  '麻',
  '灯',
  '咲',
  '培',
  '悔',
  '脇',
  '遂',
  '班',
  '塗',
  '斜',
  '殴',
  '盾',
  '穫',
  '巾',
  '駒',
  '紫',
  '抽',
  '誓',
  '悟',
  '拓',
  '拘',
  '礎',
  '鶴',
  '刈',
  '剛',
  '唯',
  '壇',
  '尼',
  '概',
  '浸',
  '淡',
  '煮',
  '覆',
  '謀',
  '陶',
  '隔',
  '征',
  '陛',
  '俗',
  '桑',
  '潤',
  '珠',
  '衰',
  '奨',
  '劣',
  '勘',
  '妃',
  '丈',
  '峰',
  '巧',
  '邪',
  '駄',
  '唐',
  '廷',
  '鬱',
  '鰐',
  '蟹',
  '簿',
  '彰',
  '漫',
  '訂',
  '諮',
  '銘',
  '堰',
  '堤',
  '漂',
  '翻',
  '軌',
  '后',
  '奮',
  '亭',
  '仰',
  '伯',
  '偶',
  '淀',
  '墳',
  '壮',
  '把',
  '搬',
  '晶',
  '洞',
  '涯',
  '疫',
  '孔',
  '偉',
  '頂',
  '召',
  '挟',
  '枯',
  '沸',
  '濯',
  '燥',
  '瓶',
  '耕',
  '肯',
  '脂',
  '膚',
  '軒',
  '軟',
  '郊',
  '隅',
  '隻',
  '邸',
  '郡',
  '釈',
  '肪',
  '喚',
  '媛',
  '貞',
  '玄',
  '苗',
  '渦',
  '慈',
  '襟',
  '蓮',
  '亮',
  '聡',
  '浦',
  '塚',
  '陥',
  '貫',
  '覇',
  '呂',
  '茨',
  '擁',
  '孤',
  '賠',
  '鎖',
  '噴',
  '祥',
  '牲',
  '秩',
  '唆',
  '膨',
  '芳',
  '恒',
  '倫',
  '陳',
  '須',
  '偏',
  '遇',
  '糧',
  '殊',
  '慢',
  '没',
  '怠',
  '遭',
  '惰',
  '猟',
  '乃',
  '綾',
  '颯',
  '隼',
  '輔',
  '寛',
  '胞',
  '浄',
  '随',
  '稿',
  '丹',
  '壌',
  '舗',
  '騰',
  '緯',
  '艇',
  '披',
  '錦',
  '准',
  '剰',
  '繊',
  '諭',
  '惨',
  '虐',
  '据',
  '徐',
  '搭',
  '蒙',
  '鯉',
  '戴',
  '緋',
  '曙',
  '胡',
  '瓜',
  '帥',
  '啓',
  '葵',
  '駿',
  '諒',
  '莉',
  '鯨',
  '荘',
  '栽',
  '拐',
  '冠',
  '勲',
  '酬',
  '紋',
  '卸',
  '欄',
  '逸',
  '尚',
  '顕',
  '粛',
  '愚',
  '庶',
  '践',
  '呈',
  '疎',
  '疾',
  '謡',
  '鎌',
  '酷',
  '叙',
  '且',
  '痴',
  '呆',
  '哺',
  '傲',
  '茎',
  '阿',
  '悠',
  '杏',
  '茜',
  '栞',
  '伏',
  '鎮',
  '奉',
  '憂',
  '朴',
  '栃',
  '惜',
  '佳',
  '悼',
  '該',
  '赴',
  '髄',
  '傍',
  '累',
  '癒',
  '郭',
  '尿',
  '賓',
  '虜',
  '憾',
  '弥',
  '粗',
  '循',
  '凝',
  '脊',
  '昌',
  '旦',
  '愉',
  '抹',
  '栓',
  '之',
  '龍',
  '遼',
  '瑛',
  '那',
  '拍',
  '猶',
  '宰',
  '寂',
  '縫',
  '呉',
  '凡',
  '恭',
  '錯',
  '穀',
  '陵',
  '弊',
  '舶',
  '窮',
  '悦',
  '縛',
  '轄',
  '弦',
  '窒',
  '洪',
  '摂',
  '飽',
  '紳',
  '庸',
  '靖',
  '嘉',
  '搾',
  '蝶',
  '碑',
  '尉',
  '凛',
  '匠',
  '遥',
  '智',
  '柴',
  '賊',
  '鼓',
  '旋',
  '腸',
  '槽',
  '伐',
  '漬',
  '坪',
  '紺',
  '羅',
  '峡',
  '俸',
  '醸',
  '弔',
  '乙',
  '遍',
  '衡',
  '款',
  '閲',
  '喝',
  '敢',
  '膜',
  '盲',
  '胎',
  '酵',
  '堕',
  '遮',
  '烏',
  '凸',
  '凹',
  '楓',
  '哉',
  '蒼',
  '瑠',
  '萌',
  '硫',
  '赦',
  '窃',
  '慨',
  '扶',
  '戯',
  '忌',
  '濁',
  '奔',
  '肖',
  '朽',
  '殻',
  '享',
  '藩',
  '媒',
  '鶏',
  '嘱',
  '迭',
  '椎',
  '絹',
  '陪',
  '剖',
  '譜',
  '淑',
  '帆',
  '憤',
  '酌',
  '暁',
  '傑',
  '錠',
  '凌',
  '瑞',
  '菅',
  '漣',
  '璃',
  '遷',
  '拙',
  '峠',
  '篤',
  '叔',
  '雌',
  '堪',
  '吟',
  '甚',
  '崇',
  '漆',
  '岬',
  '紡',
  '礁',
  '屯',
  '姻',
  '擬',
  '睦',
  '閑',
  '曹',
  '詠',
  '卑',
  '侮',
  '鋳',
  '蔑',
  '胆',
  '浪',
  '禍',
  '酪',
  '憧',
  '慶',
  '亜',
  '汰',
  '梓',
  '沙',
  '逝',
  '匿',
  '寡',
  '痢',
  '坑',
  '藍',
  '畔',
  '唄',
  '拷',
  '渓',
  '廉',
  '謹',
  '湧',
  '醜',
  '升',
  '殉',
  '煩',
  '劾',
  '桟',
  '婿',
  '慕',
  '罷',
  '矯',
  '某',
  '囚',
  '泌',
  '漸',
  '藻',
  '妄',
  '蛮',
  '倹',
  '狐',
];

const allSynonyms = {};

function wwwjdicUrl(kanji) {
  // WWWJDIC API Docs: http://www.edrdg.org/wwwjdic/wwwjdicinf.html#backdoor_tag
  const useEDICT                  = '1';
  const useBackdoorEntryRawOutput = 'Z';
  const lookupKanjiInUTF8         = 'M';
  const lookupKanji               = 'M';

  const queryCode = useEDICT + useBackdoorEntryRawOutput + lookupKanjiInUTF8 + lookupKanji;
  const encodedKanji = encodeURIComponent(kanji);

  return 'http://nihongo.monash.edu/cgi-bin/wwwjdic\?' + queryCode + encodedKanji;
}

Promise.each(slugs, (slug) => {
  const url = wwwjdicUrl(slug);
  return fetch(url)
    .then((response) => {
      if (response.status >= 400) {
        return Promise.reject(new Error("Bad response from server"));
      }
      return response.text();
    })
    .then((text) => {
      const noHeader = text.slice(text.indexOf('<pre>') + 6);
      const preText = noHeader.slice(0, noHeader.indexOf('</pre>') - 1);
      const curlyBracedText = preText.slice(preText.indexOf('{') + 1).trim();
      const curlyBracedTextWithoutFirstAndLastBraces = curlyBracedText.slice(0, -1);
      const synonyms = curlyBracedTextWithoutFirstAndLastBraces.split('} {');
      allSynonyms[slug] = synonyms;
    });
})
.then(() => {
  console.log(JSON.stringify(allSynonyms, null, 2));
});