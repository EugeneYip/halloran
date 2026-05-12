import React, { useState } from "react";

const palette = {
  bg: "#FCFAF2",
  paper: "#FFFDF6",
  ink: "#2B2621",
  muted: "#665F56",
  line: "#D9CCB8",
  lineStrong: "#B9A88F",
  teal: "#2E5C6E",
  plum: "#622954",
  clay: "#9F5233",
  moss: "#6E7955",
  red: "#C73E3A",
  blue: "#165E83",
  gold: "#B68E3D",
  green: "#477A60",
  softTeal: "#E7F0EF",
  softPlum: "#F1E8EF",
  softRed: "#F7E7E4",
  softGold: "#F4ECD8",
  softMoss: "#ECEFE4"
};

const modes = [
  { key: "en", label: "EN", full: "English" },
  { key: "zh", label: "中", full: "繁體中文" },
  { key: "zh-hans", label: "简", full: "简体中文" },
  { key: "bi", label: "EN｜中", full: "Bilingual" }
];

const simplifiedPhraseMap = [
  ["中華民國", "中华民国"],
  ["臺灣", "台湾"],
  ["臺", "台"],
  ["甚麼", "什么"],
  ["營業利益", "营业利润"],
  ["淨利", "净利润"],
  ["營運", "运营"],
  ["作業", "作业"],
  ["資料", "资料"],
  ["品質", "品质"],
  ["決策", "决策"],
  ["證據", "证据"],
  ["財務", "财务"],
  ["服務", "服务"],
  ["庫存", "库存"],
  ["顧客", "顾客"],
  ["分權", "分权"],
  ["優勢", "优势"],
  ["關鍵", "关键"],
  ["策略", "策略"],
  ["獲利", "获利"],
  ["衰退期", "衰退期"],
  ["新英格蘭", "新英格兰"]
];

const traditionalToSimplifiedMap = {
  "並":"并","來":"来","佔":"占","併":"并","係":"系","個":"个","倉":"仓","備":"备","傳":"传","傷":"伤","僅":"仅","價":"价","億":"亿","優":"优","儲":"储","內":"内","兩":"两","則":"则","創":"创","劇":"剧","動":"动","務":"务","勢":"势","協":"协","區":"区","壓":"压","壞":"坏","夠":"够","夾":"夹","學":"学","實":"实","寫":"写","寬":"宽","專":"专","對":"对","導":"导","層":"层","屬":"属","帳":"账","幫":"帮","幾":"几","庫":"库","廠":"厂","廣":"广","張":"张","強":"强","後":"后","從":"从","慮":"虑","應":"应","戶":"户","採":"采","損":"损","撐":"撑","撥":"拨","擇":"择","擔":"担","據":"据","擴":"扩","數":"数","於":"于","會":"会","東":"东","桿":"杆","條":"条","槓":"杠","標":"标","樞":"枢","樣":"样","機":"机","檻":"槛","欄":"栏","權":"权","氣":"气","決":"决","沒":"没","淨":"净","測":"测","準":"准","潛":"潜","潤":"润","濟":"济","為":"为","無":"无","營":"营","爭":"争","獨":"独","獲":"获","異":"异","當":"当","礎":"础","稅":"税","種":"种","穩":"稳","競":"竞","範":"范","篩":"筛","簡":"简","籠":"笼","級":"级","組":"组","結":"结","絕":"绝","絡":"络","給":"给","統":"统","綁":"绑","經":"经","綠":"绿","維":"维","網":"网","緊":"紧","線":"线","緩":"缓","縮":"缩","總":"总","績":"绩","義":"义","習":"习","肅":"肃","與":"与","萬":"万","著":"着","蓋":"盖","藉":"借","蘭":"兰","處":"处","號":"号","虧":"亏","衝":"冲","補":"补","製":"制","複":"复","見":"见","規":"规","視":"视","覺":"觉","訂":"订","計":"计","訊":"讯","討":"讨","設":"设","訴":"诉","診":"诊","註":"注","評":"评","試":"试","話":"话","該":"该","語":"语","誤":"误","說":"说","課":"课","調":"调","論":"论","諾":"诺","講":"讲","謹":"谨","證":"证","議":"议","護":"护","讀":"读","變":"变","讓":"让","負":"负","財":"财","貨":"货","責":"责","買":"买","費":"费","資":"资","賣":"卖","質":"质","賴":"赖","購":"购","趨":"趋","較":"较","輕":"轻","輯":"辑","輸":"输","轉":"转","這":"这","連":"连","週":"周","進":"进","運":"运","過":"过","遠":"远","適":"适","選":"选","還":"还","邊":"边","邏":"逻","釋":"释","銷":"销","鋁":"铝","鋸":"锯","鋼":"钢","錯":"错","鍵":"键","鎖":"锁","鏈":"链","鐘":"钟","鐵":"铁","長":"长","門":"门","閉":"闭","開":"开","間":"间","閱":"阅","關":"关","階":"阶","險":"险","隱":"隐","難":"难","韌":"韧","頁":"页","項":"项","順":"顺","須":"须","預":"预","頭":"头","頻":"频","題":"题","額":"额","願":"愿","類":"类","顧":"顾","顯":"显","風":"风","餘":"余","驅":"驱","體":"体","麼":"么","點":"点","國":"国","圍":"围","圖":"图","執":"执","報":"报","場":"场","單":"单","問":"问","嚴":"严","噸":"吨","園":"园","圓":"圆","塊":"块","夥":"伙","奮":"奋","奧":"奥","婦":"妇","媽":"妈","嬰":"婴","孫":"孙","審":"审","寫":"写","寶":"宝","將":"将","尋":"寻","對":"对","導":"导","屆":"届","歲":"岁","帶":"带","幣":"币","幹":"干","幫":"帮","庫":"库","廢":"废","廳":"厅","彈":"弹","彙":"汇","彎":"弯","彿":"佛","徹":"彻","徵":"征","德":"德","憂":"忧","懷":"怀","懸":"悬","戀":"恋","戰":"战","戶":"户","拋":"抛","挾":"挟","捲":"卷","掃":"扫","掛":"挂","揚":"扬","換":"换","揮":"挥","搖":"摇","摺":"折","攝":"摄","攜":"携","敗":"败","敘":"叙","斂":"敛","斷":"断","時":"时","晉":"晋","暫":"暂","曆":"历","書":"书","會":"会","東":"东","業":"业","極":"极","榮":"荣","構":"构","樓":"楼","樂":"乐","樑":"梁","標":"标","樣":"样","樸":"朴","樹":"树","橋":"桥","機":"机","檢":"检","櫃":"柜","歐":"欧","歷":"历","歸":"归","殘":"残","殼":"壳","殿":"殿","毀":"毁","氣":"气","決":"决","況":"况","沒":"没","沖":"冲","溝":"沟","滾":"滚","漢":"汉","滿":"满","灣":"湾","潰":"溃","濃":"浓","濤":"涛","瀏覽":"浏览","災":"灾","為":"为","烏":"乌","無":"无","爐":"炉","爭":"争","爺":"爷","爾":"尔","牆":"墙","牽":"牵","獻":"献","獨":"独","獲":"获","環":"环","現":"现","畫":"画","當":"当","疇":"畴","療":"疗","盜":"盗","盡":"尽","監":"监","盤":"盘","盧":"卢","眾":"众","確":"确","碼":"码","礦":"矿","禮":"礼","禍":"祸","禦":"御","離":"离","穀":"谷","積":"积","穩":"稳","窩":"窝","競":"竞","竄":"窜","筆":"笔","築":"筑","篤":"笃","簽":"签","籌":"筹","籤":"签","糾":"纠","紀":"纪","約":"约","紅":"红","紡":"纺","紐":"纽","純":"纯","紙":"纸","級":"级","納":"纳","紛":"纷","細":"细","終":"终","絆":"绊","絕":"绝","絡":"络","統":"统","絲":"丝","經":"经","綜":"综","綠":"绿","維":"维","綱":"纲","網":"网","緊":"紧","線":"线","緩":"缓","練":"练","縣":"县","縫":"缝","縮":"缩","總":"总","績":"绩","織":"织","續":"续","纜":"缆","罷":"罢","羅":"罗","聽":"听","職":"职","聯":"联","聰":"聪","肅":"肃","脫":"脱","腦":"脑","腳":"脚","與":"与","興":"兴","舉":"举","舊":"旧","艙":"舱","艦":"舰","艱":"艰","藝":"艺","蘇":"苏","處":"处","號":"号","虛":"虚","蟲":"虫","衛":"卫","衝":"冲","術":"术","衹":"只","製":"制","複":"复","規":"规","覓":"觅","視":"视","覺":"觉","觀":"观","觸":"触","訓":"训","記":"记","訟":"讼","訣":"诀","訪":"访","設":"设","許":"许","訴":"诉","診":"诊","註":"注","詐":"诈","評":"评","詞":"词","試":"试","詩":"诗","話":"话","該":"该","詳":"详","語":"语","誤":"误","說":"说","課":"课","誰":"谁","調":"调","談":"谈","請":"请","諸":"诸","諾":"诺","謀":"谋","謂":"谓","謹":"谨","識":"识","證":"证","譯":"译","議":"议","譽":"誉","護":"护","讀":"读","變":"变","讓":"让","豐":"丰","貝":"贝","負":"负","財":"财","貨":"货","責":"责","貯":"贮","貿":"贸","賀":"贺","資":"资","賃":"赁","賄":"贿","賈":"贾","賓":"宾","賣":"卖","賦":"赋","質":"质","賴":"赖","購":"购","贏":"赢","趕":"赶","趨":"趋","跡":"迹","踐":"践","車":"车","軋":"轧","軌":"轨","軍":"军","軟":"软","較":"较","輔":"辅","輕":"轻","輛":"辆","輝":"辉","輯":"辑","輸":"输","轄":"辖","轉":"转","轟":"轰","辦":"办","辭":"辞","農":"农","迴":"回","這":"这","連":"连","週":"周","進":"进","遊":"游","運":"运","過":"过","達":"达","違":"违","遙":"遥","遜":"逊","遞":"递","遠":"远","適":"适","遲":"迟","遷":"迁","選":"选","遺":"遗","邁":"迈","還":"还","邊":"边","邏":"逻","鄉":"乡","鄭":"郑","鄰":"邻","醜":"丑","醫":"医","釐":"厘","針":"针","鈔":"钞","鈣":"钙","鈴":"铃","鉅":"巨","鉤":"钩","鉛":"铅","鉱":"矿","銀":"银","銅":"铜","銷":"销","鋁":"铝","鋒":"锋","鋼":"钢","錄":"录","錢":"钱","錯":"错","鍊":"炼","鍋":"锅","鍵":"键","鎂":"镁","鎖":"锁","鎮":"镇","鏡":"镜","鐵":"铁","鑄":"铸","長":"长","門":"门","閃":"闪","閉":"闭","開":"开","閒":"闲","間":"间","閣":"阁","隊":"队","階":"阶","際":"际","隨":"随","險":"险","隱":"隐","雜":"杂","雙":"双","雞":"鸡","離":"离","難":"难","電":"电","霧":"雾","靈":"灵","靜":"静","響":"响","頁":"页","頂":"顶","項":"项","順":"顺","須":"须","頌":"颂","預":"预","頑":"顽","頓":"顿","領":"领","頭":"头","頰":"颊","頻":"频","題":"题","額":"额","顏":"颜","願":"愿","類":"类","顧":"顾","顯":"显","風":"风","飛":"飞","飾":"饰","餘":"余","館":"馆","饋":"馈","馬":"马","駐":"驻","騰":"腾","驅":"驱","驗":"验","驚":"惊","體":"体","鬆":"松","鬥":"斗","魚":"鱼","鮮":"鲜","鹽":"盐","麗":"丽","麥":"麦","麼":"么","黃":"黄","點":"点"
};

function toSimplified(value) {
  if (value === null || value === undefined) return value;
  let output = String(value);
  simplifiedPhraseMap.forEach(([traditional, simplified]) => {
    output = output.split(traditional).join(simplified);
  });
  return Array.from(output).map(char => traditionalToSimplifiedMap[char] || char).join("");
}

const navItems = [
  { id: "decision", en: "Decision", zh: "決策" },
  { id: "casefit", en: "Case Fit", zh: "作業框架" },
  { id: "background", en: "Background", zh: "背景" },
  { id: "strategy", en: "Strategy", zh: "策略" },
  { id: "system", en: "Operating System", zh: "營運系統" },
  { id: "financials", en: "Financial Evidence", zh: "財務證據" },
  { id: "allied", en: "Halloran vs Allied", zh: "兩家公司對比" },
  { id: "evidence", en: "Evidence Chain", zh: "證據鏈" },
  { id: "issues", en: "Issues", zh: "問題診斷" },
  { id: "recommendations", en: "Recommendations", zh: "建議方案" },
  { id: "implementation", en: "Implementation", zh: "執行路線" },
  { id: "data", en: "Data Gaps", zh: "資料缺口" },
  { id: "draft", en: "Report Draft", zh: "報告草稿" },
  { id: "toolkit", en: "Class Toolkit", zh: "課堂工具" }
];

const kpis = [
  {
    label: { en: "Net income drop", zh: "淨利下降" },
    value: "69.3%",
    tone: "red",
    note: { en: "Halloran stayed profitable, but the profit cushion almost disappeared.", zh: "Halloran 仍有獲利，但獲利緩衝幾乎消失。" }
  },
  {
    label: { en: "Cash decline", zh: "現金下降" },
    value: "84.85%",
    tone: "red",
    note: { en: "Liquidity is the urgent board level warning.", zh: "流動性是董事會層級最急迫的警訊。" }
  },
  {
    label: { en: "2001 GMROI", zh: "2001 GMROI" },
    value: "130%",
    tone: "green",
    note: { en: "Using average inventory proxy, Halloran outperformed Allied in 2001.", zh: "以平均庫存作 proxy，Halloran 於 2001 年優於 Allied。" }
  },
  {
    label: { en: "SKU breadth", zh: "SKU 廣度" },
    value: "10,000+",
    tone: "gold",
    note: { en: "The service promise creates value and locks up working capital.", zh: "服務承諾創造價值，也鎖住營運資金。" }
  }
];

const decisionRows = [
  {
    field: { en: "Decision", zh: "決策" },
    en: "Halloran should adopt Allied’s analytical discipline, not Allied’s strategy.",
    zh: "Halloran 應採用 Allied 的分析紀律，而不是 Allied 的策略。"
  },
  {
    field: { en: "Why", zh: "理由" },
    en: "Halloran’s service based, decentralized model fits New England’s fragmented small order market and proved more resilient in the 2001 downturn.",
    zh: "Halloran 以服務為基礎的分權模式符合新英格蘭破碎的小訂單市場，且在 2001 年衰退期證明較具韌性。"
  },
  {
    field: { en: "Risk", zh: "風險" },
    en: "The model is financially exposed because broad inventory, seven warehouses, and shuttle activity consume cash during a downturn.",
    zh: "這套模式仍有財務風險，因為廣泛庫存、七個倉庫與 shuttle 活動會在衰退期消耗現金。"
  },
  {
    field: { en: "Action logic", zh: "行動邏輯" },
    en: "Keep the service advantage, then add discipline around SKU profitability, customer profitability, shuttle costing, quality, purchasing, working capital, and selective processing investment.",
    zh: "保留服務優勢，同時在 SKU 獲利、顧客獲利、shuttle 成本、品質、採購、營運資金與選擇性加工投資上加入紀律。"
  }
];

const caseFitRows = [
  {
    field: { en: "Professor Forbes’s format", zh: "Forbes 教授格式" },
    en: "Background, Analysis, Recommended Solutions, and Exhibits or References. The body should be short, with heavy evidence placed in exhibits.",
    zh: "Background、Analysis、Recommended Solutions，以及 Exhibits or References。主文要短，重證據放入 exhibits。"
  },
  {
    field: { en: "Grading lens", zh: "評分視角" },
    en: "The paper must show learning concepts, operational capabilities, quantitative analysis, qualitative judgment, and recommendations that improve business performance.",
    zh: "報告需要展現課程概念、營運能力、量化分析、質化判斷，以及能改善商業績效的建議。"
  },
  {
    field: { en: "Course framework", zh: "課程框架" },
    en: "External forces, strategy, capabilities, process, technology, people, financials, and in process measures: service, inventory, cost, and quality.",
    zh: "外部力量、策略、能力、流程、科技、人員、財務，以及營運中指標：服務、庫存、成本與品質。"
  },
  {
    field: { en: "Writing discipline", zh: "寫作紀律" },
    en: "Use case evidence first. Outside facts should stay out unless clearly marked and cited. Section 201 tariffs belong outside the main case argument.",
    zh: "優先使用個案證據。外部資料除非清楚標示並引用，否則不放入。Section 201 鋼鐵關稅不應放進主論點。"
  }
];

const backgroundCards = [
  {
    title: { en: "Company", zh: "公司" },
    points: [
      { en: "Privately held regional steel and aluminum service center.", zh: "私人持有的區域鋼鐵與鋁材服務中心。" },
      { en: "Buys metal in bulk from mills and sells smaller quantities across the northeastern United States.", zh: "向鋼廠大量採購，再以較小批量銷售給美國東北部客戶。" },
      { en: "2001 sales were almost $170 million across seven locations.", zh: "2001 年銷售額接近 1.7 億美元，並有七個據點。" },
      { en: "One of the two largest independent regional service centers in its market.", zh: "為該區兩大獨立區域服務中心之一。" }
    ]
  },
  {
    title: { en: "Industry role", zh: "產業角色" },
    points: [
      { en: "Mills usually do not sell directly to customers ordering less than 20 tons of one type and grade.", zh: "鋼廠通常不直接銷售給單一種類與等級低於 20 噸的客戶。" },
      { en: "Service centers fill the gap with local inventory, smaller lots, faster delivery, and some processing.", zh: "服務中心透過在地庫存、小批量、快速交付與部分加工填補缺口。" },
      { en: "Most current service center processing is Stage One work such as saw cutting, burning, and shearing.", zh: "多數現有服務中心加工是第一階段加工，例如鋸切、火焰切割與剪切。" },
      { en: "Intermediate processing such as slitting and leveling requires larger investments.", zh: "分條與整平等中階加工需要更大投資。" }
    ]
  },
  {
    title: { en: "Industry direction", zh: "產業方向" },
    points: [
      { en: "SSCI expected service centers to move from metal brokers toward intermediate processors.", zh: "SSCI 預期服務中心會從金屬經銷商逐步轉向中間加工商。" },
      { en: "Mills were trying to reduce processing work and focus on tonnage.", zh: "鋼廠試圖減少加工並集中於產量。" },
      { en: "The case expected service center tonnage growth of 3% to 6% per year for the next few years.", zh: "個案預期服務中心產業未來數年噸數每年成長 3% 至 6%。" },
      { en: "This trend matters, but it does not justify broad processing investment without utilization proof.", zh: "這個趨勢重要，但不能在缺少稼動率證據時支持大規模加工投資。" }
    ]
  }
];

const forceCards = [
  { title: { en: "Economic recession", zh: "景氣衰退" }, text: { en: "Steel demand slowed. Customers reduced inventory. Profit and cash came under pressure.", zh: "鋼材需求放緩，客戶降低庫存，獲利與現金承壓。" }, tone: "red" },
  { title: { en: "Customer inventory pressure", zh: "客戶庫存壓力" }, text: { en: "Small users may shift from mill orders to service center orders because they cannot afford large inventory commitments.", zh: "小客戶可能因無法承擔大量庫存，從鋼廠直購轉向服務中心採購。" }, tone: "gold" },
  { title: { en: "New England structure", zh: "新英格蘭市場結構" }, text: { en: "Heavy industry is limited. Orders are more often small, urgent, and varied.", zh: "重工業有限，訂單更常呈現小量、急迫與多樣。" }, tone: "teal" },
  { title: { en: "Competitive window", zh: "競爭窗口" }, text: { en: "National chains were less effective locally, and at least one national operation was closing while another was rumored to be considering withdrawal.", zh: "全國性連鎖在當地較不有效，至少一家全國性據點正在關閉，另一家也傳出考慮退出。" }, tone: "green" },
  { title: { en: "Processing shift", zh: "加工壓力下移" }, text: { en: "Mills were reducing processing work, pushing more slitting and leveling pressure downstream.", zh: "鋼廠減少加工，使分條與整平壓力逐步下移。" }, tone: "plum" },
  { title: { en: "Environmental", zh: "環境因素" }, text: { en: "Not a primary case driver. It should not be forced into the main argument.", zh: "不是本案主要驅動因素，不應硬放進主論點。" }, tone: "gray" }
];

const strategyTriad = [
  {
    title: { en: "Critical customers", zh: "關鍵顧客" },
    text: { en: "Small and mid sized customers with urgent, varied, difficult metal needs, not only the largest buyers.", zh: "有急迫、多樣、困難金屬需求的中小型客戶，不只是最大買家。" }
  },
  {
    title: { en: "Value proposition", zh: "價值主張" },
    text: { en: "Overnight availability, broad product range, local responsiveness, and willingness to solve difficult orders.", zh: "隔夜可得性、廣泛產品線、在地反應速度，以及願意處理困難訂單。" }
  },
  {
    title: { en: "Capabilities", zh: "能力" },
    text: { en: "Branch network, Worcester shuttle, branch specialization, hybrid purchasing, and relationship based sales.", zh: "分店網絡、Worcester shuttle、分店專精、混合採購，以及關係型銷售。" }
  }
];

const operatingElements = [
  { label: { en: "Seven branches", zh: "七個分店" }, detail: { en: "Local presence and overnight service within roughly a two hour driving radius.", zh: "在地存在，並在約兩小時車程範圍內支撐隔夜服務。" } },
  { label: { en: "Branch autonomy", zh: "分店自主" }, detail: { en: "Branches operate as profit centers with substantial decision latitude.", zh: "分店作為利潤中心運作，分店經理有相當大自主權。" } },
  { label: { en: "Branch specialization", zh: "分店專精" }, detail: { en: "Every branch is full line, but each builds depth in one or two product categories.", zh: "每個分店仍提供全線服務，但會在一到兩個品類建立深度。" } },
  { label: { en: "Worcester hub", zh: "Worcester 樞紐" }, detail: { en: "Flat rolled processing center and shuttle hub for interbranch transfers.", zh: "平軋鋼加工中心，也是分店間調撥的 shuttle 樞紐。" } },
  { label: { en: "Hybrid purchasing", zh: "混合採購" }, detail: { en: "Small purchases are local. Large purchases are coordinated centrally for mill discounts.", zh: "小額採購由分店處理，大批量採購由總部協調，以取得鋼廠折扣。" } },
  { label: { en: "Relationship sales", zh: "關係型銷售" }, detail: { en: "Salespeople focus on customer pain points, not only visible high volume opportunities.", zh: "銷售人員聚焦顧客痛點，而不只是明顯的大量訂單機會。" } }
];

const halloranFinancials = [
  { metric: { en: "Sales", zh: "銷售額" }, y2000: "$157.564M", y2001: "$169.064M", change: "+7.3%", meaning: { en: "Revenue rose. The problem is not simply sales loss.", zh: "營收上升，問題不是單純賣不出去。" }, tone: "green" },
  { metric: { en: "Tons sold", zh: "銷售噸數" }, y2000: "295,440", y2001: "300,960", change: "+1.87%", meaning: { en: "Volume growth was modest.", zh: "銷量成長有限。" }, tone: "green" },
  { metric: { en: "Gross margin", zh: "毛利" }, y2000: "$38.362M", y2001: "$38.472M", change: "+0.29%", meaning: { en: "Gross margin dollars were almost flat.", zh: "毛利金額幾乎持平。" }, tone: "neutral" },
  { metric: { en: "Operating profit", zh: "營業利益" }, y2000: "$7.428M", y2001: "$5.586M", change: "−24.8%", meaning: { en: "Operating expenses absorbed the revenue growth.", zh: "營運費用吃掉營收成長。" }, tone: "red" },
  { metric: { en: "Net income", zh: "淨利" }, y2000: "$1.564M", y2001: "$0.480M", change: "−69.3%", meaning: { en: "The profit cushion nearly disappeared.", zh: "獲利緩衝幾乎消失。" }, tone: "red" },
  { metric: { en: "Cash", zh: "現金" }, y2000: "$1.584M", y2001: "$0.240M", change: "−84.85%", meaning: { en: "Liquidity became the urgent warning.", zh: "流動性成為最急迫警訊。" }, tone: "red" },
  { metric: { en: "Inventory", zh: "庫存" }, y2000: "$28.392M", y2001: "$30.980M", change: "+9.1%", meaning: { en: "Working capital pressure increased.", zh: "營運資金壓力增加。" }, tone: "gold" }
];

const expenseRows = [
  { metric: { en: "Warehouse", zh: "倉儲" }, y2000: "$8.036M", y2001: "$8.896M", change: "+10.7%", note: { en: "Rose faster than tons.", zh: "增速高於噸數。" } },
  { metric: { en: "Trucking", zh: "運輸" }, y2000: "$5.358M", y2001: "$5.728M", change: "+6.9%", note: { en: "Delivery and shuttle burden matters.", zh: "交付與 shuttle 負擔重要。" } },
  { metric: { en: "Selling", zh: "銷售" }, y2000: "$6.932M", y2001: "$7.846M", change: "+13.2%", note: { en: "Much faster than volume growth.", zh: "遠高於銷量成長。" } },
  { metric: { en: "Occupancy", zh: "占用" }, y2000: "$2.522M", y2001: "$3.016M", change: "+19.6%", note: { en: "Facility cost pressure is material.", zh: "場地成本壓力明顯。" } },
  { metric: { en: "G&A", zh: "G&A" }, y2000: "$8.086M", y2001: "$7.400M", change: "−8.5%", note: { en: "Cost cuts existed, but were not enough.", zh: "已有削減費用，但不足以保護淨利。" } }
];

const comparisonRows = [
  { metric: { en: "Sales", zh: "銷售額" }, halloran: "$169.064M", allied: "$176.520M", judgment: { en: "Allied was slightly larger.", zh: "Allied 稍大。" } },
  { metric: { en: "Tons sold", zh: "銷售噸數" }, halloran: "300,960", allied: "375,450", judgment: { en: "Allied sold much more volume.", zh: "Allied 銷量明顯較大。" } },
  { metric: { en: "Revenue per ton", zh: "每噸營收" }, halloran: "$561.75", allied: "$470.16", judgment: { en: "Halloran earned a service premium.", zh: "Halloran 有服務溢價。" } },
  { metric: { en: "Gross margin per ton", zh: "每噸毛利" }, halloran: "$127.83", allied: "$48.49", judgment: { en: "Halloran’s per ton gross profit was much stronger.", zh: "Halloran 每噸毛利明顯較強。" } },
  { metric: { en: "Gross margin rate", zh: "毛利率" }, halloran: "22.76%", allied: "10.31%", judgment: { en: "Halloran had better margin quality.", zh: "Halloran 毛利品質較好。" } },
  { metric: { en: "Inventory turns", zh: "庫存週轉" }, halloran: "4.21x", allied: "8.17x", judgment: { en: "Allied’s real structural advantage.", zh: "Allied 的真正結構優勢。" } },
  { metric: { en: "GMROI", zh: "GMROI" }, halloran: "About 130%", allied: "About 93%", judgment: { en: "Halloran created more gross margin per inventory dollar in 2001.", zh: "Halloran 於 2001 年每單位庫存創造較多毛利。" } },
  { metric: { en: "DSO", zh: "DSO" }, halloran: "43.5 days", allied: "52.1 days", judgment: { en: "Halloran did not show worse collection performance.", zh: "Halloran 並未展現較差收款表現。" } },
  { metric: { en: "Operating profit change", zh: "營業利益變化" }, halloran: "−24.8%", allied: "−86.8%", judgment: { en: "Allied was hit much harder in the downturn.", zh: "Allied 在衰退中受傷更重。" } },
  { metric: { en: "Net income", zh: "淨利" }, halloran: "$0.480M", allied: "−$0.044M", judgment: { en: "Halloran stayed profitable. Allied turned slightly negative.", zh: "Halloran 仍獲利，Allied 小幅轉虧。" } }
];

const chartMetrics = [
  { label: { en: "GM per ton", zh: "每噸毛利" }, h: 127.83, a: 48.49, unit: "$" },
  { label: { en: "Gross margin rate", zh: "毛利率" }, h: 22.76, a: 10.31, unit: "%" },
  { label: { en: "Inventory turns", zh: "庫存週轉" }, h: 4.21, a: 8.17, unit: "x" },
  { label: { en: "Operating profit retained", zh: "營業利益保留" }, h: 75.2, a: 13.2, unit: "%" }
];

const evidenceChain = [
  {
    title: { en: "Lynn specialization is real", zh: "Lynn 分店專業化已落實" },
    detail: { en: "Cold rolled steel is 57.2% of Lynn sales versus 29.6% companywide. Flat rolled steel is 34.8% versus 12.3% companywide. Aluminum is 15.4% versus 12.7% companywide.", zh: "冷軋鋼占 Lynn 銷售 57.2%，公司整體為 29.6%。平軋鋼占 Lynn 34.8%，公司整體為 12.3%。鋁材占 Lynn 15.4%，公司整體為 12.7%。" },
    tag: { en: "Exhibit 5", zh: "Exhibit 5" }
  },
  {
    title: { en: "Binghamton proves shuttle led stocking can work", zh: "Binghamton 證明 shuttle 導向備貨可行" },
    detail: { en: "Binghamton built inventory slowly, relied heavily on the shuttle, and broke even within three months rather than the historical three year pattern.", zh: "Binghamton 緩慢建立庫存，高度依賴 shuttle，並在三個月內損益兩平，而不是過往常見的三年。" },
    tag: { en: "Internal precedent", zh: "內部先例" }
  },
  {
    title: { en: "Worcester has strategic room", zh: "Worcester 有策略空間" },
    detail: { en: "Worcester has room for expansion of both processing operations and shuttle space. It is the natural test platform for pooling and selective processing.", zh: "Worcester 在加工與 shuttle 空間上都有擴張餘地，是測試庫存 pooling 與選擇性加工的自然平臺。" },
    tag: { en: "Hub capability", zh: "樞紐能力" }
  },
  {
    title: { en: "Central purchasing has a concrete proof point", zh: "集中採購有具體示範" },
    detail: { en: "The angle bar example totals 455,000 lbs. With a $35 per ton discount above 100 tons, the single item saving is $7,962.50 before transfer costs.", zh: "Angle bar 範例總量為 455,000 磅。若超過 100 噸可享每噸 35 美元折扣，單一品項在調撥成本前可節省 7,962.50 美元。" },
    tag: { en: "No broad extrapolation", zh: "不可全公司外推" }
  },
  {
    title: { en: "National chains created a recession opening", zh: "全國性連鎖退出形成衰退期窗口" },
    detail: { en: "At least one national operation was closing in New England, and another was rumored to be considering withdrawal.", zh: "至少一家全國性服務中心正在關閉新英格蘭據點，另一家也傳出考慮退出。" },
    tag: { en: "Selective offense", zh: "選擇性攻勢" }
  },
  {
    title: { en: "The industry trend favors more processing", zh: "產業趨勢支持更多加工" },
    detail: { en: "SSCI expected service centers to evolve from brokers to intermediate processors, but Halloran should require demand, margin, and utilization proof before investing.", zh: "SSCI 預期服務中心會由經銷商轉向中間加工商，但 Halloran 投資前應要求需求、毛利與稼動率證據。" },
    tag: { en: "Cautious investment", zh: "謹慎投資" }
  }
];

const issueCards = [
  { title: { en: "Service promise is too broad", zh: "服務承諾太寬" }, text: { en: "Any reasonable metal requirement overnight differentiates Halloran, but it also drives inventory and shuttle cost.", zh: "任何合理金屬需求都隔夜提供，能創造差異化，也會推高庫存與 shuttle 成本。" } },
  { title: { en: "SKU breadth lacks discipline", zh: "SKU 廣度缺乏紀律" }, text: { en: "More than 10,000 line items support service, but likely include slow moving, duplicated, and low value items.", zh: "超過 10,000 個品項支撐服務，但很可能包含低周轉、重複與低價值品項。" } },
  { title: { en: "Customer segmentation is incomplete", zh: "顧客分群不完整" }, text: { en: "Key, Major, and Other are based on billings, not profitability, potential, service cost, or urgency value.", zh: "Key、Major、Other 依銷售額分類，而不是依獲利、潛力、服務成本或急迫性價值。" } },
  { title: { en: "Shuttle cost is under visible", zh: "Shuttle 成本不夠可見" }, text: { en: "Transfers are billed internally at cost, but handling, transport, urgency, and frequency still consume real capacity.", zh: "內部調撥以成本計價，但處理、運輸、急件與頻率仍會消耗真實能力。" } },
  { title: { en: "Working capital is stressed", zh: "營運資金承壓" }, text: { en: "Inventory rose while cash fell sharply. The strategy has a liquidity problem.", zh: "庫存上升，現金大幅下降。這套策略有流動性問題。" } },
  { title: { en: "Processing strategy is unresolved", zh: "加工策略未定" }, text: { en: "The industry is moving toward more intermediate processing, but Halloran remains cautious and capital constrained.", zh: "產業走向更多中階加工，但 Halloran 仍偏保守且受資本限制。" } },
  { title: { en: "Quality must be visible", zh: "品質必須可見" }, text: { en: "The overnight promise matters only when the right item, specification, and timing are consistently delivered.", zh: "隔夜承諾只有在正確品項、正確規格與正確時間穩定交付時才有價值。" } },
  { title: { en: "Headquarters capacity is thin", zh: "總部能力偏薄" }, text: { en: "A lean head office cannot run serious SKU, customer, shuttle, and quality analytics without some capability build.", zh: "總部人力精簡，若不小規模補強，很難進行嚴肅的 SKU、顧客、shuttle 與品質分析。" } }
];

const preserveActions = [
  { en: "Preserve overnight service where the service premium is real.", zh: "對服務溢價真實存在的客戶與訂單，保留隔夜服務。" },
  { en: "Preserve branch entrepreneurship and local customer relationships.", zh: "保留分店創業精神與在地顧客關係。" },
  { en: "Preserve branch specialization because Lynn’s mix proves it is more than a slogan.", zh: "保留分店專精，因為 Lynn 的銷售組合證明它不只是口號。" },
  { en: "Preserve Worcester as a shuttle and processing platform.", zh: "保留 Worcester 作為 shuttle 與加工平臺。" }
];

const changeActions = [
  { title: { en: "SKU discipline", zh: "SKU 紀律" }, text: { en: "Run ABC and GMROI analysis by branch, product family, margin, velocity, and service role.", zh: "依分店、產品族、毛利、周轉速度與服務角色進行 ABC 與 GMROI 分析。" } },
  { title: { en: "Customer profitability", zh: "顧客獲利" }, text: { en: "Move beyond revenue only categories. Measure profit, service cost, urgency value, and future potential.", zh: "超越單純營收分類。衡量獲利、服務成本、急迫性價值與未來潛力。" } },
  { title: { en: "Shuttle costing", zh: "Shuttle 成本" }, text: { en: "Internal transfer economics should include product cost, handling cost, transportation cost, urgency, and transfer frequency.", zh: "內部調撥經濟性應包含產品成本、處理成本、運輸成本、急迫性與調撥頻率。" } },
  { title: { en: "Long tail inventory", zh: "長尾庫存" }, text: { en: "Test centralized stocking of selected slow moving SKUs at Worcester while preserving branch specialty depth.", zh: "測試將部分低周轉長尾 SKU 集中於 Worcester，同時保留分店專精品類深度。" } },
  { title: { en: "Product management", zh: "產品經理制" }, text: { en: "Extend product manager logic selectively, especially for products requiring cross branch coordination.", zh: "選擇性擴大產品經理制度，特別是需要跨分店協調的產品。" } },
  { title: { en: "Central purchasing", zh: "集中採購" }, text: { en: "Use the angle bar example as proof that coordinated purchasing can create meaningful discounts.", zh: "用 angle bar 範例說明協調採購能創造有意義的折扣。" } },
  { title: { en: "Processing", zh: "加工" }, text: { en: "Invest selectively in intermediate processing only where recurring demand, margin, and utilization justify it.", zh: "只在需求穩定、毛利與稼動率足以支持時，才選擇性投資中階加工。" } },
  { title: { en: "Quality", zh: "品質" }, text: { en: "Track fill rate, on time delivery, order accuracy, processing accuracy, complaint rate, and return rate.", zh: "追蹤訂單滿足率、準時交付率、訂單準確率、加工規格準確率、客訴率與退貨率。" } },
  { title: { en: "Analytics capacity", zh: "分析能力" }, text: { en: "Add light central analytics capability at Lynn. The current head office is too thin for serious SKU and customer analysis.", zh: "在 Lynn 總部建立輕量中央分析能力。現有總部人力對嚴肅 SKU 與顧客分析而言過於精簡。" } }
];

const avoidActions = [
  { en: "Do not copy Allied’s centralized heavy asset volume model.", zh: "不要複製 Allied 的重資產集中式大量訂單模式。" },
  { en: "Do not cut inventory across the board because that would damage the service promise.", zh: "不要全面砍庫存，因為這會破壞服務承諾。" },
  { en: "Do not chase truckload bulk orders unless margin, capacity, and logistics cost are fully justified.", zh: "不要追逐整車量大宗訂單，除非毛利、產能與物流成本都能成立。" },
  { en: "Do not make broad greenfield expansion bets during the recession.", zh: "不要在衰退期進行廣泛綠地擴張押注。" },
  { en: "Do not present unsupported savings percentages as case facts.", zh: "不要把未經資料支持的節省百分比寫成個案事實。" },
  { en: "Do not force Environmental factors or Section 201 tariffs into the main case paper.", zh: "不要把 Environmental 因素或 Section 201 鋼鐵關稅硬放進主文。" }
];

const timeline = [
  {
    period: { en: "0 to 6 months", zh: "0 至 6 個月" },
    title: { en: "Stabilize cash and visibility", zh: "穩住現金與可見性" },
    items: [
      { en: "Build SKU and customer profitability exhibits.", zh: "建立 SKU 與顧客獲利 exhibits。" },
      { en: "Pilot selected long tail inventory pooling through Worcester.", zh: "透過 Worcester 試行部分長尾庫存 pooling。" },
      { en: "Make shuttle cost visible by product, branch, urgency, and frequency.", zh: "依產品、分店、急迫性與頻率揭露 shuttle 成本。" },
      { en: "Freeze broad greenfield expansion and protect cash.", zh: "暫停廣泛綠地擴張並保護現金。" },
      { en: "Capture displaced customers from exiting national competitors only where profit is likely.", zh: "只在可能獲利服務時，爭取退出全國性競爭者留下的客戶。" }
    ]
  },
  {
    period: { en: "6 to 18 months", zh: "6 至 18 個月" },
    title: { en: "Build disciplined service", zh: "建立有紀律的服務" },
    items: [
      { en: "Expand selected product manager roles, starting with pipe and flat rolled steel.", zh: "選擇性擴大產品經理角色，先從鋼管與平軋鋼開始。" },
      { en: "Create a branch role map: specialty depth center, local service center, or shuttle dependent branch.", zh: "建立分店角色圖：專精深度中心、本地服務中心，或高度依賴 shuttle 的分店。" },
      { en: "Set minimum pricing rules for high service, low volume, difficult orders.", zh: "對高服務、低量、困難訂單建立最低定價規則。" },
      { en: "Use GMROI and quality metrics together.", zh: "同時使用 GMROI 與品質指標。" },
      { en: "Invest in intermediate processing only after utilization, margin, and demand are proven.", zh: "只有在稼動率、毛利與需求被證明後，才投資中階加工。" }
    ]
  },
  {
    period: { en: "Board level", zh: "董事會層級" },
    title: { en: "Set the five year position", zh: "定義五年定位" },
    items: [
      { en: "Define Worcester’s role as either strategic processing and pooling platform or mainly branch support hub.", zh: "定義 Worcester 是策略性加工與庫存 pooling 平臺，還是主要維持分店支援樞紐。" },
      { en: "Define conditions before an eighth or ninth branch.", zh: "定義開第八或第九個分店前必須滿足的條件。" },
      { en: "Decide how long the company can accept high leverage with only $240K cash.", zh: "決定高槓桿與僅 24 萬美元現金的組合可接受多久。" }
    ]
  }
];

const decisionsNeeded = [
  { title: { en: "Service boundary", zh: "服務邊界" }, text: { en: "Which customers and orders deserve overnight premium service?", zh: "哪些客戶與訂單值得保留隔夜高服務？" } },
  { title: { en: "SKU rules", zh: "SKU 規則" }, text: { en: "Which SKUs must stay local, and which can be pooled at Worcester?", zh: "哪些 SKU 必須在地備貨，哪些可集中於 Worcester？" } },
  { title: { en: "Transfer economics", zh: "調撥經濟性" }, text: { en: "Should internal transfer pricing include shuttle cost and handling cost?", zh: "內部調撥價格是否應納入 shuttle 成本與處理成本？" } },
  { title: { en: "Product management", zh: "產品經理制" }, text: { en: "Which product lines need central product managers?", zh: "哪些產品線需要中央產品經理？" } },
  { title: { en: "Processing investment", zh: "加工投資" }, text: { en: "Which intermediate processing investments meet demand, margin, and utilization thresholds?", zh: "哪些中階加工投資符合需求、毛利與稼動率門檻？" } },
  { title: { en: "Expansion discipline", zh: "擴張紀律" }, text: { en: "What conditions must be met before adding branches or acquiring assets?", zh: "增加分店或收購資產前，需要滿足哪些條件？" } }
];

const dataGaps = [
  { data: { en: "SKU level turnover by branch", zh: "各分店 SKU 層級周轉率" }, why: { en: "Separates specialty inventory from slow moving duplicated inventory.", zh: "用來區分專精品類庫存與低周轉重複庫存。" } },
  { data: { en: "Customer profitability by account", zh: "各帳戶顧客獲利" }, why: { en: "Revenue categories are not enough for service boundary decisions.", zh: "單看營收分類不足以決定服務邊界。" } },
  { data: { en: "Customer type mix", zh: "顧客類型組合" }, why: { en: "Halloran needs the split among OEMs, fabricators, and maintenance accounts.", zh: "Halloran 需要知道 OEM、fabricators 與 maintenance accounts 的比例。" } },
  { data: { en: "Branch level P&L", zh: "分店層級損益" }, why: { en: "Needed before closing, merging, or expanding branches.", zh: "在關閉、合併或擴張分店前必須取得。" } },
  { data: { en: "Shuttle cost by product and branch", zh: "依產品與分店區分的 shuttle 成本" }, why: { en: "Needed to price internal transfers and service promises correctly.", zh: "用來正確計價內部調撥與服務承諾。" } },
  { data: { en: "Quality metrics", zh: "品質指標" }, why: { en: "Fill rate, on time delivery, order accuracy, processing accuracy, returns, and complaints.", zh: "訂單滿足率、準時交付率、訂單準確率、加工規格準確率、退貨與客訴。" } },
  { data: { en: "Processing utilization", zh: "加工稼動率" }, why: { en: "Needed before investing in more slitting, leveling, or fabrication.", zh: "投資更多分條、整平或加工前必須取得。" } }
];

const outOfScope = [
  { en: "Section 201 steel tariffs. The timing is post case and would need external citation. It is not worth the space in a 2 to 3 page paper.", zh: "Section 201 鋼鐵關稅。時點屬 post case，且需要外部引用。對 2 至 3 頁報告而言不值得佔篇幅。" },
  { en: "Unsupported inventory release estimates. A range such as 15% to 25% can be a hypothesis, not a case fact.", zh: "未經支持的庫存釋出估計。15% 至 25% 可以是管理假設，不是個案事實。" },
  { en: "Full branch closure recommendation. The case does not provide enough branch level P&L.", zh: "直接建議關閉分店。個案沒有足夠分店層級損益資料。" },
  { en: "Full conversion to Allied’s model. That ignores Halloran’s market fit and 2001 resilience.", zh: "完整轉向 Allied 模式。這會忽略 Halloran 的市場適配性與 2001 年韌性。" },
  { en: "Heavy Environmental analysis. Environmental issues are not a primary case driver.", zh: "大篇幅 Environmental 分析。環境因素不是本案主要驅動力。" }
];

const reportDraft = {
  background: {
    en: "Halloran Metals is a privately held regional steel and aluminum service center with seven facilities across the Northeast. Its business model is built around overnight delivery, broad SKU availability, branch specialization, local customer relationships, and the Worcester shuttle. This model fits New England’s small batch, urgent, and fragmented metal demand structure. The 2001 recession exposed the cost and working capital burden of supporting seven warehouses and more than 10,000 line items. Sales rose from $157.6M to $169.1M, but net income fell from $1.564M to $0.480M, and cash fell from $1.584M to $0.240M. Halloran’s issue is not the absence of strategy. The issue is that its strategy became financially rigid without enough analytical discipline.",
    zh: "Halloran Metals 是一家私人持有的區域鋼鐵與鋁材服務中心，在美國東北部有七個據點。其商業模式建立在隔夜交付、廣泛 SKU 可得性、分店專精、在地顧客關係，以及 Worcester shuttle 之上。這套模式符合新英格蘭小量、急迫、破碎的金屬需求結構。2001 年景氣衰退暴露出支撐七個倉庫與超過 10,000 個品項所需承擔的成本與營運資金負擔。銷售額從 1.576 億美元上升至 1.691 億美元，但淨利從 156.4 萬美元下降至 48 萬美元，現金從 158.4 萬美元下降至 24 萬美元。Halloran 的問題不是沒有策略，而是策略在缺乏足夠分析紀律下變得財務僵硬。"
  },
  analysis: {
    en: "Halloran’s strategy is coherent. Its critical customers are not just the largest buyers, but customers with urgent, varied, and difficult metal needs. Its value proposition is fast availability, broad product range, and local responsiveness. Its operating capabilities include the branch network, Worcester shuttle, branch specialization, hybrid purchasing, and relationship based sales. The model produces a clear service premium: Halloran’s 2001 revenue per ton and gross margin per ton were substantially higher than Allied’s. Halloran also remained profitable in 2001, while Allied moved slightly negative. The comparison with Allied should be handled carefully. Allied’s centralized model had better inventory turns and stronger absolute earnings in 2000, but it was more exposed in the downturn. Allied’s 2001 operating profit fell from $8.899M to $1.174M, while Halloran’s fell from $7.428M to $5.586M. Halloran’s model therefore looks more recession resilient, not universally superior. The lesson is not that Allied was wrong in every respect. Allied’s product manager structure and product line profitability analysis were valuable. The mistake was tying that discipline too closely to large volume customers, truckload business, and price competition. Halloran should adopt Allied’s analytical discipline, not Allied’s strategy.",
    zh: "Halloran 的策略具一致性。它的關鍵顧客不只是最大買家，而是有急迫、多樣、困難金屬需求的客戶。它的價值主張是快速可得、廣泛產品線與在地反應能力。其營運能力包括分店網絡、Worcester shuttle、分店專精、混合採購，以及關係型銷售。這套模式創造了明確服務溢價：Halloran 2001 年每噸營收與每噸毛利都明顯高於 Allied。Halloran 在 2001 年仍獲利，而 Allied 小幅轉虧。與 Allied 的比較必須謹慎處理。Allied 的集中式模式有較佳庫存週轉，且 2000 年絕對獲利較高，但在衰退中更暴露。Allied 2001 年營業利益從 889.9 萬美元降至 117.4 萬美元，Halloran 則從 742.8 萬美元降至 558.6 萬美元。因此 Halloran 模式較像是衰退期更具韌性，而不是永遠較優。重點不是 Allied 全錯。Allied 的產品經理制度與產品線獲利分析有價值，錯誤在於把這套紀律太緊地綁在大量客戶、整車量業務與價格競爭上。Halloran 應採用 Allied 的分析紀律，不採用 Allied 的策略。"
  },
  recommendation: {
    en: "Halloran should preserve its service differentiation while adding financial discipline. First, it should build SKU and customer profitability analysis by branch, product family, margin, velocity, transfer cost, and service role. Second, it should make shuttle costs visible by including handling, transportation, urgency, and transfer frequency, rather than treating internal transfers as costless because they are billed at cost. Third, it should pilot selected long tail inventory pooling at Worcester, using Binghamton as proof that a branch can operate while building inventory slowly. Fourth, it should expand product manager discipline selectively, especially for pipe and flat rolled steel. Fifth, it should invest in intermediate processing only when recurring demand, margin, and utilization justify it. The company should not broadly cut inventory, copy Allied’s volume model, chase low margin truckload orders, or make broad greenfield expansion bets during the recession.",
    zh: "Halloran 應保留服務差異化，同時加入財務紀律。第一，應依分店、產品族、毛利、周轉速度、調撥成本與服務角色建立 SKU 與顧客獲利分析。第二，應讓 shuttle 成本可見，納入處理、運輸、急迫性與調撥頻率，而不是因為內部調撥以成本計價就把它視為沒有成本。第三，應在 Worcester 試行部分長尾庫存 pooling，並以 Binghamton 作為分店可在緩慢建立庫存時仍然運作的證據。第四，應選擇性擴大產品經理紀律，特別是鋼管與平軋鋼。第五，只有在需求穩定、毛利與稼動率能支持時，才投資中階加工。公司不應全面砍庫存、不應複製 Allied 的大量訂單模式、不應追逐低毛利整車量訂單，也不應在衰退期進行廣泛綠地擴張押注。"
  }
};

const oneMinute = {
  en: "Halloran should not become Allied. Halloran’s decentralized, service based model fits New England’s small, urgent, fragmented metal demand and proved more resilient in the 2001 downturn. But the model is financially exposed. The company needs to keep its service advantage while adding discipline around SKU profitability, customer profitability, shuttle costing, centralized purchasing, quality metrics, and selective processing investment. The right lesson from Allied is not centralization or volume chasing. The right lesson is analytical discipline.",
  zh: "Halloran 不應變成 Allied。Halloran 的分權式服務模式符合新英格蘭小量、急迫、破碎的金屬需求，且在 2001 年衰退期證明較具韌性。但這套模式有財務風險。公司需要保留服務優勢，同時在 SKU 獲利、顧客獲利、shuttle 成本、集中採購、品質指標與選擇性加工投資上加入紀律。從 Allied 應學到的不是集中化或追逐銷量，而是分析紀律。"
};

const questions = [
  {
    q: { en: "Does Halloran have a strategy?", zh: "Halloran 是否有策略？" },
    a: { en: "Yes. It is not fully formalized, but it is coherent: critical customers with urgent and difficult needs, a broad overnight service promise, and capabilities built around branches, specialization, Worcester, purchasing, and sales relationships.", zh: "有。它沒有完全正式化，但具一致性：服務有急迫與困難需求的關鍵顧客、提供廣泛隔夜服務承諾，並以分店、專精、Worcester、採購與銷售關係建立能力。" }
  },
  {
    q: { en: "Why not copy Allied?", zh: "為甚麼不複製 Allied？" },
    a: { en: "Allied has useful discipline, but its centralized, high volume, narrower SKU model was more exposed in the 2001 downturn. It had better inventory turns but much weaker margin quality and a sharper profit collapse.", zh: "Allied 有值得學的紀律，但其集中式、高銷量、較窄 SKU 模式在 2001 年衰退中更暴露。它有較佳庫存週轉，但毛利品質較弱，獲利下滑更劇烈。" }
  },
  {
    q: { en: "What is the real issue with Worcester?", zh: "Worcester 的真正問題是甚麼？" },
    a: { en: "Worcester is both a capability and a hidden cost risk. It enables overnight service and pooling, but internal transfers billed at cost can hide the true cost of serving every product everywhere.", zh: "Worcester 同時是能力，也是隱性成本風險。它支撐隔夜服務與 pooling，但若內部調撥只以成本計價，會掩蓋在每個地方服務每個產品的真實成本。" }
  },
  {
    q: { en: "What should be said in class?", zh: "課堂上應該怎麼說？" },
    a: { en: "Start with the decision. Say that Halloran should keep its service model but stop running it on instinct. Then anchor the answer in GM per ton, cash decline, shuttle cost visibility, and the Allied comparison.", zh: "先講決策。說 Halloran 應保留服務模式，但不能再只靠直覺運作。接著用每噸毛利、現金下降、shuttle 成本可見性，以及 Allied 對比作為支撐。" }
  }
];

function useActiveSection(ids) {
  const [active, setActive] = React.useState(ids[0]);
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        const visible = entries
          .filter(entry => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActive(visible.target.id);
      },
      { rootMargin: "-18% 0px -70% 0px", threshold: [0.05, 0.1, 0.2] }
    );
    ids.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [ids]);
  return active;
}

function Text({ en, zh, mode, as = "span", className = "" }) {
  const Tag = as;
  if (mode === "en") return <Tag className={className}>{en}</Tag>;
  if (mode === "zh") return <Tag className={className} lang="zh-Hant">{zh}</Tag>;
  if (mode === "zh-hans") return <Tag className={className} lang="zh-Hans">{toSimplified(zh)}</Tag>;
  return (
    <Tag className={`${className} dualText`}>
      <span>{en}</span>
      <span lang="zh-Hant">{zh}</span>
    </Tag>
  );
}

function Title({ eyebrow, title, subtitle, mode }) {
  return (
    <div className="sectionTitleBlock">
      {eyebrow && <Text mode={mode} en={eyebrow.en} zh={eyebrow.zh} className="eyebrow" />}
      <Text mode={mode} en={title.en} zh={title.zh} as="h2" className="sectionTitle" />
      {subtitle && <Text mode={mode} en={subtitle.en} zh={subtitle.zh} as="p" className="sectionSubtitle" />}
    </div>
  );
}

function StatusPill({ children, tone = "teal" }) {
  return <span className={`pill ${tone}`}>{children}</span>;
}

function DataTable({ columns, rows, mode, compact = false }) {
  return (
    <div className={`tableWrap ${compact ? "compact" : ""}`}>
      <table>
        <thead>
          <tr>
            {columns.map((col, idx) => (
              <th key={idx}><Text mode={mode} en={col.en} zh={col.zh} /></th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => (
            <tr key={idx}>
              {row.map((cell, cidx) => (
                <td key={cidx} className={cell?.tone ? `cellTone ${cell.tone}` : ""}>
                  {cell?.en !== undefined ? <Text mode={mode} en={cell.en} zh={cell.zh} /> : cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function KpiCard({ item, mode }) {
  return (
    <div className={`kpi ${item.tone}`}>
      <Text mode={mode} en={item.label.en} zh={item.label.zh} as="p" className="kpiLabel" />
      <div className="kpiValue">{item.value}</div>
      <Text mode={mode} en={item.note.en} zh={item.note.zh} as="p" className="kpiNote" />
    </div>
  );
}

function BarCompare({ row, mode }) {
  const max = Math.max(row.h, row.a);
  const hPct = Math.max(6, (row.h / max) * 100);
  const aPct = Math.max(6, (row.a / max) * 100);
  return (
    <div className="barCompare">
      <div className="barTop">
        <Text mode={mode} en={row.label.en} zh={row.label.zh} className="barLabel" />
        <span className="barUnit">{row.unit}</span>
      </div>
      <div className="barLine">
        <span className="barName">Halloran</span>
        <div className="barTrack"><div className="barFill halloran" style={{ width: `${hPct}%` }} /></div>
        <span className="barValue">{row.h}{row.unit}</span>
      </div>
      <div className="barLine">
        <span className="barName">Allied</span>
        <div className="barTrack"><div className="barFill allied" style={{ width: `${aPct}%` }} /></div>
        <span className="barValue">{row.a}{row.unit}</span>
      </div>
    </div>
  );
}

function ProgressRing({ value, label, mode, tone = "teal" }) {
  const degrees = Math.max(0, Math.min(100, value)) * 3.6;
  return (
    <div className="ringItem">
      <div className={`ring ${tone}`} style={{ background: `conic-gradient(var(--ring) ${degrees}deg, #E9DEC9 0deg)` }}>
        <span>{value}%</span>
      </div>
      <Text mode={mode} en={label.en} zh={label.zh} as="p" />
    </div>
  );
}

function Section({ id, children, className = "" }) {
  return <section id={id} className={`section ${className}`}>{children}</section>;
}

function App() {
  const [mode, setMode] = useState("en");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const active = useActiveSection(navItems.map(item => item.id));
  const currentMode = modes.find(item => item.key === mode) || modes[0];

  const decisionTableRows = decisionRows.map(row => [
    { en: row.field.en, zh: row.field.zh },
    { en: row.en, zh: row.zh }
  ]);

  const caseTableRows = caseFitRows.map(row => [
    { en: row.field.en, zh: row.field.zh },
    { en: row.en, zh: row.zh }
  ]);

  const financialRows = halloranFinancials.map(row => [
    { en: row.metric.en, zh: row.metric.zh },
    row.y2000,
    row.y2001,
    row.change,
    { en: row.meaning.en, zh: row.meaning.zh, tone: row.tone }
  ]);

  const expenseTableRows = expenseRows.map(row => [
    { en: row.metric.en, zh: row.metric.zh },
    row.y2000,
    row.y2001,
    row.change,
    { en: row.note.en, zh: row.note.zh }
  ]);

  const comparisonTableRows = comparisonRows.map(row => [
    { en: row.metric.en, zh: row.metric.zh },
    row.halloran,
    row.allied,
    { en: row.judgment.en, zh: row.judgment.zh }
  ]);

  return (
    <div className="hmPage">
      <style>{css}</style>

      <header className="hero">
        <div className="heroMeta">
          <StatusPill tone="plum"><Text mode={mode} en="SCHM 6201 Case Guide" zh="SCHM 6201 個案指南" /></StatusPill>
          <StatusPill tone="teal"><Text mode={mode} en="Halloran Metals" zh="Halloran Metals" /></StatusPill>
        </div>
        <div className="heroGrid">
          <div className="heroText">
            <Text
              mode={mode}
              as="h1"
              className="heroTitle"
              en="Halloran Metals: Keep the service advantage, make it financially disciplined"
              zh="Halloran Metals：保留服務優勢，加入財務紀律"
            />
            <Text
              mode={mode}
              as="p"
              className="heroLead"
              en="The decision is not Halloran versus Allied. The decision is which part of Allied to learn from. Halloran should keep its decentralized service model because it fits New England, while adopting tighter analytical discipline around inventory, customers, shuttle cost, quality, and processing investment."
              zh="決策不是 Halloran 與 Allied 二選一。真正問題是應該學 Allied 的哪一部分。Halloran 應保留符合新英格蘭市場的分權式服務模式，同時在庫存、顧客、shuttle 成本、品質與加工投資上導入更強分析紀律。"
            />
            <div className="heroActionRow">
              <a href="#decision" className="primaryLink"><Text mode={mode} en="Start with decision" zh="先看決策" /></a>
              <a href="#financials" className="secondaryLink"><Text mode={mode} en="Review evidence" zh="查看證據" /></a>
            </div>
          </div>
          <div className="heroPanel">
            <Text mode={mode} as="h3" className="panelTitle" en="One sentence thesis" zh="一句話主張" />
            <Text mode={mode} as="p" className="panelText" en="Adopt Allied’s analytical discipline, not Allied’s strategy." zh="採用 Allied 的分析紀律，不採用 Allied 的策略。" />
            <div className="miniDivider" />
            <Text mode={mode} as="p" className="panelSub" en="Use the case facts to separate the decision, the evidence, and the data still needed before management changes the network." zh="用個案事實區分決策、證據，以及管理階層改變網絡前仍需取得的資料。" />
          </div>
        </div>
        <div className="kpiGrid">
          {kpis.map((item, idx) => <KpiCard key={idx} item={item} mode={mode} />)}
        </div>
      </header>

      <div className="mobileStickySummary">
        <Text mode={mode} en="Core: adopt Allied’s analytical discipline, not Allied’s strategy." zh="核心：採用 Allied 的分析紀律，不採用 Allied 的策略。" />
      </div>

      <div className="layout">
        <aside className="sideNav" aria-label="Section navigation">
          <div className="sideSummary">
            <div className="sideSummaryKicker"><Text mode={mode} en="Case core" zh="個案核心" /></div>
            <Text mode={mode} as="p" en="Adopt Allied’s analytical discipline, not Allied’s strategy." zh="採用 Allied 的分析紀律，不採用 Allied 的策略。" />
            <div className="sideSummaryGrid">
              <span><Text mode={mode} en="Risk" zh="風險" /></span>
              <Text mode={mode} en="Cash and inventory pressure" zh="現金與庫存壓力" />
              <span><Text mode={mode} en="Action" zh="行動" /></span>
              <Text mode={mode} en="Measure, pilot, price, then invest" zh="先衡量、試點、定價，再投資" />
            </div>
          </div>
          <div className="sideNavTitle"><Text mode={mode} en="Reader Map" zh="閱讀地圖" /></div>
          {navItems.map(item => (
            <a key={item.id} href={`#${item.id}`} className={active === item.id ? "active" : ""}>
              <Text mode={mode} en={item.en} zh={item.zh} />
            </a>
          ))}
        </aside>

        <main className="content">
          <Section id="decision">
            <Title
              mode={mode}
              eyebrow={{ en: "Decision first", zh: "決策先行" }}
              title={{ en: "The right move is disciplined service, not strategic imitation", zh: "正確做法是有紀律的服務，不是策略模仿" }}
              subtitle={{ en: "Halloran’s problem is not that it lacks a strategy. It is that its service strategy became too expensive to run without better analytics.", zh: "Halloran 的問題不是沒有策略，而是這套服務策略若缺少更好的分析，營運成本會過高。" }}
            />
            <DataTable
              mode={mode}
              columns={[{ en: "Field", zh: "欄位" }, { en: "Decision logic", zh: "決策邏輯" }]}
              rows={decisionTableRows}
            />
            <div className="callout teal">
              <Text
                mode={mode}
                as="p"
                en="The practical answer: preserve overnight service, branch entrepreneurship, local relationships, specialization, and Worcester. Change the management system that decides which customers, SKUs, transfers, and processing investments deserve the cost."
                zh="實務答案是：保留隔夜服務、分店創業精神、在地關係、專精與 Worcester。改變管理系統，讓公司能判斷哪些顧客、SKU、調撥與加工投資值得承擔成本。"
              />
            </div>
          </Section>

          <Section id="casefit">
            <Title
              mode={mode}
              eyebrow={{ en: "Course and assignment fit", zh: "課程與作業適配" }}
              title={{ en: "Build the paper around strategy, capabilities, financials, and in process metrics", zh: "以策略、能力、財務與營運中指標建立報告" }}
              subtitle={{ en: "This infrastructure follows the case paper format while keeping exhibits available for dense quantitative evidence.", zh: "本架構配合 case paper 格式，並把密集量化證據保留在 exhibits 中。" }}
            />
            <DataTable
              mode={mode}
              columns={[{ en: "Requirement", zh: "要求" }, { en: "Implication for Halloran", zh: "對 Halloran 的含意" }]}
              rows={caseTableRows}
            />
            <div className="frameworkGrid">
              {[
                { en: "Strategy", zh: "策略" },
                { en: "Capabilities", zh: "能力" },
                { en: "Process", zh: "流程" },
                { en: "Technology", zh: "科技" },
                { en: "People", zh: "人員" },
                { en: "Financials", zh: "財務" },
                { en: "Service", zh: "服務" },
                { en: "Inventory", zh: "庫存" },
                { en: "Cost", zh: "成本" },
                { en: "Quality", zh: "品質" }
              ].map((item, idx) => <div className="frameworkChip" key={idx}><Text mode={mode} en={item.en} zh={item.zh} /></div>)}
            </div>
          </Section>

          <Section id="background">
            <Title
              mode={mode}
              eyebrow={{ en: "Case background", zh: "個案背景" }}
              title={{ en: "A service center caught between customer value and working capital pressure", zh: "一家被顧客價值與營運資金壓力夾住的服務中心" }}
              subtitle={{ en: "The case is about fit. Halloran’s model makes sense in its market, but the recession exposes its financial rigidity.", zh: "本案核心是適配性。Halloran 的模式符合其市場，但衰退暴露出財務僵硬。" }}
            />
            <div className="cardGrid three">
              {backgroundCards.map((card, idx) => (
                <article className="infoCard" key={idx}>
                  <Text mode={mode} as="h3" en={card.title.en} zh={card.title.zh} />
                  <ul className="cleanList">
                    {card.points.map((point, pidx) => (
                      <li key={pidx}><Text mode={mode} en={point.en} zh={point.zh} /></li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
            <div className="forceGrid">
              {forceCards.map((force, idx) => (
                <div className={`forceCard ${force.tone}`} key={idx}>
                  <Text mode={mode} as="h4" en={force.title.en} zh={force.title.zh} />
                  <Text mode={mode} as="p" en={force.text.en} zh={force.text.zh} />
                </div>
              ))}
            </div>
          </Section>

          <Section id="strategy">
            <Title
              mode={mode}
              eyebrow={{ en: "Strategy diagnosis", zh: "策略診斷" }}
              title={{ en: "Halloran’s strategy is coherent but under measured", zh: "Halloran 的策略具一致性，但衡量不足" }}
              subtitle={{ en: "The case maps cleanly to the course triad: critical customers, value proposition, and capabilities.", zh: "本案可清楚對應課程三角：關鍵顧客、價值主張與能力。" }}
            />
            <div className="triad">
              <div className="triadCenter">
                <Text mode={mode} en="Service differentiation with financial discipline" zh="服務差異化加財務紀律" />
              </div>
              {strategyTriad.map((item, idx) => (
                <div className={`triadNode node${idx + 1}`} key={idx}>
                  <Text mode={mode} as="h3" en={item.title.en} zh={item.title.zh} />
                  <Text mode={mode} as="p" en={item.text.en} zh={item.text.zh} />
                </div>
              ))}
            </div>
            <div className="twoCol">
              <div className="noteCard">
                <Text mode={mode} as="h3" en="What the strategy gets right" zh="這套策略做對的地方" />
                <ul className="cleanList">
                  {[
                    { en: "Small order business is less visible and less price driven than the bulk market.", zh: "小訂單業務較不顯眼，也比大宗市場少受價格競爭主導。" },
                    { en: "Branch specialization lets each branch become strong in a few categories.", zh: "分店專精讓每個分店能在少數品類建立強勢。" },
                    { en: "The Worcester shuttle links broad availability with local service.", zh: "Worcester shuttle 把廣泛可得性與在地服務連接起來。" },
                    { en: "Personal relationships help Halloran identify customer pain points.", zh: "個人關係幫助 Halloran 找到顧客真正痛點。" }
                  ].map((item, idx) => <li key={idx}><Text mode={mode} en={item.en} zh={item.zh} /></li>)}
                </ul>
              </div>
              <div className="noteCard warn">
                <Text mode={mode} as="h3" en="What the strategy fails to measure" zh="這套策略沒有量清楚的地方" />
                <ul className="cleanList">
                  {[
                    { en: "Which SKUs create real service value versus dormant inventory.", zh: "哪些 SKU 創造真實服務價值，哪些只是沉睡庫存。" },
                    { en: "Which customers deserve high service after full service cost.", zh: "在納入完整服務成本後，哪些顧客值得高服務。" },
                    { en: "When Worcester transfers create value versus hide cost.", zh: "Worcester 調撥何時創造價值，何時只是隱藏成本。" },
                    { en: "Which processing investments are justified by utilization and margin.", zh: "哪些加工投資能由稼動率與毛利支持。" }
                  ].map((item, idx) => <li key={idx}><Text mode={mode} en={item.en} zh={item.zh} /></li>)}
                </ul>
              </div>
            </div>
          </Section>

          <Section id="system">
            <Title
              mode={mode}
              eyebrow={{ en: "Operating system", zh: "營運系統" }}
              title={{ en: "The same system creates differentiation and cost exposure", zh: "同一套系統同時創造差異化與成本暴露" }}
              subtitle={{ en: "The visual map below shows why a simple cost cut would damage the service model.", zh: "下方視覺圖顯示，為甚麼簡單降成本會傷害服務模式。" }}
            />
            <div className="systemMap">
              <div className="systemBox mill"><Text mode={mode} en="Steel mills" zh="鋼廠" /></div>
              <div className="systemArrow">→</div>
              <div className="systemBox halloran"><Text mode={mode} en="Halloran network" zh="Halloran 網絡" /></div>
              <div className="systemArrow">→</div>
              <div className="systemBox customer"><Text mode={mode} en="Small, urgent, varied customers" zh="小量、急迫、多樣顧客" /></div>
              <div className="hubLayer">
                {[
                  { en: "Lynn", zh: "Lynn" },
                  { en: "Concord", zh: "Concord" },
                  { en: "Woonsocket", zh: "Woonsocket" },
                  { en: "Newburgh", zh: "Newburgh" },
                  { en: "Binghamton", zh: "Binghamton" },
                  { en: "Wilkes-Barre", zh: "Wilkes-Barre" }
                ].map((item, idx) => <div className="branchBubble" key={idx}><Text mode={mode} en={item.en} zh={item.zh} /></div>)}
                <div className="worcesterBubble">
                  <Text mode={mode} en="Worcester" zh="Worcester" />
                  <small><Text mode={mode} en="Processing and shuttle hub" zh="加工與 shuttle 樞紐" /></small>
                </div>
              </div>
            </div>
            <div className="cardGrid two">
              {operatingElements.map((item, idx) => (
                <div className="infoCard horizontal" key={idx}>
                  <span className="indexMark">{String(idx + 1).padStart(2, "0")}</span>
                  <div>
                    <Text mode={mode} as="h3" en={item.label.en} zh={item.label.zh} />
                    <Text mode={mode} as="p" en={item.detail.en} zh={item.detail.zh} />
                  </div>
                </div>
              ))}
            </div>
          </Section>

          <Section id="financials">
            <Title
              mode={mode}
              eyebrow={{ en: "Financial evidence", zh: "財務證據" }}
              title={{ en: "Revenue rose, but operating leverage moved against Halloran", zh: "營收上升，但營運槓桿反向壓迫 Halloran" }}
              subtitle={{ en: "The issue is not demand alone. The issue is a service model whose costs rose faster than useful volume and cash.", zh: "問題不只是需求。問題是服務模式的成本增速高於有效銷量與現金承受力。" }}
            />
            <div className="rings">
              <ProgressRing mode={mode} value={7} label={{ en: "Sales growth", zh: "營收成長" }} tone="green" />
              <ProgressRing mode={mode} value={2} label={{ en: "Tonnage growth", zh: "噸數成長" }} tone="gold" />
              <ProgressRing mode={mode} value={69} label={{ en: "Net income decline", zh: "淨利下降" }} tone="red" />
              <ProgressRing mode={mode} value={85} label={{ en: "Cash decline", zh: "現金下降" }} tone="red" />
            </div>
            <DataTable
              mode={mode}
              columns={[{ en: "Metric", zh: "指標" }, { en: "2000", zh: "2000" }, { en: "2001", zh: "2001" }, { en: "Change", zh: "變化" }, { en: "Meaning", zh: "意義" }]}
              rows={financialRows}
            />
            <div className="subsectionTitle"><Text mode={mode} en="Expense pressure" zh="費用壓力" /></div>
            <DataTable
              mode={mode}
              compact
              columns={[{ en: "Expense", zh: "費用" }, { en: "2000", zh: "2000" }, { en: "2001", zh: "2001" }, { en: "Change", zh: "變化" }, { en: "Reading", zh: "解讀" }]}
              rows={expenseTableRows}
            />
            <div className="callout red">
              <Text
                mode={mode}
                as="p"
                en="This is why the recommendation cannot be a generic cost cut. Warehouse, trucking, selling, and occupancy costs are tied directly to Halloran’s service promise. Cutting them blindly would remove the reason customers pay a premium."
                zh="這就是為甚麼建議不能只是籠統降成本。倉儲、運輸、銷售與占用成本都直接連到 Halloran 的服務承諾。盲目削減會移除顧客願意支付溢價的理由。"
              />
            </div>
          </Section>

          <Section id="allied">
            <Title
              mode={mode}
              eyebrow={{ en: "Halloran versus Allied", zh: "Halloran 與 Allied" }}
              title={{ en: "Allied is the warning and the useful benchmark", zh: "Allied 同時是警訊，也是有用標竿" }}
              subtitle={{ en: "Allied has better inventory turns, but its model was more exposed to the 2001 downturn. The answer is selective learning.", zh: "Allied 有更好的庫存週轉，但其模式在 2001 年衰退中更暴露。答案是選擇性學習。" }}
            />
            <div className="barGrid">
              {chartMetrics.map((row, idx) => <BarCompare key={idx} row={row} mode={mode} />)}
            </div>
            <DataTable
              mode={mode}
              columns={[{ en: "Metric", zh: "指標" }, { en: "Halloran 2001", zh: "Halloran 2001" }, { en: "Allied 2001", zh: "Allied 2001" }, { en: "Judgment", zh: "判斷" }]}
              rows={comparisonTableRows}
            />
            <div className="twoCol">
              <div className="noteCard teal">
                <Text mode={mode} as="h3" en="What to learn from Allied" zh="應向 Allied 學甚麼" />
                <ul className="cleanList">
                  {[
                    { en: "Product manager roles can create cross product accountability.", zh: "產品經理角色可建立跨產品責任。" },
                    { en: "Product line profitability analysis is necessary.", zh: "產品線獲利分析是必要的。" },
                    { en: "SKU and customer pruning should be based on evidence, not instinct.", zh: "SKU 與顧客篩選應依據證據，而非直覺。" }
                  ].map((item, idx) => <li key={idx}><Text mode={mode} en={item.en} zh={item.zh} /></li>)}
                </ul>
              </div>
              <div className="noteCard plum">
                <Text mode={mode} as="h3" en="What not to copy" zh="不應複製甚麼" />
                <ul className="cleanList">
                  {[
                    { en: "Heavy centralized volume strategy.", zh: "重資產集中式大量訂單策略。" },
                    { en: "Dependence on truckload business with thin margins.", zh: "依賴低毛利整車量業務。" },
                    { en: "Narrowing customers and SKUs so much that New England service fit is lost.", zh: "過度縮窄顧客與 SKU，導致失去新英格蘭服務適配性。" }
                  ].map((item, idx) => <li key={idx}><Text mode={mode} en={item.en} zh={item.zh} /></li>)}
                </ul>
              </div>
            </div>
          </Section>

          <Section id="evidence">
            <Title
              mode={mode}
              eyebrow={{ en: "Case internal evidence chain", zh: "案內證據鏈" }}
              title={{ en: "The recommendations are grounded in case facts, not generic best practice", zh: "建議建立在個案事實上，不是一般化最佳實務" }}
              subtitle={{ en: "Each item below should become either a body sentence or an exhibit note in the final paper.", zh: "下列每一項都可成為正式報告主文句子或 exhibit 註解。" }}
            />
            <div className="evidenceGrid">
              {evidenceChain.map((item, idx) => (
                <article className="evidenceCard" key={idx}>
                  <StatusPill tone={idx % 2 === 0 ? "teal" : "plum"}><Text mode={mode} en={item.tag.en} zh={item.tag.zh} /></StatusPill>
                  <Text mode={mode} as="h3" en={item.title.en} zh={item.title.zh} />
                  <Text mode={mode} as="p" en={item.detail.en} zh={item.detail.zh} />
                </article>
              ))}
            </div>
          </Section>

          <Section id="issues">
            <Title
              mode={mode}
              eyebrow={{ en: "Problem diagnosis", zh: "問題診斷" }}
              title={{ en: "Eight issues explain why a working strategy became financially exposed", zh: "八個問題說明為甚麼有效策略變成財務暴露" }}
              subtitle={{ en: "These issues are linked. The service promise drives SKU breadth. SKU breadth drives shuttle and inventory cost. Hidden cost weakens decision quality.", zh: "這些問題彼此連動。服務承諾推動 SKU 廣度，SKU 廣度推動 shuttle 與庫存成本，隱性成本削弱決策品質。" }}
            />
            <div className="issueGrid">
              {issueCards.map((item, idx) => (
                <div className="issueCard" key={idx}>
                  <span className="issueNo">{idx + 1}</span>
                  <Text mode={mode} as="h3" en={item.title.en} zh={item.title.zh} />
                  <Text mode={mode} as="p" en={item.text.en} zh={item.text.zh} />
                </div>
              ))}
            </div>
          </Section>

          <Section id="recommendations">
            <Title
              mode={mode}
              eyebrow={{ en: "Recommended solution", zh: "建議方案" }}
              title={{ en: "Preserve, change, avoid, and use the recession selectively", zh: "保留、改變、避免，並選擇性利用衰退期" }}
              subtitle={{ en: "This keeps the recommendation balanced: neither passive survival nor reckless imitation of Allied.", zh: "這讓建議保持平衡：既不是被動求生，也不是冒進模仿 Allied。" }}
            />
            <div className="recommendGrid">
              <article className="recommendCard preserve">
                <Text mode={mode} as="h3" en="A. Preserve" zh="A. 保留" />
                <ul className="cleanList">
                  {preserveActions.map((item, idx) => <li key={idx}><Text mode={mode} en={item.en} zh={item.zh} /></li>)}
                </ul>
              </article>
              <article className="recommendCard change">
                <Text mode={mode} as="h3" en="B. Change" zh="B. 改變" />
                <div className="actionMiniGrid">
                  {changeActions.map((item, idx) => (
                    <div className="actionMini" key={idx}>
                      <Text mode={mode} as="h4" en={item.title.en} zh={item.title.zh} />
                      <Text mode={mode} as="p" en={item.text.en} zh={item.text.zh} />
                    </div>
                  ))}
                </div>
              </article>
              <article className="recommendCard avoid">
                <Text mode={mode} as="h3" en="C. Avoid" zh="C. 避免" />
                <ul className="cleanList">
                  {avoidActions.map((item, idx) => <li key={idx}><Text mode={mode} en={item.en} zh={item.zh} /></li>)}
                </ul>
              </article>
              <article className="recommendCard offensive">
                <Text mode={mode} as="h3" en="D. Recession offensive" zh="D. 衰退期攻勢" />
                <Text
                  mode={mode}
                  as="p"
                  en="Target displaced customers and low risk inventory or asset opportunities from competitors leaving New England, but only where Halloran can serve profitably. Do not use the downturn as an excuse for broad fixed asset bets."
                  zh="鎖定退出新英格蘭市場的競爭者留下的客戶，以及低風險庫存或資產機會，但只限於 Halloran 能獲利服務的情境。不要把衰退期當作大規模固定資產押注的藉口。"
                />
              </article>
            </div>
          </Section>

          <Section id="implementation">
            <Title
              mode={mode}
              eyebrow={{ en: "Implementation", zh: "執行" }}
              title={{ en: "Start with visibility before changing the network", zh: "先建立可見性，再改變網絡" }}
              subtitle={{ en: "The safest sequence is to measure, pilot, price, then invest. Closing or adding branches before this data would be premature.", zh: "最穩妥的順序是先衡量、試點、定價，再投資。在取得資料前關閉或新增分店都過早。" }}
            />
            <div className="timeline">
              {timeline.map((block, idx) => (
                <article className="timelineBlock" key={idx}>
                  <div className="timelineDot">{idx + 1}</div>
                  <div className="timelineContent">
                    <Text mode={mode} as="p" className="timelinePeriod" en={block.period.en} zh={block.period.zh} />
                    <Text mode={mode} as="h3" en={block.title.en} zh={block.title.zh} />
                    <ul className="cleanList">
                      {block.items.map((item, iidx) => <li key={iidx}><Text mode={mode} en={item.en} zh={item.zh} /></li>)}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
            <div className="subsectionTitle"><Text mode={mode} en="Decisions needed" zh="需要決策" /></div>
            <div className="decisionList" aria-label="Decisions needed">
              {decisionsNeeded.map((item, idx) => (
                <article className="decisionRow" key={idx}>
                  <div className="decisionNumber">{idx + 1}</div>
                  <div className="decisionTitleWrap">
                    <Text mode={mode} as="h3" en={item.title.en} zh={item.title.zh} />
                  </div>
                  <div className="decisionQuestion">
                    <Text mode={mode} as="p" en={item.text.en} zh={item.text.zh} />
                  </div>
                </article>
              ))}
            </div>
          </Section>

          <Section id="data">
            <Title
              mode={mode}
              eyebrow={{ en: "Data discipline", zh: "資料紀律" }}
              title={{ en: "What is missing, and why it matters", zh: "缺少甚麼資料，以及為甚麼重要" }}
              subtitle={{ en: "These gaps should be framed as management information needs, not as reasons to avoid a recommendation.", zh: "這些缺口應被表述為管理資訊需求，而不是迴避建議的理由。" }}
            />
            <DataTable
              mode={mode}
              columns={[{ en: "Data needed", zh: "需要資料" }, { en: "Why it matters", zh: "為甚麼重要" }]}
              rows={dataGaps.map(item => [{ en: item.data.en, zh: item.data.zh }, { en: item.why.en, zh: item.why.zh }])}
            />
            <div className="subsectionTitle"><Text mode={mode} en="Out of scope for the main paper" zh="不納入主文" /></div>
            <div className="outScopeGrid">
              {outOfScope.map((item, idx) => <div className="outScope" key={idx}><Text mode={mode} en={item.en} zh={item.zh} /></div>)}
            </div>
          </Section>

          <Section id="draft">
            <Title
              mode={mode}
              eyebrow={{ en: "Report ready draft", zh: "可直接改成報告的版本" }}
              title={{ en: "Compressed draft for the written case paper", zh: "書面 case paper 的壓縮草稿" }}
              subtitle={{ en: "Use this as the body logic. Put dense calculations into exhibits to keep the paper within the page limit.", zh: "可將這段作為主文邏輯。密集計算放進 exhibits，以符合頁數限制。" }}
            />
            {[
              { key: "background", title: { en: "Background", zh: "背景" } },
              { key: "analysis", title: { en: "Analysis", zh: "分析" } },
              { key: "recommendation", title: { en: "Recommended solution", zh: "建議方案" } }
            ].map(block => (
              <article className="draftBlock" key={block.key}>
                <Text mode={mode} as="h3" en={block.title.en} zh={block.title.zh} />
                <Text mode={mode} as="p" en={reportDraft[block.key].en} zh={reportDraft[block.key].zh} />
              </article>
            ))}
          </Section>

          <Section id="toolkit">
            <Title
              mode={mode}
              eyebrow={{ en: "Class toolkit", zh: "課堂工具" }}
              title={{ en: "Use these answers for discussion and Q&A", zh: "用這些答案支援課堂討論與問答" }}
              subtitle={{ en: "The wording is designed for quick spoken use, not as a long script.", zh: "這些語句適合快速口頭使用，不是長篇逐字稿。" }}
            />
            <div className="qaGrid">
              {questions.map((item, idx) => (
                <article className="qaCard" key={idx}>
                  <Text mode={mode} as="h3" en={item.q.en} zh={item.q.zh} />
                  <Text mode={mode} as="p" en={item.a.en} zh={item.a.zh} />
                </article>
              ))}
            </div>
            <div className="oneMinute">
              <Text mode={mode} as="h3" en="Final one minute version" zh="一分鐘版本" />
              <Text mode={mode} as="p" en={oneMinute.en} zh={oneMinute.zh} />
            </div>
          </Section>
        </main>
      </div>

      <button className="mobileNavButton" onClick={() => setDrawerOpen(true)} aria-label="Open navigation">
        <Text mode={mode} en="Map" zh="地圖" />
      </button>
      {drawerOpen && (
        <div className="drawerBackdrop" onClick={() => setDrawerOpen(false)}>
          <div className="drawer" onClick={e => e.stopPropagation()}>
            <div className="drawerHeader">
              <Text mode={mode} en="Reader Map" zh="閱讀地圖" />
              <button onClick={() => setDrawerOpen(false)}>×</button>
            </div>
            {navItems.map(item => (
              <a key={item.id} href={`#${item.id}`} onClick={() => setDrawerOpen(false)} className={active === item.id ? "active" : ""}>
                <Text mode={mode} en={item.en} zh={item.zh} />
              </a>
            ))}
          </div>
        </div>
      )}

      <div className={`modeToggle ${languageOpen ? "open" : ""}`} role="group" aria-label="Language mode">
        {languageOpen && (
          <div className="modeMenu" role="menu">
            {modes.map(item => (
              <button
                key={item.key}
                className={mode === item.key ? "selected" : ""}
                onClick={() => { setMode(item.key); setLanguageOpen(false); }}
                role="menuitem"
              >
                <span className="modeShort">{item.label}</span>
                <span className="modeFull">{item.full}</span>
              </button>
            ))}
          </div>
        )}
        <button
          className="modeMain"
          onClick={() => setLanguageOpen(open => !open)}
          aria-expanded={languageOpen}
          aria-label="Change language mode"
        >
          <span>{currentMode.label}</span>
          <span className="modeChevron">⌃</span>
        </button>
      </div>
    </div>
  );
}

const css = `
:root {
  --bg: ${palette.bg};
  --paper: ${palette.paper};
  --ink: ${palette.ink};
  --muted: ${palette.muted};
  --line: ${palette.line};
  --line-strong: ${palette.lineStrong};
  --teal: ${palette.teal};
  --plum: ${palette.plum};
  --clay: ${palette.clay};
  --moss: ${palette.moss};
  --red: ${palette.red};
  --blue: ${palette.blue};
  --gold: ${palette.gold};
  --green: ${palette.green};
  --soft-teal: ${palette.softTeal};
  --soft-plum: ${palette.softPlum};
  --soft-red: ${palette.softRed};
  --soft-gold: ${palette.softGold};
  --soft-moss: ${palette.softMoss};
}

* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body { margin: 0; background: var(--bg); }
.hmPage {
  min-height: 100vh;
  background:
    radial-gradient(circle at top left, rgba(46, 92, 110, 0.08), transparent 32rem),
    radial-gradient(circle at 90% 10%, rgba(98, 41, 84, 0.08), transparent 30rem),
    var(--bg);
  color: var(--ink);
  font-family: "Yu Gothic", "PingFang TC", "Noto Sans CJK TC", "Noto Sans TC", "PingFang SC", "Noto Sans SC", "Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  line-height: 1.62;
}
.hmPage a { color: inherit; text-decoration: none; }
.hmPage p, .hmPage li, .hmPage td, .hmPage th { overflow-wrap: break-word; }
.hero {
  max-width: 1280px;
  margin: 0 auto;
  padding: 44px 24px 28px;
}
.heroMeta {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 22px;
}
.pill {
  display: inline-flex;
  align-items: center;
  border: 1px solid var(--line);
  border-radius: 999px;
  padding: 5px 10px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.02em;
  background: rgba(255, 253, 246, 0.82);
  color: var(--muted);
}
.pill.teal { color: var(--teal); background: var(--soft-teal); border-color: rgba(46,92,110,0.22); }
.pill.plum { color: var(--plum); background: var(--soft-plum); border-color: rgba(98,41,84,0.22); }
.pill.gold { color: #765B20; background: var(--soft-gold); border-color: rgba(182,142,61,0.28); }
.heroGrid {
  display: grid;
  grid-template-columns: minmax(0, 1.35fr) minmax(280px, 0.65fr);
  gap: 24px;
  align-items: stretch;
}
.heroText {
  padding: 26px;
  border: 1px solid var(--line);
  border-radius: 28px;
  background: rgba(255, 253, 246, 0.72);
}
.heroTitle {
  margin: 0;
  max-width: 980px;
  font-family: Georgia, "Times New Roman", "Noto Serif TC", "Noto Serif SC", serif;
  font-size: clamp(34px, 5.4vw, 66px);
  line-height: 1.02;
  letter-spacing: -0.035em;
  color: var(--ink);
}
.heroLead {
  max-width: 74ch;
  margin: 20px 0 0;
  color: var(--muted);
  font-size: clamp(15px, 1.45vw, 18px);
}
.heroActionRow {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 28px;
}
.primaryLink,
.secondaryLink {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 42px;
  border-radius: 999px;
  padding: 10px 16px;
  font-weight: 800;
  font-size: 14px;
}
.primaryLink { background: var(--teal); color: #fff; }
.secondaryLink { border: 1px solid var(--line-strong); color: var(--ink); background: rgba(255,253,246,0.92); }
.heroPanel {
  border: 1px solid rgba(98,41,84,0.24);
  border-radius: 28px;
  padding: 24px;
  background: linear-gradient(145deg, rgba(241,232,239,0.92), rgba(255,253,246,0.92));
  min-height: 100%;
}
.panelTitle {
  margin: 0 0 14px;
  font-family: Georgia, "Times New Roman", "Noto Serif TC", "Noto Serif SC", serif;
  font-size: 22px;
  color: var(--plum);
}
.panelText {
  margin: 0;
  font-size: clamp(20px, 2.1vw, 24px);
  line-height: 1.28;
  font-family: Georgia, "Times New Roman", "Noto Serif TC", "Noto Serif SC", serif;
  color: var(--ink);
}
.panelSub { margin: 0; color: var(--muted); font-size: 14px; }
.miniDivider { height: 1px; background: var(--line); margin: 22px 0; }
.kpiGrid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 14px;
  margin-top: 18px;
}
.kpi {
  border: 1px solid var(--line);
  border-radius: 22px;
  background: rgba(255,253,246,0.85);
  padding: 16px;
  min-width: 0;
}
.kpi.red { border-color: rgba(199,62,58,0.25); background: var(--soft-red); }
.kpi.green { border-color: rgba(71,122,96,0.25); background: var(--soft-moss); }
.kpi.gold { border-color: rgba(182,142,61,0.28); background: var(--soft-gold); }
.kpiLabel { margin: 0; color: var(--muted); font-size: 13px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.04em; }
.kpiValue { margin-top: 5px; font-size: clamp(28px, 4vw, 44px); line-height: 1; font-weight: 900; letter-spacing: -0.04em; }
.kpiNote { margin: 10px 0 0; font-size: 13px; color: var(--muted); }
.layout {
  max-width: 1280px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 255px minmax(0, 1fr);
  gap: 24px;
  padding: 0 24px 70px;
}
.sideNav {
  position: sticky;
  top: 16px;
  align-self: start;
  max-height: calc(100vh - 32px);
  overflow: auto;
  padding: 12px;
  border: 1px solid var(--line);
  border-radius: 22px;
  background: rgba(255,253,246,0.86);
}
.sideSummary {
  padding: 13px 13px 14px;
  margin-bottom: 12px;
  border: 1px solid rgba(46,92,110,0.18);
  border-radius: 18px;
  background: var(--soft-teal);
}
.sideSummaryKicker {
  margin-bottom: 6px;
  color: var(--teal);
  font-size: 11px;
  font-weight: 950;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}
.sideSummary p {
  margin: 0;
  color: var(--ink);
  font-size: 13px;
  line-height: 1.4;
  font-weight: 850;
}
.sideSummaryGrid {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  column-gap: 8px;
  row-gap: 4px;
  margin-top: 10px;
  font-size: 12px;
  line-height: 1.35;
  color: var(--muted);
}
.sideSummaryGrid > span {
  color: var(--teal);
  font-weight: 900;
}
.sideNavTitle {
  font-size: 12px;
  color: var(--muted);
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin: 3px 8px 10px;
}
.sideNav a {
  display: block;
  padding: 9px 10px;
  border-radius: 13px;
  color: var(--muted);
  font-size: 13px;
  font-weight: 750;
  line-height: 1.22;
  margin-bottom: 3px;
}
.sideNav a.active,
.sideNav a:hover {
  background: var(--soft-teal);
  color: var(--teal);
}
.content { min-width: 0; }
.section {
  scroll-margin-top: 18px;
  margin-bottom: 22px;
  padding: clamp(18px, 2.5vw, 28px);
  border: 1px solid var(--line);
  border-radius: 28px;
  background: rgba(255,253,246,0.84);
}
.sectionTitleBlock { margin-bottom: 18px; }
.eyebrow {
  display: inline-block;
  margin-bottom: 8px;
  color: var(--teal);
  font-size: 12px;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}
.sectionTitle {
  margin: 0;
  max-width: 940px;
  font-family: Georgia, "Times New Roman", "Noto Serif TC", "Noto Serif SC", serif;
  font-size: clamp(25px, 3.1vw, 40px);
  line-height: 1.12;
  letter-spacing: -0.025em;
}
.sectionSubtitle {
  max-width: 76ch;
  margin: 10px 0 0;
  color: var(--muted);
  font-size: 15px;
}
.dualText {
  display: inline-flex;
  flex-direction: column;
  gap: 2px;
}
.dualText > span:first-child { color: inherit; }
.dualText > span:last-child { color: var(--muted); font-size: 0.94em; }
h1.dualText,
h2.dualText,
h3.dualText,
p.dualText,
li .dualText { display: flex; }
h1.dualText > span:last-child,
h2.dualText > span:last-child { color: var(--plum); font-size: 0.62em; letter-spacing: -0.01em; line-height: 1.18; margin-top: 5px; }
.tableWrap {
  width: 100%;
  overflow-x: auto;
  border: 1px solid var(--line);
  border-radius: 20px;
  background: rgba(255,253,246,0.7);
}
.tableWrap table {
  width: 100%;
  border-collapse: collapse;
  min-width: 680px;
}
.tableWrap.compact table { min-width: 600px; }
th, td {
  vertical-align: top;
  text-align: left;
  padding: 11px 12px;
  border-bottom: 1px solid var(--line);
  font-size: 13.2px;
  line-height: 1.38;
  overflow-wrap: break-word;
}
th {
  background: rgba(46,92,110,0.08);
  color: var(--teal);
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
tr:last-child td { border-bottom: none; }
td:first-child { font-weight: 850; color: var(--ink); }
.cellTone.red { color: var(--red); font-weight: 800; }
.cellTone.green { color: var(--green); font-weight: 800; }
.cellTone.gold { color: #81621C; font-weight: 800; }
.callout {
  margin-top: 18px;
  padding: 16px 18px;
  border-radius: 20px;
  border: 1px solid var(--line);
}
.callout p { margin: 0; font-weight: 700; }
.callout.teal { background: var(--soft-teal); border-color: rgba(46,92,110,0.22); color: var(--teal); }
.callout.red { background: var(--soft-red); border-color: rgba(199,62,58,0.22); color: #7D302C; }
.frameworkGrid {
  margin-top: 18px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
.frameworkChip {
  padding: 8px 11px;
  border-radius: 999px;
  border: 1px solid var(--line);
  background: rgba(255,253,246,0.8);
  color: var(--muted);
  font-size: 13px;
  font-weight: 800;
}
.cardGrid { display: grid; gap: 14px; }
.cardGrid.three { grid-template-columns: repeat(3, minmax(0, 1fr)); }
.cardGrid.two { grid-template-columns: repeat(2, minmax(0, 1fr)); }
.infoCard,
.noteCard,
.evidenceCard,
.issueCard,
.recommendCard,
.timelineBlock,
.decisionCard,
.qaCard,
.draftBlock,
.oneMinute {
  border: 1px solid var(--line);
  border-radius: 22px;
  background: rgba(255,253,246,0.88);
  padding: 16px;
}
.infoCard h3,
.noteCard h3,
.evidenceCard h3,
.issueCard h3,
.recommendCard h3,
.timelineBlock h3,
.decisionCard h3,
.qaCard h3,
.draftBlock h3,
.oneMinute h3 {
  margin: 0 0 10px;
  font-family: Georgia, "Times New Roman", "Noto Serif TC", "Noto Serif SC", serif;
  font-size: 20px;
  line-height: 1.2;
}
.infoCard p,
.noteCard p,
.evidenceCard p,
.issueCard p,
.recommendCard p,
.timelineBlock p,
.decisionCard p,
.qaCard p,
.draftBlock p,
.oneMinute p { margin: 0; color: var(--muted); }
.infoCard p, .noteCard p, .evidenceCard p, .issueCard p, .recommendCard p, .timelineBlock p, .decisionCard p, .qaCard p, .draftBlock p, .oneMinute p { max-width: 78ch; }
.cleanList {
  margin: 0;
  padding: 0;
  list-style: none;
}
.cleanList li {
  position: relative;
  padding-left: 18px;
  margin: 7px 0;
  color: var(--muted);
}
.cleanList li:before {
  content: "";
  position: absolute;
  left: 0;
  top: 0.72em;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--teal);
}
.forceGrid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
  margin-top: 16px;
}
.forceCard {
  padding: 16px;
  border-radius: 20px;
  border: 1px solid var(--line);
  background: rgba(255,253,246,0.84);
}
.forceCard h4 { margin: 0 0 8px; font-size: 16px; }
.forceCard p { margin: 0; color: var(--muted); font-size: 14px; }
.forceCard.red { background: var(--soft-red); }
.forceCard.gold { background: var(--soft-gold); }
.forceCard.teal { background: var(--soft-teal); }
.forceCard.green { background: var(--soft-moss); }
.forceCard.plum { background: var(--soft-plum); }
.triad {
  position: relative;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;
  margin: 12px 0 18px;
}
.triadCenter {
  grid-column: 1 / -1;
  justify-self: center;
  border-radius: 999px;
  padding: 12px 18px;
  background: var(--teal);
  color: #fff;
  font-weight: 900;
  text-align: center;
}
.triadNode {
  border: 1px solid var(--line);
  border-radius: 22px;
  padding: 18px;
  background: rgba(255,253,246,0.9);
  min-height: 165px;
}
.triadNode h3 { margin: 0 0 8px; font-family: Georgia, "Times New Roman", "Noto Serif TC", "Noto Serif SC", serif; font-size: 22px; }
.triadNode p { margin: 0; color: var(--muted); }
.node1 { border-color: rgba(46,92,110,0.22); background: var(--soft-teal); }
.node2 { border-color: rgba(98,41,84,0.2); background: var(--soft-plum); }
.node3 { border-color: rgba(182,142,61,0.25); background: var(--soft-gold); }
.twoCol { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 14px; margin-top: 14px; }
.noteCard.teal { background: var(--soft-teal); border-color: rgba(46,92,110,0.22); }
.noteCard.plum { background: var(--soft-plum); border-color: rgba(98,41,84,0.22); }
.noteCard.warn { background: var(--soft-gold); border-color: rgba(182,142,61,0.25); }
.systemMap {
  border: 1px solid var(--line);
  border-radius: 24px;
  padding: 18px;
  background: linear-gradient(180deg, rgba(231,240,239,0.75), rgba(255,253,246,0.9));
  overflow: hidden;
}
.systemBox {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 54px;
  padding: 12px 16px;
  border-radius: 18px;
  font-weight: 900;
  border: 1px solid var(--line-strong);
  background: var(--paper);
}
.systemBox.mill { color: var(--plum); }
.systemBox.halloran { color: var(--teal); min-width: 240px; }
.systemBox.customer { color: var(--clay); }
.systemArrow { display: inline-flex; align-items: center; justify-content: center; padding: 0 12px; font-size: 26px; color: var(--muted); }
.hubLayer {
  position: relative;
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 10px;
}
.branchBubble,
.worcesterBubble {
  min-height: 70px;
  border-radius: 18px;
  border: 1px solid var(--line);
  background: rgba(255,253,246,0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 12px;
  font-weight: 850;
}
.worcesterBubble {
  grid-column: 1 / -1;
  min-height: 86px;
  flex-direction: column;
  background: var(--soft-plum);
  color: var(--plum);
  border-color: rgba(98,41,84,0.24);
}
.worcesterBubble small { margin-top: 4px; font-size: 12px; color: var(--muted); }
.infoCard.horizontal { display: grid; grid-template-columns: 48px minmax(0, 1fr); gap: 14px; align-items: start; }
.indexMark {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  background: var(--teal);
  font-weight: 900;
}
.rings {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 12px;
  margin-bottom: 18px;
}
.ringItem {
  border: 1px solid var(--line);
  border-radius: 20px;
  padding: 16px;
  display: flex;
  gap: 12px;
  align-items: center;
  background: rgba(255,253,246,0.88);
}
.ring {
  --ring: var(--teal);
  width: 62px;
  height: 62px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  flex: 0 0 auto;
}
.ring:before {
  content: "";
  position: absolute;
}
.ring span {
  width: 45px;
  height: 45px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: var(--paper);
  color: var(--ink);
  font-size: 13px;
  font-weight: 900;
}
.ring.red { --ring: var(--red); }
.ring.green { --ring: var(--green); }
.ring.gold { --ring: var(--gold); }
.ringItem p { margin: 0; color: var(--muted); font-weight: 800; font-size: 13px; }
.subsectionTitle {
  margin: 22px 0 12px;
  font-family: Georgia, "Times New Roman", "Noto Serif TC", "Noto Serif SC", serif;
  font-size: 24px;
  font-weight: 900;
  color: var(--ink);
}
.barGrid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 12px; margin-bottom: 18px; }
.barCompare {
  border: 1px solid var(--line);
  border-radius: 20px;
  padding: 15px;
  background: rgba(255,253,246,0.9);
}
.barTop { display: flex; align-items: baseline; justify-content: space-between; gap: 12px; margin-bottom: 10px; }
.barLabel { font-weight: 900; }
.barUnit { font-size: 12px; color: var(--muted); font-weight: 800; }
.barLine { display: grid; grid-template-columns: 72px minmax(0, 1fr) 72px; gap: 8px; align-items: center; margin: 8px 0; }
.barName { font-size: 12px; color: var(--muted); font-weight: 800; }
.barTrack { height: 10px; border-radius: 999px; background: #E9DEC9; overflow: hidden; }
.barFill { height: 100%; border-radius: 999px; }
.barFill.halloran { background: var(--teal); }
.barFill.allied { background: var(--plum); }
.barValue { font-size: 12px; color: var(--ink); font-weight: 900; text-align: right; }
.evidenceGrid,
.issueGrid,
.qaGrid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;
}
.decisionList {
  display: grid;
  gap: 10px;
}
.decisionRow {
  display: grid;
  grid-template-columns: 38px minmax(150px, 0.28fr) minmax(0, 1fr);
  gap: 12px;
  align-items: start;
  border: 1px solid var(--line);
  border-radius: 18px;
  background: rgba(255,253,246,0.9);
  padding: 12px;
  min-width: 0;
}
.decisionNumber {
  width: 30px;
  height: 30px;
  border-radius: 10px;
  background: var(--soft-plum);
  color: var(--plum);
  font-weight: 950;
  display: grid;
  place-items: center;
  line-height: 1;
}
.decisionTitleWrap,
.decisionQuestion {
  min-width: 0;
}
.decisionRow h3 {
  margin: 2px 0 0;
  font-family: Georgia, "Times New Roman", "Noto Serif TC", "Noto Serif SC", serif;
  font-size: 17px;
  line-height: 1.18;
  overflow-wrap: anywhere;
}
.decisionRow p {
  margin: 0;
  color: var(--muted);
  font-size: 13.5px;
  line-height: 1.42;
  max-width: none;
  overflow-wrap: anywhere;
}
.decisionRow .dualText {
  gap: 3px;
}
.decisionRow .dualText > span:last-child {
  font-size: 0.92em;
}
.evidenceCard h3 { margin-top: 12px; }
.issueCard { position: relative; padding-left: 62px; min-height: 150px; }
.issueNo {
  position: absolute;
  left: 18px;
  top: 18px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: var(--soft-teal);
  color: var(--teal);
  font-weight: 900;
}
.recommendGrid { display: grid; grid-template-columns: 0.88fr 1.12fr; gap: 14px; }
.recommendCard.change { grid-row: span 2; background: var(--soft-teal); border-color: rgba(46,92,110,0.22); }
.recommendCard.preserve { background: var(--soft-moss); border-color: rgba(71,122,96,0.22); }
.recommendCard.avoid { background: var(--soft-red); border-color: rgba(199,62,58,0.22); }
.recommendCard.offensive { background: var(--soft-gold); border-color: rgba(182,142,61,0.25); }
.actionMiniGrid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 10px; }
.actionMini {
  border: 1px solid rgba(46,92,110,0.18);
  border-radius: 16px;
  padding: 12px;
  background: rgba(255,253,246,0.6);
}
.actionMini h4 { margin: 0 0 6px; font-size: 14px; color: var(--teal); }
.actionMini p { margin: 0; font-size: 13px; color: var(--muted); }
.timeline { position: relative; display: grid; gap: 14px; }
.timelineBlock { display: grid; grid-template-columns: 44px minmax(0, 1fr); gap: 14px; align-items: start; }
.timelineDot {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: var(--plum);
  color: #fff;
  display: grid;
  place-items: center;
  font-weight: 900;
}
.timelinePeriod { margin: 0 0 2px !important; color: var(--teal) !important; font-size: 12px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.06em; }
.decisionCard { position: relative; padding-left: 64px; }
.decisionCard span {
  position: absolute;
  top: 18px;
  left: 18px;
  width: 32px;
  height: 32px;
  border-radius: 10px;
  background: var(--soft-plum);
  color: var(--plum);
  font-weight: 900;
  display: grid;
  place-items: center;
}
.outScopeGrid { display: grid; gap: 10px; }
.outScope {
  border: 1px solid rgba(199,62,58,0.18);
  background: var(--soft-red);
  border-radius: 16px;
  padding: 12px 14px;
  color: #7D302C;
  font-weight: 700;
}
.draftBlock { margin-bottom: 12px; }
.draftBlock p { font-size: 15px; color: var(--ink); }
.oneMinute {
  margin-top: 14px;
  background: var(--soft-teal);
  border-color: rgba(46,92,110,0.24);
}
.oneMinute p { color: var(--ink); font-size: 16px; font-weight: 650; }
.modeToggle {
  position: fixed;
  right: 16px;
  bottom: 16px;
  z-index: 60;
  display: grid;
  gap: 8px;
  justify-items: end;
}
.modeMain {
  min-width: 64px;
  min-height: 42px;
  border-radius: 999px;
  border: 1px solid rgba(43,38,33,0.14);
  background: rgba(255,253,246,0.9);
  color: var(--teal);
  backdrop-filter: blur(12px);
  box-shadow: 0 10px 24px rgba(43,38,33,0.14);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 8px 12px;
  font-size: 12px;
  font-weight: 950;
  cursor: pointer;
}
.modeChevron {
  color: var(--muted);
  font-size: 13px;
  line-height: 1;
  transition: transform 160ms ease;
}
.modeToggle.open .modeChevron { transform: rotate(180deg); }
.modeMenu {
  display: grid;
  gap: 6px;
  width: 184px;
  padding: 8px;
  border-radius: 18px;
  border: 1px solid rgba(43,38,33,0.12);
  background: rgba(255,253,246,0.94);
  backdrop-filter: blur(14px);
  box-shadow: 0 16px 32px rgba(43,38,33,0.16);
}
.modeMenu button {
  width: 100%;
  border: 0;
  border-radius: 13px;
  background: transparent;
  color: var(--muted);
  padding: 9px 10px;
  display: grid;
  grid-template-columns: 48px minmax(0, 1fr);
  gap: 8px;
  align-items: center;
  text-align: left;
  cursor: pointer;
}
.modeMenu button:hover { background: var(--soft-teal); }
.modeMenu button.selected { background: var(--teal); color: #fff; }
.modeShort { font-size: 12px; font-weight: 950; }
.modeFull { font-size: 12px; font-weight: 800; opacity: 0.9; }
.mobileStickySummary {
  display: none;
}
.mobileNavButton {
  position: fixed;
  left: 16px;
  bottom: 16px;
  display: none;
  z-index: 60;
  min-height: 38px;
  border: 1px solid rgba(43,38,33,0.12);
  background: rgba(255,253,246,0.9);
  color: var(--teal);
  border-radius: 999px;
  padding: 8px 14px;
  font-weight: 900;
  box-shadow: 0 10px 24px rgba(43,38,33,0.12);
}
.drawerBackdrop {
  position: fixed;
  inset: 0;
  z-index: 100;
  background: rgba(43,38,33,0.18);
  display: flex;
  align-items: flex-end;
}
.drawer {
  width: 100%;
  max-height: 78vh;
  overflow: auto;
  background: var(--paper);
  border-radius: 24px 24px 0 0;
  padding: 16px;
  border-top: 1px solid var(--line);
}
.drawerHeader {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 900;
  margin-bottom: 10px;
}
.drawerHeader button {
  border: 0;
  background: var(--soft-red);
  width: 34px;
  height: 34px;
  border-radius: 50%;
  font-size: 20px;
  cursor: pointer;
}
.drawer a {
  display: block;
  padding: 12px 10px;
  border-radius: 14px;
  color: var(--muted);
  font-weight: 800;
}
.drawer a.active { background: var(--soft-teal); color: var(--teal); }

@media (max-width: 1080px) {
  .heroGrid { grid-template-columns: 1fr; }
  .mobileStickySummary {
    display: block;
    position: sticky;
    top: 0;
    z-index: 45;
    margin: 0 14px 14px;
    padding: 9px 12px;
    border: 1px solid rgba(46,92,110,0.18);
    border-radius: 999px;
    background: rgba(231,240,239,0.94);
    color: var(--teal);
    font-size: 12.5px;
    font-weight: 900;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    backdrop-filter: blur(12px);
  }
  .kpiGrid, .rings { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .layout { grid-template-columns: 1fr; }
  .sideNav { display: none; }
  .mobileNavButton { display: inline-flex; }
  .cardGrid.three, .forceGrid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
}

@media (max-width: 760px) {
  .hero { padding: 24px 12px 14px; }
  .layout { padding: 0 12px 86px; }
  .heroText, .heroPanel, .section { border-radius: 20px; padding: 16px; }
  .section { margin-bottom: 16px; }
  .heroTitle { font-size: clamp(32px, 11vw, 46px); line-height: 1.04; }
  .heroLead { font-size: 14.5px; line-height: 1.55; }
  .sectionTitle { font-size: clamp(23px, 8vw, 34px); }
  .sectionSubtitle { font-size: 14px; }
  .heroMeta { gap: 6px; margin-bottom: 14px; }
  .pill { font-size: 11px; padding: 4px 8px; }
  .kpiGrid, .rings, .cardGrid.three, .cardGrid.two, .forceGrid, .triad, .twoCol, .barGrid, .evidenceGrid, .issueGrid, .recommendGrid, .actionMiniGrid, .qaGrid { grid-template-columns: 1fr; }
  .triadCenter { justify-self: stretch; border-radius: 18px; }
  .triadNode { min-height: auto; }
  .systemMap { display: grid; gap: 8px; }
  .systemBox { width: 100%; }
  .systemArrow { transform: rotate(90deg); padding: 2px 0; }
  .hubLayer { grid-template-columns: 1fr; }
  .infoCard.horizontal { grid-template-columns: 40px minmax(0, 1fr); }
  .issueCard, .decisionCard { padding-left: 18px; padding-top: 62px; }
  .issueNo, .decisionCard span { top: 18px; left: 18px; }
  .decisionRow { grid-template-columns: 30px minmax(0, 1fr); gap: 8px 10px; padding: 11px; }
  .decisionQuestion { grid-column: 1 / -1; padding-left: 40px; }
  .decisionRow h3 { font-size: 16px; }
  .decisionRow p { font-size: 13px; line-height: 1.4; }
  .timelineBlock { grid-template-columns: 1fr; }
  .barLine { grid-template-columns: 64px minmax(0, 1fr) 56px; }
  .modeToggle { right: 12px; bottom: 12px; }
  .modeMenu { width: 176px; }
  .mobileNavButton { left: 12px; bottom: 12px; }
  .tableWrap table { min-width: 560px; }
  th, td { padding: 10px 10px; font-size: 12.8px; }
  .draftBlock p { font-size: 14px; line-height: 1.58; }
  .barLine { grid-template-columns: 56px minmax(0, 1fr) 52px; }
}

@media print {
  .modeToggle, .mobileNavButton, .drawerBackdrop, .sideNav { display: none !important; }
  .layout { display: block; max-width: none; }
  .section { break-inside: avoid; background: #fff; }
  .hmPage { background: #fff; }
}
`;

export default App;
