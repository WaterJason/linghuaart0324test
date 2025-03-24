import Layout from '@/components/layout/Layout';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export const metadata: Metadata = {
  title: '聆花非遗文创 | 聆花文化 - 掐丝珐琅艺术传承者',
  description: '聆花文化非遗文创产品系列，将传统掐丝珐琅工艺融入现代生活，包括家居饰品、茶器、首饰等，让千年工艺走进日常。',
};

interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  price: string;
  specs: string;
  material: string;
  featured: boolean;
}

const culturalProducts: Product[] = [
  {
    id: 'home001',
    name: '《祥云茶境》掐丝珐琅茶具套装',
    category: 'home',
    description: '茶具套装以"云"为设计元素，将掐丝珐琅与高级陶瓷结合，既保留了传统工艺的精细与华美，又符合现代人的使用需求与审美习惯。',
    image: '/images/cultural-tea-set.jpg',
    price: '12,800',
    specs: '茶壶×1、茶杯×6、茶托×6',
    material: '掐丝珐琅、景德镇高级白瓷、铜胎',
    featured: true
  },
  {
    id: 'home002',
    name: '《四季花语》掐丝珐琅花瓶',
    category: 'home',
    description: '四季花语花瓶系列以春、夏、秋、冬四季花卉为主题，采用传统掐丝珐琅工艺与现代设计相结合，既可盛放鲜花，亦是独立的艺术陈设品。',
    image: '/images/cultural-vase.jpg',
    price: '6,800',
    specs: '高22cm×直径12cm',
    material: '铜胎掐丝珐琅、天然矿物质釉料',
    featured: true
  },
  {
    id: 'home003',
    name: '《云端》掐丝珐琅香薰炉',
    category: 'home',
    description: '结合掐丝珐琅工艺与现代香薰功能的艺术品，采用云纹设计，烟雾从釉彩云纹中升起，如梦似幻，为室内带来艺术氛围与香气。',
    image: '/images/cultural-incense.jpg',
    price: '5,200',
    specs: '高15cm×宽12cm×长18cm',
    material: '铜胎掐丝珐琅、红木底座',
    featured: false
  },
  {
    id: 'jewelry001',
    name: '《丝路花语》掐丝珐琅首饰系列 - 项链',
    category: 'jewelry',
    description: '灵感源自丝绸之路沿线国家的特色花卉，采用微缩掐丝工艺，将传统技艺融入现代首饰设计，适合日常佩戴的艺术珍品。',
    image: '/images/cultural-necklace.jpg',
    price: '4,900',
    specs: '链长45cm、吊坠3.5×2.5cm',
    material: '925银、铜胎微缩掐丝珐琅',
    featured: true
  },
  {
    id: 'jewelry002',
    name: '《丝路花语》掐丝珐琅首饰系列 - 耳环',
    category: 'jewelry',
    description: '与项链同系列设计，以微缩掐丝工艺呈现精细花卉图案，轻盈优雅，将传统工艺的美感融入现代女性的日常着装。',
    image: '/images/cultural-earrings.jpg',
    price: '3,200',
    specs: '3×1.8cm',
    material: '925银、铜胎微缩掐丝珐琅',
    featured: false
  },
  {
    id: 'jewelry003',
    name: '《祥瑞》掐丝珐琅手镯',
    category: 'jewelry',
    description: '以传统吉祥纹样为设计元素，采用现代简约的造型与色彩，将掐丝珐琅工艺与时尚首饰完美结合，既有文化内涵又具现代美感。',
    image: '/images/cultural-bracelet.jpg',
    price: '5,600',
    specs: '内径6.2cm、宽2.5cm',
    material: '铜胎掐丝珐琅、18K金点缀',
    featured: false
  },
  {
    id: 'office001',
    name: '《墨缘》掐丝珐琅笔筒',
    category: 'office',
    description: '传统文房四宝之一的笔筒，结合掐丝珐琅工艺，以梅兰竹菊为主题，既是实用文具，又是书房案头雅致的艺术陈设。',
    image: '/images/cultural-penholder.jpg',
    price: '3,800',
    specs: '高12cm×直径8cm',
    material: '铜胎掐丝珐琅、红木底座',
    featured: false
  },
  {
    id: 'office002',
    name: '《天圆地方》掐丝珐琅名片盒',
    category: 'office',
    description: '以中国传统"天圆地方"宇宙观为设计理念，方圆结合的造型，精美的掐丝珐琅工艺，是商务人士的高雅配件。',
    image: '/images/cultural-cardcase.jpg',
    price: '2,800',
    specs: '9.5×6×1.2cm',
    material: '铜胎掐丝珐琅、不锈钢内托',
    featured: true
  },
  {
    id: 'office003',
    name: '《灵犀》掐丝珐琅书签',
    category: 'office',
    description: '精致的掐丝珐琅工艺书签，以中国传统纹样为设计元素，为阅读增添文化气息与艺术品味，也是馈赠亲友的雅致礼品。',
    image: '/images/cultural-bookmark.jpg',
    price: '980',
    specs: '15×3cm',
    material: '铜胎掐丝珐琅、丝绸流苏',
    featured: false
  }
];

export default function CulturalCreationsPage() {
  return (
    <Layout>
      {/* Hero Banner */}
      <section className="relative pt-32 pb-20 bg-secondary text-white overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/images/product-cultural-creations.jpg"
            alt="聆花非遗文创"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-secondary/70" />
        </div>

        <div className="container-wide relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">聆花非遗文创</h1>
            <p className="text-xl mb-8 text-white/80">
              将传统掐丝珐琅工艺融入现代生活，让千年非遗与日常相伴
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
                聆花非遗文创系列是聆花文化致力于让传统掐丝珐琅工艺融入现代生活的实践成果，通过创新设计与工艺改良，将这一古老技艺转化为兼具实用性与艺术性的现代产品。
              </p>
              <p className="text-gray-700 mb-4">
                系列产品涵盖家居饰品、茶器、首饰、文具等多个品类，既保留了传统掐丝珐琅工艺的精湛技艺与文化内涵，又符合现代人的使用需求与审美习惯，实现了传统与现代的完美结合。
              </p>
              <p className="text-gray-700 mb-4">
                每一件聆花非遗文创产品都经过精心设计与制作，既是日常实用品，也是艺术收藏品，让使用者在日常生活中感受中国传统工艺的美与中华文化的魅力。
              </p>
              <div className="flex flex-wrap gap-3 mt-6">
                {['传统工艺', '现代设计', '实用美学', '文化传承', '生活艺术'].map((tag, index) => (
                  <span key={index} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/cultural-intro.jpg"
                alt="聆花非遗文创系列介绍"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 产品展示 */}
      <section className="py-20 bg-white">
        <div className="container-wide">
          <h2 className="text-3xl font-bold text-secondary mb-4 text-center">产品展示</h2>
          <p className="text-xl text-gray-700 mb-16 max-w-3xl mx-auto text-center">
            传统与现代的完美结合，为生活增添艺术气息的精美文创产品
          </p>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full md:w-[500px] grid-cols-3 mx-auto mb-12">
              <TabsTrigger value="all">全部产品</TabsTrigger>
              <TabsTrigger value="home">家居饰品</TabsTrigger>
              <TabsTrigger value="jewelry">首饰系列</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {culturalProducts.map((item) => (
                  <ProductCard key={item.id} product={item} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="home" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {culturalProducts.filter(item => item.category === 'home').map((item) => (
                  <ProductCard key={item.id} product={item} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="jewelry" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {culturalProducts.filter(item => item.category === 'jewelry').map((item) => (
                  <ProductCard key={item.id} product={item} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* 设计理念 */}
      <section className="py-20 bg-cream">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/cultural-design.jpg"
                alt="聆花非遗文创设计理念"
                fill
                className="object-cover"
              />
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-secondary mb-6">设计理念</h2>
              <p className="text-gray-700 mb-4">
                聆花非遗文创系列秉承"传统根基，现代表达"的设计理念，在保留传统掐丝珐琅工艺精髓的基础上，融入现代设计思维与生活美学，创造出既有文化深度又符合当代生活方式的产品。
              </p>
              <div className="space-y-6 mt-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary text-lg font-bold">01</span>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-bold text-secondary mb-2">传统工艺创新</h3>
                    <p className="text-gray-700">
                      在保留传统掐丝珐琅工艺核心技法的基础上，通过简化工序、改良材料、创新烧制等手段，提高产品的实用性、耐用性与现代感。
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary text-lg font-bold">02</span>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-bold text-secondary mb-2">东方美学现代化</h3>
                    <p className="text-gray-700">
                      将中国传统纹样、色彩与寓意通过现代设计语言重新诠释，以简约、优雅、含蓄的现代东方美学，呈现传统文化的当代魅力。
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary text-lg font-bold">03</span>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-bold text-secondary mb-2">生活场景融入</h3>
                    <p className="text-gray-700">
                      深入研究当代人的生活习惯与需求，将掐丝珐琅工艺与日常生活场景无缝结合，打造既有文化内涵又具生活实用性的产品。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 产品价值 */}
      <section className="py-20 bg-white">
        <div className="container-wide">
          <h2 className="text-3xl font-bold text-secondary mb-12 text-center">产品价值</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-cream hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-primary text-2xl font-bold">艺</span>
                </div>
                <h3 className="text-xl font-bold text-secondary mb-4 text-center">艺术价值</h3>
                <p className="text-gray-700">
                  每件产品都由掐丝珐琅艺术大师亲手制作，采用传统工艺与现代设计相结合，具有较高的艺术价值，不仅是实用品，更是艺术藏品。
                </p>
              </CardContent>
            </Card>

            <Card className="bg-cream hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-primary text-2xl font-bold">用</span>
                </div>
                <h3 className="text-xl font-bold text-secondary mb-4 text-center">实用价值</h3>
                <p className="text-gray-700">
                  在保证美观的同时，特别注重产品的实用性，通过科学设计与材料选择，确保产品的使用舒适性、耐久性与安全性，真正做到艺术与实用的完美结合。
                </p>
              </CardContent>
            </Card>

            <Card className="bg-cream hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-primary text-2xl font-bold">情</span>
                </div>
                <h3 className="text-xl font-bold text-secondary mb-4 text-center">情感价值</h3>
                <p className="text-gray-700">
                  每件产品都承载着中国传统文化的精神与故事，使用过程中能感受到传统工艺的温度与东方美学的意境，满足现代人对文化认同与精神归属的情感需求。
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 适用场景 */}
      <section className="py-20 bg-cream">
        <div className="container-wide">
          <h2 className="text-3xl font-bold text-secondary mb-8 text-center">适用场景</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-primary text-2xl font-bold">家</span>
              </div>
              <h3 className="text-xl font-bold text-secondary mb-4">家居陈设</h3>
              <p className="text-gray-700">
                聆花非遗文创产品可作为高雅的家居装饰品，为居室环境增添传统文化气息与艺术格调，彰显主人的文化品味与生活态度。
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-primary text-2xl font-bold">礼</span>
              </div>
              <h3 className="text-xl font-bold text-secondary mb-4">馈赠礼品</h3>
              <p className="text-gray-700">
                聆花非遗文创产品包装精美，寓意吉祥，既有艺术价值又具实用功能，是送长辈、友人、商务伙伴的高雅礼品选择。
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-primary text-2xl font-bold">商</span>
              </div>
              <h3 className="text-xl font-bold text-secondary mb-4">商务场合</h3>
              <p className="text-gray-700">
                掐丝珐琅名片盒、笔筒等办公文具类产品，能为商务场合增添中国传统文化的气息，展现个人素养与品位，增进商务交流。
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-primary text-2xl font-bold">藏</span>
              </div>
              <h3 className="text-xl font-bold text-secondary mb-4">艺术收藏</h3>
              <p className="text-gray-700">
                聆花非遗文创产品采用传统掐丝珐琅工艺制作，具有一定的收藏价值，适合对传统工艺与现代设计感兴趣的艺术收藏爱好者。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-secondary text-white">
        <div className="container-wide text-center">
          <h2 className="text-3xl font-bold mb-6">让传统走进生活，与非遗日常相伴</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/80">
            探索聆花非遗文创产品系列，发现传统掐丝珐琅工艺的现代之美
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white">
              <Link href="/products/art-collections">探索艺术臻品</Link>
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
            {product.category === 'home' ? '家居饰品' :
             product.category === 'jewelry' ? '首饰系列' : '文创办公'}
          </Badge>
        </div>
        <div className="flex justify-between items-center mt-4">
          <div className="text-sm text-gray-500">规格：{product.specs}</div>
          <div className="text-lg font-bold text-primary">¥{product.price}</div>
        </div>
      </CardContent>
    </Card>
  );
}
