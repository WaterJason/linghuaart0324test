import Layout from '@/components/layout/Layout';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export const metadata: Metadata = {
  title: '聆花艺术臻品 | 聆花文化 - 掐丝珐琅艺术传承者',
  description: '聆花文化高端艺术收藏品系列，包括掐丝珐琅唐卡、装饰画、雕塑作品等艺术珍品，每件作品都蕴含深厚的文化价值。',
};

interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  size: string;
  price: string;
  status: string;
  colors: string[];
  material: string;
  craftsmanship: string;
  featured: boolean;
}

const artCollections: Product[] = [
  {
    id: 'thc001',
    name: '《大白伞盖佛母》掐丝珐琅唐卡',
    category: 'thangka',
    description: '作品采用微缩掐丝工艺，精细入微地再现唐卡画面，融合了78种珐琅釉色，历时8个月完成，是掐丝珐琅与藏传佛教艺术的完美结合。',
    image: '/images/gallery-1.jpg',
    size: '60×80cm',
    price: '188,000',
    status: '收藏级',
    colors: ['金色', '红色', '蓝色', '绿色'],
    material: '纯铜胎、纯银丝、天然矿物质釉料',
    craftsmanship: '微缩掐丝、古法烧制',
    featured: true
  },
  {
    id: 'thc002',
    name: '《金刚手菩萨》掐丝珐琅唐卡',
    category: 'thangka',
    description: '作品以金刚手菩萨为主题，运用高浮雕掐丝技法，突破了传统掐丝珐琅平面化的表现限制，立体感强，气势恢宏，是传统工艺的创新突破。',
    image: '/images/gallery-2.jpg',
    size: '55×75cm',
    price: '168,000',
    status: '收藏级',
    colors: ['金色', '蓝色', '白色'],
    material: '纯铜胎、纯金丝、天然矿物质釉料',
    craftsmanship: '高浮雕掐丝、多层填釉',
    featured: true
  },
  {
    id: 'dec001',
    name: '《麒麟献瑞》掐丝珐琅装饰画',
    category: 'decoration',
    description: '以中国传统吉祥题材"麒麟献瑞"为创作主题，采用传统掐丝珐琅工艺结合现代设计语言，色彩绚丽，寓意祥瑞，适合高端家居与办公空间装饰。',
    image: '/images/gallery-3.jpg',
    size: '45×65cm',
    price: '98,000',
    status: '精品级',
    colors: ['金色', '红色', '蓝色', '绿色'],
    material: '纯铜胎、纯银丝、天然矿物质釉料',
    craftsmanship: '传统掐丝、古法烧制',
    featured: true
  },
  {
    id: 'dec002',
    name: '《九鱼图》掐丝珐琅装饰画',
    category: 'decoration',
    description: '以"九鱼图"为主题，寓意"年年有余"，采用新型珐琅釉料与传统掐丝工艺相结合，色彩鲜艳明快，构图流畅动感，是传统吉祥图案的现代演绎。',
    image: '/images/gallery-4.jpg',
    size: '50×50cm',
    price: '86,000',
    status: '精品级',
    colors: ['金色', '蓝色', '红色'],
    material: '纯铜胎、纯银丝、天然矿物质釉料',
    craftsmanship: '传统掐丝、现代釉彩',
    featured: false
  },
  {
    id: 'sc001',
    name: '《梦》掐丝珐琅装置艺术',
    category: 'sculpture',
    description: '当代艺术装置作品，以"中国梦"为主题，由108件不同形态的掐丝珐琅元素构成流动的云海形态，体现了传统工艺在当代艺术语境中的创新表达。',
    image: '/images/gallery-5.jpg',
    size: '120×80×40cm',
    price: '268,000',
    status: '收藏级',
    colors: ['金色', '蓝色', '白色'],
    material: '纯铜胎、纯银丝、天然矿物质釉料、不锈钢支架',
    craftsmanship: '多层掐丝、悬浮烧制、装置组合',
    featured: true
  },
  {
    id: 'thc003',
    name: '《千手观音》掐丝珐琅唐卡',
    category: 'thangka',
    description: '以千手观音为主题，通过精细掐丝工艺表现千手观音的庄严慈悲，共有42只手，每只手掌心都有一只眼睛，象征救苦救难。',
    image: '/images/founder-work1.jpg',
    size: '60×85cm',
    price: '198,000',
    status: '收藏级',
    colors: ['金色', '蓝色', '白色', '红色'],
    material: '纯铜胎、纯银丝、天然矿物质釉料',
    craftsmanship: '微缩掐丝、古法烧制',
    featured: false
  },
  {
    id: 'sc002',
    name: '《祥云》掐丝珐琅雕塑',
    category: 'sculpture',
    description: '以"祥云"为灵感创作的现代雕塑，将传统掐丝珐琅工艺与现代雕塑语言相结合，形态流畅，釉彩斑斓，既有东方韵味又具现代美感。',
    image: '/images/founder-work3.jpg',
    size: '40×30×25cm',
    price: '129,000',
    status: '精品级',
    colors: ['金色', '蓝色', '绿色'],
    material: '纯铜胎、纯银丝、天然矿物质釉料、黑檀木底座',
    craftsmanship: '立体掐丝、悬浮烧制',
    featured: false
  },
  {
    id: 'dec003',
    name: '《和平之花》掐丝珐琅装饰画',
    category: 'decoration',
    description: '以和平为主题创作的现代装饰画，融合东西方美学元素，采用创新掐丝技法，色彩和谐温润，象征世界和平与人类和谐。',
    image: '/images/founder-work5.jpg',
    size: '45×60cm',
    price: '86,000',
    status: '精品级',
    colors: ['金色', '蓝色', '白色', '粉色'],
    material: '纯铜胎、纯银丝、天然矿物质釉料',
    craftsmanship: '现代掐丝、渐变釉彩',
    featured: false
  }
];

export default function ArtCollectionsPage() {
  return (
    <Layout>
      {/* Hero Banner */}
      <section className="relative pt-32 pb-20 bg-secondary text-white overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/images/product-art-collections.jpg"
            alt="聆花艺术臻品"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-secondary/70" />
        </div>

        <div className="container-wide relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">聆花艺术臻品</h1>
            <p className="text-xl mb-8 text-white/80">
              掐丝珐琅艺术的传承与创新，融合传统工艺与当代设计的高端艺术收藏品
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
                聆花艺术臻品系列是聆花文化的高端艺术收藏品线，融合传统掐丝珐琅工艺与现代设计理念，由掐丝珐琅大师纯手工创作，每一件作品都凝聚着非凡的技艺与文化价值。
              </p>
              <p className="text-gray-700 mb-4">
                系列产品包括掐丝珐琅唐卡、装饰画、雕塑等多种艺术形式，既有对传统题材的精彩诠释，也有基于现代审美的创新表达，展现了掐丝珐琅艺术的多元魅力与无限可能。
              </p>
              <p className="text-gray-700 mb-4">
                每一件聆花艺术臻品都经过严格的品质把控，从设计构思到材料选择，从工艺执行到成品检验，每一环节都精益求精，确保作品的艺术价值与收藏价值。
              </p>
              <div className="flex flex-wrap gap-3 mt-6">
                {['纯手工制作', '顶级工艺', '艺术收藏', '文化传承', '大师创作'].map((tag, index) => (
                  <span key={index} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/art-collections-intro.jpg"
                alt="聆花艺术臻品系列介绍"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 精品展示 */}
      <section className="py-20 bg-white">
        <div className="container-wide">
          <h2 className="text-3xl font-bold text-secondary mb-4 text-center">精品展示</h2>
          <p className="text-xl text-gray-700 mb-16 max-w-3xl mx-auto text-center">
            每一件作品都是匠心独运的艺术珍品，承载着深厚的文化内涵与艺术价值
          </p>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full md:w-[400px] grid-cols-3 mx-auto mb-12">
              <TabsTrigger value="all">全部作品</TabsTrigger>
              <TabsTrigger value="thangka">唐卡系列</TabsTrigger>
              <TabsTrigger value="decoration">装饰画</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {artCollections.map((item) => (
                  <ProductCard key={item.id} product={item} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="thangka" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {artCollections.filter(item => item.category === 'thangka').map((item) => (
                  <ProductCard key={item.id} product={item} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="decoration" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {artCollections.filter(item => item.category === 'decoration').map((item) => (
                  <ProductCard key={item.id} product={item} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* 工艺特色 */}
      <section className="py-20 bg-cream">
        <div className="container-wide">
          <h2 className="text-3xl font-bold text-secondary mb-8 text-center">工艺特色</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-primary text-xl font-bold">01</span>
                </div>
                <h3 className="text-xl font-bold text-secondary mb-2">微缩掐丝技法</h3>
                <p className="text-gray-700">
                  聆花文化独创的微缩掐丝技法，能将金银丝掐制至0.3mm宽度，实现超精细的图案表现，使作品更加精致细腻，细节丰富，是传统技艺的突破性创新。
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-primary text-xl font-bold">02</span>
                </div>
                <h3 className="text-xl font-bold text-secondary mb-2">高浮雕掐丝工艺</h3>
                <p className="text-gray-700">
                  突破传统掐丝珐琅平面化的表现局限，通过特殊的掐丝与填釉技法，实现立体感强的浮雕效果，使作品更具视觉冲击力与艺术张力。
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-primary text-xl font-bold">03</span>
                </div>
                <h3 className="text-xl font-bold text-secondary mb-2">古法烧制技艺</h3>
                <p className="text-gray-700">
                  采用传统的高温火烧工艺，结合现代温控技术，精确控制每一次烧制的温度与时间，确保釉料熔融均匀，色泽饱满，经久不变。
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-primary text-xl font-bold">04</span>
                </div>
                <h3 className="text-xl font-bold text-secondary mb-2">天然矿物质釉料</h3>
                <p className="text-gray-700">
                  选用传统天然矿物质提炼的珐琅釉料，结合现代色彩研发技术，开发出上百种色彩丰富、稳定性高的专用釉料，使作品色彩更加绚丽多姿。
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-primary text-xl font-bold">05</span>
                </div>
                <h3 className="text-xl font-bold text-secondary mb-2">多层填釉技术</h3>
                <p className="text-gray-700">
                  通过多次填釉、多次烧制，形成层次丰富、深浅有致的釉面效果，使作品更具立体感与纵深感，色彩过渡自然，视觉效果极佳。
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-primary text-xl font-bold">06</span>
                </div>
                <h3 className="text-xl font-bold text-secondary mb-2">创新材质组合</h3>
                <p className="text-gray-700">
                  在传统掐丝珐琅基础上创新融合木质、玉石、陶瓷等材质，实现多种质感的组合与对比，丰富作品的艺术表现力，打破传统材质局限。
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 收藏价值 */}
      <section className="py-20 bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/art-collection-value.jpg"
                alt="聆花艺术臻品收藏价值"
                fill
                className="object-cover"
              />
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-secondary mb-6">收藏价值</h2>
              <p className="text-gray-700 mb-4">
                聆花艺术臻品系列作为高端艺术收藏品，具有艺术价值、文化价值、历史价值与投资价值的多重属性，是艺术收藏与文化传承的理想选择。
              </p>
              <div className="space-y-6 mt-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary text-lg font-bold">01</span>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-bold text-secondary mb-2">艺术与文化价值</h3>
                    <p className="text-gray-700">
                      每件作品都是掐丝珐琅艺术大师的心血之作，既传承了传统工艺精髓，又融入现代艺术理念，具有极高的艺术价值与文化意义。
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary text-lg font-bold">02</span>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-bold text-secondary mb-2">稀缺性与唯一性</h3>
                    <p className="text-gray-700">
                      每件作品均为限量创作，甚至是独一无二的艺术珍品，由国家级非遗传承人与一线艺术大师亲手制作，具有不可复制的稀缺价值。
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary text-lg font-bold">03</span>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-bold text-secondary mb-2">品牌与市场认可</h3>
                    <p className="text-gray-700">
                      聆花文化的艺术作品已得到国内外艺术市场与博物馆的高度认可，多件作品被国家级博物馆收藏，在艺术品拍卖市场具有良好表现。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 收藏服务 */}
      <section className="py-20 bg-cream">
        <div className="container-wide">
          <h2 className="text-3xl font-bold text-secondary mb-8 text-center">臻品收藏服务</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-primary text-2xl font-bold">鉴</span>
              </div>
              <h3 className="text-xl font-bold text-secondary mb-4">鉴定证书</h3>
              <p className="text-gray-700">
                每件聆花艺术臻品均附国家级非遗传承中心出具的权威鉴定证书，确保作品真实性、稀缺性与收藏价值。
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-primary text-2xl font-bold">展</span>
              </div>
              <h3 className="text-xl font-bold text-secondary mb-4">专业展陈</h3>
              <p className="text-gray-700">
                提供专业的艺术品展陈方案与服务，包括定制展柜、光线设计、环境控制等，确保作品在最佳状态下展示。
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-primary text-2xl font-bold">养</span>
              </div>
              <h3 className="text-xl font-bold text-secondary mb-4">保养维护</h3>
              <p className="text-gray-700">
                提供终身的艺术品保养维护服务，包括定期检查、专业清洁、釉面保护等，确保作品长久保持最佳状态。
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-primary text-2xl font-bold">传</span>
              </div>
              <h3 className="text-xl font-bold text-secondary mb-4">价值传承</h3>
              <p className="text-gray-700">
                提供艺术品收藏咨询、市场评估、传承规划等增值服务，助力收藏家实现艺术品的长期价值传承与增值。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-secondary text-white">
        <div className="container-wide text-center">
          <h2 className="text-3xl font-bold mb-6">臻选艺术，永恒传承</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/80">
            欢迎预约参观聆花艺术馆，近距离欣赏掐丝珐琅艺术臻品，感受千年工艺的魅力
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white">
              <Link href="/contact">预约鉴赏</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="btn-white-outline">
              <Link href="/products">更多产品</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}

function ProductCard({ product }: { product: Product }) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-64">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
        />
        {product.featured && (
          <Badge className="absolute top-3 right-3 bg-primary hover:bg-primary">精选</Badge>
        )}
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold text-secondary mb-2 line-clamp-1">{product.name}</h3>
        <p className="text-gray-700 mb-4 line-clamp-3">{product.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          <Badge variant="outline" className="bg-primary/5 text-primary hover:bg-primary/10">
            {product.category === 'thangka' ? '唐卡系列' :
             product.category === 'decoration' ? '装饰画' : '雕塑'}
          </Badge>
          <Badge variant="outline" className="bg-primary/5 text-primary hover:bg-primary/10">
            {product.status}
          </Badge>
        </div>
        <div className="flex justify-between items-center mt-4">
          <div className="text-sm text-gray-500">规格：{product.size}</div>
          <div className="text-lg font-bold text-primary">¥{product.price}</div>
        </div>
      </CardContent>
    </Card>
  );
}
