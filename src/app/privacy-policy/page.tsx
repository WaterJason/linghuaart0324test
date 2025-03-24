import { Metadata } from "next";
import { HeroBanner } from "@/components/ui/hero-banner";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "隐私政策 | 聆花文化",
  description: "广州聆花文化传播有限公司隐私政策声明，保护您的个人信息安全",
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen">
      <HeroBanner
        title="隐私政策"
        subtitle="我们珍视您的信任与隐私，如同匠人珍视每一件艺术品"
        className="bg-gradient-to-r from-secondary/90 to-secondary"
        align="center"
      />
      
      <Container className="py-16 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            <section className="prose prose-lg dark:prose-invert max-w-none">
              <div className="relative mb-12">
                <div className="absolute -left-4 top-0 h-full w-1 bg-primary/20 rounded"></div>
                <h2 className="text-3xl font-bold mb-6 text-secondary scroll-m-20 border-b pb-2 first:mt-0">隐私政策概述</h2>
                <p className="text-secondary/80 leading-7">
                  欢迎访问广州聆花文化传播有限公司的网站。我们重视您的隐私，并致力于保护您提供给我们的个人信息。本隐私政策阐明了我们如何收集、使用、披露和保护您的信息，犹如珐琅艺术中细腻的工艺过程，每一步都力求完美与尊重。
                </p>
              </div>

              <div className="relative mb-12">
                <div className="absolute -left-4 top-0 h-full w-1 bg-primary/20 rounded"></div>
                <h2 className="text-3xl font-bold mb-6 text-secondary scroll-m-20 border-b pb-2 first:mt-0">信息收集</h2>
                <p className="text-secondary/80 leading-7">
                  如同掐丝珐琅工艺中精心选取的每一种材料，我们谨慎收集以下信息：
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4 text-secondary/80">
                  <li><span className="font-medium">基本信息</span>：当您与我们联系或订购产品时，我们可能收集您的姓名、邮箱地址、电话号码和邮寄地址。</li>
                  <li><span className="font-medium">浏览信息</span>：我们自动收集有关您如何访问和使用我们网站的信息，包括您的IP地址、浏览器类型、访问时间等。</li>
                  <li><span className="font-medium">互动信息</span>：当您参与调查、比赛或在社交媒体上与我们互动时提供的信息。</li>
                </ul>
              </div>

              <div className="relative mb-12">
                <div className="absolute -left-4 top-0 h-full w-1 bg-primary/20 rounded"></div>
                <h2 className="text-3xl font-bold mb-6 text-secondary scroll-m-20 border-b pb-2 first:mt-0">信息使用</h2>
                <p className="text-secondary/80 leading-7">
                  我们使用您的信息的方式如同艺术家创作绝美的珐琅作品，每一笔都有其用意：
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4 text-secondary/80">
                  <li>提供、维护和改进我们的产品和服务</li>
                  <li>处理和完成您的交易</li>
                  <li>向您发送关于我们产品、服务和活动的信息</li>
                  <li>回应您的询问和请求</li>
                  <li>分析和理解客户行为，以改进我们的网站和服务</li>
                </ul>
              </div>

              <div className="relative mb-12">
                <div className="absolute -left-4 top-0 h-full w-1 bg-primary/20 rounded"></div>
                <h2 className="text-3xl font-bold mb-6 text-secondary scroll-m-20 border-b pb-2 first:mt-0">信息保护</h2>
                <p className="text-secondary/80 leading-7">
                  我们像保护珍贵的珐琅艺术品一样保护您的个人信息，采用行业标准的安全措施防止未经授权的访问、披露或滥用。我们定期审查我们的安全程序，确保您的信息得到适当保护。
                </p>
              </div>

              <div className="relative mb-12">
                <div className="absolute -left-4 top-0 h-full w-1 bg-primary/20 rounded"></div>
                <h2 className="text-3xl font-bold mb-6 text-secondary scroll-m-20 border-b pb-2 first:mt-0">第三方服务</h2>
                <p className="text-secondary/80 leading-7">
                  我们的网站可能包含指向第三方网站的链接或使用第三方服务。这些第三方有自己的隐私政策，我们不对这些政策负责。我们建议您阅读您访问的任何网站的隐私政策。
                </p>
              </div>

              <div className="relative mb-12">
                <div className="absolute -left-4 top-0 h-full w-1 bg-primary/20 rounded"></div>
                <h2 className="text-3xl font-bold mb-6 text-secondary scroll-m-20 border-b pb-2 first:mt-0">您的权利</h2>
                <p className="text-secondary/80 leading-7">
                  如同每件艺术品都有其独特价值，您对自己的个人信息拥有重要权利：
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4 text-secondary/80">
                  <li>访问和更新您的个人信息</li>
                  <li>选择退出营销通讯</li>
                  <li>要求删除您的个人信息（在法律允许的范围内）</li>
                </ul>
              </div>

              <div className="relative mb-12">
                <div className="absolute -left-4 top-0 h-full w-1 bg-primary/20 rounded"></div>
                <h2 className="text-3xl font-bold mb-6 text-secondary scroll-m-20 border-b pb-2 first:mt-0">政策更新</h2>
                <p className="text-secondary/80 leading-7">
                  我们可能会不时更新此隐私政策。当我们进行重大更改时，我们将在网站上发布通知。我们鼓励您定期查看此页面，了解最新的隐私实践。
                </p>
              </div>

              <div className="relative mb-12">
                <div className="absolute -left-4 top-0 h-full w-1 bg-primary/20 rounded"></div>
                <h2 className="text-3xl font-bold mb-6 text-secondary scroll-m-20 border-b pb-2 first:mt-0">联系我们</h2>
                <p className="text-secondary/80 leading-7">
                  如果您对我们的隐私政策有任何问题或疑虑，请通过以下方式联系我们：
                </p>
                <div className="mt-4">
                  <p className="text-secondary/80">邮箱：contact@linghuaart.com</p>
                  <p className="text-secondary/80">电话：13928882508 (Jason)</p>
                  <p className="text-secondary/80">地址：广州市番禺区大学城岭南印象园.聆花掐丝珐琅馆</p>
                </div>
              </div>
            </section>

            <div className="border-t pt-8 text-center">
              <p className="text-secondary/60 italic">
                本隐私政策最后更新于：{new Date().toLocaleDateString('zh-CN', {year: 'numeric', month: 'long', day: 'numeric'})}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
} 