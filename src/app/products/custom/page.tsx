import Layout from '@/components/layout/Layout';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: '企业定制 | 聆花文化 - 掐丝珐琅艺术传承者',
  description: '聆花文化企业定制服务，为企业提供专属掐丝珐琅艺术品定制，包括礼品定制、艺术装置、文创开发等，彰显企业文化内涵与品牌形象。',
};

export default function CustomPage() {
  return (
    <Layout>
      {/* Hero Banner */}
      <section className="relative pt-32 pb-20 bg-secondary text-white overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/images/product-custom.jpg"
            alt="聆花文化企业定制"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-secondary/70" />
        </div>

        <div className="container-wide relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">企业定制</h1>
            <p className="text-xl mb-8 text-white/80">
              彰显企业文化内涵，提升品牌高端形象，专属定制掐丝珐琅艺术臻品
            </p>
          </div>
        </div>
      </section>

      {/* 服务介绍 */}
      <section className="py-20 bg-cream">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-secondary mb-6">企业定制服务</h2>
              <p className="text-gray-700 mb-4">
                聆花文化企业定制服务，依托国家级非物质文化遗产掐丝珐琅工艺，为企业提供高端礼品定制、文化活动策划、艺术装置设计等全方位服务，满足企业在商务礼赠、品牌文化建设、空间艺术提升等方面的需求。
              </p>
              <p className="text-gray-700 mb-4">
                我们拥有专业的设计团队与艺术大师资源，能够将企业文化元素、品牌标识与传统掐丝珐琅工艺完美结合，创造既有传统文化底蕴又彰显现代企业精神的艺术作品，为企业提供独特的文化价值与品牌附加值。
              </p>
              <p className="text-gray-700 mb-4">
                无论是商务礼品、活动纪念品，还是企业文化空间装饰、重要场合陈设，我们都能提供从创意设计、工艺执行到包装呈现的一站式定制服务，确保每一件作品都能准确传达企业理念与品牌价值。
              </p>
              <div className="flex flex-wrap gap-3 mt-6">
                {['高端礼品', '艺术装置', '文化活动', '空间设计', '品牌赋能'].map((tag, index) => (
                  <span key={index} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/custom-intro.jpg"
                alt="聆花文化企业定制服务介绍"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 定制流程 */}
      <section className="py-20 bg-white">
        <div className="container-wide">
          <h2 className="text-3xl font-bold text-secondary mb-8 text-center">专业定制流程</h2>
          <p className="text-xl text-center text-gray-700 mb-16 max-w-3xl mx-auto">
            从需求沟通到作品呈现，全流程专业服务，确保每一件定制作品都完美呈现
          </p>

          <div className="relative">
            <div className="hidden md:block absolute left-0 top-24 w-full h-1 bg-primary/20"></div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              <div className="flex flex-col items-center text-center relative">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mb-4 z-10">
                  <span className="text-xl font-bold">01</span>
                </div>
                <h3 className="text-lg font-bold text-secondary mb-2">需求沟通</h3>
                <p className="text-gray-700 text-sm">
                  深入了解企业文化、品牌理念、使用场景等需求，确定定制方向与预算
                </p>
              </div>

              <div className="flex flex-col items-center text-center relative">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mb-4 z-10">
                  <span className="text-xl font-bold">02</span>
                </div>
                <h3 className="text-lg font-bold text-secondary mb-2">创意设计</h3>
                <p className="text-gray-700 text-sm">
                  专业设计团队根据需求提供3-5套创意方案，包含设计图、材质、尺寸等详细信息
                </p>
              </div>

              <div className="flex flex-col items-center text-center relative">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mb-4 z-10">
                  <span className="text-xl font-bold">03</span>
                </div>
                <h3 className="text-lg font-bold text-secondary mb-2">方案确认</h3>
                <p className="text-gray-700 text-sm">
                  与客户充分沟通，根据反馈调整优化设计方案，确定最终执行方案
                </p>
              </div>

              <div className="flex flex-col items-center text-center relative">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mb-4 z-10">
                  <span className="text-xl font-bold">04</span>
                </div>
                <h3 className="text-lg font-bold text-secondary mb-2">工艺制作</h3>
                <p className="text-gray-700 text-sm">
                  由掐丝珐琅艺术大师带领团队严格按照工艺标准制作，全程质量把控
                </p>
              </div>

              <div className="flex flex-col items-center text-center relative">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mb-4 z-10">
                  <span className="text-xl font-bold">05</span>
                </div>
                <h3 className="text-lg font-bold text-secondary mb-2">作品交付</h3>
                <p className="text-gray-700 text-sm">
                  专业包装与物流配送，附带艺术品证书与保养说明，提供后续维护服务
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 定制品类 */}
      <section className="py-20 bg-cream">
        <div className="container-wide">
          <h2 className="text-3xl font-bold text-secondary mb-12 text-center">定制品类</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-64">
                <Image
                  src="/images/custom-gift.jpg"
                  alt="高端商务礼品"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-secondary mb-4">高端商务礼品</h3>
                <p className="text-gray-700 mb-6">
                  适合企业商务往来、重要客户赠礼、节日庆典等场合的高端掐丝珐琅艺术礼品，可根据企业需求定制不同档次、不同数量的礼品方案。
                </p>
                <div className="space-y-2">
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="ml-2 text-gray-700">品牌定制掐丝珐琅摆件</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="ml-2 text-gray-700">企业文化主题茶器套装</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="ml-2 text-gray-700">高管定制掐丝珐琅办公用品</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-64">
                <Image
                  src="/images/custom-award.jpg"
                  alt="活动奖杯/纪念品"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-secondary mb-4">活动奖杯/纪念品</h3>
                <p className="text-gray-700 mb-6">
                  为企业年会、行业论坛、颁奖典礼等活动定制的具有纪念意义的掐丝珐琅奖杯、奖牌或纪念品，彰显活动的专业性与高端定位。
                </p>
                <div className="space-y-2">
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="ml-2 text-gray-700">掐丝珐琅工艺奖杯/奖牌</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="ml-2 text-gray-700">周年庆典纪念礼品</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="ml-2 text-gray-700">行业活动主题艺术品</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-64">
                <Image
                  src="/images/custom-art.jpg"
                  alt="艺术装置/空间陈设"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-secondary mb-4">艺术装置/空间陈设</h3>
                <p className="text-gray-700 mb-6">
                  为企业总部、展示厅、会议室等空间定制的大型掐丝珐琅艺术装置或陈设品，融入企业文化元素，提升空间艺术格调与文化氛围。
                </p>
                <div className="space-y-2">
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="ml-2 text-gray-700">企业文化墙掐丝珐琅艺术</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="ml-2 text-gray-700">会议室主题艺术装饰画</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="ml-2 text-gray-700">前台接待区艺术装置</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 服务案例 */}
      <section className="py-20 bg-white">
        <div className="container-wide">
          <h2 className="text-3xl font-bold text-secondary mb-8 text-center">服务案例</h2>
          <p className="text-xl text-center text-gray-700 mb-16 max-w-3xl mx-auto">
            聆花文化已为众多知名企业提供专业定制服务，以下是部分案例展示
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="w-full md:w-1/2 relative h-60 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/case-finance.jpg"
                  alt="某金融集团礼品定制案例"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="w-full md:w-1/2">
                <h3 className="text-xl font-bold text-secondary mb-4">某金融集团礼品定制案例</h3>
                <p className="text-gray-700 mb-4">
                  为国内知名金融集团定制VIP客户礼品，将集团"稳健、创新、共赢"的核心价值观融入掐丝珐琅艺术设计中，制作300套"金玉满堂"主题茶具礼盒，赠送重要客户与合作伙伴。
                </p>
                <div className="text-sm text-gray-600">
                  <p><span className="font-semibold">定制数量：</span>300套</p>
                  <p><span className="font-semibold">定制周期：</span>45天</p>
                  <p><span className="font-semibold">客户评价：</span>"礼品品质远超预期，很好地彰显了我们的企业文化与品牌调性，获得客户一致好评。"</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="w-full md:w-1/2 relative h-60 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/case-property.jpg"
                  alt="某地产公司艺术装置定制案例"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="w-full md:w-1/2">
                <h3 className="text-xl font-bold text-secondary mb-4">某地产公司艺术装置定制案例</h3>
                <p className="text-gray-700 mb-4">
                  为知名地产企业总部大厅定制8米长的掐丝珐琅艺术墙，以"城市与自然和谐共生"为主题，将企业发展历程与城市建设成就融入作品，成为企业文化的视觉标志。
                </p>
                <div className="text-sm text-gray-600">
                  <p><span className="font-semibold">定制规格：</span>8米×2.5米</p>
                  <p><span className="font-semibold">定制周期：</span>120天</p>
                  <p><span className="font-semibold">客户评价：</span>"这件艺术品不仅是我们企业文化的完美呈现，也成为商务接待的亮点，为企业增添了深厚的文化底蕴。"</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-cream p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold text-secondary mb-4">某科技公司周年庆定制</h3>
              <p className="text-gray-700 mb-4">
                为某互联网科技公司20周年庆典定制"创新引领未来"系列掐丝珐琅纪念品，包括员工纪念章、高管礼品、活动奖杯等，融入科技元素与企业发展历程。
              </p>
              <div className="text-sm text-gray-600">
                <p><span className="font-semibold">定制数量：</span>纪念章500个，高管礼品50套，奖杯10个</p>
                <p><span className="font-semibold">定制周期：</span>60天</p>
              </div>
            </div>

            <div className="bg-cream p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold text-secondary mb-4">某航空公司商务礼品定制</h3>
              <p className="text-gray-700 mb-4">
                为某国际航空公司定制高端商务礼品，将航空元素与掐丝珐琅工艺结合，打造独特的"云端之旅"系列礼品，用于赠送VIP旅客与商务合作伙伴。
              </p>
              <div className="text-sm text-gray-600">
                <p><span className="font-semibold">定制数量：</span>200套</p>
                <p><span className="font-semibold">定制周期：</span>40天</p>
              </div>
            </div>

            <div className="bg-cream p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold text-secondary mb-4">某外交机构国礼定制</h3>
              <p className="text-gray-700 mb-4">
                为某外交机构定制具有中国传统文化特色的国礼，采用顶级掐丝珐琅工艺制作"中华瑰宝"系列艺术品，展现中国传统工艺的精湛与文化的博大精深。
              </p>
              <div className="text-sm text-gray-600">
                <p><span className="font-semibold">定制数量：</span>30件</p>
                <p><span className="font-semibold">定制周期：</span>90天</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 服务优势 */}
      <section className="py-20 bg-cream">
        <div className="container-wide">
          <h2 className="text-3xl font-bold text-secondary mb-12 text-center">服务优势</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-primary text-2xl font-bold">专</span>
              </div>
              <h3 className="text-xl font-bold text-secondary mb-4">专业团队</h3>
              <p className="text-gray-700">
                由国家级非遗传承人领衔，聚集行业顶尖设计师与工艺大师，确保每一件定制作品都达到艺术与工艺的最高标准。
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-primary text-2xl font-bold">创</span>
              </div>
              <h3 className="text-xl font-bold text-secondary mb-4">创新设计</h3>
              <p className="text-gray-700">
                打破传统掐丝珐琅工艺的表现局限，融入现代设计理念，创造既有传统韵味又符合现代审美的创新作品。
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-primary text-2xl font-bold">定</span>
              </div>
              <h3 className="text-xl font-bold text-secondary mb-4">定制化服务</h3>
              <p className="text-gray-700">
                根据企业需求提供完全个性化的定制方案，从创意构思到工艺呈现，每一个环节都充分考虑客户的品牌特性与使用场景。
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-primary text-2xl font-bold">质</span>
              </div>
              <h3 className="text-xl font-bold text-secondary mb-4">品质保障</h3>
              <p className="text-gray-700">
                严格的工艺标准与质量控制体系，确保每一件定制作品都经过层层把关，达到最高品质要求，为企业形象提供有力保障。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-secondary text-white">
        <div className="container-wide text-center">
          <h2 className="text-3xl font-bold mb-6">开启企业专属定制</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/80">
            欢迎联系我们，专业团队将为您提供一对一咨询服务，量身定制最适合您企业的掐丝珐琅艺术方案
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white">
              <Link href="/contact">联系我们</Link>
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
