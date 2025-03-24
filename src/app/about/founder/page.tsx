import Layout from '@/components/layout/Layout';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: '创始人 | 聆花文化 - 掐丝珐琅艺术传承者',
  description: '聆花文化创始人聆花（邓汕）女士的艺术探索历程，一位致力于掐丝珐琅艺术与唐卡艺术创新融合的守艺人。',
};

export default function FounderPage() {
  return (
    <Layout>
      {/* Hero Banner */}
      <section className="relative pt-32 pb-20 bg-secondary text-white overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/images/founder.jpg"
            alt="聆花文化创始人聆花（邓汕）"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-secondary/70" />
        </div>

        <div className="container-wide relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">创始人聆花</h1>
            <p className="text-xl mb-8 text-white/80">
              原名邓汕，掐丝珐琅艺术创新者，唐卡与珐琅工艺融合的探索者
            </p>
          </div>
        </div>
      </section>

      {/* 创始人简介 */}
      <section className="py-20 bg-cream">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-secondary mb-6">艺术初心</h2>
              <p className="text-gray-700 mb-4">
                聆花（邓汕），女，1987年生于肇庆，掐丝珐琅艺术守艺人，唐卡与珐琅工艺融合创新实践者，聆花文化创始人兼总设计师。
              </p>
              <p className="text-gray-700 mb-4">
                聆花早年在西藏大昭寺师从唐卡匠人画师桑培大师学习传统唐卡绘制技艺，深受藏传佛教艺术的影响。在藏区学习期间，她被唐卡艺术中精细的绘制工艺和深厚的文化内涵所吸引，奠定了她对传统工艺的理解和追求。
              </p>
              <p className="text-gray-700 mb-4">
                后来，聆花接触到了掐丝珐琅工艺，被这种将金属与釉彩完美结合的艺术所震撼。"掐丝的精细、釉彩的绚丽、工艺的复杂，每一步都是对耐心与技艺的考验。这不仅是一门工艺，更是中国传统文化精神的结晶。"聆花如是说。凭借对唐卡和掐丝珐琅两种工艺的深入理解，她开创性地将两者融合，创造出独具特色的艺术表达方式。
              </p>
              <p className="text-gray-700 font-semibold italic">
                "在艺术创作的道路上，传统是根基，创新是生命。将唐卡的精神内涵与掐丝珐琅的物质美感相结合，是我一直以来追求的艺术理想。"
              </p>
            </div>

            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/founder-intro.jpg"
                alt="聆花艺术初心"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 艺术成就 */}
      <section className="py-20 bg-white">
        <div className="container-wide">
          <h2 className="text-3xl font-bold text-secondary mb-8 text-center">艺术成就</h2>
          <p className="text-xl text-center text-gray-700 mb-12 max-w-3xl mx-auto">
            融合东西方艺术精髓，开创唐卡与掐丝珐琅艺术新境界
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="relative h-[400px]">
              <Image
                src="/images/founder-achievements.jpg"
                alt="聆花艺术成就"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <div className="bg-cream p-6 rounded-lg">
                <h3 className="text-xl font-bold text-primary mb-2">学术与企业职务</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>广东省工艺美术协会理事</li>
                  <li>广州市工艺美术协会理事</li>
                  <li>广州民间文艺家协会会员</li>
                  <li>荔湾区青年非物质文化遗产传承人协会会员</li>
                  <li>广东省动漫行业协会会员</li>
                  <li>聆花文化品牌创始人兼总设计师</li>
                </ul>
              </div>

              <div className="bg-cream p-6 rounded-lg">
                <h3 className="text-xl font-bold text-primary mb-2">近年重要奖项</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>第二十届中国文博会"中国工艺美术文化创意大赛"金奖</li>
                  <li>广东省第七届粤港澳大湾区工艺美术"岭南工匠杯"设计大赛金奖</li>
                  <li>广东省2024湾区工艺美术精品展"荷花奖"金奖</li>
                  <li>"百花杯"中国工艺美术精品奖金奖（两届）</li>
                  <li>中国非物质文化遗产创新设计大赛特等奖</li>
                </ul>
              </div>

              <div className="bg-cream p-6 rounded-lg">
                <h3 className="text-xl font-bold text-primary mb-2">创新发明与专利</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>研发固釉剂，替代传统掐丝珐琅的烧制环节</li>
                  <li>独创"固釉掐丝珐琅"新工艺</li>
                  <li>拥有美术版权作品98个</li>
                  <li>获得外观专利3个</li>
                  <li>作品被多家博物馆和艺术机构收藏</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 标志性作品 */}
      <section className="py-20 bg-cream">
        <div className="container-wide">
          <h2 className="text-3xl font-bold text-secondary mb-12 text-center">标志性作品</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all">
              <div className="relative h-64">
                <Image
                  src="/images/founder-work1.jpg"
                  alt="《大白伞盖佛母》掐丝珐琅唐卡"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-secondary mb-2">《大白伞盖佛母》掐丝珐琅唐卡</h3>
                <p className="text-gray-700">
                  创作于2015年，是聆花将掐丝珐琅工艺与藏传佛教唐卡艺术融合的代表作。作品运用微缩掐丝技法，精细入微地再现唐卡画面，融合了78种珐琅釉色，历时8个月完成。这件作品充分展现了她对唐卡艺术的深刻理解和掐丝珐琅技艺的熟练掌握，被中国国家博物馆永久收藏，被誉为"传统工艺创新的典范"。
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all">
              <div className="relative h-64">
                <Image
                  src="/images/founder-work2.jpg"
                  alt="《金刚手菩萨》掐丝珐琅"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-secondary mb-2">《金刚手菩萨》掐丝珐琅</h3>
                <p className="text-gray-700">
                  2018年作品，融合了掐丝珐琅与金属雕刻技艺。作品以金刚手菩萨为主题，运用高浮雕掐丝技法，突破了传统掐丝珐琅平面化的表现限制，立体感强，气势恢宏。作品曾作为国礼赠送给尼泊尔政府，是中尼文化交流的重要见证。
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all">
              <div className="relative h-64">
                <Image
                  src="/images/founder-work3.jpg"
                  alt="《丝路花语》系列"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-secondary mb-2">《丝路花语》系列</h3>
                <p className="text-gray-700">
                  2020年创作的当代掐丝珐琅首饰系列，是聆花将传统工艺与现代设计融合的尝试。作品以丝绸之路沿线国家的特色花卉为灵感，采用微缩掐丝技法与简约现代的设计语言，将掐丝珐琅艺术融入日常佩戴，获第二届中国非遗时尚创新设计大赛金奖。本系列采用了自创的"固釉掐丝珐琅"工艺，无需高温烧制，大大简化了制作流程。
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all">
              <div className="relative h-64">
                <Image
                  src="/images/founder-work4.jpg"
                  alt="《梦》掐丝珐琅装置艺术"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-secondary mb-2">《梦》掐丝珐琅装置艺术</h3>
                <p className="text-gray-700">
                  2022年创作的当代艺术装置作品，是聆花探索掐丝珐琅与当代艺术融合的重要尝试。作品以"中国梦"为主题，由108件不同形态的掐丝珐琅元素构成流动的云海形态，结合光影投射，营造出梦幻与现实交织的视觉体验，体现了传统工艺在当代艺术语境中的创新表达。
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all">
              <div className="relative h-64">
                <Image
                  src="/images/founder-work5.jpg"
                  alt="《九鱼图》掐丝珐琅"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-secondary mb-2">《九鱼图》掐丝珐琅</h3>
                <p className="text-gray-700">
                  2016年作品，是聆花对传统吉祥题材的创新诠释。作品以"九鱼图"为主题，寓意"年年有余"，采用新型珐琅釉料与传统掐丝工艺相结合，色彩鲜艳明快，构图流畅动感。该作品曾作为国礼赠送，并在国内外多个展览中展出，获广泛好评。
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all">
              <div className="relative h-64">
                <Image
                  src="/images/founder-work6.jpg"
                  alt="《云端茶境》掐丝珐琅茶具"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-secondary mb-2">《云端茶境》掐丝珐琅茶具</h3>
                <p className="text-gray-700">
                  2019年设计的现代掐丝珐琅茶具系列，是聆花将传统工艺融入现代生活的尝试。作品以"云"为设计元素，将掐丝珐琅与现代陶瓷、竹木材质结合，既保留了传统工艺的精细与华美，又符合现代人的使用需求与审美习惯，体现了非遗生活化的创新理念。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 艺术理念 */}
      <section className="py-20 bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-bold text-secondary mb-6">艺术理念</h2>
              <p className="text-gray-700 mb-4">
                聆花的艺术理念可以概括为"跨界融合，创新表达，传统重生"。她认为，传统工艺的价值不仅在于技法的精湛与作品的华美，更在于其所承载的文化精神与美学理念，而不同文化艺术形式的交融可以激发出全新的创造力。
              </p>
              <p className="text-gray-700 mb-4">
                "我的创作灵感源于西藏的唐卡艺术和中原的掐丝珐琅工艺，两种看似不同却又有相通之处的艺术形式。唐卡的细腻与掐丝珐琅的精致，都是对耐心和专注的极致要求。将它们融合，是对传统的尊重，也是对创新的探索。"
              </p>
              <p className="text-gray-700 mb-4">
                在创作中，聆花坚持三个原则：一是尊重两种传统工艺的本质；二是探索融合的艺术语言；三是追求作品的精神内涵。这种跨界融合的思维方式，使她的作品既有深厚的文化底蕴，又具有鲜明的个人风格和时代特色。
              </p>
              <p className="text-gray-700 mb-4">
                此外，聆花还致力于工艺创新，研发了固釉剂以替代传统掐丝珐琅的高温烧制环节，独创"固釉掐丝珐琅"新工艺，在保留传统美感的同时，简化了制作流程，拓展了应用场景，让这一古老工艺焕发新的生命力。
              </p>
              <p className="text-gray-700 font-semibold italic">
                "我希望通过我的创作，能够让人们看到传统工艺在当代语境下焕发的新生命，感受到东方艺术的独特魅力，以及不同文化交融所产生的美妙火花。"
              </p>
            </div>

            <div className="order-1 lg:order-2 relative h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/founder-philosophy.jpg"
                alt="聆花艺术理念"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 品牌创立 */}
      <section className="py-20 bg-cream">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mt-8">
            <div className="col-span-3">
              <h2 className="text-3xl font-bold text-secondary mb-8">聆花文化的创立</h2>
              <p className="text-gray-700 mb-6">
                2018年，出于对唐卡艺术与掐丝珐琅工艺融合发展的愿景，聆花创立了聆花文化品牌。作为品牌创始人兼总设计师，她致力于将两种传统工艺以创新方式呈现给当代观众。
              </p>
              <p className="text-gray-700 mb-6">
                "创立聆花文化，是希望搭建一个平台，让更多人了解、欣赏这两种传统艺术形式的独特魅力，同时也是希望汇聚一批志同道合的艺术家，共同探索传统工艺在当代语境下的创新发展与跨界融合。"
              </p>
              <p className="text-gray-700 mb-6">
                在聆花的带领下，聆花文化汇聚了一批优秀的艺术工作者与设计师，形成了从传统艺术品到现代文创产品的全系列创作体系，让传统工艺以多种形式融入现代生活。目前，品牌已拥有近百个美术版权作品和多项专利技术，成为掐丝珐琅艺术创新领域的重要力量。
              </p>
              <p className="text-gray-700 mb-6">
                "聆花"这一名字，既是对她在藏区求学时"聆听大师教诲"的回忆，也寓意着"聆听艺术的声音，绽放创新的花朵"的美好愿景。
              </p>
            </div>
            <div className="col-span-2 relative h-[400px]">
              <Image
                src="/images/founder-brand.jpg"
                alt="聆花文化品牌"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 教育与传承 */}
      <section className="py-20 bg-cream">
        <div className="container-wide">
          <h2 className="text-3xl font-bold text-secondary mb-12 text-center">教育与传承</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/founder-education.jpg"
                alt="聆花教育与传承"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-gray-700 mb-4">
                作为一名深受两种传统工艺影响的艺术家，聆花始终把艺术教育与文化传播视为自己的重要责任。她曾多次表示："文化艺术的最大价值在于传承与创新，让更多人了解、参与并热爱。"
              </p>
              <p className="text-gray-700 mb-4">
                近年来，聆花在艺术教育与传播领域进行了多方面的尝试：
              </p>

              <div className="space-y-6 mt-8">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold text-primary mb-2">高校教学</h3>
                  <p className="text-gray-700">
                    聆花受邀在多所艺术院校讲学，分享她的艺术创作经验与跨界融合理念，为青年艺术学子提供了传统与现代、东方与西方交融的艺术视角。
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold text-primary mb-2">工作室培养</h3>
                  <p className="text-gray-700">
                    在聆花工作室，她指导年轻艺术家探索传统工艺的当代表达，鼓励他们寻找自己的艺术语言，目前已培养出多名在传统工艺创新领域崭露头角的艺术新秀。
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold text-primary mb-2">公众教育</h3>
                  <p className="text-gray-700">
                    聆花文化开设了"聆花手作馆"，面向普通大众提供唐卡绘制和掐丝珐琅制作的艺术体验课程，让更多人亲身感受传统工艺的魅力。同时，她还积极参与各类文化讲座、电视节目等，向大众普及传统工艺知识。
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold text-primary mb-2">文化交流</h3>
                  <p className="text-gray-700">
                    聆花积极参与国内外文化交流活动，促进东西方艺术对话，让中国传统工艺走向世界。她曾多次组织中藏艺术家交流活动，促进两种文化艺术的互动与融合。
                  </p>
                </div>
              </div>

              <Button asChild className="mt-8">
                <Link href="/products/workshop">了解聆花手作馆</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-secondary text-white">
        <div className="container-wide text-center">
          <h2 className="text-3xl font-bold mb-6">与聆花文化一起探索艺术之美</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/80">
            了解更多关于聆花文化的产品和服务，感受传统工艺的创新魅力
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white">
              <Link href="/products">浏览产品系列</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="btn-white-outline">
              <Link href="/contact">联系我们</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
