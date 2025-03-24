import Layout from '@/components/layout/Layout';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export const metadata: Metadata = {
  title: '掐丝珐琅艺术历史 | 聆花文化 - 掐丝珐琅艺术传承者',
  description: '探索景泰蓝工艺的六百年历史与文化意义，了解掐丝珐琅艺术的起源、发展历程与文化价值。',
};

const timelineEvents = [
  {
    period: '明代早期（15世纪初）',
    title: '景泰蓝的诞生',
    description: '掐丝珐琅工艺起源于明朝永乐年间（1403-1424年），由宫廷工匠将西域传入的珐琅工艺与中国传统金银细工相结合创造而成。景泰年间（1450-1456年）达到高峰，因此得名"景泰蓝"。',
    image: '/images/history-1.jpg'
  },
  {
    period: '明代中晚期（15-17世纪）',
    title: '技艺成熟与规范',
    description: '明代中晚期，掐丝珐琅工艺逐渐成熟，形成了独特的制作规范与审美标准。这一时期的作品以精细的掐丝工艺、丰富的色彩和严谨的图案布局为特点，多用于宫廷祭祀器物与皇家陈设。',
    image: '/images/history-2.jpg'
  },
  {
    period: '清代康雍乾时期（18世纪）',
    title: '工艺巅峰',
    description: '清代康熙、雍正、乾隆年间是景泰蓝的鼎盛时期。宫廷设立了专门的珐琅作坊，汇聚了大批顶尖工匠，创作了大量精美绝伦的掐丝珐琅艺术品，工艺水平达到历史顶峰。',
    image: '/images/history-3.jpg'
  },
  {
    period: '清末民初（19世纪末-20世纪初）',
    title: '衰落与转型',
    description: '随着清王朝衰落，宫廷对景泰蓝需求减少，技艺一度衰落。民国时期，景泰蓝开始从宫廷走向民间，部分工匠开设作坊，生产面向市场的掐丝珐琅作品，但整体工艺水平有所下降。',
    image: '/images/history-4.jpg'
  },
  {
    period: '新中国成立后（1949年后）',
    title: '恢复与保护',
    description: '新中国成立后，国家高度重视传统工艺的保护与传承。景泰蓝工艺得到恢复与发展，成立了专业厂家，培养了新一代工艺人才，技艺水平逐步恢复并有所创新。',
    image: '/images/history-5.jpg'
  },
  {
    period: '当代（21世纪）',
    title: '创新与传承',
    description: '2006年，景泰蓝掐丝珐琅工艺被列入国家级非物质文化遗产名录。当代工艺师在传承传统的同时，积极创新工艺与设计，将这一古老技艺与现代审美和生活方式相结合，赋予新的活力。',
    image: '/images/history-6.jpg'
  }
];

export default function ArtHistoryPage() {
  return (
    <Layout>
      {/* Hero Banner */}
      <section className="relative pt-32 pb-20 bg-secondary text-white overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/images/art-history-hero.jpg"
            alt="掐丝珐琅艺术历史"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-secondary/70" />
        </div>

        <div className="container-wide relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">掐丝珐琅艺术历史</h1>
            <p className="text-xl mb-8 text-white/80">
              探索景泰蓝工艺的六百年历史，感受中国传统工艺之美
            </p>
          </div>
        </div>
      </section>

      {/* 起源介绍 */}
      <section className="py-20 bg-cream">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-secondary mb-6">艺术起源</h2>
              <p className="text-gray-700 mb-4">
                掐丝珐琅，又称"景泰蓝"，是中国传统金属工艺与珐琅彩绘相结合的独特工艺，距今已有六百多年历史。其名称来源于明代景泰年间（1450-1456年）的兴盛，而"蓝"则源于早期作品中常用的蓝色釉料。
              </p>
              <p className="text-gray-700 mb-4">
                这一工艺起源于明朝永乐年间（1403-1424年），是中国工匠在吸收西方传入的珐琅工艺基础上，结合中国传统金银细工和绘画艺术创造而成的。最初主要用于宫廷祭祀器物和皇家陈设品，后逐渐发展成为独具中国特色的工艺美术门类。
              </p>
              <p className="text-gray-700 mb-4">
                掐丝珐琅工艺的出现，不仅体现了中国古代工匠的智慧与创造力，也是中西文化交流的重要见证，凝聚了东西方工艺美学的精华，成为中国工艺美术史上的璀璨明珠。
              </p>
            </div>

            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/art-history-origin.jpg"
                alt="掐丝珐琅艺术起源"
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
          <h2 className="text-3xl font-bold text-secondary mb-12 text-center">工艺特点</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-cream hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-primary text-2xl font-bold">丝</span>
                </div>
                <h3 className="text-xl font-bold text-secondary mb-4 text-center">掐丝工艺</h3>
                <p className="text-gray-700">
                  掐丝是指将金、银、铜等金属丝弯曲成各种图案形状，固定在金属胎上的技艺。这些金属丝不仅勾勒出图案轮廓，也形成了釉料间的隔断，使釉彩不致混杂，同时增添了线条美感。
                </p>
              </CardContent>
            </Card>

            <Card className="bg-cream hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-primary text-2xl font-bold">釉</span>
                </div>
                <h3 className="text-xl font-bold text-secondary mb-4 text-center">填釉烧制</h3>
                <p className="text-gray-700">
                  在掐好的金属丝格子中填入各色珐琅釉料，经高温烧制后形成绚丽的色彩。传统掐丝珐琅釉料是由石英、长石等矿物研磨而成，添加金属氧化物呈现不同颜色，经900℃左右高温烧制而成。
                </p>
              </CardContent>
            </Card>

            <Card className="bg-cream hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-primary text-2xl font-bold">工</span>
                </div>
                <h3 className="text-xl font-bold text-secondary mb-4 text-center">复杂工序</h3>
                <p className="text-gray-700">
                  传统掐丝珐琅工艺包含胎体制作、掐丝、贴丝、烧蓝、磨光、镀金等数十道工序，每道工序都要求极高的技艺与耐心。一件精美的掐丝珐琅作品，往往需要数月甚至数年的时间完成。
                </p>
              </CardContent>
            </Card>

            <Card className="bg-cream hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-primary text-2xl font-bold">色</span>
                </div>
                <h3 className="text-xl font-bold text-secondary mb-4 text-center">色彩艳丽</h3>
                <p className="text-gray-700">
                  掐丝珐琅作品以色彩艳丽、华美多姿著称。传统工艺可以呈现红、黄、蓝、绿、紫等数十种色彩，并且历经数百年不褪色，形成独特的视觉美感与艺术价值。
                </p>
              </CardContent>
            </Card>

            <Card className="bg-cream hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-primary text-2xl font-bold">形</span>
                </div>
                <h3 className="text-xl font-bold text-secondary mb-4 text-center">器型多样</h3>
                <p className="text-gray-700">
                  掐丝珐琅工艺可应用于各种器型，从小巧的首饰、香盒，到中型的瓶、罐、盘、碗，再到大型的屏风、桌案，甚至建筑装饰构件，展现出极强的适应性与表现力。
                </p>
              </CardContent>
            </Card>

            <Card className="bg-cream hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-primary text-2xl font-bold">纹</span>
                </div>
                <h3 className="text-xl font-bold text-secondary mb-4 text-center">纹饰丰富</h3>
                <p className="text-gray-700">
                  掐丝珐琅作品的纹饰内容极为丰富，包括龙凤、花鸟、山水、人物、吉祥纹样等，融合了中国传统绘画与装饰艺术的精髓，既有观赏性，又有深厚的文化象征意义。
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 历史发展时间线 */}
      <section className="py-20 bg-cream">
        <div className="container-wide">
          <h2 className="text-3xl font-bold text-secondary mb-8 text-center">历史发展</h2>
          <p className="text-xl text-center text-gray-700 mb-16 max-w-3xl mx-auto">
            六百年沧桑巨变，掐丝珐琅艺术见证中国工艺美术的辉煌历程
          </p>

          <div className="space-y-20">
            {timelineEvents.map((event, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 !== 0 ? 'lg:grid-flow-dense' : ''}`}>
                <div className={index % 2 !== 0 ? 'lg:col-start-2' : ''}>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm mb-4">{event.period}</span>
                    <h3 className="text-2xl font-bold text-secondary mb-4">{event.title}</h3>
                    <p className="text-gray-700">
                      {event.description}
                    </p>
                  </div>
                </div>
                <div className={`relative h-[350px] rounded-lg overflow-hidden shadow-xl ${index % 2 !== 0 ? 'lg:col-start-1' : ''}`}>
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 文化意义 */}
      <section className="py-20 bg-white">
        <div className="container-wide">
          <h2 className="text-3xl font-bold text-secondary mb-8 text-center">文化意义</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/art-history-significance.jpg"
                alt="掐丝珐琅艺术文化意义"
                fill
                className="object-cover"
              />
            </div>

            <div className="order-1 lg:order-2">
              <div className="space-y-6">
                <div className="bg-cream p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-secondary mb-4">文化交流的见证</h3>
                  <p className="text-gray-700">
                    掐丝珐琅艺术是东西方文化交流的重要产物，融合了西方传入的珐琅技术与中国传统金属工艺，体现了中国古代开放包容的文化态度与创新精神，是古代"丝绸之路"文化交流的重要见证。
                  </p>
                </div>

                <div className="bg-cream p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-secondary mb-4">审美理念的载体</h3>
                  <p className="text-gray-700">
                    掐丝珐琅作品的纹饰设计、色彩搭配、比例构成等方面，充分体现了中国传统的审美观念与艺术表达，是中国古代审美理念的重要载体，也是理解中国传统美学的重要窗口。
                  </p>
                </div>

                <div className="bg-cream p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-secondary mb-4">工艺智慧的结晶</h3>
                  <p className="text-gray-700">
                    掐丝珐琅工艺涉及金属加工、珐琅釉料配制、高温烧成等多项技术，是中国古代科技与工艺的重要成就，体现了古人对材料特性的深刻理解与精湛的技术控制能力。
                  </p>
                </div>

                <div className="bg-cream p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-secondary mb-4">非遗传承的典范</h3>
                  <p className="text-gray-700">
                    作为国家级非物质文化遗产，掐丝珐琅工艺的保护与传承对于延续中华文化血脉、增强文化自信具有重要意义，是中国传统工艺活态传承的典范。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-secondary text-white">
        <div className="container-wide text-center">
          <h2 className="text-3xl font-bold mb-6">传承千年工艺，感受东方美学</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/80">
            了解更多关于掐丝珐琅艺术的当代发展与创新应用
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white">
              <Link href="/art-origins/contemporary">探索当代掐丝珐琅</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="btn-white-outline">
              <Link href="/gallery">浏览作品品鉴</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
