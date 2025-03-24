"use client";

import Link from 'next/link';
import { FaWeixin, FaWeibo, FaInstagram } from 'react-icons/fa';
import { Separator } from '@/components/ui/separator';
import { Facebook, Instagram, Linkedin, Twitter, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-secondary text-white">
      <div className="container-wide pt-16 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-start">
              <span className="text-2xl font-bold mb-4">
                <span className="text-primary">聆花</span>文化
              </span>
            </Link>
            <p className="text-secondary-foreground/80 mb-6 max-w-md">
              广州聆花文化传播有限公司专注于非遗掐丝珐琅艺术传承与创新，秉承"匠心传承，美育生活"的品牌理念，致力于让传统技艺走进现代生活。
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-secondary-foreground hover:text-primary transition-colors">
                <FaWeixin className="h-6 w-6" />
              </a>
              <a href="#" className="text-secondary-foreground hover:text-primary transition-colors">
                <FaWeibo className="h-6 w-6" />
              </a>
              <a href="#" className="text-secondary-foreground hover:text-primary transition-colors">
                <FaInstagram className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">快速导航</h3>
            <ul className="space-y-2 text-secondary-foreground/80">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">首页</Link>
              </li>
              <li>
                <Link href="/art-origins" className="hover:text-primary transition-colors">艺术起源</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary transition-colors">品牌介绍</Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-primary transition-colors">产品系列</Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-primary transition-colors">作品品鉴</Link>
              </li>
              <li>
                <Link href="/news" className="hover:text-primary transition-colors">资讯中心</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">产品系列</h3>
            <ul className="space-y-2 text-secondary-foreground/80">
              <li>
                <Link href="/products/art-collections" className="hover:text-primary transition-colors">聆花艺术臻品</Link>
              </li>
              <li>
                <Link href="/products/cultural-creations" className="hover:text-primary transition-colors">聆花非遗文创</Link>
              </li>
              <li>
                <Link href="/products/workshop" className="hover:text-primary transition-colors">聆花手作馆</Link>
              </li>
              <li>
                <Link href="/products/custom" className="hover:text-primary transition-colors">企业定制</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">联系我们</h3>
            <ul className="space-y-3 text-secondary-foreground/80">
              <li className="flex flex-col">
                <span className="font-medium">展览中心</span>
                <span>广州｜番禺区大学城岭南印象园.聆花掐丝珐琅馆</span>
              </li>
              <li className="flex flex-col">
                <span className="font-medium">深圳展厅</span>
                <span>深圳｜南山区南头古城西集.景之蓝</span>
              </li>
              <li className="flex flex-col">
                <span className="font-medium">联系方式</span>
                <span>邮箱: contact@linghuaart.com</span>
                <span>VIP热线: 13928882508 (Jason)</span>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-gray-700" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-secondary-foreground/70">
            Copyright © {new Date().getFullYear()} 广州聆花文化传播有限公司 版权所有
          </div>
          <div className="flex space-x-6 text-sm text-secondary-foreground/70">
            <Link href="/privacy-policy" className="hover:text-primary transition-colors relative group">
              隐私政策
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/terms" className="hover:text-primary transition-colors relative group">
              使用条款
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/sitemap" className="hover:text-primary transition-colors relative group">
              网站地图
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </div>
        </div>
      </div>

      {/* 返回顶部按钮 */}
      {showScrollTop && (
        <Button
          className="fixed bottom-6 right-6 bg-primary hover:bg-primary/90 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg z-50 transition-all hover:translate-y-[-3px]"
          onClick={scrollToTop}
          aria-label="返回顶部"
        >
          <ArrowUp className="h-6 w-6" />
        </Button>
      )}
    </footer>
  );
}
