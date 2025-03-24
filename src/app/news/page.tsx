"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Layout from '@/components/layout/Layout';
import { formatDate } from '@/lib/utils';
import { newsData, newsCategories, type NewsItem } from '@/data/news';

// 新闻卡片组件
function NewsCard({ news }: { news: NewsItem }) {
  return (
    <Link href={`/news/${news.slug}`} className="group">
      <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow h-full flex flex-col">
        <div className="relative h-48">
          <Image
            src={news.image}
            alt={news.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute top-3 left-3 bg-primary text-white px-2 py-1 rounded-full text-xs">
            {news.category}
          </div>
        </div>
        <div className="p-6 flex-grow flex flex-col">
          <div className="text-gray-500 text-sm mb-2">
            {formatDate(news.date)}
          </div>
          <h3 className="text-xl font-bold text-secondary mb-3 group-hover:text-primary transition-colors line-clamp-2">
            {news.title}
          </h3>
          <p className="text-gray-700 mb-4 line-clamp-3">
            {news.excerpt}
          </p>
          <div className="mt-auto">
            <span className="text-primary font-medium inline-flex items-center group-hover:underline">
              阅读全文
              <svg xmlns="http://www.w3.org/2000/svg" className="ml-1" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function NewsPage() {
  // 当前分类和页码的状态
  const [activeCategory, setActiveCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const newsPerPage = 6;

  // 过滤新闻
  const filteredNews = activeCategory === 'all'
    ? newsData
    : newsData.filter(news => news.category === activeCategory);

  // 计算分页
  const indexOfLastNews = currentPage * newsPerPage;
  const indexOfFirstNews = indexOfLastNews - newsPerPage;
  const currentNews = filteredNews.slice(indexOfFirstNews, indexOfLastNews);
  const totalPages = Math.ceil(filteredNews.length / newsPerPage);

  // 改变分类时重置为第一页
  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setCurrentPage(1);
  };

  // 分页按钮点击处理
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Layout>
      {/* Hero Banner */}
      <section className="relative pt-32 pb-20 bg-secondary text-white overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/images/exhibition.jpg"
            alt="聆花文化新闻中心"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-secondary/70" />
        </div>

        <div className="container-wide relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">新闻中心</h1>
            <p className="text-xl mb-8 text-white/80">
              了解聆花文化最新动态、展览信息、艺术家合作项目及行业资讯
            </p>
          </div>
        </div>
      </section>

      {/* 新闻内容 */}
      <section className="py-16 bg-cream">
        <div className="container-wide">
          {/* 分类筛选 */}
          <div className="mb-12">
            <div className="flex flex-wrap gap-3 justify-center">
              {newsCategories.map((category) => (
                <Button
                  key={category.value}
                  variant={category.value === activeCategory ? 'default' : 'outline'}
                  className="rounded-full"
                  onClick={() => handleCategoryChange(category.value)}
                >
                  {category.name}
                </Button>
              ))}
            </div>
          </div>

          {/* 置顶新闻 - 只在第一页和"全部"分类下显示 */}
          {currentPage === 1 && activeCategory === 'all' && (
            <div className="mb-16">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src={newsData[0].image}
                    alt={newsData[0].title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="mb-2 flex items-center gap-4">
                      <span className="bg-primary text-white px-3 py-1 rounded-full text-xs">
                        {newsData[0].category}
                      </span>
                      <span className="text-white/80 text-sm">
                        {formatDate(newsData[0].date)}
                      </span>
                    </div>
                    <h2 className="text-2xl font-bold mb-2">{newsData[0].title}</h2>
                    <p className="text-white/80 mb-4 line-clamp-2">
                      {newsData[0].excerpt}
                    </p>
                    <Button asChild size="sm" className="mt-2">
                      <Link href={`/news/${newsData[0].slug}`}>阅读全文</Link>
                    </Button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {newsData.slice(1, 5).map((news) => (
                    <Link href={`/news/${news.slug}`} key={news.id} className="group">
                      <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow h-full flex flex-col">
                        <div className="relative h-40">
                          <Image
                            src={news.image}
                            alt={news.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute top-2 left-2 bg-primary text-white px-2 py-1 rounded-full text-xs">
                            {news.category}
                          </div>
                        </div>
                        <div className="p-4 flex-grow">
                          <div className="text-gray-500 text-sm mb-1">
                            {formatDate(news.date)}
                          </div>
                          <h3 className="text-md font-bold text-secondary group-hover:text-primary transition-colors line-clamp-2">
                            {news.title}
                          </h3>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* 显示当前分类下的新闻列表 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {currentNews.length > 0 ? (
              currentNews.map((news) => (
                <NewsCard key={news.id} news={news} />
              ))
            ) : (
              <div className="col-span-full text-center py-16">
                <h3 className="text-xl font-bold text-secondary mb-4">暂无内容</h3>
                <p className="text-gray-600">该分类下暂无新闻内容，请查看其他分类</p>
                <Button 
                  variant="outline" 
                  className="mt-6"
                  onClick={() => handleCategoryChange('all')}
                >
                  查看全部新闻
                </Button>
              </div>
            )}
          </div>

          {/* 分页 */}
          {filteredNews.length > newsPerPage && (
            <div className="mt-12 flex justify-center">
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  disabled={currentPage === 1}
                  onClick={() => handlePageChange(currentPage - 1)}
                  className="px-3"
                >
                  上一页
                </Button>
                
                {Array.from({ length: totalPages }).map((_, i) => (
                  <Button
                    key={i}
                    variant={currentPage === i + 1 ? 'default' : 'outline'}
                    className="w-10 h-10 p-0 rounded-md"
                    onClick={() => handlePageChange(i + 1)}
                  >
                    {i + 1}
                  </Button>
                ))}
                
                <Button
                  variant="outline"
                  disabled={currentPage === totalPages}
                  onClick={() => handlePageChange(currentPage + 1)}
                  className="px-3"
                >
                  下一页
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 订阅区域 */}
      <section className="py-16 bg-primary/10">
        <div className="container-wide">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-secondary mb-4">订阅新闻通讯</h2>
            <p className="text-gray-700 mb-8">
              定期获取聆花文化的最新动态、展览信息和掐丝珐琅艺术资讯
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="请输入您的邮箱"
                className="flex-grow px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button>
                订阅
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
