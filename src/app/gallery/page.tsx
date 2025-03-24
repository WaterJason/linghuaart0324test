import Layout from '@/components/layout/Layout';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';

export const metadata: Metadata = {
  title: '作品品鉴 | 聆花文化 - 掐丝珐琅艺术传承者',
  description: '欣赏聆花文化掐丝珐琅艺术作品，包括唐卡系列、国潮系列和艺术家联名作品，感受传统与现代的完美融合。',
};

// 作品数据
const galleryItems = [
  {
    id: '1',
    title: '《大白伞盖佛母》',
    description: '大白伞盖佛母是藏传佛教中的一尊重要度母，本作品采用微缩掐丝工艺与传统唐卡绘画艺术相结合，历时8个月完成。',
    category: 'thangka',
    tags: ['唐卡系列', '藏传佛教', '微缩掐丝'],
    image: '/images/gallery-1.jpg',
    year: '2023',
    size: '60×80cm',
    artist: '王明',
    featured: true
  },
  {
    id: '2',
    title: '《金刚手菩萨》',
    description: '金刚手菩萨是藏传佛教中的护法神，本作品采用高浮雕掐丝技艺，突破传统掐丝珐琅平面化的表现限制，立体感强。',
    category: 'thangka',
    tags: ['唐卡系列', '藏传佛教', '高浮雕掐丝'],
    image: '/images/gallery-2.jpg',
    year: '2022',
    size: '55×75cm',
    artist: '李华',
    featured: true
  },
  {
    id: '3',
    title: '《麒麟献瑞》',
    description: '麒麟是中国传统文化中的吉祥瑞兽，本作品以现代设计语言重新诠释传统题材，兼具传统韵味与现代审美。',
    category: 'national',
    tags: ['国潮系列', '吉祥图案', '传统掐丝'],
    image: '/images/gallery-3.jpg',
    year: '2023',
    size: '45×65cm',
    artist: '张艺',
    featured: true
  },
  {
    id: '4',
    title: '《九鱼图》',
    description: '九鱼图寓意"年年有余"，本作品采用新型珐琅釉料与传统掐丝工艺相结合，色彩鲜艳明快，构图流畅动感。',
    category: 'national',
    tags: ['国潮系列', '吉祥图案', '现代釉彩'],
    image: '/images/gallery-4.jpg',
    year: '2022',
    size: '50×50cm',
    artist: '刘青',
    featured: false
  },
  {
    id: '5',
    title: '《梦》',
    description: '由著名艺术家吴一凡与掐丝珐琅大师合作创作的装置艺术，由108件不同形态的掐丝珐琅元素构成流动的云海形态。',
    category: 'collaboration',
    tags: ['艺术家联名', '当代艺术', '装置艺术'],
    image: '/images/gallery-5.jpg',
    year: '2023',
    size: '120×80×40cm',
    artist: '吴一凡 & 王晓华',
    featured: true
  },
  {
    id: '6',
    title: '《千手观音》',
    description: '千手观音是佛教中慈悲与智慧的象征，本作品通过精细掐丝工艺表现千手观音的庄严慈悲，共有42只手，每只手掌心都有一只眼睛。',
    category: 'thangka',
    tags: ['唐卡系列', '佛教题材', '微缩掐丝'],
    image: '/images/gallery-6.jpg',
    year: '2021',
    size: '60×85cm',
    artist: '李华',
    featured: false
  },
  {
    id: '7',
    title: '《祥云》',
    description: '著名设计师陈红与掐丝珐琅工艺大师联名创作的现代装饰雕塑，将传统掐丝珐琅工艺与现代雕塑语言相结合。',
    category: 'collaboration',
    tags: ['艺术家联名', '现代雕塑', '立体掐丝'],
    image: '/images/gallery-7.jpg',
    year: '2022',
    size: '40×30×25cm',
    artist: '陈红 & 李明',
    featured: false
  },
  {
    id: '8',
    title: '《和平之花》',
    description: '国际艺术家玛利亚与掐丝珐琅大师联名创作的装饰画，融合东西方美学元素，采用创新掐丝技法，色彩和谐温润。',
    category: 'collaboration',
    tags: ['艺术家联名', '跨文化', '创新工艺'],
    image: '/images/gallery-8.jpg',
    year: '2023',
    size: '45×60cm',
    artist: '玛利亚 & 张伟',
    featured: false
  },
  {
    id: '9',
    title: '《龙凤呈祥》',
    description: '龙凤呈祥是中国传统吉祥图案，本作品采用传统掐丝珐琅工艺结合现代设计理念，将龙与凤的形象现代化处理。',
    category: 'national',
    tags: ['国潮系列', '传统题材', '现代设计'],
    image: '/images/gallery-9.jpg',
    year: '2021',
    size: '55×70cm',
    artist: '刘青',
    featured: false
  },
  {
    id: '10',
    title: '《文殊菩萨》',
    description: '文殊菩萨是智慧的象征，本作品采用传统掐丝珐琅工艺，在继承传统唐卡风格的基础上加入现代设计元素。',
    category: 'thangka',
    tags: ['唐卡系列', '藏传佛教', '传统掐丝'],
    image: '/images/gallery-10.jpg',
    year: '2020',
    size: '50×70cm',
    artist: '王明',
    featured: false
  },
  {
    id: '11',
    title: '《新中式》',
    description: '著名建筑师林之风与掐丝珐琅大师联名创作的艺术屏风，将传统掐丝珐琅工艺应用于现代居住空间，体现新中式美学。',
    category: 'collaboration',
    tags: ['艺术家联名', '空间艺术', '屏风'],
    image: '/images/gallery-11.jpg',
    year: '2023',
    size: '180×120cm (三扇)',
    artist: '林之风 & 张艺',
    featured: false
  },
  {
    id: '12',
    title: '《四季如意》',
    description: '以中国传统四季花卉为题材，采用掐丝珐琅工艺创作的现代装饰画，表现春夏秋冬的更替与生命的循环。',
    category: 'national',
    tags: ['国潮系列', '花卉题材', '四季'],
    image: '/images/gallery-12.jpg',
    year: '2022',
    size: '60×60cm (四联画)',
    artist: '张艺',
    featured: true
  }
];

export default function GalleryPage() {
  return (
    <Layout>
      {/* Hero Banner */}
      <section className="relative pt-32 pb-20 bg-secondary text-white overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/images/gallery-hero.jpg"
            alt="聆花文化作品品鉴"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-secondary/70" />
        </div>

        <div className="container-wide relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">作品品鉴</h1>
            <p className="text-xl mb-8 text-white/80">
              感受传统与创新的完美结合，领略掐丝珐琅艺术的独特魅力
            </p>
          </div>
        </div>
      </section>

      {/* 作品系列导航 */}
      <section className="py-12 bg-cream">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/gallery/thangka" className="group">
              <div className="relative h-60 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/thangka-category.jpg"
                  alt="唐卡系列"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
                  <h2 className="text-2xl font-bold mb-2">唐卡系列</h2>
                  <p className="text-center text-white/80">
                    融合唐卡绘画与掐丝珐琅工艺的艺术珍品
                  </p>
                  <Button variant="outline" className="mt-4 border-white bg-white text-secondary hover:bg-white/90 hover:text-primary">
                    查看系列
                  </Button>
                </div>
              </div>
            </Link>

            <Link href="/gallery/national-trend" className="group">
              <div className="relative h-60 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/national-category.jpg"
                  alt="国潮系列"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
                  <h2 className="text-2xl font-bold mb-2">国潮系列</h2>
                  <p className="text-center text-white/80">
                    现代审美与传统工艺的创新融合
                  </p>
                  <Button variant="outline" className="mt-4 border-white bg-white text-secondary hover:bg-white/90 hover:text-primary">
                    查看系列
                  </Button>
                </div>
              </div>
            </Link>

            <Link href="/gallery/collaborations" className="group">
              <div className="relative h-60 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/collaboration-category.jpg"
                  alt="艺术家联名"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
                  <h2 className="text-2xl font-bold mb-2">艺术家联名</h2>
                  <p className="text-center text-white/80">
                    与当代艺术家的跨界合作作品
                  </p>
                  <Button variant="outline" className="mt-4 border-white bg-white text-secondary hover:bg-white/90 hover:text-primary">
                    查看系列
                  </Button>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 作品展示 */}
      <section className="py-16 bg-white">
        <div className="container-wide">
          <Tabs defaultValue="all">
            <div className="flex justify-between items-center mb-8 flex-col md:flex-row gap-4">
              <h2 className="text-3xl font-bold text-secondary">精选作品</h2>
              <TabsList>
                <TabsTrigger value="all">全部作品</TabsTrigger>
                <TabsTrigger value="thangka">唐卡系列</TabsTrigger>
                <TabsTrigger value="national">国潮系列</TabsTrigger>
                <TabsTrigger value="collaboration">艺术家联名</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {galleryItems.map((item) => (
                  <GalleryCard key={item.id} item={item} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="thangka" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {galleryItems.filter(item => item.category === 'thangka').map((item) => (
                  <GalleryCard key={item.id} item={item} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="national" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {galleryItems.filter(item => item.category === 'national').map((item) => (
                  <GalleryCard key={item.id} item={item} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="collaboration" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {galleryItems.filter(item => item.category === 'collaboration').map((item) => (
                  <GalleryCard key={item.id} item={item} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* 工艺特色 */}
      <section className="py-16 bg-cream">
        <div className="container-wide">
          <h2 className="text-3xl font-bold text-secondary mb-12 text-center">工艺特色</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <span className="text-primary text-2xl font-bold">精</span>
              </div>
              <h3 className="text-xl font-bold text-secondary mb-4">工艺精湛</h3>
              <p className="text-gray-700">
                每件作品均由掐丝珐琅艺术大师手工制作，掐丝精细，填釉均匀，烧制到位，体现了最高水平的工艺标准。
              </p>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <span className="text-primary text-2xl font-bold">创</span>
              </div>
              <h3 className="text-xl font-bold text-secondary mb-4">创意设计</h3>
              <p className="text-gray-700">
                在传承传统的基础上融入现代设计理念，创造性地将古老工艺与当代审美结合，形成独特的艺术风格。
              </p>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <span className="text-primary text-2xl font-bold">雅</span>
              </div>
              <h3 className="text-xl font-bold text-secondary mb-4">东方美学</h3>
              <p className="text-gray-700">
                作品充分体现东方美学的精髓，以含蓄内敛的表达方式，传递深邃的文化内涵，展现中国传统艺术的独特魅力。
              </p>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <span className="text-primary text-2xl font-bold">藏</span>
              </div>
              <h3 className="text-xl font-bold text-secondary mb-4">收藏价值</h3>
              <p className="text-gray-700">
                每件作品均为限量创作，甚至是独一无二的艺术珍品，具有较高的收藏价值与升值潜力。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 特色展览信息 */}
      <section className="py-16 bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/exhibition.jpg"
                alt="聆花文化展览"
                fill
                className="object-cover"
              />
            </div>

            <div>
              <h2 className="text-3xl font-bold text-secondary mb-6">艺术展览</h2>
              <p className="text-gray-700 mb-6">
                聆花文化定期举办掐丝珐琅艺术展览，展示最新创作的艺术珍品与经典作品，为艺术爱好者与收藏家提供近距离感受掐丝珐琅艺术魅力的机会。
              </p>
              <div className="space-y-4">
                <div className="bg-cream p-4 rounded-lg">
                  <h3 className="font-bold text-secondary mb-2">当前展览</h3>
                  <p className="text-gray-700">《传承与创新 - 聆花掐丝珐琅艺术展》</p>
                  <p className="text-gray-700">时间：2024年4月15日 - 6月30日</p>
                  <p className="text-gray-700">地点：聆花艺术馆（北京市朝阳区艺术中心A座）</p>
                </div>

                <div className="bg-cream p-4 rounded-lg">
                  <h3 className="font-bold text-secondary mb-2">即将开展</h3>
                  <p className="text-gray-700">《掐丝珐琅艺术国际巡展》</p>
                  <p className="text-gray-700">时间：2024年8月 - 2025年2月</p>
                  <p className="text-gray-700">地点：上海、香港、巴黎、纽约</p>
                </div>

                <div className="mt-6">
                  <Button asChild>
                    <Link href="/contact">预约参观</Link>
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
          <h2 className="text-3xl font-bold mb-6">寻找您的艺术臻品</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/80">
            欢迎联系我们，获取更多作品信息或预约专属艺术顾问服务
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

interface GalleryItem {
  id: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  image: string;
  year: string;
  size: string;
  artist: string;
  featured: boolean;
}

function GalleryCard({ item }: { item: GalleryItem }) {
  return (
    <div className="group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow">
      <div className="relative h-64">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {item.featured && (
          <Badge className="absolute top-3 right-3 bg-primary hover:bg-primary">精选</Badge>
        )}
      </div>
      <div className="p-6 bg-white">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-secondary">{item.title}</h3>
          <span className="text-sm text-gray-500">{item.year}</span>
        </div>
        <p className="text-gray-700 mb-4 line-clamp-2">
          {item.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-3">
          {item.tags.map((tag, index) => (
            <Badge key={index} variant="outline" className="bg-primary/5 text-primary hover:bg-primary/10">
              {tag}
            </Badge>
          ))}
        </div>
        <div className="flex justify-between items-center text-sm text-gray-600">
          <span>规格：{item.size}</span>
          <span>艺术家：{item.artist}</span>
        </div>
      </div>
    </div>
  );
}
