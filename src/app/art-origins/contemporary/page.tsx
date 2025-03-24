import Layout from '@/components/layout/Layout';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export const metadata: Metadata = {
  title: '当代掐丝珐琅 | 聆花文化 - 掐丝珐琅艺术传承者',
  description: '探索传统掐丝珐琅工艺的现代演绎与创新发展，了解这一古老技艺在当代社会的新生与活力。',
};

const innovationAreas = [
  {
    title: '技艺创新',
    description: '当代工艺师在传统掐丝珐琅技法基础上，开发了微缩掐丝、立体掐丝、透明釉掐丝等新技法，突破了传统工艺的表现局限，拓展了艺术表现的可能性。',
    image: '/images/contemporary-technique.jpg'
  },
  {
    title: '材料创新',
    description: '在传统铜胎、金银丝、天然矿物釉料基础上，当代掐丝珐琅工艺引入了新型合金、纳米材料等现代材料，实现了更丰富的色彩表现、更高的强度与更多元的质感。',
    image: '/images/contemporary-material.jpg'
  },
  {
    title: '设计创新',
    description: '当代掐丝珐琅作品在设计上融入现代审美与国际设计理念，打破了传统纹样的局限，引入抽象表现、几何构成等现代设计元素，形成独特的当代风格。',
    image: '/images/contemporary-design.jpg'
  },
  {
    title: '应用创新',
    description: '当代掐丝珐琅工艺突破了传统器物的局限，广泛应用于首饰、服饰、家居、建筑装饰等领域，甚至与数字艺术、装置艺术等当代艺术形式融合，焕发出新的生命力。',
    image: '/images/contemporary-application.jpg'
  }
];

const artistWorks = [
  {
    artist: '张大千',
    work: '《山水》掐丝珐琅装饰画',
    description: '当代艺术大师张大千与工艺美术大师合作创作的掐丝珐琅装饰画，将中国传统山水画与掐丝珐琅工艺融合，展现出独特的艺术魅力。',
    image: '/images/artist-work1.jpg'
  },
  {
    artist: '李玉刚',
    work: '《霓裳羽衣》掐丝珐琅艺术装置',
    description: '著名艺术家李玉刚与掐丝珐琅大师联合创作的舞台艺术装置，将传统工艺与现代舞台艺术结合，创造出震撼的视觉效果。',
    image: '/images/artist-work2.jpg'
  },
  {
    artist: '吴冠中',
    work: '《江南》掐丝珐琅屏风',
    description: '著名画家吴冠中的绘画作品《江南》通过掐丝珐琅工艺重新诠释，将具象与抽象结合的江南水乡图景转化为掐丝珐琅艺术语言。',
    image: '/images/artist-work3.jpg'
  }
];

export default function ContemporaryArtPage() {
  return (
    <Layout>
      {/* Hero Banner */}
      <section className="relative pt-32 pb-20 bg-secondary text-white overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/images/contemporary-hero.jpg"
            alt="当代掐丝珐琅"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-secondary/70" />
        </div>

        <div className="container-wide relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">当代掐丝珐琅</h1>
            <p className="text-xl mb-8 text-white/80">
              传统工艺的现代演绎，千年技艺的创新发展
            </p>
          </div>
        </div>
      </section>

      {/* 当代发展概述 */}
      <section className="py-20 bg-cream">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-secondary mb-6">传统与创新的交融</h2>
              <p className="text-gray-700 mb-4">
                当代掐丝珐琅艺术在传承六百年传统工艺精髓的基础上，积极融合现代设计理念与技术手段，实现了传统与现代的完美结合，展现出蓬勃的生命力与创新活力。
              </p>
              <p className="text-gray-700 mb-4">
                改革开放以来，特别是进入21世纪后，随着国家对非物质文化遗产保护的重视，以及社会对传统文化认同感的增强，掐丝珐琅工艺迎来了新的发展机遇。一批新生代工艺师在传承传统的同时，大胆创新，将这一古老工艺注入新的时代精神。
              </p>
              <p className="text-gray-700 mb-4">
                2006年，掐丝珐琅（景泰蓝）工艺被列入第一批国家级非物质文化遗产名录，标志着这一传统工艺的文化价值获得国家层面的认可与保护。此后，各级政府、教育机构、企业与社会组织共同参与，推动掐丝珐琅工艺的传承保护与创新发展。
              </p>
            </div>

            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/contemporary-overview.jpg"
                alt="当代掐丝珐琅概述"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 创新领域 */}
      <section className="py-20 bg-white">
        <div className="container-wide">
          <h2 className="text-3xl font-bold text-secondary mb-8 text-center">创新领域</h2>
          <p className="text-xl text-center text-gray-700 mb-16 max-w-3xl mx-auto">
            多维度创新，让掐丝珐琅艺术焕发新的生命力
          </p>

          <div className="space-y-20">
            {innovationAreas.map((area, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 !== 0 ? 'lg:grid-flow-dense' : ''}`}>
                <div className={index % 2 !== 0 ? 'lg:col-start-2' : ''}>
                  <h3 className="text-2xl font-bold text-secondary mb-6">{area.title}</h3>
                  <p className="text-gray-700">
                    {area.description}
                  </p>
                </div>
                <div className={`relative h-[400px] rounded-lg overflow-hidden shadow-xl ${index % 2 !== 0 ? 'lg:col-start-1' : ''}`}>
                  <Image
                    src={area.image}
                    alt={area.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 当代流派 */}
      <section className="py-20 bg-cream">
        <div className="container-wide">
          <h2 className="text-3xl font-bold text-secondary mb-12 text-center">当代流派</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white hover:shadow-lg transition-shadow">
              <div className="relative h-64">
                <Image
                  src="/images/school-traditional.jpg"
                  alt="传统正宗派"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-secondary mb-4">传统正宗派</h3>
                <p className="text-gray-700">
                  坚持传统掐丝珐琅工艺标准与审美理念，以复古风格为主，注重工艺的纯正性与历史延续性，作品多以传统纹样与器型为主，代表人物包括国家级非遗传承人王树森、张同禄等。
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow">
              <div className="relative h-64">
                <Image
                  src="/images/school-innovation.jpg"
                  alt="创新融合派"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-secondary mb-4">创新融合派</h3>
                <p className="text-gray-700">
                  在传承传统工艺的基础上，融入现代设计理念与元素，探索传统与现代的融合路径，作品既有传统韵味又具现代感，代表人物包括张毅、聆花（以唐卡与掐丝珐琅跨界融合著称，独创"固釉掐丝珐琅"新工艺）等。
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow">
              <div className="relative h-64">
                <Image
                  src="/images/school-contemporary.jpg"
                  alt="当代艺术派"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-secondary mb-4">当代艺术派</h3>
                <p className="text-gray-700">
                  将掐丝珐琅工艺视为艺术创作的媒介，大胆突破传统局限，融入当代艺术理念与表现手法，创作具有强烈个人风格的艺术作品，代表人物包括赵永刚、吴淼等。
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 跨界合作 */}
      <section className="py-20 bg-white">
        <div className="container-wide">
          <h2 className="text-3xl font-bold text-secondary mb-8 text-center">跨界合作</h2>
          <p className="text-xl text-center text-gray-700 mb-16 max-w-3xl mx-auto">
            掐丝珐琅艺术与当代艺术家、设计师的创意碰撞
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {artistWorks.map((item, index) => (
              <div key={index} className="flex flex-col">
                <div className="relative h-80 rounded-lg overflow-hidden shadow-xl mb-6">
                  <Image
                    src={item.image}
                    alt={item.work}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-secondary mb-2">{item.artist} - {item.work}</h3>
                <p className="text-gray-700">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 现代应用场景 */}
      <section className="py-20 bg-cream">
        <div className="container-wide">
          <h2 className="text-3xl font-bold text-secondary mb-8 text-center">现代应用场景</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-36 rounded-lg overflow-hidden shadow-md">
                  <Image
                    src="/images/application-jewelry.jpg"
                    alt="珠宝首饰"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-36 rounded-lg overflow-hidden shadow-md">
                  <Image
                    src="/images/application-home.jpg"
                    alt="家居装饰"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-36 rounded-lg overflow-hidden shadow-md">
                  <Image
                    src="/images/application-gift.jpg"
                    alt="高端礼品"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-36 rounded-lg overflow-hidden shadow-md">
                  <Image
                    src="/images/application-art.jpg"
                    alt="艺术装置"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h3 className="text-2xl font-bold text-secondary mb-6">从博物馆走向生活</h3>
              <p className="text-gray-700 mb-4">
                当代掐丝珐琅艺术不再局限于博物馆的展品或收藏家的珍品，而是走进了普通人的日常生活，呈现出多元化的应用场景：
              </p>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-bold text-secondary mb-2">珠宝首饰</h4>
                  <p className="text-gray-700">
                    将微缩掐丝珐琅工艺应用于项链、耳环、胸针等首饰，成为兼具传统文化内涵与现代时尚感的个人配饰。
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-bold text-secondary mb-2">家居装饰</h4>
                  <p className="text-gray-700">
                    茶具、花瓶、摆件、屏风等家居装饰品，为现代家居环境注入东方美学与文化气息。
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-bold text-secondary mb-2">高端礼品</h4>
                  <p className="text-gray-700">
                    商务礼品、纪念品、国礼等，成为展示中国传统文化魅力与工艺水平的重要载体。
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-bold text-secondary mb-2">艺术装置</h4>
                  <p className="text-gray-700">
                    结合灯光、声音、互动技术等，创造沉浸式的掐丝珐琅艺术体验，应用于展览、舞台、公共空间等。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 未来展望 */}
      <section className="py-20 bg-white">
        <div className="container-wide">
          <h2 className="text-3xl font-bold text-secondary mb-8 text-center">未来展望</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-gray-700 mb-6">
                掐丝珐琅艺术的未来发展充满无限可能。随着科技进步、设计创新与文化交流的深入，这一古老工艺将迎来新的发展契机：
              </p>
              <div className="space-y-6">
                <div className="bg-cream p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-secondary mb-4">科技赋能</h3>
                  <p className="text-gray-700">
                    数字技术、新材料、智能制造等将为掐丝珐琅工艺注入新的活力，提高生产效率，实现更多创新表达。
                  </p>
                </div>

                <div className="bg-cream p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-secondary mb-4">教育传承</h3>
                  <p className="text-gray-700">
                    通过现代教育体系与数字媒体，将掐丝珐琅工艺知识更广泛地传播，培养新一代传承人与创新者。
                  </p>
                </div>

                <div className="bg-cream p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-secondary mb-4">国际交流</h3>
                  <p className="text-gray-700">
                    加强与国际艺术界、设计界的交流合作，将掐丝珐琅艺术推向世界舞台，实现中国传统工艺的全球影响。
                  </p>
                </div>
              </div>
            </div>

            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/contemporary-future.jpg"
                alt="掐丝珐琅艺术未来展望"
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
          <h2 className="text-3xl font-bold mb-6">探索掐丝珐琅艺术的现代魅力</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/80">
            欢迎浏览聆花文化的产品系列，感受传统工艺与现代设计的完美结合
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white">
              <Link href="/products">浏览产品系列</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="btn-white-outline">
              <Link href="/art-origins/history">了解艺术历史</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
