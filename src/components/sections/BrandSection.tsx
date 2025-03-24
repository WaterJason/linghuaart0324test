"use client";

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function BrandSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container-wide">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title">品牌介绍</h2>
            <p className="section-subtitle mx-auto">
              在社会高度发达的今天，随着人们生活水平的提高和审美素养的提升，让传统技艺与现代生活相融合成为时代呼唤。
            </p>
          </motion.div>
        </div>

        <Tabs defaultValue="brand" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-muted/50">
              <TabsTrigger value="brand" className="text-sm sm:text-base px-4 py-2">品牌理念</TabsTrigger>
              <TabsTrigger value="founder" className="text-sm sm:text-base px-4 py-2">创始人</TabsTrigger>
              <TabsTrigger value="journey" className="text-sm sm:text-base px-4 py-2">品牌历程</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="brand" className="mt-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="aspect-video relative rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/brand-mission.jpg"
                    alt="聆花文化品牌理念"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-secondary">我们的使命</h3>
                <p className="text-gray-700">
                  传承创新非遗，讲好中国故事
                </p>

                <h3 className="text-2xl font-bold text-secondary">我们的愿景</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-3">
                  <li>做最懂东方美学的公司</li>
                  <li>做最有温度的非遗产品</li>
                  <li>做最受信赖的掐丝珐琅艺术品牌</li>
                </ul>

                <div className="pt-4">
                  <Button asChild className="bg-secondary hover:bg-secondary/90 text-white">
                    <Link href="/about/brand-concept">了解更多</Link>
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="founder" className="mt-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 order-2 lg:order-1">
                <h3 className="text-2xl font-bold text-secondary">非遗传承与创新：聆花</h3>
                <p className="text-gray-700">
                  聆花，本名邓汕，掐丝珐琅艺术传承者与创新者，聆花文化品牌创始人。她曾远赴西藏圣地，在大昭寺师从桑培大师精研唐卡艺术，将唐卡绘画与景泰蓝工艺完美融合，开创出兼具中华风范和国际视野的新颖掐丝珐琅艺术流派。
                </p>

                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>16年专注掐丝珐琅艺术研究与创新</li>
                  <li>多次获得国家级工艺美术大赛金奖</li>
                  <li>开创"固釉掐丝珐琅"新工艺，获国家专利</li>
                  <li>建立现代掐丝珐琅工艺体系，推动非遗创新发展</li>
                  <li>举办100+场非遗传承工作坊</li>
                  <li>培养50+位青年掐丝珐琅艺术家</li>
                </ul>

                <div className="pt-4">
                  <Button asChild className="bg-secondary hover:bg-secondary/90 text-white">
                    <Link href="/about/founder">了解创始人</Link>
                  </Button>
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <div className="aspect-square relative rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/founder.jpg"
                    alt="创始人聆花"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="journey" className="mt-0">
            <div className="space-y-8">
              <div className="relative">
                <div className="absolute left-4 h-full w-0.5 bg-primary/20"></div>

                <div className="space-y-12">
                  <div className="relative pl-10">
                    <div className="absolute left-0 top-1 h-8 w-8 rounded-full bg-primary flex items-center justify-center text-white font-bold">1</div>
                    <div className="bg-cream p-6 rounded-lg shadow-sm">
                      <h3 className="text-xl font-semibold text-secondary mb-2">2006 - 艺术启蒙</h3>
                      <p className="text-gray-700">聆花远赴西藏圣地，在拉萨大昭寺拜师学习传统唐卡绘画</p>
                    </div>
                  </div>

                  <div className="relative pl-10">
                    <div className="absolute left-0 top-1 h-8 w-8 rounded-full bg-primary flex items-center justify-center text-white font-bold">2</div>
                    <div className="bg-cream p-6 rounded-lg shadow-sm">
                      <h3 className="text-xl font-semibold text-secondary mb-2">2012 - 非遗融合</h3>
                      <p className="text-gray-700">开创性的将掐丝珐琅技艺与唐卡绘画融合，创作掐丝珐琅唐卡</p>
                    </div>
                  </div>

                  <div className="relative pl-10">
                    <div className="absolute left-0 top-1 h-8 w-8 rounded-full bg-primary flex items-center justify-center text-white font-bold">3</div>
                    <div className="bg-cream p-6 rounded-lg shadow-sm">
                      <h3 className="text-xl font-semibold text-secondary mb-2">2017 - 创立聆花文化</h3>
                      <p className="text-gray-700">传承与创新的非遗掐丝珐琅艺术</p>
                    </div>
                  </div>

                  <div className="relative pl-10">
                    <div className="absolute left-0 top-1 h-8 w-8 rounded-full bg-primary flex items-center justify-center text-white font-bold">4</div>
                    <div className="bg-cream p-6 rounded-lg shadow-sm">
                      <h3 className="text-xl font-semibold text-secondary mb-2">2020 - 文化融合</h3>
                      <p className="text-gray-700">与国潮品牌东来也合作，创作秘藏行者、大贵等国潮作品</p>
                    </div>
                  </div>

                  <div className="relative pl-10">
                    <div className="absolute left-0 top-1 h-8 w-8 rounded-full bg-primary flex items-center justify-center text-white font-bold">5</div>
                    <div className="bg-cream p-6 rounded-lg shadow-sm">
                      <h3 className="text-xl font-semibold text-secondary mb-2">2023 - 手作艺术空间开业</h3>
                      <p className="text-gray-700">全国第一家掐丝珐琅馆正式启用</p>
                    </div>
                  </div>

                  <div className="relative pl-10">
                    <div className="absolute left-0 top-1 h-8 w-8 rounded-full bg-primary flex items-center justify-center text-white font-bold">6</div>
                    <div className="bg-cream p-6 rounded-lg shadow-sm">
                      <h3 className="text-xl font-semibold text-secondary mb-2">2024 - 文化出海</h3>
                      <p className="text-gray-700">跨时空与毕加索联名《梦》，融合东西方艺术精髓</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-center pt-8">
                <Button asChild className="bg-secondary hover:bg-secondary/90 text-white">
                  <Link href="/about/journey">查看完整历程</Link>
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
