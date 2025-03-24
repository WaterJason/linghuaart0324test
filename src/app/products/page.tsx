import Layout from '@/components/layout/Layout';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: '产品系列 | 聆花文化 - 掐丝珐琅艺术传承者',
  description: '聆花文化产品系列：艺术臻品、非遗文创、手作馆和企业定制，让传统掐丝珐琅艺术焕发新生。',
};

const productCategories = [
  {
    title: '聆花艺术臻品',
    description: '融合传统工艺与现代设计的高端艺术收藏品，包括掐丝珐琅唐卡、装饰画、雕塑等，每一件都凝聚着非凡的技艺与文化价值。',
    image: '/images/product-art-collections.jpg',
    link: '/products/art-collections',
    features: ['纯手工制作', '艺术收藏价值', '文化传承意义']
  },
  {
    title: '聆花非遗文创',
    description: '将传统掐丝珐琅工艺融入现代生活的文创产品，包括家居饰品、茶器、首饰等，让千年工艺走进日常。',
    image: '/images/product-cultural-creations.jpg',
    link: '/products/cultural-creations',
    features: ['实用与美观', '传统与现代', '艺术与生活']
  },
  {
    title: '聆花手作馆',
    description: '提供掐丝珐琅工艺体验与非遗文化教育，包括DIY体验、工艺展示、技艺培训等，感受非遗魅力，亲手创作艺术品。',
    image: '/images/product-workshop.jpg',
    link: '/products/workshop',
    features: ['互动体验', '技艺学习', '文化传播']
  },
  {
    title: '企业定制',
    description: '为企业提供专属定制服务，包括礼品定制、艺术装置、文化项目策划等，彰显企业文化内涵与品牌价值。',
    image: '/images/product-custom.jpg',
    link: '/products/custom',
    features: ['专属设计', '品牌融合', '文化赋能']
  }
];

export default function ProductsPage() {
  return (
    <Layout>
      {/* Hero Banner */}
      <section className="relative pt-32 pb-20 bg-secondary text-white overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/images/product-hero.jpg"
            alt="聆花文化产品系列"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-secondary/70" />
        </div>

        <div className="container-wide relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">产品系列</h1>
            <p className="text-xl mb-8 text-white/80">
              传统工艺的现代演绎，让掐丝珐琅艺术走进生活
            </p>
          </div>
        </div>
      </section>

      {/* 产品理念 */}
      <section className="py-20 bg-cream">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-secondary mb-6">匠心传承，创新演绎</h2>
              <p className="text-gray-700 mb-4">
                聆花文化产品系列秉承"传统根基，现代表达"的设计理念，在严谨传承传统掐丝珐琅工艺的基础上，融入现代设计理念与生活美学，让千年非遗焕发新的生命力。
              </p>
              <p className="text-gray-700 mb-4">
                我们的产品涵盖了从高端艺术收藏品到日常生活文创，从非遗体验到企业定制，形成了完整的产品矩阵，满足不同场景、不同需求的文化艺术体验。
              </p>
              <p className="text-gray-700 mb-4">
                每一件聆花产品都凝聚着非凡的工艺价值与文化内涵，既是一件艺术品，也是一个文化载体，传递着东方美学精神与传统文化智慧。
              </p>
              <div className="flex flex-wrap gap-3 mt-6">
                {['纯手工制作', '非遗传承', '创新设计', '文化价值', '生活美学'].map((tag, index) => (
                  <span key={index} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/product-concept.jpg"
                alt="聆花文化产品理念"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 产品类别 */}
      <section className="py-20 bg-white">
        <div className="container-wide">
          <h2 className="text-3xl font-bold text-secondary mb-4 text-center">产品系列</h2>
          <p className="text-xl text-gray-700 mb-16 max-w-3xl mx-auto text-center">
            多元化的产品矩阵，满足不同场景的文化艺术需求
          </p>

          <div className="space-y-24">
            {productCategories.map((category, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${index % 2 !== 0 ? 'lg:grid-flow-dense' : ''}`}>
                <div className={index % 2 !== 0 ? 'lg:col-start-2' : ''}>
                  <h3 className="text-2xl font-bold text-secondary mb-4">{category.title}</h3>
                  <p className="text-gray-700 mb-6">
                    {category.description}
                  </p>
                  <div className="flex flex-wrap gap-4 mb-8">
                    {category.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button asChild className="group">
                    <Link href={category.link}>
                      浏览产品
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>

                <div className={`relative h-[400px] rounded-lg overflow-hidden shadow-xl ${index % 2 !== 0 ? 'lg:col-start-1' : ''}`}>
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 工艺价值 */}
      <section className="py-20 bg-cream">
        <div className="container-wide">
          <h2 className="text-3xl font-bold text-secondary mb-8 text-center">匠心工艺，价值非凡</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-white hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-primary text-xl font-bold">01</span>
                </div>
                <h3 className="text-xl font-bold text-secondary mb-2">纯手工制作</h3>
                <p className="text-gray-700">
                  每一件聆花产品均由掐丝珐琅艺术大师纯手工制作，从掐丝、填釉到烧制、抛光，历经数十道工序，耗时数周至数月不等，确保作品的独特性与艺术价值。
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-primary text-xl font-bold">02</span>
                </div>
                <h3 className="text-xl font-bold text-secondary mb-2">传统工艺</h3>
                <p className="text-gray-700">
                  严格遵循传统掐丝珐琅工艺标准，使用纯铜胎、纯银丝、天然矿物质釉料等传统材料，采用古法烧制技艺，保证作品的品质与纯正性。
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-primary text-xl font-bold">03</span>
                </div>
                <h3 className="text-xl font-bold text-secondary mb-2">创新设计</h3>
                <p className="text-gray-700">
                  聆花文化拥有专业设计团队，将传统元素与现代审美相结合，创造出既有文化深度又符合当代生活方式的产品，实现传统与现代的和谐统一。
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-primary text-xl font-bold">04</span>
                </div>
                <h3 className="text-xl font-bold text-secondary mb-2">文化内涵</h3>
                <p className="text-gray-700">
                  每一件聆花产品都承载着丰富的文化内涵与历史底蕴，通过艺术形式传递东方美学精神与传统文化智慧，是情感表达与文化传承的载体。
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 客户见证 */}
      <section className="py-20 bg-white">
        <div className="container-wide">
          <h2 className="text-3xl font-bold text-secondary mb-8 text-center">客户见证</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-cream hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="text-4xl text-primary font-serif mb-4">"</div>
                <p className="text-gray-700 mb-4 italic">
                  聆花文化的掐丝珐琅唐卡作品精美绝伦，是我收藏的珍品。每次欣赏都能感受到传统工艺的魅力与现代设计的创意，是艺术与文化的完美结合。
                </p>
                <div className="flex items-center mt-6">
                  <div className="w-10 h-10 bg-primary/20 rounded-full"></div>
                  <div className="ml-3">
                    <p className="font-bold text-secondary">张先生</p>
                    <p className="text-sm text-gray-600">艺术收藏家</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-cream hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="text-4xl text-primary font-serif mb-4">"</div>
                <p className="text-gray-700 mb-4 italic">
                  聆花文化的非遗文创产品既实用又美观，我购买的掐丝珐琅茶具不仅是日常用品，更是一件艺术品，每次使用都是一次文化体验，朋友们都赞不绝口。
                </p>
                <div className="flex items-center mt-6">
                  <div className="w-10 h-10 bg-primary/20 rounded-full"></div>
                  <div className="ml-3">
                    <p className="font-bold text-secondary">李女士</p>
                    <p className="text-sm text-gray-600">设计师</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-cream hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="text-4xl text-primary font-serif mb-4">"</div>
                <p className="text-gray-700 mb-4 italic">
                  作为一家注重文化内涵的企业，我们选择聆花文化定制了一批极具东方韵味的掐丝珐琅礼品，不仅彰显了我们的品牌形象，更得到了客户的高度认可。
                </p>
                <div className="flex items-center mt-6">
                  <div className="w-10 h-10 bg-primary/20 rounded-full"></div>
                  <div className="ml-3">
                    <p className="font-bold text-secondary">王总</p>
                    <p className="text-sm text-gray-600">某集团市场总监</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-secondary text-white">
        <div className="container-wide text-center">
          <h2 className="text-3xl font-bold mb-6">探索聆花文化产品系列</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/80">
            从高端艺术臻品到日常文创，从非遗体验到企业定制，找到适合您的掐丝珐琅艺术品
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {productCategories.map((category, index) => (
              <Button key={index} asChild variant="outline" className="btn-white-outline">
                <Link href={category.link}>{category.title}</Link>
              </Button>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
