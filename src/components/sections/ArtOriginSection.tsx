"use client";

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ArtOriginSection() {
  return (
    <section className="py-24 bg-cream">
      <div className="container-wide">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title">艺术起源</h2>
            <p className="section-subtitle mx-auto">
              珐琅艺术自诞生之日起，是以取代贵重宝石，其延展出来的工艺-景泰蓝，以高贵典雅屹立于工艺美术之林，几百年来熠熠生辉。
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden"
          >
            <Image
              src="/images/art-origin.jpg"
              alt="掐丝珐琅艺术"
              fill
              className="object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-secondary">景泰蓝是什么？</h3>
            <p className="text-gray-700">
              景泰蓝，亦称"铜胎掐丝珐琅"，源自中国古代的掐丝珐琅工艺，已有600年历史。每一件景泰蓝作品需历经六大工艺、108道繁复工序。
            </p>
            <p className="text-gray-700">
              铜胎为骨，掐丝为筋，釉彩为魂，金饰为韵，其色彩浓丽、纹饰精美，历来为宫廷贵族所珍爱，象征尊贵与典雅。无蓝不成殿，有殿需尊蓝。
            </p>

            <div className="grid grid-cols-2 gap-4 py-2">
              <div className="bg-white p-4 rounded-md shadow-sm">
                <h4 className="font-semibold text-primary mb-2">皇家宫廷艺术</h4>
                <p className="text-sm text-gray-600">明清宫廷御用艺术，彰显皇家气度</p>
              </div>
              <div className="bg-white p-4 rounded-md shadow-sm">
                <h4 className="font-semibold text-primary mb-2">国家级非遗</h4>
                <p className="text-sm text-gray-600">2006年入选国家级非物质文化遗产名录</p>
              </div>
            </div>

            <div className="pt-4">
              <Button asChild className="bg-secondary hover:bg-secondary/90 text-white">
                <Link href="/art-origins">了解更多</Link>
              </Button>
            </div>
          </motion.div>
        </div>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6 order-2 md:order-1"
          >
            <h3 className="text-2xl font-bold text-secondary">当代掐丝珐琅艺术</h3>
            <p className="text-gray-700">
              当代掐丝珐琅艺术是一种结合传统工艺与现代艺术表现形式的非物质文化遗产，它起源于景泰蓝工艺，但在当代得到了创新与发展。
            </p>
            <p className="text-gray-700">
              掐丝珐琅艺术以其精美的工艺、鲜艳的色彩和独特的立体视觉效果，成为了中国文化艺术的重要代表之一。当代掐丝珐琅，千年技艺的璀璨新生！
            </p>

            <div className="grid grid-cols-3 gap-4 py-2">
              <div className="bg-white p-4 rounded-md shadow-sm">
                <h4 className="font-semibold text-primary mb-2">工艺传承创新</h4>
                <p className="text-xs text-gray-600">传承古法，融合现代工艺</p>
              </div>
              <div className="bg-white p-4 rounded-md shadow-sm">
                <h4 className="font-semibold text-primary mb-2">当代设计</h4>
                <p className="text-xs text-gray-600">现代美学与传统工艺结合</p>
              </div>
              <div className="bg-white p-4 rounded-md shadow-sm">
                <h4 className="font-semibold text-primary mb-2">国际影响力</h4>
                <p className="text-xs text-gray-600">展现中国艺术的国际魅力</p>
              </div>
            </div>

            <div className="pt-4">
              <Button asChild className="bg-secondary hover:bg-secondary/90 text-white">
                <Link href="/art-origins/contemporary">探索当代艺术</Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden order-1 md:order-2"
          >
            <Image
              src="/images/contemporary-art.jpg"
              alt="当代掐丝珐琅艺术"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
