// 新闻数据类型定义
export interface NewsItem {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  category: string;
  image: string;
  slug: string;
  author?: string;
  content?: string;
  relatedNews?: RelatedNewsItem[];
}

// 相关新闻类型
export interface RelatedNewsItem {
  id: string;
  title: string;
  date: string;
  image: string;
  slug: string;
}

// 分类列表
export const newsCategories = [
  { name: '全部', value: 'all' },
  { name: '展览活动', value: '展览活动' },
  { name: '公司动态', value: '公司动态' },
  { name: '合作项目', value: '合作项目' },
  { name: '行业资讯', value: '行业资讯' },
  { name: '文化教育', value: '文化教育' },
  { name: '荣誉奖项', value: '荣誉奖项' },
  { name: '学术活动', value: '学术活动' }
];

// 新闻数据
export const newsData: NewsItem[] = [
  {
    id: '1',
    title: '聆花文化掐丝珐琅艺术展览在京开幕',
    date: '2024-04-15',
    excerpt: '《传承与创新 - 聆花掐丝珐琅艺术展》于北京艺术中心盛大开幕，展出近50件精品力作，吸引众多艺术爱好者与收藏家参观。',
    category: '展览活动',
    image: '/images/exhibition.jpg',
    slug: 'exhibition-opening',
    author: '聆花文化传播部',
    content: `
    <p class="mb-4">4月15日，由聆花文化主办的《传承与创新 - 聆花掐丝珐琅艺术展》在北京艺术中心盛大开幕，吸引了众多艺术爱好者和收藏家参观。本次展览共展出近50件精品力作，涵盖传统题材和现代创新作品，全面展示了掐丝珐琅艺术的历史传承与当代发展。</p>

    <p class="mb-4">开幕式上，文化部非遗司领导、中国工艺美术协会代表以及多位知名艺术评论家出席并致辞。聆花文化创始人在致辞中表示："掐丝珐琅是中国传统金属工艺的瑰宝，聆花文化致力于在传承的基础上进行创新，让这门古老艺术焕发新的生命力。"</p>

    <h3 class="text-xl font-bold mb-2 mt-6">展览亮点</h3>

    <p class="mb-4">本次展览分为"古韵传承"、"创新表达"和"跨界融合"三大板块。在"古韵传承"区域，展出了多件复刻明清宫廷经典作品，包括景泰蓝花鸟纹饰瓶、龙凤呈祥盖碗等；"创新表达"区域展示了当代掐丝珐琅艺术家的创新作品，将传统工艺与现代审美相结合；"跨界融合"区域则呈现了掐丝珐琅与其他艺术形式的跨界合作成果，如掐丝珐琅与现代家居、时尚设计的结合作品。</p>

    <p class="mb-4">展览现场还设置了工艺展示区，邀请国家级非遗传承人现场演示掐丝珐琅制作工艺，观众可近距离了解这一古老工艺的制作流程和技术要点。此外，展览期间还举办了多场讲座和工作坊，邀请专家学者深入探讨掐丝珐琅艺术的历史价值和当代意义。</p>

    <h3 class="text-xl font-bold mb-2 mt-6">观众反响</h3>

    <p class="mb-4">展览吸引了众多观众参观，许多人表示对掐丝珐琅艺术有了更深入的了解和欣赏。一位收藏家表示："这次展览不仅展示了传统掐丝珐琅的精湛工艺，更让我看到了这门古老艺术在当代的创新可能，非常震撼。"</p>

    <p class="mb-4">据悉，本次展览将持续至5月15日，随后将前往上海、广州等地巡展。聆花文化相关负责人表示，希望通过此次展览让更多人了解和欣赏掐丝珐琅艺术，促进这一传统工艺的传承和发展。</p>

    <div class="bg-cream p-4 rounded-lg my-6">
      <h4 class="font-medium mb-2">展览信息</h4>
      <ul class="space-y-1 text-gray-700">
        <li><span class="font-medium">展览名称：</span>传承与创新 - 聆花掐丝珐琅艺术展</li>
        <li><span class="font-medium">展览时间：</span>2024年4月15日 - 5月15日</li>
        <li><span class="font-medium">展览地点：</span>北京艺术中心（朝阳区望京东园四区2号楼）</li>
        <li><span class="font-medium">开放时间：</span>周二至周日 10:00-18:00（周一闭馆）</li>
      </ul>
    </div>
    `,
    relatedNews: [
      {
        id: '2',
        title: '掐丝珐琅艺术大师进校园活动圆满结束',
        date: '2024-03-20',
        image: '/images/gallery-7.jpg',
        slug: 'campus-activities'
      },
      {
        id: '3',
        title: '聆花文化与著名设计师陈红达成合作',
        date: '2024-02-15',
        image: '/images/collaboration-invitation.jpg',
        slug: 'designer-collaboration'
      },
      {
        id: '4',
        title: '掐丝珐琅艺术入选"中国文化海外推广计划"',
        date: '2024-01-10',
        image: '/images/gallery-2.jpg',
        slug: 'overseas-promotion'
      }
    ]
  },
  {
    id: '2',
    title: '掐丝珐琅艺术大师进校园活动圆满结束',
    date: '2024-03-20',
    excerpt: '聆花文化举办的"掐丝珐琅艺术进校园"活动在北京多所高校成功举办，让青年学子亲身体验传统工艺的魅力，培养新一代非遗传承者。',
    category: '文化教育',
    image: '/images/gallery-7.jpg',
    slug: 'campus-activities',
    author: '聆花文化教育部',
    content: `
    <p class="mb-4">由聆花文化主办的"掐丝珐琅艺术进校园"系列活动于3月20日圆满结束。活动历时两个月，先后走进北京大学、清华大学、中央美术学院等多所高校，通过讲座、工作坊和小型展览等形式，让大学生们近距离接触和了解掐丝珐琅艺术。</p>

    <p class="mb-4">活动邀请了国家级非遗传承人和聆花文化的艺术大师走进校园，为学生们讲解掐丝珐琅艺术的历史渊源、工艺特点和审美价值。在工作坊环节，学生们有机会亲手尝试简单的掐丝珐琅制作，体验这一传统工艺的魅力。</p>

    <h3 class="text-xl font-bold mb-2 mt-6">弘扬传统 培育人才</h3>

    <p class="mb-4">聆花文化创始人在活动总结会上表示："传统工艺的传承离不开年轻一代的参与。通过此次活动，我们希望能让更多年轻人了解掐丝珐琅艺术，激发他们对传统文化的兴趣，并吸引有志之士加入到非遗传承的队伍中来。"</p>

    <p class="mb-4">据悉，此次活动共吸引了上千名大学生参与，其中多名学生表达了学习掐丝珐琅技艺的意愿。聆花文化已与部分高校达成合作，将设立"掐丝珐琅艺术创新实践基地"，为有兴趣的学生提供更多学习和实践的机会。</p>

    <h3 class="text-xl font-bold mb-2 mt-6">传统工艺的当代创新</h3>

    <p class="mb-4">活动期间，聆花文化还展示了多件融合现代设计理念的掐丝珐琅作品，引发了师生们的广泛关注和讨论。中央美术学院一位设计专业的教授评价道："聆花文化的作品很好地展示了传统工艺如何与现代审美对话，为学生们提供了传统与创新结合的范例。"</p>

    <p class="mb-4">未来，聆花文化计划将"掐丝珐琅艺术进校园"活动持续开展下去，并逐步扩展到全国更多高校，让这一传统工艺得到更广泛的传播和认可。</p>
    `,
    relatedNews: [
      {
        id: '5',
        title: '聆花文化推出青年艺术家培育计划',
        date: '2023-12-05',
        image: '/images/gallery-9.jpg',
        slug: 'youth-artist-program'
      },
      {
        id: '7',
        title: '聆花文化参与非遗保护学术研讨会',
        date: '2023-10-25',
        image: '/images/gallery-4.jpg',
        slug: 'academic-seminar'
      },
      {
        id: '1',
        title: '聆花文化掐丝珐琅艺术展览在京开幕',
        date: '2024-04-15',
        image: '/images/exhibition.jpg',
        slug: 'exhibition-opening'
      }
    ]
  },
  {
    id: '3',
    title: '聆花文化与著名设计师陈红达成合作',
    date: '2024-02-15',
    excerpt: '聆花文化与国际知名设计师陈红达成战略合作，共同推出融合现代设计理念的掐丝珐琅艺术新品，为传统工艺注入当代活力。',
    category: '合作项目',
    image: '/images/collaboration-invitation.jpg',
    slug: 'designer-collaboration',
    author: '聆花文化品牌部',
    content: `
    <p class="mb-4">2月15日，聆花文化与国际知名设计师陈红正式签署战略合作协议，双方将共同开发一系列融合现代设计理念的掐丝珐琅艺术产品，旨在为这一传统工艺注入当代活力，拓展其在现代生活中的应用场景。</p>

    <p class="mb-4">陈红是中国知名的工业设计师，曾获得多项国际设计大奖，其作品以简约现代、融合东方美学元素著称。此次与聆花文化的合作，是她首次深入探索传统工艺与现代设计的跨界融合。</p>

    <h3 class="text-xl font-bold mb-2 mt-6">传统与现代的碰撞</h3>

    <p class="mb-4">在合作发布会上，陈红表示："掐丝珐琅是中国传统工艺中的瑰宝，拥有极高的艺术价值和文化内涵。我希望通过设计的力量，让这一古老工艺在保持其精髓的同时，能以更加现代的面貌走进当代人的生活。"</p>

    <p class="mb-4">聆花文化创始人则表示："与陈红的合作是聆花文化探索'传统工艺现代转化'的重要一步。陈红的设计理念与我们传承创新的品牌理念高度契合，相信这次合作将碰撞出令人惊喜的火花。"</p>

    <h3 class="text-xl font-bold mb-2 mt-6">合作系列产品</h3>

    <p class="mb-4">据悉，双方合作的首个系列将以"新东方美学"为主题，包括家居饰品、灯具、首饰等多个品类，预计将于今年9月正式发布。这些产品将保留掐丝珐琅的传统工艺和色彩特点，同时在造型、功能和使用场景上进行现代化创新。</p>

    <p class="mb-4">发布会现场展示了部分合作系列的概念设计，简约流畅的线条与传统掐丝珐琅的华丽色彩形成鲜明对比，引发了与会嘉宾的广泛关注和好评。</p>

    <p class="mb-4">业内人士评价，聆花文化与陈红的合作代表了传统工艺与现代设计深度融合的新趋势，有望为传统工艺的创新发展提供有益探索。</p>
    `,
    relatedNews: [
      {
        id: '8',
        title: '聆花文化与故宫博物院达成合作',
        date: '2023-09-12',
        image: '/images/gallery-12.jpg',
        slug: 'palace-museum-cooperation'
      },
      {
        id: '1',
        title: '聆花文化掐丝珐琅艺术展览在京开幕',
        date: '2024-04-15',
        image: '/images/exhibition.jpg',
        slug: 'exhibition-opening'
      },
      {
        id: '5',
        title: '聆花文化推出青年艺术家培育计划',
        date: '2023-12-05',
        image: '/images/gallery-9.jpg',
        slug: 'youth-artist-program'
      }
    ]
  },
  {
    id: '4',
    title: '掐丝珐琅艺术入选"中国文化海外推广计划"',
    date: '2024-01-10',
    excerpt: '聆花文化的掐丝珐琅作品入选文化部"中国文化海外推广计划"，将于2024年在多个国家巡展，展示中国传统工艺的独特魅力。',
    category: '行业资讯',
    image: '/images/gallery-2.jpg',
    slug: 'overseas-promotion',
    author: '聆花文化国际部',
    content: `
    <p class="mb-4">近日，文化和旅游部公布了2024年"中国文化海外推广计划"入选项目名单，聆花文化的"掐丝珐琅艺术国际巡展"成功入选，这也是掐丝珐琅艺术首次被纳入国家级文化对外推广计划。</p>

    <p class="mb-4">据悉，该巡展计划将于2024年陆续在法国、德国、英国、美国等国家举办，展出聆花文化的精选掐丝珐琅作品，包括传统复刻作品和现代创新设计，全面展示中国掐丝珐琅艺术的历史传承与当代发展。</p>

    <h3 class="text-xl font-bold mb-2 mt-6">文化交流的新平台</h3>

    <p class="mb-4">文化和旅游部相关负责人表示："'中国文化海外推广计划'旨在通过高质量的文化项目，向国际社会展示中国文化的深厚底蕴和当代发展成就。掐丝珐琅作为中国传统金属工艺的代表，具有鲜明的民族特色和精湛的工艺技术，是向世界展示中华优秀传统文化的重要载体。"</p>

    <p class="mb-4">聆花文化创始人对此表示："能够入选'中国文化海外推广计划'是对聆花文化多年来坚持传统工艺传承与创新的肯定。我们将借此机会，让更多国际友人了解掐丝珐琅艺术，感受中国传统工艺的魅力，促进中外文化交流与互鉴。"</p>

    <h3 class="text-xl font-bold mb-2 mt-6">巡展亮点</h3>

    <p class="mb-4">此次巡展将分为"传统精粹"和"创新融合"两大板块。"传统精粹"部分将展出聆花文化复刻的多件明清宫廷掐丝珐琅珍品，展示这一工艺的历史渊源和传统技艺；"创新融合"部分则将呈现聆花文化近年来在工艺创新和设计融合方面的成果，包括与国际设计师合作的跨界作品。</p>

    <p class="mb-4">除了展览，巡展期间还将举办多场工艺演示、文化讲座和互动体验活动，让国际观众能更加深入地了解掐丝珐琅工艺的制作流程和文化内涵。</p>

    <p class="mb-4">业内专家指出，掐丝珐琅艺术入选国家级文化对外推广计划，既是对这一传统工艺价值的认可，也将为中国传统工艺走向国际提供更广阔的平台。</p>
    `,
    relatedNews: [
      {
        id: '6',
        title: '聆花文化掐丝珐琅作品获国际工艺大奖',
        date: '2023-11-18',
        image: '/images/gallery-1.jpg',
        slug: 'international-award'
      },
      {
        id: '3',
        title: '聆花文化与著名设计师陈红达成合作',
        date: '2024-02-15',
        image: '/images/collaboration-invitation.jpg',
        slug: 'designer-collaboration'
      },
      {
        id: '8',
        title: '聆花文化与故宫博物院达成合作',
        date: '2023-09-12',
        image: '/images/gallery-12.jpg',
        slug: 'palace-museum-cooperation'
      }
    ]
  },
  {
    id: '5',
    title: '聆花文化推出青年艺术家培育计划',
    date: '2023-12-05',
    excerpt: '聆花文化正式启动"新生代·匠心传承"青年艺术家培育计划，面向全国招募有志于掐丝珐琅艺术创作的青年才俊，提供专业培训和展示平台。',
    category: '公司动态',
    image: '/images/gallery-9.jpg',
    slug: 'youth-artist-program'
  },
  {
    id: '6',
    title: '聆花文化掐丝珐琅作品获国际工艺大奖',
    date: '2023-11-18',
    excerpt: '由聆花文化艺术总监王明设计的掐丝珐琅作品《大白伞盖佛母》在国际工艺艺术博览会上荣获金奖，彰显中国传统工艺的国际影响力。',
    category: '荣誉奖项',
    image: '/images/gallery-1.jpg',
    slug: 'international-award'
  },
  {
    id: '7',
    title: '聆花文化参与非遗保护学术研讨会',
    date: '2023-10-25',
    excerpt: '聆花文化受邀参加在北京举办的"非物质文化遗产保护与创新发展"学术研讨会，分享掐丝珐琅艺术传承与创新的实践经验。',
    category: '学术活动',
    image: '/images/gallery-4.jpg',
    slug: 'academic-seminar'
  },
  {
    id: '8',
    title: '聆花文化与故宫博物院达成合作',
    date: '2023-09-12',
    excerpt: '聆花文化与故宫博物院达成战略合作，共同开发基于故宫藏品的掐丝珐琅艺术衍生品，让传统工艺与文化遗产焕发新生。',
    category: '合作项目',
    image: '/images/gallery-12.jpg',
    slug: 'palace-museum-cooperation'
  },
  {
    id: '9',
    title: '聆花文化掐丝珐琅艺术工作室对外开放',
    date: '2023-08-20',
    excerpt: '位于北京798艺术区的聆花文化掐丝珐琅艺术工作室正式对外开放，观众可近距离观察艺术家创作过程，体验掐丝珐琅工艺的魅力。',
    category: '公司动态',
    image: '/images/gallery-6.jpg',
    slug: 'studio-opening'
  },
  {
    id: '10',
    title: '聆花文化与故宫博物院达成战略合作',
    date: '2024-03-20',
    excerpt: '聆花文化与故宫博物院签署战略合作协议，双方将在非遗传承、文创开发和人才培养等方面展开深度合作。',
    category: '合作项目',
    image: '/images/gallery-12.jpg',
    slug: 'palace-museum-cooperation',
    author: '文化传承部',
    content: `
    <p class="mb-4">3月20日，聆花文化与故宫博物院在北京签署战略合作协议，双方将在非物质文化遗产传承、文创产品开发和人才培养等方面展开全面合作。</p>

    <p class="mb-4">根据协议，聆花文化将参与故宫博物院的"宫廷艺术传承计划"，并获得故宫珍藏的部分明清掐丝珐琅作品的研究权限。双方还将共同开发基于宫廷文化元素的掐丝珐琅艺术作品和文创产品，并在故宫博物院文创店设立"聆花文化工艺展示专区"。</p>

    <p class="mb-4">此次合作是传统工艺与国家顶级文化机构的强强联合，对于提升掐丝珐琅工艺的学术研究水平和市场影响力具有重要意义。故宫博物院文创部主任表示："故宫博物院珍藏了大量明清时期的珐琅器，与聆花文化的合作将推动这些珍贵工艺的活态传承和创新发展。"</p>
    `
  },
  {
    id: '11',
    title: '聆花掐丝珐琅作品入选国家级非遗展示',
    date: '2024-02-18',
    excerpt: '聆花文化的三件掐丝珐琅创新作品入选"非遗传承与创新成果展"，将在全国巡展一年。',
    category: '荣誉奖项',
    image: '/images/gallery-2.jpg',
    slug: 'national-intangible-heritage-exhibition',
    author: '文化部非遗中心',
    content: `
    <p class="mb-4">文化和旅游部主办的"非遗传承与创新成果展"于2月18日在中国国家博物馆开幕，聆花文化的三件掐丝珐琅创新作品成功入选，将随展览在全国各地巡展一年。</p>

    <p class="mb-4">入选的三件作品分别是《山水长卷》掐丝珐琅装饰画、《东方华尔兹》掐丝珐琅茶具组和《五福临门》掐丝珐琅首饰系列，均由聆花文化创始人领衔的艺术团队创作完成。这些作品在保留传统掐丝珐琅工艺精髓的同时，融入了现代设计理念和生活美学，展现了传统工艺的当代活力。</p>

    <p class="mb-4">文化和旅游部非遗司有关负责人评价："聆花文化的作品代表了当代掐丝珐琅艺术发展的高水平，证明了传统工艺在创新发展道路上的无限可能。"</p>
    `
  },
  {
    id: '12',
    title: '聆花掐丝珐琅工艺研究中心成立',
    date: '2024-01-25',
    excerpt: '聆花文化联合中央美术学院成立掐丝珐琅工艺研究中心，致力于传统工艺的学术研究和教育传承。',
    category: '公司动态',
    image: '/images/gallery-5.jpg',
    slug: 'cloisonne-research-center',
    author: '聆花文化传播部',
    content: `
    <p class="mb-4">1月25日，由聆花文化与中央美术学院共同创建的"掐丝珐琅工艺研究中心"在北京正式揭牌成立。该中心将整合学术界和产业界资源，围绕掐丝珐琅工艺的历史研究、技艺传承、创新应用和人才培养开展工作。</p>

    <p class="mb-4">中央美术学院将为研究中心提供学术支持和教育平台，聆花文化则负责实践基地建设和产业化探索。研究中心计划建立掐丝珐琅工艺数字档案库，开设系列工艺传承课程，并发布年度《中国掐丝珐琅工艺发展报告》。</p>

    <p class="mb-4">聆花文化创始人表示："我们希望通过学术研究提升掐丝珐琅工艺的文化高度，为这一传统工艺注入更多当代价值和创新活力。研究中心的成立是聆花文化由产品创作向学术建设延伸的重要一步。"</p>
    `
  },
  {
    id: '13',
    title: '聆花文化推出"掐丝珐琅艺术体验课程"',
    date: '2023-12-10',
    excerpt: '聆花文化"掐丝珐琅艺术体验课程"正式上线，面向公众开放非遗技艺学习与体验。',
    category: '文化教育',
    image: '/images/workshop-intro.jpg',
    slug: 'cloisonne-workshop',
    author: '聆花文化教育部',
    content: `
    <p class="mb-4">12月10日，聆花文化正式推出"掐丝珐琅艺术体验课程"，向公众开放非遗技艺学习与体验。课程分为入门体验、技艺学习和创作提升三个层次，覆盖掐丝珐琅工艺的各个环节，由国家级非遗传承人和资深工艺师授课。</p>

    <p class="mb-4">体验课程设在聆花文化位于北京798艺术区的手作体验馆内，配备了专业的工艺器材和烧制设备。学员可以在专业指导下完成从掐丝、填釉到烧制的全过程，亲手制作掐丝珐琅小饰品或艺术摆件。</p>

    <p class="mb-4">聆花文化教育总监介绍："通过沉浸式的工艺体验，我们希望让更多人了解掐丝珐琅的魅力，感受中国传统工艺的精妙与智慧。这不仅是文化传播，也是让非遗技艺走入当代生活的重要途径。"</p>
    `
  },
  {
    id: '14',
    title: '国际珐琅艺术论坛在京举行，聆花文化分享中国经验',
    date: '2023-11-15',
    excerpt: '第八届国际珐琅艺术论坛在北京举行，聆花文化作为中国代表分享掐丝珐琅工艺的创新实践。',
    category: '学术活动',
    image: '/images/gallery-3.jpg',
    slug: 'international-enamel-forum',
    author: '国际珐琅艺术协会',
    content: `
    <p class="mb-4">11月15日至18日，第八届国际珐琅艺术论坛在北京国家会议中心举行，来自20多个国家的珐琅艺术家、学者和文化机构代表参与了此次盛会。聆花文化作为中国掐丝珐琅工艺的代表单位，在论坛上分享了传统工艺的当代创新实践。</p>

    <p class="mb-4">聆花文化创始人在题为《东方工艺的当代表达》的主题演讲中，通过实例展示了如何将传统掐丝珐琅工艺与现代设计语言相结合，创造具有时代感的艺术作品。论坛期间还举办了"世界珐琅艺术流派展"，聆花文化的多件创新作品获得国际同行的高度评价。</p>

    <p class="mb-4">法国珐琅艺术协会主席Martine Rouchon女士评价："中国掐丝珐琅工艺具有独特的东方美学价值，聆花文化的创新探索为世界珐琅艺术带来了新的灵感。"</p>
    `
  },
  {
    id: '15',
    title: '掐丝珐琅产业发展报告：传统工艺迎来新机遇',
    date: '2023-10-20',
    excerpt: '最新《中国掐丝珐琅产业发展报告》发布，显示消费升级和文化自信为传统工艺创造新机遇。',
    category: '行业资讯',
    image: '/images/gallery-4.jpg',
    slug: 'cloisonne-industry-report',
    author: '中国工艺美术协会',
    content: `
    <p class="mb-4">由中国工艺美术协会与北京师范大学文化创意产业研究院联合发布的《2023中国掐丝珐琅产业发展报告》显示，随着国民消费升级和文化自信提升，掐丝珐琅等传统工艺迎来新的发展机遇。报告指出，掐丝珐琅行业市场规模已达52亿元，近五年复合增长率为12.8%。</p>

    <p class="mb-4">报告分析了掐丝珐琅产业的四大发展趋势：一是与现代设计深度融合，创造适合当代生活的产品；二是数字技术赋能传统工艺，拓展表现形式和生产方式；三是品牌化经营成为主流，强调文化内涵和品质保证；四是国际交流合作增多，提升中国工艺的全球影响力。</p>

    <p class="mb-4">聆花文化作为行业领先企业，在报告中被多次提及。报告认为，聆花文化的"传统工艺+现代设计+品牌营销"模式代表了掐丝珐琅产业的创新发展方向，为传统工艺的当代转型提供了可借鉴的经验。</p>
    `
  }
];

// 根据slug获取新闻详情
export function getNewsBySlug(slug: string): NewsItem | undefined {
  return newsData.find(news => news.slug === slug);
}

// 获取相关新闻
export function getRelatedNews(currentNewsId: string, limit: number = 3): RelatedNewsItem[] {
  // 先尝试从当前新闻的relatedNews字段获取
  const currentNews = newsData.find(news => news.id === currentNewsId);
  if (currentNews?.relatedNews && currentNews.relatedNews.length >= limit) {
    return currentNews.relatedNews.slice(0, limit);
  }

  // 如果没有预设的相关新闻，则随机获取同类别的新闻
  const category = currentNews?.category;
  const filteredNews = newsData
    .filter(news => news.id !== currentNewsId && (category ? news.category === category : true))
    .slice(0, limit);

  return filteredNews.map(news => ({
    id: news.id,
    title: news.title,
    date: news.date,
    image: news.image,
    slug: news.slug
  }));
}
