import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import Layout from '@/components/layout/Layout';
import ContactForm from '@/components/sections/ContactForm';

export const metadata: Metadata = {
  title: '联系我们 | 聆花文化 - 掐丝珐琅艺术传承者',
  description: '欢迎联系聆花文化，了解掐丝珐琅艺术定制、合作、参观等信息，期待与您交流。',
};

// 使用函数组件而非服务器组件来确保静态导出正常工作
export default function ContactPage() {
  return (
    <Layout>
      {/* Hero Banner */}
      <section className="relative pt-32 pb-20 bg-secondary text-white overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/images/gallery-6.jpg"
            alt="联系聆花文化"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-secondary/70" />
        </div>

        <div className="container-wide relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">联系我们</h1>
            <p className="text-xl mb-8 text-white/80">
              无论您是艺术爱好者、收藏家，还是寻求合作的机构，我们期待与您沟通交流
            </p>
          </div>
        </div>
      </section>

      {/* 联系内容 */}
      <section className="py-16 bg-cream">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* 联系表单 - 使用新组件 */}
            <ContactForm />

            {/* 联系信息 */}
            <div>
              <h2 className="text-2xl font-bold text-secondary mb-6">联系方式</h2>
              <p className="text-gray-700 mb-8">
                您可以通过以下方式直接联系我们，或在工作时间莅临参观
              </p>

              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="text-primary" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-secondary mb-1">艺术馆地址</h3>
                    <p className="text-gray-700 mb-1">北京市朝阳区艺术中心A座202室</p>
                    <p className="text-gray-700">工作时间：周二至周日 10:00-18:00</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="text-primary" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-secondary mb-1">电话咨询</h3>
                    <p className="text-gray-700 mb-1">客服热线：<a href="tel:+86-10-8888-8888" className="text-primary hover:underline">+86 10 8888 8888</a></p>
                    <p className="text-gray-700">工作时间：周一至周五 9:00-18:00</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="text-primary" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-secondary mb-1">电子邮件</h3>
                    <p className="text-gray-700 mb-1">客户服务：<a href="mailto:contact@linghuaculture.com" className="text-primary hover:underline">contact@linghuaculture.com</a></p>
                    <p className="text-gray-700">商务合作：<a href="mailto:business@linghuaculture.com" className="text-primary hover:underline">business@linghuaculture.com</a></p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="text-primary" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-secondary mb-1">社交媒体</h3>
                    <div className="flex space-x-4 mt-2">
                      <a href="#" className="text-gray-600 hover:text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                        </svg>
                      </a>
                      <a href="#" className="text-gray-600 hover:text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                        </svg>
                      </a>
                      <a href="#" className="text-gray-600 hover:text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                        </svg>
                      </a>
                      <a href="#" className="text-gray-600 hover:text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                          <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* 工作室地图 */}
              <div className="mt-12">
                <h3 className="text-lg font-semibold text-secondary mb-4">艺术馆位置</h3>
                <div className="h-[300px] rounded-lg overflow-hidden bg-gray-200 relative">
                  <Image
                    src="/images/gallery-hero.jpg"
                    alt="艺术馆位置"
                    fill
                    className="object-cover opacity-30"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <p className="text-gray-700 mb-2">地图加载中...</p>
                      <Button variant="outline" size="sm">
                        查看完整地图
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 常见问题 */}
      <section className="py-16 bg-white">
        <div className="container-wide">
          <h2 className="text-3xl font-bold text-secondary mb-12 text-center">常见问题</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-cream p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-secondary mb-4">如何预约参观艺术馆？</h3>
              <p className="text-gray-700">
                您可以通过网站联系表单、电话或邮件预约参观艺术馆。请提前3-5个工作日预约，我们将安排专业导览人员为您讲解掐丝珐琅艺术的历史与工艺特点。
              </p>
            </div>

            <div className="bg-cream p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-secondary mb-4">如何定制掐丝珐琅艺术品？</h3>
              <p className="text-gray-700">
                我们提供专业的掐丝珐琅艺术品定制服务。您可以通过联系表单或电话咨询，描述您的需求和预算，我们的设计师将与您沟通细节并提供方案和报价。
              </p>
            </div>

            <div className="bg-cream p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-secondary mb-4">商务合作流程是怎样的？</h3>
              <p className="text-gray-700">
                商务合作请通过邮件至business@linghuaculture.com提出申请，并附上合作意向书。我们会在5个工作日内回复并安排进一步洽谈。我们欢迎品牌联名、艺术展览、文化推广等多种形式的合作。
              </p>
            </div>

            <div className="bg-cream p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-secondary mb-4">是否提供掐丝珐琅工艺培训？</h3>
              <p className="text-gray-700">
                是的，我们定期举办掐丝珐琅工艺体验和培训课程。初级体验课程每周末开设，专业技艺培训则需要提前报名。您可以在新闻中心关注最新课程信息，或通过联系表单咨询详情。
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
