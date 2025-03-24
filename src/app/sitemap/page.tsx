import { Metadata } from "next";
import Link from "next/link";
import { HeroBanner } from "@/components/ui/hero-banner";
import { Container } from "@/components/ui/container";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "网站地图 | 聆花文化",
  description: "广州聆花文化传播有限公司官方网站导航地图，轻松浏览所有页面内容",
};

export default function SitemapPage() {
  // 网站结构数据
  const siteStructure = [
    {
      category: "艺术起源与传承",
      description: "探索掐丝珐琅工艺的历史渊源与艺术价值",
      icon: "🏺",
      links: [
        { title: "艺术起源", href: "/art-origins" },
        { title: "历史传承", href: "/art-origins/history" },
        { title: "当代发展", href: "/art-origins/contemporary" },
      ],
    },
    {
      category: "品牌理念与故事",
      description: "了解聆花文化的品牌理念与发展历程",
      icon: "✨",
      links: [
        { title: "品牌介绍", href: "/about" },
        { title: "品牌理念", href: "/about/brand-concept" },
        { title: "品牌优势", href: "/about/advantages" },
        { title: "发展历程", href: "/about/journey" },
        { title: "创始人故事", href: "/about/founder" },
      ],
    },
    {
      category: "艺术臻品系列",
      description: "探索我们精心打造的艺术作品与产品系列",
      icon: "🎨",
      links: [
        { title: "产品系列", href: "/products" },
        { title: "艺术臻品", href: "/products/art-collections" },
        { title: "非遗文创", href: "/products/cultural-creations" },
        { title: "手作体验", href: "/products/workshop" },
        { title: "定制服务", href: "/products/custom" },
      ],
    },
    {
      category: "作品品鉴与欣赏",
      description: "欣赏经典掐丝珐琅艺术作品，感受传统与创新的完美融合",
      icon: "👁️",
      links: [
        { title: "作品品鉴", href: "/gallery" },
        { title: "国潮系列", href: "/gallery/national-trend" },
        { title: "唐卡系列", href: "/gallery/thangka" },
        { title: "跨界合作", href: "/gallery/collaborations" },
      ],
    },
    {
      category: "资讯与动态",
      description: "了解聆花文化的最新动态、活动信息与行业资讯",
      icon: "📢",
      links: [
        { title: "资讯中心", href: "/news" },
      ],
    },
    {
      category: "联系与服务",
      description: "联系我们，了解更多有关产品、服务和合作的信息",
      icon: "📞",
      links: [
        { title: "联系我们", href: "/contact" },
      ],
    },
    {
      category: "法律与条款",
      description: "查看网站使用条款、隐私政策等法律文件",
      icon: "📜",
      links: [
        { title: "隐私政策", href: "/privacy-policy" },
        { title: "使用条款", href: "/terms" },
        { title: "网站地图", href: "/sitemap" },
      ],
    },
  ];

  return (
    <main className="min-h-screen">
      <HeroBanner
        title="网站地图"
        subtitle="如丝线交织成美丽图案，我们精心设计了网站结构，让您轻松找到所需内容"
        className="bg-gradient-to-r from-primary/20 via-secondary to-primary/20"
        align="center"
      />
      
      <Container className="py-16 px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 gap-12">
            {siteStructure.map((category, idx) => (
              <div key={idx} className="group">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl">{category.icon}</span>
                  <h2 className="text-2xl md:text-3xl font-bold text-secondary group-hover:text-primary transition-colors">
                    {category.category}
                  </h2>
                </div>
                
                <p className="text-secondary/70 mb-6 max-w-3xl">{category.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {category.links.map((link, linkIdx) => (
                    <Link 
                      key={linkIdx} 
                      href={link.href}
                      className="block p-4 border border-gray-200 rounded-md hover:border-primary hover:bg-primary/5 transition-all hover:shadow-md hover:translate-y-[-2px]"
                    >
                      <div className="font-medium text-secondary hover:text-primary transition-colors">
                        {link.title}
                      </div>
                    </Link>
                  ))}
                </div>
                
                {idx < siteStructure.length - 1 && (
                  <div className="mt-10 flex items-center">
                    <div className="flex-1">
                      <Separator className="bg-gray-200" />
                    </div>
                    <div className="mx-4">
                      <div className="w-4 h-4 rounded-full border-2 border-primary bg-white"></div>
                    </div>
                    <div className="flex-1">
                      <Separator className="bg-gray-200" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <div className="inline-block p-6 border border-gray-200 rounded-lg hover:border-primary transition-all">
              <h3 className="text-lg font-medium mb-2 text-secondary">无法找到您需要的内容？</h3>
              <p className="text-secondary/70 mb-4">我们随时为您提供帮助</p>
              <Link 
                href="/contact" 
                className="inline-block px-6 py-2 rounded-md bg-primary text-white hover:bg-primary/90 transition-colors"
              >
                联系我们
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
} 