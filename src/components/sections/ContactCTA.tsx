"use client";

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { PhoneCall, Mail, MapPin } from 'lucide-react';

export default function ContactCTA() {
  return (
    <section className="py-24 bg-secondary text-white relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-primary blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-gold blur-3xl"></div>
      </div>

      <div className="container-wide relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6 text-white">联系我们</h2>
            <p className="text-lg text-white/80 mb-8 max-w-lg">
              无论您是对我们的艺术作品感兴趣，还是想了解更多关于掐丝珐琅工艺的信息，或者您有定制需求，我们都很乐意与您沟通。
            </p>

            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-primary mr-4 mt-1" />
                <div>
                  <p className="font-medium">展览中心</p>
                  <p className="text-white/80">广州｜番禺区大学城岭南印象园.聆花掐丝珐琅馆</p>
                </div>
              </div>

              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-primary mr-4 mt-1" />
                <div>
                  <p className="font-medium">深圳展厅</p>
                  <p className="text-white/80">深圳｜南山区南头古城西集.景之蓝</p>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="h-6 w-6 text-primary mr-4 mt-1" />
                <div>
                  <p className="font-medium">邮箱</p>
                  <p className="text-white/80">contact@linghuaart.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <PhoneCall className="h-6 w-6 text-primary mr-4 mt-1" />
                <div>
                  <p className="font-medium">VIP热线</p>
                  <p className="text-white/80">Jason 13928882508</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <Button asChild className="bg-primary hover:bg-primary/90 text-white">
                <Link href="/contact">了解详情</Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/10 backdrop-blur-sm p-8 rounded-xl shadow-lg"
          >
            <h3 className="text-2xl font-bold mb-6 text-white">品牌理念</h3>
            <div className="space-y-6">
              <div className="bg-white/10 p-6 rounded-lg">
                <h4 className="text-xl font-medium text-primary mb-2">匠心传承</h4>
                <p className="text-white/80">
                  传承千年技艺，匠心守护非遗文化的薪火相传
                </p>
              </div>

              <div className="bg-white/10 p-6 rounded-lg">
                <h4 className="text-xl font-medium text-primary mb-2">美育生活</h4>
                <p className="text-white/80">
                  将东方美学融入现代生活，让传统艺术散发新的光彩
                </p>
              </div>

              <div className="bg-white/10 p-6 rounded-lg">
                <h4 className="text-xl font-medium text-primary mb-2">创新发展</h4>
                <p className="text-white/80">
                  创新工艺与设计，让非遗文化在当代焕发生机
                </p>
              </div>
            </div>

            <div className="text-center mt-8 text-white/60 italic">
              "Heritage of Craftsmanship, Beauty in Life"
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
