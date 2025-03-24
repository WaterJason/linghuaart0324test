"use client";

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const products = [
  {
    id: 1,
    title: "聆花艺术臻品",
    titleEn: "Linghua Art Collections",
    description: "掐丝珐琅唐卡与高端艺术收藏品",
    descriptionEn: "Cloisonné enamel thangka and luxury art collections",
    image: "/images/product-art-collections.jpg",
    link: "/products/art-collections",
    features: ["纯手工制作，工艺精湛", "艺术价值与收藏价值并存", "限量编号，大师签名"]
  },
  {
    id: 2,
    title: "聆花非遗文创",
    titleEn: "Linghua Heritage & Culture",
    description: "将传统工艺融入现代生活的文创产品",
    descriptionEn: "Cultural creative products that integrate traditional crafts into modern life",
    image: "/images/product-cultural-creations.jpg",
    link: "/products/cultural-creations",
    features: ["传统工艺现代演绎", "实用性与艺术性结合", "价格亲民，送礼佳选"]
  },
  {
    id: 3,
    title: "聆花手作馆",
    titleEn: "Linghua Artisan Gallery",
    description: "掐丝珐琅工艺体验与非遗文化教育",
    descriptionEn: "Cloisonné enamel craft experience and intangible cultural heritage education",
    image: "/images/product-workshop.jpg",
    link: "/products/workshop",
    features: ["专业导师一对一指导", "提供全套工具材料", "颁发体验证书"]
  }
];

export default function ProductsSection() {
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
            <h2 className="section-title">产品&服务</h2>
            <p className="section-subtitle mx-auto">
              聆花文化致力于通过多元化的产品与服务，让非遗工艺走进现代生活，传递东方美学的独特魅力
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="relative h-64 w-full">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl font-bold">{product.title}</CardTitle>
                  <CardDescription className="text-sm text-gray-500">{product.titleEn}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-gray-700 mb-4">{product.description}</p>
                  <ul className="space-y-2">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-1.5 mr-2"></span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full bg-secondary hover:bg-secondary/90 text-white">
                    <Link href={product.link} className="flex items-center justify-center">
                      了解更多 <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Button asChild className="bg-primary hover:bg-primary/90 text-white px-8">
            <Link href="/products">查看全部产品</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
