"use client";

import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const galleryItems = [
  {
    id: 1,
    title: "《大白伞盖佛母》",
    titleEn: "Great White Umbrella Buddha Mother",
    year: "2008",
    description: "大白伞盖佛母属于密宗的佛，是显密合壁的化身佛，是诸佛事业的化身佛。",
    descriptionEn: "The Great White Umbrella Buddha Mother belongs to the Buddha of Esoteric Buddhism.",
    image: "/images/gallery-1.jpg",
    category: "唐卡系列",
    categoryEn: "Thangka Series"
  },
  {
    id: 2,
    title: "《金刚手菩萨》",
    titleEn: "Vajrapani",
    year: "2009",
    description: "一幅表现金刚手菩萨（Vajrapani）形象的唐卡，彰显了其作为佛教护法神之一的威猛力量。",
    descriptionEn: "A thangka depicting Vajrapani, one of the protector deities in Buddhism.",
    image: "/images/gallery-2.jpg",
    category: "唐卡系列",
    categoryEn: "Thangka Series"
  },
  {
    id: 3,
    title: "《麒麟献瑞》",
    titleEn: "Kirin presents luck",
    year: "2020",
    description: "麒麟，是中国古代神话中的一种瑞兽，是由岁星散开而生成，与龙、凤、龟、貔貅并称为五大瑞兽。",
    descriptionEn: "Kirin is a mythical beast in ancient Chinese mythology, known as one of the five auspicious animals.",
    image: "/images/gallery-3.jpg",
    category: "国潮系列",
    categoryEn: "National Trend Series"
  },
  {
    id: 4,
    title: "《九鱼图》",
    titleEn: "Nine fish picture",
    year: "2011",
    description: "在中国传统文化中，鱼与余谐音，象征着富裕和丰盈，而数字九则代表长久，寓意着年年有余、富贵长久。",
    descriptionEn: "In Chinese culture, 'fish' and 'abundance' are homonyms, symbolizing prosperity.",
    image: "/images/gallery-4.jpg",
    category: "国潮系列",
    categoryEn: "National Trend Series"
  },
  {
    id: 5,
    title: "《梦》",
    titleEn: "Picasso Dream",
    year: "2023",
    description: "《梦》是西班牙画家巴勃罗·毕加索在1932年创作的一幅油画。这幅改编作品融合了毕加索的艺术风格与东方掐丝珐琅工艺。",
    descriptionEn: "A cloisonné enamel adaptation of Picasso's 'Dream' (1932), blending Western art with Eastern craft.",
    image: "/images/gallery-5.jpg",
    category: "艺术家联名",
    categoryEn: "Artist Collaboration"
  }
];

export default function GallerySection() {
  const containerRef = useRef<HTMLDivElement>(null);

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
            <h2 className="section-title">作品品鉴</h2>
            <p className="section-subtitle mx-auto">
              珐琅艺术作品品鉴的意义在于帮助人们准确评估珐琅作品的品质和价值，从而更好地购买收藏、欣赏、传承和推广珐琅艺术。
            </p>
          </motion.div>
        </div>

        <Carousel
          className="w-full"
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {galleryItems.map((item, index) => (
              <CarouselItem key={item.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="h-full p-1">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="overflow-hidden rounded-xl h-full"
                  >
                    <div className="relative h-full flex flex-col overflow-hidden bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow group">
                      <div className="relative h-72 w-full overflow-hidden">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute top-3 right-3 bg-primary/90 text-white text-xs px-2 py-1 rounded">
                          {item.year}
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
                          <div className="text-xs uppercase tracking-wider mb-1">{item.category}</div>
                          <h3 className="text-lg font-bold">{item.title}</h3>
                          <p className="text-xs text-white/80">{item.titleEn}</p>
                        </div>
                      </div>
                      <div className="p-4 flex-grow">
                        <p className="text-sm text-gray-700 line-clamp-3">{item.description}</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-8 gap-2">
            <CarouselPrevious className="static" />
            <CarouselNext className="static" />
          </div>
        </Carousel>

        <div className="flex justify-center mt-12">
          <Button asChild className="bg-primary hover:bg-primary/90 text-white px-8">
            <Link href="/gallery">浏览更多作品</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
