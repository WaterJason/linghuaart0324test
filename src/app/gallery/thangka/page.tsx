import Layout from '@/components/layout/Layout';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export const metadata: Metadata = {
  title: '唐卡系列 | 聆花文化 - 掐丝珐琅艺术传承者',
  description: '欣赏聆花文化掐丝珐琅唐卡系列作品，融合唐卡绘画与掐丝珐琅工艺的艺术珍品，展现藏传佛教艺术的精髓。',
};

// 唐卡系列作品数据
const thangkaWorks = [
  {
    id: 'thk001',
    title: '《大白伞盖佛母》',
    description: '大白伞盖佛母是藏传佛教中的一尊重要度母，也称为"救度佛母"。本作品采用微缩掐丝工艺与传统唐卡绘画艺术相结合，以超过7800块金银丝掐制而成，融合了78种珐琅釉色，历时8个月完成。作品色彩庄严华美，金银丝线条流畅，是掐丝珐琅与藏传佛教艺术的完美结合。',
    image: '/images/gallery-1.jpg',
    size: '60×80cm',
    year: '2023',
    material: '铜胎、纯银丝、天然矿物质釉料',
    technique: '微缩掐丝、古法烧制',
    artist: '王明',
    price: '¥188,000',
    featured: true
  },
  {
    id: 'thk002',
    title: '《金刚手菩萨》',
    description: '金刚手菩萨是藏传佛教中的护法神，象征着智慧与力量。本作品运用高浮雕掐丝技法，突破了传统掐丝珐琅平面化的表现限制，使金刚手菩萨的形象更具立体感与力量感。全作品共使用纯金丝5200余段，釉色53种，历时6个月完成，气势恢宏，是传统工艺的创新突破。',
    image: '/images/gallery-2.jpg',
    size: '55×75cm',
    year: '2022',
    material: '铜胎、纯金丝、天然矿物质釉料',
    technique: '高浮雕掐丝、多层填釉',
    artist: '李华',
    price: '¥168,000',
    featured: true
  },
  {
    id: 'thk003',
    title: '《千手观音》',
    description: '千手观音是佛教中慈悲与智慧的象征，代表着无限的救度能力。本作品通过精细掐丝工艺表现千手观音的庄严慈悲，共有42只手，每只手掌心都有一只眼睛，象征救苦救难。作品采用传统与创新相结合的掐丝技法，特别是在手臂的层次处理上，通过精细的掐丝与填釉技巧，使整个形象既庄严肃穆又灵动飘逸。',
    image: '/images/gallery-6.jpg',
    size: '60×85cm',
    year: '2021',
    material: '铜胎、纯银丝、天然矿物质釉料',
    technique: '微缩掐丝、古法烧制',
    artist: '李华',
    price: '¥198,000',
    featured: false
  },
  {
    id: 'thk004',
    title: '《文殊菩萨》',
    description: '文殊菩萨是智慧的象征，在藏传佛教中有着崇高的地位。本作品采用传统掐丝珐琅工艺，在继承传统唐卡风格的基础上加入现代设计元素，特别是在背景与光晕的处理上融入了当代色彩观念，使作品既有传统的庄严与神圣，又有现代的活力与明亮。',
    image: '/images/gallery-10.jpg',
    size: '50×70cm',
    year: '2020',
    material: '铜胎、纯银丝、天然矿物质釉料',
    technique: '传统掐丝、渐变釉彩',
    artist: '王明',
    price: '¥156,000',
    featured: false
  },
  {
    id: 'thk005',
    title: '《密宗曼陀罗》',
    description: '曼陀罗是藏传佛教中表现宇宙观的重要象征图形，本作品以传统藏传佛教密宗曼陀罗为主题，采用精细的掐丝珐琅工艺，将复杂的几何图案与佛教象征符号完美结合，色彩丰富庄重，图案精细对称，是具有极高艺术与宗教价值的珍品。',
    image: '/images/gallery-2.jpg',
    size: '65×65cm',
    year: '2022',
    material: '铜胎、纯银丝、天然矿物质釉料',
    technique: '传统掐丝、多层烧制',
    artist: '张伟',
    price: '¥210,000',
    featured: false
  },
  {
    id: 'thk006',
    title: '《莲花生大师》',
    description: '莲花生大师是藏传佛教的创始人之一，本作品通过掐丝珐琅工艺展现莲花生大师的威严形象，特别在面部表情的刻画上下足功夫，通过细腻的掐丝与精准的填釉，成功传达了大师的智慧与慈悲。作品构图严谨，色彩明丽而不失庄重，是藏传佛教艺术的当代演绎。',
    image: '/images/gallery-1.jpg',
    size: '55×75cm',
    year: '2023',
    material: '铜胎、纯银丝、天然矿物质釉料',
    technique: '微缩掐丝、渐变釉彩',
    artist: '王明',
    price: '¥180,000',
    featured: true
  }
];

export default function ThangkaGalleryPage() {
  return (
    <Layout>
      {/* Hero Banner */}
      <section className="relative pt-32 pb-20 bg-secondary text-white overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/images/thangka-category.jpg"
            alt="掐丝珐琅唐卡系列"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-secondary/70" />
        </div>

        <div className="container-wide relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">唐卡系列</h1>
            <p className="text-xl mb-8 text-white/80">
              融合唐卡绘画与掐丝珐琅工艺的艺术珍品，展现藏传佛教艺术的精髓
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
                聆花文化唐卡系列是将藏传佛教唐卡艺术与传统掐丝珐琅工艺相结合的创新之作，以金银丝代替画笔，以珐琅釉彩代替颜料，将平面绘画转化为立体金属工艺，创造出既有东方神韵又具现代审美的艺术珍品。
              </p>
              <p className="text-gray-700 mb-4">
                该系列作品历经数年研发，突破了传统掐丝珐琅工艺在表现宗教题材上的局限，开创了微缩掐丝、高浮雕掐丝等创新技法，使作品更加精细生动，为传统工艺注入新的生命力。
              </p>
              <p className="text-gray-700 mb-4">
                每一件唐卡系列作品均由掐丝珐琅艺术大师与藏传佛教艺术专家合作创作，从构图设计到工艺实现，都严格遵循藏传佛教艺术的传统规范与审美标准，在保证宗教正确性的同时，融入现代设计理念，形成独特的艺术风格。
              </p>
              <div className="flex flex-wrap gap-3 mt-6">
                {['藏传佛教', '唐卡艺术', '掐丝珐琅', '文化创新', '艺术珍品'].map((tag, index) => (
                  <span key={index} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/gallery-1.jpg"
                alt="掐丝珐琅唐卡系列介绍"
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
            <div className="p-6 bg-cream rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-secondary mb-4">微缩掐丝技艺</h3>
              <p className="text-gray-700">
                为了表现唐卡画面中的细节和佛像庄严的面部表情，聆花文化开发了微缩掐丝技艺，将金银丝掐制至0.3mm宽度，实现超精细的表现能力，使画面更加丰富生动。
              </p>
            </div>

            <div className="p-6 bg-cream rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-secondary mb-4">多层填釉工艺</h3>
              <p className="text-gray-700">
                传统唐卡的色彩层次丰富，为了还原这一特点，唐卡系列作品采用多层填釉工艺，先后进行3-5次填釉与烧制，形成深浅有致的色彩效果，增强作品的艺术表现力。
              </p>
            </div>

            <div className="p-6 bg-cream rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-secondary mb-4">高浮雕掐丝</h3>
              <p className="text-gray-700">
                针对佛像的立体感表现，创新开发了高浮雕掐丝技法，通过金属丝的高低错落与多层堆叠，创造出具有三维立体效果的画面，突破了传统掐丝珐琅平面化的表现局限。
              </p>
            </div>

            <div className="p-6 bg-cream rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-secondary mb-4">特殊釉彩配方</h3>
              <p className="text-gray-700">
                传统唐卡的特殊色彩需要专门的釉料配方，聆花文化与材料专家合作开发了多种特殊釉彩，特别是金红、宝蓝、藏青等颜色，使作品能够准确表现唐卡的传统色彩。
              </p>
            </div>

            <div className="p-6 bg-cream rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-secondary mb-4">传统图像与构图</h3>
              <p className="text-gray-700">
                所有唐卡系列作品都严格遵循藏传佛教唐卡的传统图像学规范，包括佛像比例、手印姿势、装饰图案等，确保宗教含义的准确性与完整性。
              </p>
            </div>

            <div className="p-6 bg-cream rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-secondary mb-4">现代设计元素</h3>
              <p className="text-gray-700">
                在保持传统的基础上，适度融入现代设计元素，特别是在背景、边框的处理上，使作品既有传统韵味又能与现代审美和生活环境相协调。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 作品展示 */}
      <section className="py-20 bg-cream">
        <div className="container-wide">
          <h2 className="text-3xl font-bold text-secondary mb-8 text-center">精选作品</h2>
          <p className="text-xl text-center text-gray-700 mb-16 max-w-3xl mx-auto">
            每一件唐卡系列作品都是艺术与信仰的结晶，是掐丝珐琅工艺的巅峰之作
          </p>

          <div className="grid grid-cols-1 gap-16">
            {thangkaWorks.map((work, index) => (
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
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div>
                        <h4 className="text-sm font-semibold text-gray-500 mb-1">规格</h4>
                        <p className="text-gray-700">{work.size}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-gray-500 mb-1">艺术家</h4>
                        <p className="text-gray-700">{work.artist}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-gray-500 mb-1">材质</h4>
                        <p className="text-gray-700">{work.material}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-gray-500 mb-1">工艺</h4>
                        <p className="text-gray-700">{work.technique}</p>
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

      {/* 佛教艺术与掐丝珐琅 */}
      <section className="py-20 bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/gallery-2.jpg"
                alt="佛教艺术与掐丝珐琅"
                fill
                className="object-cover"
              />
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-secondary mb-6">佛教艺术与掐丝珐琅</h2>
              <p className="text-gray-700 mb-6">
                藏传佛教唐卡作为一种宗教艺术形式，历史悠久，内涵丰富。而掐丝珐琅作为中国传统工艺，有着六百多年的历史。聆花文化将这两种艺术形式相结合，不仅是技艺的创新，更是文化的交融。
              </p>
              <p className="text-gray-700 mb-6">
                唐卡系列作品在制作过程中，既遵循传统唐卡的宗教规范与绘画技法，又运用掐丝珐琅的金属与釉彩特性，创造出传统与现代、绘画与工艺、平面与立体相结合的艺术新形式，为传统文化的传承与创新探索了新的路径。
              </p>
              <p className="text-gray-700">
                这一系列作品不仅具有艺术欣赏价值，也有着宗教文化的传播意义，为现代人提供了了解藏传佛教艺术的新窗口，同时也展现了中国传统工艺的魅力与创新活力。
              </p>
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
              <Link href="/gallery/national-trend">国潮系列</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="btn-white-outline">
              <Link href="/gallery/collaborations">艺术家联名</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
