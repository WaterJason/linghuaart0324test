import Layout from '@/components/layout/Layout';
import { Metadata } from 'next';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '艺术起源 | 聆花文化 - 掐丝珐琅艺术传承者',
  description: '探索掐丝珐琅艺术的悠久历史与文化意义，了解这一国家级非物质文化遗产的精湛工艺与演变。',
};

export default function ArtOriginsPage() {
  return (
    <Layout>
      {/* Hero Banner */}
      <section className="relative pt-32 pb-20 bg-secondary text-white overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/images/art-origin.jpg"
            alt="掐丝珐琅艺术"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-secondary/70" />
        </div>

        <div className="container-wide relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">艺术起源</h1>
            <p className="text-xl mb-8 text-white/80">
              探索源自东方的珐琅艺术之美，感受千年工艺的传承与创新
            </p>
          </div>
        </div>
      </section>

      {/* 景泰蓝简介 */}
      <section className="py-20 bg-cream">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-secondary mb-6">景泰蓝：皇家宫廷艺术</h2>
              <p className="text-gray-700 mb-4">
                景泰蓝，亦称"铜胎掐丝珐琅"，源自中国古代的掐丝珐琅工艺，已有600年历史。景泰蓝之名源于明代景泰年间（1450-1456年），当时蓝色釉料为主要颜色，故而得名。
              </p>
              <p className="text-gray-700 mb-4">
                每一件景泰蓝作品需历经六大工艺、108道繁复工序。铜胎为骨，掐丝为筋，釉彩为魂，金饰为韵，其色彩浓丽、纹饰精美，历来为宫廷贵族所珍爱，象征尊贵与典雅。
              </p>
              <p className="text-gray-700 mb-4">
                景泰蓝工艺于2006年被列入国家级非物质文化遗产名录，是中国传统工艺美术的杰出代表。
              </p>
              <p className="text-gray-700 font-semibold italic">
                "无蓝不成殿，有殿需尊蓝。景泰蓝，凝聚皇家气韵的东方瑰宝！"
              </p>
            </div>

            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/jingtailan-intro.jpg"
                alt="景泰蓝工艺"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 工艺特点 */}
      <section className="py-20 bg-white">
        <div className="container-wide">
          <h2 className="text-3xl font-bold text-secondary mb-12 text-center">景泰蓝的六大工艺</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "制胎",
                description: "以紫铜为材料，锻打或铸造成所需形状的器皿胎体。",
                image: "/images/history-1.jpg"
              },
              {
                title: "掐丝",
                description: "用铜丝掐成各种图案纹样贴于胎体上，犹如画龙点睛。",
                image: "/images/history-2.jpg"
              },
              {
                title: "点蓝",
                description: "将各色釉料填入掐丝格子内，形成丰富的色彩层次。",
                image: "/images/history-3.jpg"
              },
              {
                title: "烧炼",
                description: "高温烧制使釉料融化并与铜丝牢固结合，形成光滑表面。",
                image: "/images/history-4.jpg"
              },
              {
                title: "磨光",
                description: "将器表磨平磨光，使釉面、铜丝平整光亮。",
                image: "/images/history-5.jpg"
              },
              {
                title: "镀金",
                description: "为器物镀金，增加作品的华丽感和贵重感。",
                image: "/images/history-6.jpg"
              }
            ].map((craft, index) => (
              <div key={index} className="bg-cream p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="relative h-52 mb-4 rounded-md overflow-hidden">
                  <Image
                    src={craft.image}
                    alt={craft.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-secondary mb-2">{craft.title}</h3>
                <p className="text-gray-700">{craft.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 当代掐丝珐琅艺术 */}
      <section className="py-20 bg-cream">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-bold text-secondary mb-6">当代掐丝珐琅艺术</h2>
              <p className="text-gray-700 mb-4">
                当代掐丝珐琅艺术是一种结合传统工艺与现代艺术表现形式的非物质文化遗产，它起源于景泰蓝工艺，但在当代得到了创新与发展。艺术家们在保留传统技艺精髓的同时，不断探索新的表现形式和应用领域。
              </p>
              <p className="text-gray-700 mb-4">
                掐丝珐琅艺术以其精美的工艺、鲜艳的色彩和独特的立体视觉效果，成为了中国文化艺术的重要代表之一。现代掐丝珐琅作品不再局限于传统器皿，还包括珠宝首饰、艺术画作、家居装饰等多种形式。
              </p>
              <p className="text-gray-700 mb-4">
                在全球文化交流日益频繁的今天，掐丝珐琅艺术正成为中国文化"走出去"的重要载体，向世界展示东方美学的独特魅力。
              </p>
              <p className="text-gray-700 font-semibold italic">
                "当代掐丝珐琅，千年技艺的璀璨新生！"
              </p>
            </div>

            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl order-1 lg:order-2">
              <Image
                src="/images/contemporary-art.jpg"
                alt="当代掐丝珐琅艺术"
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
          <h2 className="text-3xl font-bold mb-6">探索聆花掐丝珐琅艺术</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/80">
            欢迎您深入了解掐丝珐琅艺术的魅力，或探索聆花文化的精美作品与设计
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white">
              <Link href="/gallery">浏览作品</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-secondary bg-white border-white hover:bg-white/90 hover:text-primary">
              <Link href="/products">产品系列</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
