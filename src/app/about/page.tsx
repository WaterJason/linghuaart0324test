import Layout from '@/components/layout/Layout';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: '品牌介绍 | 聆花文化 - 掐丝珐琅艺术传承者',
  description: '聆花文化致力于传承与创新掐丝珐琅艺术，了解我们的品牌理念、创始人故事、发展历程与核心优势。',
};

const brandCategories = [
  {
    title: '品牌理念',
    description: '聆花文化秉持"传承非遗，创造当代"的品牌理念，致力于将传统掐丝珐琅工艺与现代设计相结合，赋予古老技艺新的生命力。',
    image: '/images/about-concept.jpg',
    link: '/about/brand-concept',
    features: ['传承非遗', '创新发展', '文化自信']
  },
  {
    title: '创始人',
    description: '了解聆花文化创始人的故事，一位掐丝珐琅艺术传承者与创新者，如何从传统工艺中汲取灵感，引领东方美学的新篇章。',
    image: '/images/about-founder.jpg',
    link: '/about/founder',
    features: ['匠人精神', '艺术追求', '文化使命']
  },
  {
    title: '品牌历程',
    description: '聆花文化的发展脉络与成长故事，从初创到行业引领者的蜕变，每一步都凝聚着对传统工艺的热爱与创新的勇气。',
    image: '/images/about-journey.jpg',
    link: '/about/journey',
    features: ['持续探索', '稳健发展', '文化传播']
  },
  {
    title: '品牌优势',
    description: '聆花文化的核心竞争力，包括非遗传承、创新实力、东方美学与文化自信，打造中国工艺美术的新高度。',
    image: '/images/about-advantages.jpg',
    link: '/about/advantages',
    features: ['工艺精湛', '设计创新', '文化深度']
  }
];

export default function AboutPage() {
  return (
    <Layout>
      {/* Hero Banner */}
      <section className="relative pt-32 pb-20 bg-secondary text-white overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/images/about-hero.jpg"
            alt="聆花文化品牌介绍"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-secondary/70" />
        </div>

        <div className="container-wide relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">品牌介绍</h1>
            <p className="text-xl mb-8 text-white/80">
              了解聆花文化的品牌理念、创始人故事、发展历程与核心优势
            </p>
          </div>
        </div>
      </section>

      {/* 品牌介绍导航 */}
      <section className="py-16 bg-cream">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-secondary mb-6">认识聆花文化</h2>
            <p className="text-lg text-gray-700">
              聆花文化是中国掐丝珐琅艺术的传承者与创新者，致力于将这一千年非物质文化遗产推向全球舞台，赋予传统工艺新的时代价值。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {brandCategories.map((category) => (
              <Card key={category.title} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-secondary mb-3">{category.title}</h3>
                  <p className="text-gray-700 mb-4 line-clamp-3">
                    {category.description}
                  </p>
                  <ul className="mb-4 space-y-2">
                    {category.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-gray-600">
                        <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="w-full justify-between">
                    <Link href={category.link}>
                      <span>了解更多</span>
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 品牌价值观 */}
      <section className="py-16 bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-secondary mb-6">品牌价值观</h2>
              <p className="text-lg text-gray-700 mb-6">
                聆花文化秉持"匠心传承，创新发展"的核心价值观，致力于在保护传统工艺的基础上，不断探索创新表达，让古老的掐丝珐琅艺术焕发新的生命力。
              </p>
              <div className="space-y-4">
                <div className="bg-cream p-4 rounded-lg">
                  <h3 className="font-bold text-secondary mb-2">匠心传承</h3>
                  <p className="text-gray-700">
                    尊重传统工艺的精髓，坚持手工制作的精神，保持对细节的极致追求。
                  </p>
                </div>
                <div className="bg-cream p-4 rounded-lg">
                  <h3 className="font-bold text-secondary mb-2">创新发展</h3>
                  <p className="text-gray-700">
                    融合现代设计理念，探索新材料与新技术，让传统工艺与当代生活对话。
                  </p>
                </div>
                <div className="bg-cream p-4 rounded-lg">
                  <h3 className="font-bold text-secondary mb-2">文化自信</h3>
                  <p className="text-gray-700">
                    弘扬中华优秀传统文化，让掐丝珐琅艺术走向世界，展现东方美学的独特魅力。
                  </p>
                </div>
              </div>
              <div className="mt-8">
                <Button asChild>
                  <Link href="/about/brand-concept">了解品牌理念</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/about-values.jpg"
                alt="聆花文化品牌价值观"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-secondary text-white">
        <div className="container-wide text-center">
          <h2 className="text-3xl font-bold mb-6">加入聆花，传承非遗</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/80">
            无论您是艺术爱好者、收藏家、企业伙伴，还是文化传播者，我们诚邀您共同参与掐丝珐琅艺术的传承与创新
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white">
              <Link href="/contact">联系我们</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="btn-white-outline">
              <Link href="/products">浏览产品系列</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
} 