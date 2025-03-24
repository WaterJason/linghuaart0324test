"use client";

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background image - will be added with custom styling */}
      <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center brightness-[0.85]" />

      {/* Dark overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/30 to-transparent" />

      {/* Content */}
      <div className="relative container-wide flex flex-col items-center text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          <h2 className="text-xl md:text-2xl font-medium text-white mb-2 tracking-wider">
            掐丝珐琅 × 东方美学
          </h2>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 hero-text-shadow tracking-tight">
            <span className="text-primary">聆花</span>文化
          </h1>

          <p className="max-w-2xl text-lg sm:text-xl text-white/90 mb-10 hero-text-shadow">
            传承创新非遗，讲好中国故事<br />
            Inherit and innovate intangible cultural heritage, tell China's story well
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white">
              <Link href="/about">品牌介绍</Link>
            </Button>

            <Button asChild size="lg" variant="outline" className="text-secondary bg-white border-white hover:bg-white/90 hover:text-primary">
              <Link href="/gallery">作品赏析</Link>
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
          initial={{ y: 0 }}
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <motion.div className="w-1 h-2 bg-white rounded-full mt-2"></motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
