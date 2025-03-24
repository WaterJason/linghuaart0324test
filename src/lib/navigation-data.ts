export type SubLink = {
  label: string;
  href: string;
  description?: string;
};

export type NavigationLink = {
  label: string;
  href: string;
  subItems?: SubLink[];
};

export const navigationLinks: NavigationLink[] = [
  {
    label: '首页',
    href: '/'
  },
  {
    label: '艺术起源',
    href: '/art-origins',
    subItems: [
      {
        label: '掐丝珐琅艺术历史',
        href: '/art-origins/history',
        description: '探索景泰蓝工艺的六百年历史与文化意义'
      },
      {
        label: '当代掐丝珐琅',
        href: '/art-origins/contemporary',
        description: '传统工艺的现代演绎与创新发展'
      }
    ]
  },
  {
    label: '品牌介绍',
    href: '/about',
    subItems: [
      {
        label: '品牌理念',
        href: '/about/brand-concept',
        description: '聆花文化品牌使命与愿景'
      },
      {
        label: '创始人',
        href: '/about/founder',
        description: '聆花掐丝珐琅艺术传承者与创新者'
      },
      {
        label: '品牌历程',
        href: '/about/journey',
        description: '聆花文化的发展历程与成长故事'
      },
      {
        label: '品牌优势',
        href: '/about/advantages',
        description: '非遗传承、创新实力与东方美学'
      }
    ]
  },
  {
    label: '产品系列',
    href: '/products',
    subItems: [
      {
        label: '聆花艺术臻品',
        href: '/products/art-collections',
        description: '掐丝珐琅唐卡与高端艺术收藏品'
      },
      {
        label: '聆花非遗文创',
        href: '/products/cultural-creations',
        description: '将传统工艺融入现代生活的文创产品'
      },
      {
        label: '聆花手作馆',
        href: '/products/workshop',
        description: '掐丝珐琅工艺体验与非遗文化教育'
      },
      {
        label: '企业定制',
        href: '/products/custom',
        description: '企业礼品与文化项目专属定制服务'
      }
    ]
  },
  {
    label: '作品品鉴',
    href: '/gallery',
    subItems: [
      {
        label: '唐卡系列',
        href: '/gallery/thangka',
        description: '融合唐卡绘画与掐丝珐琅工艺的艺术珍品'
      },
      {
        label: '国潮系列',
        href: '/gallery/national-trend',
        description: '现代审美与传统工艺的创新融合'
      },
      {
        label: '艺术家联名',
        href: '/gallery/collaborations',
        description: '与当代艺术家的跨界合作作品'
      }
    ]
  },
  {
    label: '资讯中心',
    href: '/news'
  },
  {
    label: '联系我们',
    href: '/contact'
  }
];
