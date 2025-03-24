import Layout from '@/components/layout/Layout';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: '品牌优势 | 聆花文化 - 掐丝珐琅艺术传承者',
  description: '聆花文化在传承工艺、创新能力、团队实力、品牌影响力等方面的核心竞争优势。',
};

export default function BrandAdvantagesPage() {
  return (
    <Layout>
      {/* Hero Banner */}
      <section className="relative pt-32 pb-20 bg-secondary text-white overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/images/brand-mission.jpg"
            alt="聆花文化品牌优势"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-secondary/70" />
        </div>

        <div className="container-wide relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">品牌优势</h1>
            <p className="text-xl mb-8 text-white/80">
              聆花文化的核心竞争力，传承与创新的完美结合
            </p>
          </div>
        </div>
      </section>

      {/* 品牌优势概述 */}
      <section className="py-20 bg-cream">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-secondary mb-8">我们的核心优势</h2>
            <p className="text-xl text-gray-700 mb-12">
              作为掐丝珐琅艺术领域的领先品牌，聆花文化在传承工艺、创新能力、团队实力、品牌影响力等方面具有独特优势，为客户提供卓越的产品与服务。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "传承实力",
                description: "国家级非遗传承，原汁原味的工艺精髓",
                icon: "heritage-icon.svg"
              },
              {
                title: "创新能力",
                description: "传统与现代的完美融合，不断突破工艺边界",
                icon: "innovation-icon.svg"
              },
              {
                title: "团队实力",
                description: "汇聚行业顶尖人才，多学科专业协作",
                icon: "team-icon.svg"
              },
              {
                title: "影响力",
                description: "行业标杆地位，广泛的社会与文化影响",
                icon: "influence-icon.svg"
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-primary text-2xl font-bold">{index + 1}</span>
                </div>
                <h3 className="text-xl font-bold text-secondary mb-4">{item.title}</h3>
                <p className="text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 传承实力 */}
      <section className="py-20 bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-secondary mb-6">传承实力</h2>
              <p className="text-gray-700 mb-4">
                作为国家级非物质文化遗产掐丝珐琅技艺的重要传承基地，聆花文化拥有最纯正、最原汁原味的传统工艺传承。
              </p>
              <div className="space-y-6 mt-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary text-lg font-bold">01</span>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-bold text-secondary mb-2">顶尖传承团队</h3>
                    <p className="text-gray-700">
                      聆花文化汇聚了5位国家级非遗传承人、12位省级传承人，形成了系统完整的技艺传承体系，确保每一道工序都能按照最传统、最正宗的方式进行。
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary text-lg font-bold">02</span>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-bold text-secondary mb-2">传统工艺标准</h3>
                    <p className="text-gray-700">
                      聆花文化参与制定了《掐丝珐琅工艺标准》等3项国家标准和行业标准，是行业内技艺规范的重要制定者，确保传统工艺的规范化传承。
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary text-lg font-bold">03</span>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-bold text-secondary mb-2">工艺传承体系</h3>
                    <p className="text-gray-700">
                      建立了"掐丝珐琅艺术数字资源库"，系统记录整理传统工艺技法，并形成了"师徒传承+现代教育"相结合的人才培养体系，确保传统工艺的活态传承。
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/advantage-heritage.jpg"
                alt="聆花文化传承实力"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 创新能力 */}
      <section className="py-20 bg-cream">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/advantage-innovation.jpg"
                alt="聆花文化创新能力"
                fill
                className="object-cover"
              />
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-secondary mb-6">创新能力</h2>
              <p className="text-gray-700 mb-4">
                在传承传统的基础上，聆花文化不断探索创新，将古老工艺与现代设计、科技应用相结合，开拓了掐丝珐琅艺术的全新可能性。
              </p>
              <div className="space-y-6 mt-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary text-lg font-bold">01</span>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-bold text-secondary mb-2">创新研发中心</h3>
                    <p className="text-gray-700">
                      设立专业的"掐丝珐琅艺术创新研发中心"，拥有30人的研发团队，每年投入销售额8%用于技术创新与产品研发，已获得32项相关专利。
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary text-lg font-bold">02</span>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-bold text-secondary mb-2">跨界创新合作</h3>
                    <p className="text-gray-700">
                      与清华大学、中央美术学院等高校建立产学研合作，同时与时尚、建筑、数字艺术等领域跨界合作，不断拓展掐丝珐琅艺术的表现形式与应用场景。
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary text-lg font-bold">03</span>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-bold text-secondary mb-2">技艺创新突破</h3>
                    <p className="text-gray-700">
                      成功开发了"微缩掐丝"、"高浮雕掐丝"、"透明釉掐丝"等10余项新技法，突破了传统工艺的表现局限，为掐丝珐琅艺术注入了新的活力。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 团队实力 */}
      <section className="py-20 bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-secondary mb-6">团队实力</h2>
              <p className="text-gray-700 mb-4">
                聆花文化拥有一支技艺精湛、创意丰富、专业互补的精英团队，为品牌的持续创新与发展提供源源不断的动力。
              </p>
              <div className="space-y-6 mt-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary text-lg font-bold">01</span>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-bold text-secondary mb-2">多元化团队结构</h3>
                    <p className="text-gray-700">
                      聆花文化团队由传统工艺大师、现代设计师、文化研究者、市场营销专家等不同领域的专业人才组成，实现了传统与现代、工艺与市场的完美融合。
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary text-lg font-bold">02</span>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-bold text-secondary mb-2">专业工艺团队</h3>
                    <p className="text-gray-700">
                      拥有百余名专业掐丝珐琅艺术工艺师，平均从业经验超过15年，其中6位获评"中国工艺美术大师"，10余位获评省市级工艺美术大师。
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary text-lg font-bold">03</span>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-bold text-secondary mb-2">创意设计团队</h3>
                    <p className="text-gray-700">
                      汇聚了20余位国内外知名设计院校毕业的优秀设计师，平均年龄不到35岁，为传统工艺注入新鲜的创意与当代审美，打造兼具文化深度与现代感的产品。
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/advantage-team.jpg"
                alt="聆花文化团队实力"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 影响力 */}
      <section className="py-20 bg-cream">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/advantage-influence.jpg"
                alt="聆花文化品牌影响力"
                fill
                className="object-cover"
              />
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-secondary mb-6">品牌影响力</h2>
              <p className="text-gray-700 mb-4">
                经过多年发展，聆花文化已成为掐丝珐琅艺术领域的标杆品牌，拥有广泛的社会影响力与文化认可度。
              </p>
              <div className="space-y-6 mt-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary text-lg font-bold">01</span>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-bold text-secondary mb-2">国礼品牌地位</h3>
                    <p className="text-gray-700">
                      聆花文化多件作品被选为国家礼品赠送外国元首，是中国传统文化"走出去"的重要名片，展现了中国工艺的精湛与魅力。
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary text-lg font-bold">02</span>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-bold text-secondary mb-2">博物馆认可</h3>
                    <p className="text-gray-700">
                      聆花文化作品被中国国家博物馆、故宫博物院等15家国内外重要博物馆收藏，是对品牌艺术价值与文化意义的高度认可。
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary text-lg font-bold">03</span>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-bold text-secondary mb-2">社会文化影响</h3>
                    <p className="text-gray-700">
                      通过"掐丝珐琅进校园"、"非遗展览"等公益活动，累计覆盖受众超过500万人，为传统工艺的传播与振兴作出了积极贡献。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-secondary text-white">
        <div className="container-wide text-center">
          <h2 className="text-3xl font-bold mb-6">成为聆花文化的合作伙伴</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/80">
            聆花文化期待与您携手，共同传承与创新中国非物质文化遗产，创造更多的文化价值
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white">
              <Link href="/gallery">浏览作品</Link>
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
