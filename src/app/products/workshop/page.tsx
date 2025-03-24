import Layout from '@/components/layout/Layout';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export const metadata: Metadata = {
  title: '聆花手作馆 | 聆花文化 - 掐丝珐琅艺术传承者',
  description: '聆花文化手作馆提供掐丝珐琅工艺体验与非遗文化教育，包括DIY工坊、技艺培训、工艺展示等，感受千年非遗魅力。',
};

interface Workshop {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  duration: string;
  price: string;
  suitableFor: string;
  featured: boolean;
}

const workshopActivities: Workshop[] = [
  {
    id: 'diy001',
    name: '微型掐丝珐琅摆件DIY',
    category: 'diy',
    description: '体验传统掐丝珐琅工艺的基础技法，在专业导师指导下完成一件小型掐丝珐琅摆件，感受非遗魅力，带走专属于您的手作艺术品。',
    image: '/images/workshop-diy1.jpg',
    duration: '约2小时',
    price: '398元/人',
    suitableFor: '8岁以上，无经验可参与',
    featured: true
  },
  {
    id: 'diy002',
    name: '掐丝珐琅首饰DIY',
    category: 'diy',
    description: '学习掐丝珐琅微型制作技法，亲手制作一件精美的掐丝珐琅首饰（可选项链/耳环/胸针），将传统工艺与现代时尚结合。',
    image: '/images/workshop-diy2.jpg',
    duration: '约3小时',
    price: '598元/人',
    suitableFor: '12岁以上，无经验可参与',
    featured: true
  },
  {
    id: 'diy003',
    name: '情侣/闺蜜掐丝珐琅对杯DIY',
    category: 'diy',
    description: '双人协作完成一对掐丝珐琅茶杯，融入个性化设计元素，记录美好时光，适合情侣、闺蜜、亲子共同参与。',
    image: '/images/workshop-diy3.jpg',
    duration: '约3小时',
    price: '998元/对',
    suitableFor: '15岁以上，无经验可参与',
    featured: false
  },
  {
    id: 'course001',
    name: '掐丝珐琅艺术入门课程',
    category: 'course',
    description: '系统学习掐丝珐琅艺术基础知识与技法，包括5次课程，完成3件作品，获得掐丝珐琅艺术入门证书。',
    image: '/images/workshop-course1.jpg',
    duration: '5次课，每次3小时',
    price: '3,980元/人',
    suitableFor: '16岁以上，热爱传统工艺',
    featured: true
  },
  {
    id: 'course002',
    name: '掐丝珐琅创新设计工作坊',
    category: 'course',
    description: '面向设计师与艺术爱好者，学习如何将传统掐丝珐琅工艺与现代设计结合，开发创新产品，由资深设计师与工艺大师共同授课。',
    image: '/images/workshop-course2.jpg',
    duration: '3次课，每次4小时',
    price: '4,680元/人',
    suitableFor: '设计相关专业背景人士',
    featured: false
  },
  {
    id: 'course003',
    name: '亲子掐丝珐琅文化体验课',
    category: 'course',
    description: '专为家庭设计的非遗文化体验课程，通过生动有趣的方式了解掐丝珐琅历史与工艺，亲子共同完成简易作品，增进亲子关系。',
    image: '/images/workshop-course3.jpg',
    duration: '2小时',
    price: '598元/组（1大1小）',
    suitableFor: '5-12岁儿童及家长',
    featured: false
  },
  {
    id: 'tour001',
    name: '掐丝珐琅艺术工坊参观',
    category: 'tour',
    description: '参观聆花文化掐丝珐琅艺术工坊，近距离观看艺术大师制作过程，了解传统工艺流程与文化内涵，感受非遗魅力。',
    image: '/images/workshop-tour1.jpg',
    duration: '1小时',
    price: '88元/人',
    suitableFor: '所有年龄段，对传统工艺感兴趣的人士',
    featured: true
  },
  {
    id: 'tour002',
    name: '掐丝珐琅艺术主题团建',
    category: 'tour',
    description: '为企业量身定制的非遗主题团建活动，包含工艺讲解、大师示范、简易DIY体验等环节，寓教于乐，增强团队凝聚力。',
    image: '/images/workshop-tour2.jpg',
    duration: '3-4小时',
    price: '398元/人（10人起订）',
    suitableFor: '企业团队',
    featured: false
  }
];

export default function WorkshopPage() {
  return (
    <Layout>
      {/* Hero Banner */}
      <section className="relative pt-32 pb-20 bg-secondary text-white overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/images/product-workshop.jpg"
            alt="聆花手作馆"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-secondary/70" />
        </div>

        <div className="container-wide relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">聆花手作馆</h1>
            <p className="text-xl mb-8 text-white/80">
              体验千年非遗魅力，亲手创作独一无二的掐丝珐琅艺术品
            </p>
          </div>
        </div>
      </section>

      {/* 手作馆介绍 */}
      <section className="py-20 bg-cream">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-secondary mb-6">手作馆介绍</h2>
              <p className="text-gray-700 mb-4">
                聆花手作馆是聆花文化打造的掐丝珐琅艺术体验与教育平台，致力于通过沉浸式体验让更多人了解、感受和传承这一国家级非物质文化遗产。
              </p>
              <p className="text-gray-700 mb-4">
                在这里，您可以参与丰富多彩的DIY工坊，在专业导师的指导下，亲手制作掐丝珐琅艺术品；可以参加系统的技艺培训课程，深入学习传统工艺；还可以参观艺术工坊，近距离观摩艺术大师的创作过程。
              </p>
              <p className="text-gray-700 mb-4">
                聆花手作馆为不同年龄段、不同经验水平的人群提供了丰富的体验选择，无论您是初次接触掐丝珐琅艺术的好奇者，还是希望系统学习的爱好者，都能在这里找到适合自己的活动。
              </p>
              <div className="flex flex-wrap gap-3 mt-6">
                {['DIY体验', '技艺培训', '文化教育', '亲子活动', '团队建设'].map((tag, index) => (
                  <span key={index} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/workshop-intro.jpg"
                alt="聆花手作馆介绍"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 课程与活动 */}
      <section className="py-20 bg-white">
        <div className="container-wide">
          <h2 className="text-3xl font-bold text-secondary mb-4 text-center">课程与活动</h2>
          <p className="text-xl text-gray-700 mb-16 max-w-3xl mx-auto text-center">
            丰富多彩的非遗体验活动，让传统工艺走进生活
          </p>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full md:w-[500px] grid-cols-3 mx-auto mb-12">
              <TabsTrigger value="all">全部活动</TabsTrigger>
              <TabsTrigger value="diy">DIY工坊</TabsTrigger>
              <TabsTrigger value="course">技艺课程</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {workshopActivities.map((activity) => (
                  <WorkshopCard key={activity.id} workshop={activity} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="diy" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {workshopActivities.filter(activity => activity.category === 'diy').map((activity) => (
                  <WorkshopCard key={activity.id} workshop={activity} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="course" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {workshopActivities.filter(activity => activity.category === 'course').map((activity) => (
                  <WorkshopCard key={activity.id} workshop={activity} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* 体验特色 */}
      <section className="py-20 bg-cream">
        <div className="container-wide">
          <h2 className="text-3xl font-bold text-secondary mb-12 text-center">体验特色</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-white hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-primary text-xl font-bold">01</span>
                </div>
                <h3 className="text-xl font-bold text-secondary mb-2">大师指导</h3>
                <p className="text-gray-700">
                  所有活动均由国家级非遗传承人或资深工艺师指导，确保您能学习到最正宗的掐丝珐琅技艺，获得专业、权威的非遗体验。
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-primary text-xl font-bold">02</span>
                </div>
                <h3 className="text-xl font-bold text-secondary mb-2">小班授课</h3>
                <p className="text-gray-700">
                  每个班次严格控制人数，确保每位学员都能得到充分的指导与关注，DIY工坊最多8人一班，技艺课程最多6人一班，提供更优质的学习体验。
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-primary text-xl font-bold">03</span>
                </div>
                <h3 className="text-xl font-bold text-secondary mb-2">全套材料</h3>
                <p className="text-gray-700">
                  我们提供专业级掐丝珐琅工艺材料与工具，确保您在创作过程中能够充分感受传统工艺的魅力，制作出精美的作品，并能将成品带回家。
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-primary text-xl font-bold">04</span>
                </div>
                <h3 className="text-xl font-bold text-secondary mb-2">文化传承</h3>
                <p className="text-gray-700">
                  每次体验活动不仅包含技艺学习，还融入丰富的文化知识讲解，让您在动手创作的同时，深入了解掐丝珐琅的历史渊源、文化内涵与艺术价值。
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 参与人群 */}
      <section className="py-20 bg-white">
        <div className="container-wide">
          <h2 className="text-3xl font-bold text-secondary mb-8 text-center">适合人群</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-cream p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-primary text-2xl font-bold">初</span>
              </div>
              <h3 className="text-xl font-bold text-secondary mb-4 text-center">初次体验者</h3>
              <p className="text-gray-700">
                对传统工艺感兴趣，希望了解掐丝珐琅艺术，体验非遗魅力的朋友。我们的DIY工坊与参观活动不需要任何经验基础，在专业指导下轻松完成体验。
              </p>
            </div>

            <div className="bg-cream p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-primary text-2xl font-bold">亲</span>
              </div>
              <h3 className="text-xl font-bold text-secondary mb-4 text-center">亲子家庭</h3>
              <p className="text-gray-700">
                希望通过有意义的文化活动增进亲子关系，让孩子了解传统文化与手工艺术的家庭。我们的亲子课程设计寓教于乐，适合不同年龄段的儿童参与。
              </p>
            </div>

            <div className="bg-cream p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-primary text-2xl font-bold">爱</span>
              </div>
              <h3 className="text-xl font-bold text-secondary mb-4 text-center">艺术爱好者</h3>
              <p className="text-gray-700">
                对传统工艺有浓厚兴趣，希望系统学习掐丝珐琅技艺的艺术爱好者。我们的技艺培训课程从基础到进阶，满足不同层次的学习需求。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 预约流程 */}
      <section className="py-20 bg-cream">
        <div className="container-wide">
          <h2 className="text-3xl font-bold text-secondary mb-8 text-center">预约流程</h2>

          <div className="relative">
            <div className="hidden md:block absolute left-0 top-1/2 w-full h-1 bg-primary/20 -translate-y-1/2 z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-6 relative">
                  <span className="text-xl font-bold">01</span>
                </div>
                <h3 className="text-lg font-bold text-secondary mb-4">选择活动</h3>
                <p className="text-gray-700">
                  浏览我们的课程与活动，选择适合您的体验项目，了解详细内容、时长和费用。
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-xl font-bold">02</span>
                </div>
                <h3 className="text-lg font-bold text-secondary mb-4">在线预约</h3>
                <p className="text-gray-700">
                  通过官网、微信公众号或电话联系我们，提前预约您想参加的活动时间。
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-xl font-bold">03</span>
                </div>
                <h3 className="text-lg font-bold text-secondary mb-4">支付订金</h3>
                <p className="text-gray-700">
                  支付30%订金确认预约，剩余费用可在活动当天现场支付。
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-xl font-bold">04</span>
                </div>
                <h3 className="text-lg font-bold text-secondary mb-4">体验活动</h3>
                <p className="text-gray-700">
                  按预约时间到达聆花手作馆，我们的工作人员会为您提供专业指导与服务。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-secondary text-white">
        <div className="container-wide text-center">
          <h2 className="text-3xl font-bold mb-6">预约非遗体验，感受传统工艺魅力</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/80">
            欢迎个人、家庭、团队前来预约，我们将为您提供专业、温馨、难忘的掐丝珐琅艺术体验
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white">
              <Link href="/contact">立即预约</Link>
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

function WorkshopCard({ workshop }: { workshop: Workshop }) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-64">
        <Image
          src={workshop.image}
          alt={workshop.name}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
        />
        {workshop.featured && (
          <Badge className="absolute top-3 right-3 bg-primary hover:bg-primary">推荐</Badge>
        )}
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold text-secondary mb-2 line-clamp-1">{workshop.name}</h3>
        <p className="text-gray-700 mb-4 line-clamp-3">{workshop.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          <Badge variant="outline" className="bg-primary/5 text-primary hover:bg-primary/10">
            {workshop.category === 'diy' ? 'DIY工坊' :
             workshop.category === 'course' ? '技艺课程' : '参观体验'}
          </Badge>
        </div>
        <div className="space-y-2 text-sm text-gray-600">
          <div className="flex justify-between">
            <span>时长：{workshop.duration}</span>
            <span className="font-bold text-primary">{workshop.price}</span>
          </div>
          <div>适合人群：{workshop.suitableFor}</div>
        </div>
      </CardContent>
    </Card>
  );
}
