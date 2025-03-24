import Layout from '@/components/layout/Layout';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export const metadata: Metadata = {
  title: '艺术家联名 | 聆花文化 - 掐丝珐琅艺术传承者',
  description: '欣赏聆花文化与当代艺术家的跨界合作作品，传统工艺与现代艺术的创意碰撞，独特的艺术表达形式。',
};

// 艺术家联名作品数据
const collaborationWorks = [
  {
    id: 'col001',
    title: '《梦》',
    description: '由著名当代艺术家吴一凡与掐丝珐琅大师王晓华合作创作的装置艺术作品，由108件不同形态的掐丝珐琅元素构成流动的云海形态，表达"中国梦"的主题。作品将传统工艺与当代装置艺术语言相结合，打破了传统掐丝珐琅以器物为主的形式局限，创造了具有强烈视觉冲击力与空间感的艺术体验。',
    image: '/images/gallery-5.jpg',
    size: '120×80×40cm',
    year: '2023',
    material: '铜胎、纯银丝、天然矿物质釉料、不锈钢支架',
    technique: '多层掐丝、悬浮烧制、装置组合',
    artists: [
      { name: '吴一凡', role: '当代艺术家', description: '中央美术学院教授，著名当代艺术家，擅长装置艺术与空间艺术创作' },
      { name: '王晓华', role: '掐丝珐琅大师', description: '国家级非物质文化遗产掐丝珐琅技艺代表性传承人，聆花文化艺术总监' }
    ],
    price: '¥268,000',
    featured: true,
    exhibitions: ['2023北京国际设计周', '2023中国工艺美术博览会']
  },
  {
    id: 'col002',
    title: '《祥云》',
    description: '著名设计师陈红与掐丝珐琅工艺大师李明合作创作的现代装饰雕塑，灵感来源于中国传统祥云图案。作品将传统掐丝珐琅工艺与现代雕塑语言相结合，通过金属丝的立体造型与多层次的釉彩处理，创造出极具动感的云朵形态，展现了传统与现代、平面与立体的完美融合。',
    image: '/images/gallery-7.jpg',
    size: '40×30×25cm',
    year: '2022',
    material: '铜胎、纯银丝、天然矿物质釉料、黑檀木底座',
    technique: '立体掐丝、悬浮烧制',
    artists: [
      { name: '陈红', role: '设计师', description: '清华大学美术学院教授，著名设计师，多次获得国际设计大奖' },
      { name: '李明', role: '掐丝珐琅大师', description: '掐丝珐琅技艺代表性传承人，擅长创新技法的开发与应用' }
    ],
    price: '¥129,000',
    featured: false,
    exhibitions: ['2022中国设计大展', '中国国家博物馆当代工艺展']
  },
  {
    id: 'col003',
    title: '《和平之花》',
    description: '国际艺术家玛利亚与掐丝珐琅大师张伟联名创作的装饰画，融合东西方美学元素，以花为主题表达对和平的向往。作品采用创新掐丝技法，将西方抽象表现与东方工艺相结合，色彩和谐温润，构图自由开放，是东西方文化交流与艺术融合的典范之作。',
    image: '/images/gallery-8.jpg',
    size: '45×60cm',
    year: '2023',
    material: '铜胎、纯银丝、天然矿物质釉料',
    technique: '创新掐丝、渐变釉彩',
    artists: [
      { name: '玛利亚', role: '国际艺术家', description: '法国著名抽象表现主义艺术家，作品曾在卢浮宫、蓬皮杜艺术中心等展出' },
      { name: '张伟', role: '掐丝珐琅大师', description: '掐丝珐琅技艺代表性传承人，擅长传统工艺的现代表达' }
    ],
    price: '¥86,000',
    featured: false,
    exhibitions: ['中法文化交流年特展', '2023国际工艺美术博览会']
  },
  {
    id: 'col004',
    title: '《新中式》',
    description: '著名建筑师林之风与掐丝珐琅大师张艺联名创作的艺术屏风，将传统掐丝珐琅工艺应用于现代空间设计领域。作品以简约的线条表现中国传统山水意境，通过三扇屏风的组合形成空间的划分与延伸，体现了新中式设计理念与传统工艺的创新融合，为现代居住空间提供了具有文化内涵的艺术解决方案。',
    image: '/images/gallery-11.jpg',
    size: '180×120cm (三扇)',
    year: '2023',
    material: '铜胎、纯银丝、天然矿物质釉料、红木框架',
    technique: '简约掐丝、空间组合',
    artists: [
      { name: '林之风', role: '建筑师', description: '中国著名建筑师，新中式设计代表人物，多个国家级建筑设计奖获得者' },
      { name: '张艺', role: '掐丝珐琅大师', description: '掐丝珐琅技艺代表性传承人，致力于掐丝珐琅在现代空间中的应用' }
    ],
    price: '¥198,000',
    featured: true,
    exhibitions: ['2023中国室内设计展', '新中式生活美学展']
  },
  {
    id: 'col005',
    title: '《时间的痕迹》',
    description: '实验艺术家赵远与掐丝珐琅大师王明联名创作的实验性艺术作品，探索时间、记忆与传统的关系。作品通过特殊工艺处理的掐丝珐琅片段与现代媒材的拼贴组合，表现传统与现代的碰撞与融合。创作过程中引入了岁月侵蚀、自然风化等实验性技法，使作品具有独特的时间质感与历史厚重感。',
    image: '/images/gallery-3.jpg',
    size: '70×100cm',
    year: '2022',
    material: '铜胎、纯银丝、天然矿物质釉料、综合材料',
    technique: '实验性掐丝、风化处理、混合媒材',
    artists: [
      { name: '赵远', role: '实验艺术家', description: '知名实验艺术家，致力于传统与现代、东方与西方的艺术对话' },
      { name: '王明', role: '掐丝珐琅大师', description: '掐丝珐琅技艺代表性传承人，擅长工艺创新与实验' }
    ],
    price: '¥156,000',
    featured: false,
    exhibitions: ['第九届中国当代艺术双年展', '传统与当代对话展']
  }
];

export default function CollaborationsGalleryPage() {
  return (
    <Layout>
      {/* Hero Banner */}
      <section className="relative pt-32 pb-20 bg-secondary text-white overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/images/collaboration-category.jpg"
            alt="掐丝珐琅艺术家联名"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-secondary/70" />
        </div>

        <div className="container-wide relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">艺术家联名</h1>
            <p className="text-xl mb-8 text-white/80">
              传统工艺与当代艺术家的创意碰撞，跨界合作的艺术创新
            </p>
          </div>
        </div>
      </section>

      {/* 系列介绍 */}
      <section className="py-20 bg-cream">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-secondary mb-6">系列介绍</h2>
              <p className="text-gray-700 mb-4">
                聆花文化艺术家联名系列是与当代艺术家、设计师等跨界合作的创新项目，通过跨领域的创意碰撞，赋予传统掐丝珐琅工艺全新的艺术表达与时代意义。
              </p>
              <p className="text-gray-700 mb-4">
                在这一系列中，掐丝珐琅工艺师与各领域的艺术创作者共同探索传统与现代、东方与西方、工艺与艺术的边界与融合，打破常规的表现形式与创作思路，创造出兼具传统工艺精神与当代艺术思考的创新作品。
              </p>
              <p className="text-gray-700 mb-4">
                每件联名作品都是两种不同创作思维的碰撞与融合，既能看到传统工艺的精湛技艺，又能感受当代艺术的创新表达，为古老的掐丝珐琅工艺开辟了新的发展路径，也为当代艺术创作提供了新的媒介与灵感。
              </p>
              <div className="flex flex-wrap gap-3 mt-6">
                {['跨界合作', '艺术创新', '传统与现代', '文化对话', '创意表达'].map((tag, index) => (
                  <span key={index} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/gallery-5.jpg"
                alt="掐丝珐琅艺术家联名系列介绍"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 合作理念 */}
      <section className="py-20 bg-white">
        <div className="container-wide">
          <h2 className="text-3xl font-bold text-secondary mb-12 text-center">合作理念</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-cream rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-secondary mb-4">打破边界</h3>
              <p className="text-gray-700">
                联名合作突破传统掐丝珐琅工艺在形式、内容、表现等方面的局限，将工艺与艺术、传统与现代、东方与西方的边界打破，创造更广阔的创作空间。
              </p>
            </div>

            <div className="p-6 bg-cream rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-secondary mb-4">互补共生</h3>
              <p className="text-gray-700">
                掐丝珐琅工艺师与艺术家双方在合作中相互学习、取长补短，通过工艺与创意、技术与想象的结合，实现1+1大于2的艺术效果，共同成长与创新。
              </p>
            </div>

            <div className="p-6 bg-cream rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-secondary mb-4">表达当代</h3>
              <p className="text-gray-700">
                通过当代艺术家的介入，使传统工艺具有更强的当代表达力与时代精神，能够与当代社会和现代人的审美需求产生更直接的对话与共鸣。
              </p>
            </div>

            <div className="p-6 bg-cream rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-secondary mb-4">创新传统</h3>
              <p className="text-gray-700">
                在合作中不断尝试新的材料、技法、表现方式，推动传统工艺的技术创新与艺术创新，为古老工艺注入新的活力与可能性。
              </p>
            </div>

            <div className="p-6 bg-cream rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-secondary mb-4">文化对话</h3>
              <p className="text-gray-700">
                通过不同文化背景、不同艺术领域的创作者之间的合作，促进多元文化的交流与对话，创造具有全球视野与文化包容性的作品。
              </p>
            </div>

            <div className="p-6 bg-cream rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-secondary mb-4">市场拓展</h3>
              <p className="text-gray-700">
                联名合作能够拓展传统工艺的受众群体与市场空间，使更多人通过当代艺术的视角认识和欣赏传统工艺，促进工艺美术的市场化与产业化发展。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 作品展示 */}
      <section className="py-20 bg-cream">
        <div className="container-wide">
          <h2 className="text-3xl font-bold text-secondary mb-8 text-center">联名作品</h2>
          <p className="text-xl text-center text-gray-700 mb-16 max-w-3xl mx-auto">
            传统工艺与当代艺术的创意碰撞，独特的跨界艺术体验
          </p>

          <div className="space-y-20">
            {collaborationWorks.map((work) => (
              <div key={work.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className="relative h-[400px] lg:h-auto">
                    <Image
                      src={work.image}
                      alt={work.title}
                      fill
                      className="object-cover"
                    />
                    {work.featured && (
                      <Badge className="absolute top-4 right-4 bg-primary hover:bg-primary text-white">精选</Badge>
                    )}
                  </div>
                  <div className="p-8">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-2xl font-bold text-secondary">{work.title}</h3>
                      <span className="text-sm text-gray-500">{work.year}</span>
                    </div>
                    <p className="text-gray-700 mb-6">
                      {work.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-500 mb-3">艺术家</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {work.artists.map((artist, index) => (
                          <div key={index} className="bg-cream p-3 rounded-lg">
                            <h5 className="font-bold text-secondary">{artist.name}</h5>
                            <p className="text-sm text-gray-500 mb-1">{artist.role}</p>
                            <p className="text-sm text-gray-700">{artist.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div>
                        <h4 className="text-sm font-semibold text-gray-500 mb-1">规格</h4>
                        <p className="text-gray-700">{work.size}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-gray-500 mb-1">材质</h4>
                        <p className="text-gray-700">{work.material}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-gray-500 mb-1">工艺</h4>
                        <p className="text-gray-700">{work.technique}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-gray-500 mb-1">展览</h4>
                        <p className="text-gray-700">{work.exhibitions.join('、')}</p>
                      </div>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-xl font-bold text-primary">{work.price}</span>
                      <Button asChild>
                        <Link href="/contact">咨询详情</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 合作邀请 */}
      <section className="py-20 bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/collaboration-invitation.jpg"
                alt="合作邀请"
                fill
                className="object-cover"
              />
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-secondary mb-6">合作邀请</h2>
              <p className="text-gray-700 mb-6">
                聆花文化诚挚邀请各领域艺术家、设计师参与联名合作计划，共同探索传统工艺与当代艺术的创新融合。我们提供专业的掐丝珐琅工艺支持、资深的工艺大师团队、完善的创作条件与展示平台，期待与您共同创造具有时代意义的艺术作品。
              </p>
              <div className="space-y-4">
                <div className="bg-cream p-4 rounded-lg">
                  <h3 className="font-bold text-secondary mb-2">合作形式</h3>
                  <p className="text-gray-700">联名创作、艺术驻留、跨界实验、展览策划等多种形式</p>
                </div>

                <div className="bg-cream p-4 rounded-lg">
                  <h3 className="font-bold text-secondary mb-2">合作对象</h3>
                  <p className="text-gray-700">当代艺术家、设计师、建筑师、时尚创意人、新媒体艺术家等</p>
                </div>

                <div className="bg-cream p-4 rounded-lg">
                  <h3 className="font-bold text-secondary mb-2">资源支持</h3>
                  <p className="text-gray-700">工艺支持、创作空间、材料提供、展览机会、市场推广等</p>
                </div>

                <div className="mt-6">
                  <Button asChild>
                    <Link href="/contact">合作咨询</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-secondary text-white">
        <div className="container-wide text-center">
          <h2 className="text-3xl font-bold mb-6">探索更多系列作品</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/80">
            欢迎浏览聆花文化其他系列作品，感受传统工艺的多元魅力
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white">
              <Link href="/gallery/thangka">唐卡系列</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="btn-white-outline">
              <Link href="/gallery/national-trend">国潮系列</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
