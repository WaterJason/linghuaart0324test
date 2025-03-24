import Layout from '@/components/layout/Layout';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: '品牌理念 | 聆花文化 - 掐丝珐琅艺术传承者',
  description: '聆花文化致力于传承与创新掐丝珐琅艺术，让千年工艺焕发新活力，融入现代生活，传递东方美学精神。',
};

export default function BrandConceptPage() {
  return (
    <Layout>
      {/* Hero Banner */}
      <section className="relative pt-32 pb-20 bg-secondary text-white overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/images/brand-mission.jpg"
            alt="聆花文化品牌理念"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-secondary/70" />
        </div>

        <div className="container-wide relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">品牌理念</h1>
            <p className="text-xl mb-8 text-white/80">
              传承经典，创新发展，让非遗之美融入现代生活
            </p>
          </div>
        </div>
      </section>

      {/* 品牌故事 */}
      <section className="py-20 bg-cream fade-in">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="slide-up">
              <h2 className="text-3xl font-bold text-secondary mb-6">品牌故事</h2>
              <p className="text-gray-700 mb-4">
                "聆花"，取"聆听花开的声音"之意。在中国传统文化中，花不仅是自然的馈赠，更是生命、希望与美好的象征。聆听花开的声音，是一种对艺术、对生活的态度——静心而专注，感受细微之美。
              </p>
              <p className="text-gray-700 mb-4">
                聆花文化创立于2018年，由掐丝珐琅艺术创新实践者聆花（邓汕）女士创办。作为唐卡与掐丝珐琅工艺融合的先行者，聆花女士深耕传统工艺二十余年，致力于将这些古老技艺注入新的活力与时代精神。她独创的"固釉掐丝珐琅"工艺，成功解决了传统工艺高温烧制的限制，拓展了产品应用场景。
              </p>
              <p className="text-gray-700 mb-4">
                从成立之初，聆花文化就秉持"让非遗走进生活"的理念，一方面严谨传承传统掐丝珐琅工艺精髓，另一方面大胆创新设计与应用场景，将这一古老工艺与现代审美、生活方式融合，让"国宝"走出博物馆，走进人们的日常。
              </p>
              <p className="text-gray-700 font-semibold italic">
                "我们不只是在做产品，我们是在传递一种文化，一种历经千年而不衰的东方美学精神。"
              </p>
            </div>

            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl slide-up" style={{animationDelay: "0.2s"}}>
              <Image
                src="/images/brand-story.jpg"
                alt="聆花文化品牌故事"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 品牌使命与愿景 */}
      <section className="py-20 bg-white fade-in" style={{animationDelay: "0.3s"}}>
        <div className="container-wide text-center">
          <h2 className="text-3xl font-bold text-secondary mb-8">品牌使命与愿景</h2>
          <p className="text-xl text-gray-700 mb-12 max-w-3xl mx-auto">
            传承创新非遗，讲好中国故事
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="bg-cream p-8 rounded-lg shadow-md text-left hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary mb-4">品牌使命</h3>
              <p className="text-gray-700 mb-4">
                聆花文化致力于掐丝珐琅艺术的传承与创新，通过设计开发融合传统与现代的艺术品、文创产品，让非遗文化走进千家万户，走向世界。
              </p>
              <div className="space-y-2 mt-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary flex items-center justify-center text-white text-sm font-bold">1</div>
                  <p className="ml-4 text-gray-700">守护千年非遗技艺，确保工艺精髓代代相传</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary flex items-center justify-center text-white text-sm font-bold">2</div>
                  <p className="ml-4 text-gray-700">创新产品设计与应用场景，让传统工艺焕发时代活力</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary flex items-center justify-center text-white text-sm font-bold">3</div>
                  <p className="ml-4 text-gray-700">传播东方美学精神，讲好中国工艺故事</p>
                </div>
              </div>
            </div>

            <div className="bg-cream p-8 rounded-lg shadow-md text-left hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary mb-4">品牌愿景</h3>
              <p className="text-gray-700 mb-4">
                成为掐丝珐琅艺术领域最具创新力与影响力的品牌，让更多人了解、欣赏、拥有这一非物质文化遗产，推动中国传统工艺的当代复兴与全球传播。
              </p>
              <div className="space-y-2 mt-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary flex items-center justify-center text-white text-sm font-bold">1</div>
                  <p className="ml-4 text-gray-700">打造掐丝珐琅艺术领域的标杆品牌，引领行业发展</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary flex items-center justify-center text-white text-sm font-bold">2</div>
                  <p className="ml-4 text-gray-700">建立掐丝珐琅文化传播平台，提升公众对非遗的认知与参与度</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary flex items-center justify-center text-white text-sm font-bold">3</div>
                  <p className="ml-4 text-gray-700">推动掐丝珐琅艺术国际交流，让中国传统工艺走向世界</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 品牌价值观 */}
      <section className="py-20 bg-cream fade-in" style={{animationDelay: "0.4s"}}>
        <div className="container-wide">
          <h2 className="text-3xl font-bold text-secondary mb-12 text-center">品牌核心价值观</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center hover:translate-y-[-5px] transition-transform">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-primary text-2xl font-bold">传</span>
              </div>
              <h3 className="text-xl font-bold text-secondary mb-4">传承匠心</h3>
              <p className="text-gray-700">
                恪守传统工艺精髓，尊重非遗传承规律，保持对技艺的敬畏之心，确保每一件作品都是匠心独运之作。不忘初心，方得始终。
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center hover:translate-y-[-5px] transition-transform">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-primary text-2xl font-bold">创</span>
              </div>
              <h3 className="text-xl font-bold text-secondary mb-4">创新精神</h3>
              <p className="text-gray-700">
                在尊重传统的基础上勇于创新，融合现代审美与设计理念，探索掐丝珐琅艺术的新表现形式与应用场景，让古老工艺焕发时代活力。
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center hover:translate-y-[-5px] transition-transform">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-primary text-2xl font-bold">美</span>
              </div>
              <h3 className="text-xl font-bold text-secondary mb-4">东方美学</h3>
              <p className="text-gray-700">
                坚持东方美学精神，传递中国传统文化的审美理念与价值观，在设计与创作中体现"天人合一"的和谐之美、"含蓄内敛"的意境之美。
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center hover:translate-y-[-5px] transition-transform">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-primary text-2xl font-bold">精</span>
              </div>
              <h3 className="text-xl font-bold text-secondary mb-4">精益求精</h3>
              <p className="text-gray-700">
                追求卓越品质，对每一个工艺环节、每一个设计细节精雕细琢，不断完善与提升，坚持做"有温度、有灵魂"的产品。
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center hover:translate-y-[-5px] transition-transform">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-primary text-2xl font-bold">融</span>
              </div>
              <h3 className="text-xl font-bold text-secondary mb-4">融入生活</h3>
              <p className="text-gray-700">
                让非遗走出博物馆，走进日常生活，通过创新设计与应用场景，使传统工艺成为现代人精神生活的有机部分，实现文化的活态传承。
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center hover:translate-y-[-5px] transition-transform">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-primary text-2xl font-bold">责</span>
              </div>
              <h3 className="text-xl font-bold text-secondary mb-4">文化责任</h3>
              <p className="text-gray-700">
                肩负传承与弘扬中华优秀传统文化的使命，通过掐丝珐琅艺术传递中国故事、中国精神，为文化自信与文化传播贡献力量。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 品牌标志 */}
      <section className="py-20 bg-white fade-in" style={{animationDelay: "0.5s"}}>
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/brand-logo.jpg"
                alt="聆花文化品牌标志"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>

            <div className="order-1 lg:order-2 slide-up">
              <h2 className="text-3xl font-bold text-secondary mb-6">品牌标志释义</h2>
              <p className="text-gray-700 mb-4">
                聆花文化的品牌标志灵感源自传统掐丝珐琅工艺中的"金丝"与"花卉"元素，通过现代设计语言予以呈现，象征着传统与现代的完美融合。
              </p>
              <p className="text-gray-700 mb-4">
                标志中心的花形图案代表绽放的艺术之花，金色线条既暗喻掐丝珐琅工艺的"金丝"，也象征着文化传承的脉络。整体设计简洁而富有东方韵味，体现了品牌"简约而不简单，传统而不守旧"的设计理念。
              </p>
              <p className="text-gray-700 mb-4">
                品牌主色调采用中国传统色彩——赤（红）、青（蓝）、金三色组合。红色象征热情与活力，代表品牌创新精神；蓝色象征沉稳与深邃，代表传统文化底蕴；金色象征尊贵与辉煌，彰显掐丝珐琅艺术的华美与精致。
              </p>
              <p className="text-gray-700 font-semibold italic">
                "聆花标志不仅是一个视觉符号，更是我们品牌精神的具象化表达，凝聚着我们对传统文化的敬仰与对创新未来的憧憬。"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 我们的优势与合作 */}
      <section className="py-20 bg-cream fade-in" style={{animationDelay: "0.6s"}}>
        <div className="container-wide">
          <h2 className="text-3xl font-bold text-secondary mb-8 text-center">我们的优势与合作</h2>
          <p className="text-xl text-center text-gray-700 mb-12 max-w-3xl mx-auto">
            掐丝珐琅工艺的创新实践者，东方美学的当代传递者
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-secondary">我们的优势</h3>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
                <h4 className="text-lg font-bold text-primary mb-3">非遗工艺创新能力</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>掌握传统掐丝珐琅核心工艺，能将600年历史技艺转化为现代设计语言</li>
                  <li>拥有专业工艺团队，可实现从创意到量产的全流程把控</li>
                  <li>具备多元材质融合能力，能将珐琅与金属、陶瓷、木材等材质完美结合</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
                <h4 className="text-lg font-bold text-primary mb-3">成功的跨界案例</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>已与知名IP完成联名系列（如与东来也的合作、毕加索、齐白石作品跨时空联名）</li>
                  <li>在文创、饰品、家居领域均有成功商业化案例</li>
                  <li>擅长将传统元素转化为当代审美的产品设计</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
                <h4 className="text-lg font-bold text-primary mb-3">品牌资源优势</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>拥有自主品牌形象体系</li>
                  <li>具备线下实体店铺及体验空间资源</li>
                  <li>已建立稳定的高端客户群体</li>
                </ul>
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-secondary">寻求合作</h3>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
                <h4 className="text-lg font-bold text-primary mb-3">设计创新合作</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>寻找对东方美学感兴趣的设计师，共同开发新品系列</li>
                  <li>期待将掐丝珐琅工艺与现代设计语言深度融合</li>
                  <li>欢迎在产品形态、应用场景方面的创新提案</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
                <h4 className="text-lg font-bold text-primary mb-3">IP联名机会</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>寻求具有文化属性或年轻态IP的联名合作</li>
                  <li>可提供工艺支持，共同打造限量款/跨界系列</li>
                  <li>开放各类场景应用的深度合作（如艺术装置、限定空间等）</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
                <h4 className="text-lg font-bold text-primary mb-3">渠道与市场协同</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>希望通过设计师/IP资源触达更多年轻消费群体</li>
                  <li>寻求在设计师集合店、艺术空间等渠道的展示机会</li>
                  <li>欢迎探讨联合营销推广的可能性</li>
                </ul>
              </div>

              <div className="mt-8">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white shadow-md hover:shadow-lg transition-all">
                  <Link href="/contact">联系合作</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 品牌口号 */}
      <section className="py-16 bg-secondary text-white fade-in" style={{animationDelay: "0.7s"}}>
        <div className="container-wide text-center">
          <h2 className="text-3xl font-bold mb-8">品牌口号</h2>
          <p className="text-4xl md:text-5xl font-serif mb-8 max-w-4xl mx-auto hero-text-shadow">
            传承创新非遗，讲好中国故事
          </p>
          <div className="max-w-2xl mx-auto">
            <p className="text-lg mb-8 text-white/80">
              聆花文化致力于通过掐丝珐琅艺术，传承与创新中国非物质文化遗产，让传统工艺融入现代生活，向世界讲述中国工艺与文化的独特魅力。
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white shadow-md hover:shadow-lg transition-all">
              <Link href="/about/founder">了解创始人</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="btn-white-outline shadow-md hover:shadow-lg transition-all">
              <Link href="/about/journey">品牌历程</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
