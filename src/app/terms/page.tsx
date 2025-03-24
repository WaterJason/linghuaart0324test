import { Metadata } from "next";
import { HeroBanner } from "@/components/ui/hero-banner";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "使用条款 | 聆花文化",
  description: "广州聆花文化传播有限公司官方网站使用条款与规定",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen">
      <HeroBanner
        title="使用条款"
        subtitle="如同匠人精雕细琢每一件珐琅作品，我们精心制定以下条款以保护您的权益"
        className="bg-gradient-to-br from-secondary/90 via-secondary to-secondary/80"
        align="center"
      />
      
      <Container className="py-16 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            <section className="prose prose-lg dark:prose-invert max-w-none">
              <div className="relative mb-12">
                <div className="absolute -left-4 top-0 h-full w-1 bg-primary/20 rounded"></div>
                <h2 className="text-3xl font-bold mb-6 text-secondary scroll-m-20 border-b pb-2 first:mt-0">网站使用条款</h2>
                <p className="text-secondary/80 leading-7">
                  欢迎访问广州聆花文化传播有限公司的官方网站。本网站由广州聆花文化传播有限公司（以下简称"聆花文化"、"我们"或"本公司"）提供。请您在使用本网站前仔细阅读以下条款和条件。使用本网站即表示您接受这些条款和条件。
                </p>
                <p className="text-secondary/80 leading-7 mt-4">
                  如同掐丝珐琅艺术创作中的每一道工序都有其严谨的标准，我们制定这些条款是为了保障您的权益以及我们网站的正常运营。
                </p>
              </div>

              <div className="relative mb-12">
                <div className="absolute -left-4 top-0 h-full w-1 bg-primary/20 rounded"></div>
                <h2 className="text-3xl font-bold mb-6 text-secondary scroll-m-20 border-b pb-2 first:mt-0">知识产权</h2>
                <p className="text-secondary/80 leading-7">
                  如同珍贵的非物质文化遗产受到法律保护，本网站上的所有内容，包括但不限于文本、图像、图形、照片、音频、视频、标志、按钮图标、数字下载、数据编辑和软件，均为聆花文化或其内容提供商的财产，受中国和国际版权法的保护。
                </p>
                <p className="text-secondary/80 leading-7 mt-4">
                  未经聆花文化明确书面许可，您不得以任何方式使用、复制、复制、分发、传输、展示、出售、许可、修改、创建衍生作品或以其他方式利用本网站上的任何内容或服务，无论是全部还是部分，无论是商业目的还是非商业目的。
                </p>
              </div>

              <div className="relative mb-12">
                <div className="absolute -left-4 top-0 h-full w-1 bg-primary/20 rounded"></div>
                <h2 className="text-3xl font-bold mb-6 text-secondary scroll-m-20 border-b pb-2 first:mt-0">网站使用规范</h2>
                <p className="text-secondary/80 leading-7">
                  正如精湛的珐琅工艺需要遵循一定的规范，在使用本网站时，您同意：
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4 text-secondary/80">
                  <li>不会使用自动设备、程序、算法或方法，或任何类似或同等的手动程序访问、获取、复制或监控本网站的任何部分</li>
                  <li>不会以任何方式规避本网站可能使用的排除自动设备的结构，或干扰本网站正常运行</li>
                  <li>不会采取任何可能对网站施加不合理或不成比例的大负荷的行动</li>
                  <li>不会为任何商业目的复制、复制、分发、出售、转售或以其他方式利用本网站的任何部分</li>
                </ul>
              </div>

              <div className="relative mb-12">
                <div className="absolute -left-4 top-0 h-full w-1 bg-primary/20 rounded"></div>
                <h2 className="text-3xl font-bold mb-6 text-secondary scroll-m-20 border-b pb-2 first:mt-0">产品展示与描述</h2>
                <p className="text-secondary/80 leading-7">
                  我们努力确保网站上展示的所有产品信息准确无误。然而，如同珐琅制作工艺中的色彩可能因光线和观看角度而呈现不同效果，数字图像可能与实际产品存在细微差异。这些差异可能是由屏幕设置、分辨率或照明条件等因素引起的。
                </p>
                <p className="text-secondary/80 leading-7 mt-4">
                  我们不保证产品描述的准确性、完整性、可靠性、适时性或无错误性，也不保证网站无缺陷。如果您购买的产品与网站上的描述不符，您的唯一补救措施是根据我们的退货政策退回该产品。
                </p>
              </div>

              <div className="relative mb-12">
                <div className="absolute -left-4 top-0 h-full w-1 bg-primary/20 rounded"></div>
                <h2 className="text-3xl font-bold mb-6 text-secondary scroll-m-20 border-b pb-2 first:mt-0">外部链接</h2>
                <p className="text-secondary/80 leading-7">
                  本网站可能包含指向第三方网站的链接，这些链接仅为方便您而提供。聆花文化不控制或认可这些网站，也不负责这些网站的内容、隐私政策或做法。我们建议您查看任何此类第三方网站的条款和条件以及隐私政策。
                </p>
              </div>

              <div className="relative mb-12">
                <div className="absolute -left-4 top-0 h-full w-1 bg-primary/20 rounded"></div>
                <h2 className="text-3xl font-bold mb-6 text-secondary scroll-m-20 border-b pb-2 first:mt-0">免责声明</h2>
                <p className="text-secondary/80 leading-7">
                  本网站及其内容按"原样"提供，不附带任何明示或暗示的保证。在法律允许的最大范围内，聆花文化否认所有明示或暗示的保证，包括但不限于对适销性、特定用途适用性和非侵权性的暗示保证。
                </p>
                <p className="text-secondary/80 leading-7 mt-4">
                  聆花文化不保证本网站将不中断、及时、安全或无错误，也不保证使用本网站获得的结果准确或可靠，或者本网站上的缺陷将被纠正。
                </p>
              </div>

              <div className="relative mb-12">
                <div className="absolute -left-4 top-0 h-full w-1 bg-primary/20 rounded"></div>
                <h2 className="text-3xl font-bold mb-6 text-secondary scroll-m-20 border-b pb-2 first:mt-0">责任限制</h2>
                <p className="text-secondary/80 leading-7">
                  在法律允许的最大范围内，聆花文化及其供应商和服务提供商不对任何直接、间接、惩罚性、附带、特殊、结果性或惩戒性损害负责，包括但不限于利润、收入、数据或使用的损失，即使聆花文化已被告知此类损害的可能性。
                </p>
              </div>

              <div className="relative mb-12">
                <div className="absolute -left-4 top-0 h-full w-1 bg-primary/20 rounded"></div>
                <h2 className="text-3xl font-bold mb-6 text-secondary scroll-m-20 border-b pb-2 first:mt-0">条款变更</h2>
                <p className="text-secondary/80 leading-7">
                  如同珐琅艺术在传承中不断创新，我们可能会不时更新这些使用条款。当我们进行重大更改时，我们将在网站上发布通知。您继续使用本网站即表示您接受这些修改。
                </p>
              </div>

              <div className="relative mb-12">
                <div className="absolute -left-4 top-0 h-full w-1 bg-primary/20 rounded"></div>
                <h2 className="text-3xl font-bold mb-6 text-secondary scroll-m-20 border-b pb-2 first:mt-0">适用法律</h2>
                <p className="text-secondary/80 leading-7">
                  这些使用条款受中华人民共和国法律管辖和解释，不考虑冲突法原则。您同意广州市有管辖权的法院对与这些条款有关的任何争议拥有专属管辖权。
                </p>
              </div>

              <div className="relative mb-12">
                <div className="absolute -left-4 top-0 h-full w-1 bg-primary/20 rounded"></div>
                <h2 className="text-3xl font-bold mb-6 text-secondary scroll-m-20 border-b pb-2 first:mt-0">联系我们</h2>
                <p className="text-secondary/80 leading-7">
                  如果您对这些使用条款有任何问题或意见，请联系我们：
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
                本使用条款最后更新于：{new Date().toLocaleDateString('zh-CN', {year: 'numeric', month: 'long', day: 'numeric'})}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
} 