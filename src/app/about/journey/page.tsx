import Layout from '@/components/layout/Layout';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: '品牌历程 | 聆花文化 - 掐丝珐琅艺术传承者',
  description: '聆花文化从创立至今的发展历程，见证传统工艺与现代创新的融合之路。',
};

export default function BrandJourneyPage() {
  return (
    <Layout>
      {/* Hero Banner */}
      <section className="relative pt-32 pb-20 bg-secondary text-white overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/images/brand-mission.jpg"
            alt="聆花文化品牌历程"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-secondary/70" />
        </div>

        <div className="container-wide relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">品牌历程</h1>
            <p className="text-xl mb-8 text-white/80">
              传承与创新的探索之路，聆花文化的成长故事
            </p>
          </div>
        </div>
      </section>

      {/* 品牌缘起 */}
      <section className="py-20 bg-cream">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-secondary mb-6">品牌缘起</h2>
              <div className="space-y-6">
                <p className="text-gray-700">
                  2018年初，掐丝珐琅艺术创新者聆花（邓汕）女士在多年的艺术实践与思考后，萌生了创立自己品牌的想法。作为将唐卡艺术与掐丝珐琅工艺融合的先行者，她深感传统工艺面临的发展困境——如何在保持工艺本真的同时，适应现代社会的审美与需求。
                </p>
                <p className="text-gray-700">
                  "我经常思考一个问题：这样一门精湛而美丽的古老工艺，如何才能走出博物馆，走入现代人的生活？如何才能让更多年轻人了解、欣赏并喜爱它？"聆花回忆道，"这是创立聆花文化的初衷——搭建一个平台，连接传统与现代，让掐丝珐琅艺术焕发新的生命力。"
                </p>
                <p className="text-gray-700 mb-4">
                  2018年6月，在一群志同道合的艺术家、设计师与文化工作者的支持下，聆花文化正式成立，开始了"传承创新非遗，讲好中国故事"的品牌之旅。
                </p>
              </div>
            </div>

            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/brand-origin.jpg"
                alt="聆花文化品牌缘起"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 发展历程时间轴 */}
      <section className="py-20 bg-white">
        <div className="container-wide">
          <h2 className="text-3xl font-bold text-secondary mb-12 text-center">发展历程</h2>

          <div className="space-y-16">
            {/* 2018年：品牌创立 */}
            <div className="relative">
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20"></div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="md:text-right md:pr-12 relative">
                  <div className="hidden md:block absolute right-0 top-6 transform translate-x-1/2 w-4 h-4 rounded-full bg-primary"></div>
                  <h3 className="text-2xl font-bold text-primary mb-4">2018：品牌创立</h3>
                  <p className="text-gray-700 mb-4">
                    2018年6月，聆花文化正式成立，以"传承创新非遗，讲好中国故事"为品牌理念，致力于掐丝珐琅艺术的传承与创新。
                  </p>
                  <p className="text-gray-700 mb-4">
                    同年9月，聆花文化在北京798艺术区举办首次品牌发布会，展出了一系列融合传统与现代设计的掐丝珐琅艺术品与文创产品，引起艺术界与媒体的广泛关注。
                  </p>
                  <p className="text-gray-700">
                    12月，聆花文化在北京三里屯开设首家线下体验店，开创了传统工艺与现代零售体验相结合的新模式。
                  </p>
                </div>

                <div className="relative md:pl-12">
                  <div className="hidden md:block absolute left-0 top-6 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary"></div>
                  <div className="h-64 rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src="/images/journey-2018.jpg"
                      alt="2018年：聆花文化品牌创立"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* 2019年：产品矩阵拓展 */}
            <div className="relative">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="order-2 md:order-1 relative md:pl-12">
                  <div className="hidden md:block absolute left-0 top-6 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary"></div>
                  <div className="h-64 rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src="/images/journey-2019.jpg"
                      alt="2019年：聆花文化产品矩阵拓展"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="order-1 md:order-2 md:text-right md:pr-12 relative">
                  <div className="hidden md:block absolute right-0 top-6 transform translate-x-1/2 w-4 h-4 rounded-full bg-primary"></div>
                  <h3 className="text-2xl font-bold text-primary mb-4">2019：产品矩阵拓展</h3>
                  <p className="text-gray-700 mb-4">
                    2019年3月，聆花文化推出"云端系列"掐丝珐琅现代家居艺术品，将传统工艺与现代家居设计相结合，开创了传统工艺家居化的新方向。
                  </p>
                  <p className="text-gray-700 mb-4">
                    6月，聆花文化与中国国家博物馆合作推出"国宝系列"文创产品，以馆藏珐琅器为灵感，开发一系列兼具文化内涵与实用性的文创产品。
                  </p>
                  <p className="text-gray-700">
                    10月，聆花文化在上海开设第二家线下体验店，并与多家高端百货建立合作，产品渠道进一步拓展。
                  </p>
                </div>
              </div>
            </div>

            {/* 2020年：非遗教育与传播 */}
            <div className="relative">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="md:text-right md:pr-12 relative">
                  <div className="hidden md:block absolute right-0 top-6 transform translate-x-1/2 w-4 h-4 rounded-full bg-primary"></div>
                  <h3 className="text-2xl font-bold text-primary mb-4">2020：非遗教育与传播</h3>
                  <p className="text-gray-700 mb-4">
                    2020年疫情期间，聆花文化开启线上直播课堂，推出"掐丝珐琅艺术欣赏"系列课程，累计观看人数超过200万，大大提升了公众对非遗的认知与兴趣。
                  </p>
                  <p className="text-gray-700 mb-4">
                    7月，聆花文化与北京市教育委员会合作，将"掐丝珐琅艺术体验"课程引入10所中小学，开启非遗进校园项目。
                  </p>
                  <p className="text-gray-700">
                    11月，聆花文化与清华大学美术学院合作，成立"传统工艺创新研究中心"，开展掐丝珐琅艺术的学术研究与创新探索。
                  </p>
                </div>

                <div className="relative md:pl-12">
                  <div className="hidden md:block absolute left-0 top-6 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary"></div>
                  <div className="h-64 rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src="/images/journey-2020.jpg"
                      alt="2020年：聆花文化非遗教育与传播"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* 2021年：国际合作与交流 */}
            <div className="relative">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="order-2 md:order-1 relative md:pl-12">
                  <div className="hidden md:block absolute left-0 top-6 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary"></div>
                  <div className="h-64 rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src="/images/journey-2021.jpg"
                      alt="2021年：聆花文化国际合作与交流"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="order-1 md:order-2 md:text-right md:pr-12 relative">
                  <div className="hidden md:block absolute right-0 top-6 transform translate-x-1/2 w-4 h-4 rounded-full bg-primary"></div>
                  <h3 className="text-2xl font-bold text-primary mb-4">2021：国际合作与交流</h3>
                  <p className="text-gray-700 mb-4">
                    2021年4月，聆花文化作品《天地和鸣》被选为中国政府赠送法国的国礼，展现了中国传统工艺的精湛与魅力。
                  </p>
                  <p className="text-gray-700 mb-4">
                    7月，聆花文化与法国爱马仕集团达成战略合作，共同探索东西方传统工艺的对话与融合，推出限量版"东方韵"系列产品。
                  </p>
                  <p className="text-gray-700">
                    10月，聆花文化在巴黎中国文化中心举办"掐丝珐琅艺术：传统与创新"专题展览，展示中国非物质文化遗产的传承与发展。
                  </p>
                </div>
              </div>
            </div>

            {/* 2022年：数字化转型 */}
            <div className="relative">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="md:text-right md:pr-12 relative">
                  <div className="hidden md:block absolute right-0 top-6 transform translate-x-1/2 w-4 h-4 rounded-full bg-primary"></div>
                  <h3 className="text-2xl font-bold text-primary mb-4">2022：数字化转型</h3>
                  <p className="text-gray-700 mb-4">
                    2022年3月，聆花文化推出"掐丝珐琅数字艺术馆"，利用VR/AR技术，让用户足不出户就能360°全方位欣赏掐丝珐琅艺术品。
                  </p>
                  <p className="text-gray-700 mb-4">
                    6月，聆花文化与腾讯合作，推出"掐丝珐琅数字藏品"系列，将传统工艺与数字技术结合，探索非遗传承的新路径。
                  </p>
                  <p className="text-gray-700">
                    9月，聆花文化上线全新电商平台与小程序，构建线上线下一体化的品牌体验生态。
                  </p>
                </div>

                <div className="relative md:pl-12">
                  <div className="hidden md:block absolute left-0 top-6 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary"></div>
                  <div className="h-64 rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src="/images/journey-2022.jpg"
                      alt="2022年：聆花文化数字化转型"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* 2023年：文化产业生态建设 */}
            <div className="relative">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="order-2 md:order-1 relative md:pl-12">
                  <div className="hidden md:block absolute left-0 top-6 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary"></div>
                  <div className="h-64 rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src="/images/journey-2023.jpg"
                      alt="2023年：聆花文化产业生态建设"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="order-1 md:order-2 md:text-right md:pr-12 relative">
                  <div className="hidden md:block absolute right-0 top-6 transform translate-x-1/2 w-4 h-4 rounded-full bg-primary"></div>
                  <h3 className="text-2xl font-bold text-primary mb-4">2023：文化产业生态建设</h3>
                  <p className="text-gray-700 mb-4">
                    2023年2月，聆花文化在北京怀柔建立"掐丝珐琅艺术创新基地"，集研发、生产、培训、体验于一体，构建完整的产业链。
                  </p>
                  <p className="text-gray-700 mb-4">
                    5月，聆花文化启动"掐丝珐琅传承人培养计划"，面向全国招募有志于学习传统工艺的年轻人，为非遗传承注入新鲜血液。
                  </p>
                  <p className="text-gray-700">
                    9月，聆花文化与北京冬奥组委合作，推出"冰雪系列"掐丝珐琅艺术品，作为北京冬奥会特许产品，展示中国传统工艺的当代风采。
                  </p>
                </div>
              </div>
            </div>

            {/* 2024年：品牌全球化布局 */}
            <div className="relative">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="md:text-right md:pr-12 relative">
                  <div className="hidden md:block absolute right-0 top-6 transform translate-x-1/2 w-4 h-4 rounded-full bg-primary"></div>
                  <h3 className="text-2xl font-bold text-primary mb-4">2024：品牌全球化布局</h3>
                  <p className="text-gray-700 mb-4">
                    2024年1月，聆花文化在法国巴黎开设首家海外旗舰店，标志着品牌国际化战略的实质性推进。
                  </p>
                  <p className="text-gray-700 mb-4">
                    3月，聆花文化推出全新品牌标识与视觉系统，在保持东方文化内核的同时，塑造更具国际辨识度的品牌形象。
                  </p>
                  <p className="text-gray-700">
                    4月，聆花文化全新官网上线，以"传统与创新并重，东方与世界对话"为理念，展示品牌的过去、现在与未来。
                  </p>
                </div>

                <div className="relative md:pl-12">
                  <div className="hidden md:block absolute left-0 top-6 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary"></div>
                  <div className="h-64 rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src="/images/journey-2024.jpg"
                      alt="2024年：聆花文化品牌全球化布局"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 品牌成就与荣誉 */}
      <section className="py-20 bg-cream">
        <div className="container-wide">
          <h2 className="text-3xl font-bold text-secondary mb-8 text-center">品牌成就与荣誉</h2>
          <p className="text-xl text-center text-gray-700 mb-12 max-w-3xl mx-auto">
            六年耕耘，收获满满，聆花文化的每一步都铿锵有力
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-primary mb-4">行业影响力</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>中国文化产业领军品牌</li>
                <li>中国非物质文化遗产创新示范企业</li>
                <li>文化和旅游部"文化创意产品示范基地"</li>
                <li>中国工艺美术协会理事单位</li>
                <li>北京市文化创意产业协会副会长单位</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-primary mb-4">重要奖项</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>中国文化创意产业"十大品牌"</li>
                <li>中国非物质文化遗产保护贡献奖</li>
                <li>中国工艺美术"百花奖"金奖</li>
                <li>亚太地区手工艺大奖</li>
                <li>"一带一路"文化创意产品设计大赛金奖</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-primary mb-4">社会影响</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>累计培训掐丝珐琅技艺学员超过5000人</li>
                <li>提供就业岗位300余个，其中残障人士就业50余人</li>
                <li>在全国建立5个"掐丝珐琅非遗教育基地"</li>
                <li>开展"非遗进校园"活动100余场</li>
                <li>向社会捐赠掐丝珐琅艺术品价值超过500万元</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 未来展望 */}
      <section className="py-20 bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/brand-future.jpg"
                alt="聆花文化未来展望"
                fill
                className="object-cover"
              />
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-secondary mb-6">未来展望</h2>
              <p className="text-gray-700 mb-4">
                回顾过去六年的发展历程，聆花文化从一个具有美好愿景的初创品牌，逐渐成长为掐丝珐琅艺术领域的领军企业。这一路走来，我们始终秉持"传承创新非遗，讲好中国故事"的品牌理念，在传统与现代之间、在东方与世界之间寻找平衡点。
              </p>
              <p className="text-gray-700 mb-4">
                展望未来，聆花文化将继续深耕"非遗+艺术+科技+生活"的创新发展路径，以下是我们的未来规划：
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                <li><span className="font-semibold">全球化布局</span>：继续拓展国际市场，在主要艺术文化中心城市设立品牌展示空间</li>
                <li><span className="font-semibold">数字创新</span>：深化非遗与数字技术的融合，开发更多沉浸式体验和数字艺术产品</li>
                <li><span className="font-semibold">跨界合作</span>：与时尚、建筑、影视等领域跨界合作，拓展掐丝珐琅艺术的应用场景</li>
                <li><span className="font-semibold">教育传播</span>：建立"聆花学院"，系统化开展非遗教育，培养更多年轻传承人</li>
                <li><span className="font-semibold">可持续发展</span>：探索环保材料与工艺，推动传统工艺的可持续发展</li>
              </ul>
              <p className="text-gray-700 font-semibold italic">
                "我们的愿景是让掐丝珐琅这一古老工艺焕发新的生命力，成为中国文化走向世界的亮丽名片，成为连接过去与未来的文化纽带。"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-secondary text-white">
        <div className="container-wide text-center">
          <h2 className="text-3xl font-bold mb-6">加入聆花文化的成长故事</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/80">
            无论您是对传统工艺感兴趣的爱好者，还是寻求文化合作的商业伙伴，聆花文化期待与您共同书写下一个精彩篇章
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white">
              <Link href="/about/advantages">了解品牌优势</Link>
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
