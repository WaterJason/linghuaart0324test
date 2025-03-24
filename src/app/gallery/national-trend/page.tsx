import Layout from '@/components/layout/Layout';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export const metadata: Metadata = {
  title: '国潮系列 | 聆花文化 - 掐丝珐琅艺术传承者',
  description: '欣赏聆花文化掐丝珐琅国潮系列作品，现代审美与传统工艺的创新融合，展现中国传统文化的当代魅力。',
};

// 国潮系列作品数据
const nationalWorks = [
  {
    id: 'nt001',
    title: '《麒麟献瑞》',
    description: '麒麟是中国传统文化中的吉祥瑞兽，象征着祥瑞与和平。本作品以现代设计语言重新诠释传统题材，采用简洁流畅的线条表现麒麟的形象，色彩明快而不失庄重，将传统掐丝珐琅工艺与当代审美完美结合，兼具传统韵味与现代感。',
    image: '/images/gallery-3.jpg',
    size: '45×65cm',
    year: '2023',
    material: '铜胎、纯银丝、天然矿物质釉料',
    technique: '传统掐丝、现代釉彩',
    artist: '张艺',
    price: '¥98,000',
    featured: true
  },
  {
    id: 'nt002',
    title: '《九鱼图》',
    description: '九鱼图寓意"年年有余"，是中国传统吉祥图案。本作品采用新型珐琅釉料与传统掐丝工艺相结合，以红色为主调，表现鱼群在水中游动的场景。色彩鲜艳明快，构图流畅动感，既保留了传统图案的吉祥寓意，又通过简约现代的设计表达，使作品更符合当代审美与生活空间。',
    image: '/images/gallery-4.jpg',
    size: '50×50cm',
    year: '2022',
    material: '铜胎、纯银丝、天然矿物质釉料',
    technique: '传统掐丝、现代釉彩',
    artist: '刘青',
    price: '¥86,000',
    featured: false
  },
  {
    id: 'nt003',
    title: '《龙凤呈祥》',
    description: '龙凤呈祥是中国传统吉祥图案，象征着和谐美满。本作品采用传统掐丝珐琅工艺结合现代设计理念，将龙与凤的形象现代化处理，线条简洁有力，色彩对比鲜明，在保留传统元素的同时，注入现代设计感，使作品既有古典韵味又具当代气息。',
    image: '/images/gallery-9.jpg',
    size: '55×70cm',
    year: '2021',
    material: '铜胎、纯银丝、天然矿物质釉料',
    technique: '传统掐丝、现代设计',
    artist: '刘青',
    price: '¥92,000',
    featured: false
  },
  {
    id: 'nt004',
    title: '《四季如意》',
    description: '以中国传统四季花卉为题材，采用掐丝珐琅工艺创作的现代装饰画四联画，表现春梅、夏荷、秋菊、冬竹四季的美丽景象，象征生命的循环与美好。每幅作品都采用简约的构图与当代的色彩处理，将传统题材与现代艺术语言完美融合，适合现代家居与办公空间陈设。',
    image: '/images/gallery-12.jpg',
    size: '60×60cm (四联画)',
    year: '2022',
    material: '铜胎、纯银丝、天然矿物质釉料',
    technique: '微缩掐丝、渐变釉彩',
    artist: '张艺',
    price: '¥128,000',
    featured: true
  },
  {
    id: 'nt005',
    title: '《锦绣中华》',
    description: '以中国传统文化元素为题材，创作的当代掐丝珐琅艺术品。作品融合了长城、牡丹、龙凤等中国标志性符号，以拼贴的手法构成一幅表现中华文化多元之美的画面。作品采用现代色彩处理，线条精简而有力，是传统文化符号的当代演绎，彰显民族自信与文化自觉。',
    image: '/images/gallery-1.jpg',
    size: '70×90cm',
    year: '2023',
    material: '铜胎、纯银丝、天然矿物质釉料',
    technique: '创新掐丝、多层釉彩',
    artist: '张艺',
    price: '¥158,000',
    featured: true
  },
  {
    id: 'nt006',
    title: '《丝路》',
    description: '以古丝绸之路为主题，创作的当代掐丝珐琅艺术品。作品通过抽象与具象相结合的艺术手法，表现丝路沿线的文化交流与商贸往来，将驼队、绸缎、建筑等元素艺术化处理，色彩明丽，构图新颖，体现了东西方文化的交流融合与当代思考。',
    image: '/images/gallery-2.jpg',
    size: '60×80cm',
    year: '2022',
    material: '铜胎、纯银丝、天然矿物质釉料',
    technique: '抽象掐丝、分区填釉',
    artist: '王明',
    price: '¥142,000',
    featured: false
  }
];

export default function NationalTrendGalleryPage() {
  return (
    <Layout>
      {/* Hero Banner */}
      <section className="relative pt-32 pb-20 bg-secondary text-white overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/images/national-category.jpg"
            alt="掐丝珐琅国潮系列"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-secondary/70" />
        </div>

        <div className="container-wide relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">国潮系列</h1>
            <p className="text-xl mb-8 text-white/80">
              现代审美与传统工艺的创新融合，展现中国传统文化的当代魅力
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
                聆花文化国潮系列是将中国传统文化元素与现代审美趋势相结合的创新产物，以传统掐丝珐琅工艺为载体，通过当代设计语言重新诠释中国传统图案与文化符号，创造出既有文化深度又具现代感的艺术作品。
              </p>
              <p className="text-gray-700 mb-4">
                该系列作品从传统吉祥图案、文化符号、历史故事等丰富的中华文化宝库中汲取灵感，结合当代设计趋势与审美理念，通过简化图形、重构构图、创新色彩等手法，使传统元素焕发新的活力，为现代空间带来既有传统底蕴又符合当代审美的艺术体验。
              </p>
              <p className="text-gray-700 mb-4">
                国潮系列作品不仅是艺术品，更是文化自信的表达与传统文化创新发展的实践，通过将古老工艺与现代设计相结合，探索传统文化在当代社会的传承与创新路径。
              </p>
              <div className="flex flex-wrap gap-3 mt-6">
                {['国潮文化', '传统创新', '现代设计', '文化自信', '艺术生活'].map((tag, index) => (
                  <span key={index} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/gallery-3.jpg"
                alt="掐丝珐琅国潮系列介绍"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 设计理念 */}
      <section className="py-20 bg-white">
        <div className="container-wide">
          <h2 className="text-3xl font-bold text-secondary mb-12 text-center">设计理念</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-cream rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-secondary mb-4">传统与现代的融合</h3>
              <p className="text-gray-700">
                国潮系列作品在保持传统掐丝珐琅工艺精髓的同时，大胆引入现代设计理念，通过简化图形、重组元素、创新技法等手段，使传统文化符号与当代审美相融合，创造出新的艺术形式。
              </p>
            </div>

            <div className="p-6 bg-cream rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-secondary mb-4">文化符号的重构</h3>
              <p className="text-gray-700">
                对传统文化符号进行提炼与重构，保留其核心文化内涵的同时，简化繁复的细节，突出符号的识别性与现代感，使传统元素更具当代表现力与传播力。
              </p>
            </div>

            <div className="p-6 bg-cream rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-secondary mb-4">色彩的当代演绎</h3>
              <p className="text-gray-700">
                在传统色彩体系的基础上，引入当代色彩理念，大胆使用对比色、渐变色等现代色彩手法，使作品既有传统韵味又具当代活力，更符合现代人的审美习惯。
              </p>
            </div>

            <div className="p-6 bg-cream rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-secondary mb-4">生活美学的植入</h3>
              <p className="text-gray-700">
                考虑作品在现代生活环境中的适应性，注重实用价值与审美价值的结合，使作品不仅是艺术品，更是能融入当代人生活的美学载体，实现文化的日常化与生活的艺术化。
              </p>
            </div>

            <div className="p-6 bg-cream rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-secondary mb-4">文化自信的表达</h3>
              <p className="text-gray-700">
                通过现代艺术语言重新表达中国传统文化的独特魅力，彰显文化自信，激发对传统文化的认同感与自豪感，促进传统文化在当代社会的活态传承与创新发展。
              </p>
            </div>

            <div className="p-6 bg-cream rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-secondary mb-4">跨界融合的创新</h3>
              <p className="text-gray-700">
                积极探索掐丝珐琅工艺与其他艺术形式、设计领域的跨界融合，引入新材料、新技术、新理念，拓展传统工艺的表现边界，为古老技艺开拓更广阔的发展空间。
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
            传统与现代的对话，东方美学的当代表达
          </p>

          <div className="grid grid-cols-1 gap-16">
            {nationalWorks.map((work, index) => (
              <div key={work.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className={`relative h-[400px] lg:h-auto ${index % 2 !== 0 ? 'lg:order-2' : ''}`}>
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
                  <div className={index % 2 !== 0 ? 'lg:order-1' : ''}>
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 应用场景 */}
      <section className="py-20 bg-white">
        <div className="container-wide">
          <h2 className="text-3xl font-bold text-secondary mb-12 text-center">应用场景</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="relative rounded-lg overflow-hidden group">
              <div className="relative h-80">
                <Image
                  src="/images/gallery-1.jpg"
                  alt="现代家居"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
              </div>
              <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                <h3 className="text-xl font-bold mb-2">现代家居</h3>
                <p className="text-white/80">
                  国潮系列作品为现代家居空间增添文化气息与艺术格调，既能作为焦点装饰品，也能与家居环境和谐融合，彰显主人的文化品味与生活态度。
                </p>
              </div>
            </div>

            <div className="relative rounded-lg overflow-hidden group">
              <div className="relative h-80">
                <Image
                  src="/images/gallery-2.jpg"
                  alt="商务空间"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
              </div>
              <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                <h3 className="text-xl font-bold mb-2">商务空间</h3>
                <p className="text-white/80">
                  在企业总部、高端办公室、接待厅等商务空间，国潮系列作品能够彰显企业文化内涵与品牌格调，为空间注入东方美学与文化自信。
                </p>
              </div>
            </div>

            <div className="relative rounded-lg overflow-hidden group">
              <div className="relative h-80">
                <Image
                  src="/images/gallery-3.jpg"
                  alt="文化场所"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
              </div>
              <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                <h3 className="text-xl font-bold mb-2">文化场所</h3>
                <p className="text-white/80">
                  在博物馆、美术馆、文化中心等场所，国潮系列作品能够展示传统工艺的创新发展与文化传承，为观众提供传统与现代交融的艺术体验。
                </p>
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
              <Link href="/gallery/collaborations">艺术家联名</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
