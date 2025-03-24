import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Layout from '@/components/layout/Layout';
import { formatDate } from '@/lib/utils';
import { getNewsBySlug, getRelatedNews, newsData } from '@/data/news';
import { notFound } from 'next/navigation';

interface PageProps {
  params: {
    slug: string
  }
}

// 添加静态路径生成函数
export function generateStaticParams() {
  return newsData.map((news) => ({
    slug: news.slug,
  }));
}

export default function NewsDetail({ params }: PageProps) {
  const { slug } = params;

  // 从数据源获取新闻详情
  const newsItem = getNewsBySlug(slug);

  // 如果找不到对应的新闻，返回404
  if (!newsItem) {
    notFound();
  }

  // 获取相关新闻
  const relatedNews = newsItem.relatedNews || getRelatedNews(newsItem.id);

  return (
    <Layout>
      {/* 面包屑导航 */}
      <div className="bg-cream">
        <div className="container-wide py-4">
          <div className="flex items-center text-sm text-gray-600">
            <Link href="/" className="hover:text-primary">首页</Link>
            <span className="mx-2">/</span>
            <Link href="/news" className="hover:text-primary">新闻中心</Link>
            <span className="mx-2">/</span>
            <span className="text-primary line-clamp-1">{newsItem.title}</span>
          </div>
        </div>
      </div>

      <article className="bg-white py-12">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            {/* 文章头部 */}
            <header className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-secondary mb-4">{newsItem.title}</h1>
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-6">
                <time>{formatDate(newsItem.date)}</time>
                {newsItem.author && (
                  <>
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-400"></div>
                    <span>{newsItem.author}</span>
                  </>
                )}
                <div className="w-1.5 h-1.5 rounded-full bg-gray-400"></div>
                <Badge variant="secondary">{newsItem.category}</Badge>
              </div>

              {/* 特色图片 */}
              <div className="relative h-[400px] rounded-lg overflow-hidden mb-8">
                <Image
                  src={newsItem.image}
                  alt={newsItem.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </header>

            {/* 文章内容 */}
            {newsItem.content ? (
              <div
                className="prose prose-lg max-w-none prose-headings:text-secondary prose-headings:font-bold prose-p:text-gray-700"
                dangerouslySetInnerHTML={{ __html: newsItem.content }}
              />
            ) : (
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 mb-4">{newsItem.excerpt}</p>
                <p className="text-gray-500 italic">完整内容正在整理中...</p>
              </div>
            )}

            {/* 分享 */}
            <div className="border-t border-b border-gray-200 py-6 my-10">
              <div className="flex items-center justify-between">
                <div className="text-gray-600">分享到：</div>
                <div className="flex gap-4">
                  <button className="text-gray-500 hover:text-primary transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 22c5.514 0 10-4.486 10-10S17.514 2 12 2 2 6.486 2 12s4.486 10 10 10zm0-18c4.411 0 8 3.589 8 8s-3.589 8-8 8-8-3.589-8-8 3.589-8 8-8zm3 8a3 3 0 10-3.001-3 3 3 0 003 3zm-6 6a2.987 2.987 0 003-3h6a3 3 0 003-3 3 3 0 00-3-3 2.98 2.98 0 00-2.122.879l-1.544-1.544A4.979 4.979 0 0016 6a5 5 0 00-5 5 4.979 4.979 0 00.878 2.829l-1.545 1.544A2.98 2.98 0 009 14a3 3 0 00-3 3 3 3 0 003 3z"/>
                    </svg>
                  </button>
                  <button className="text-gray-500 hover:text-primary transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm1-6h-2v-5h2v5zm0-6.5a1 1 0 11-2 0 1 1 0 012 0z"/>
                    </svg>
                  </button>
                  <button className="text-gray-500 hover:text-primary transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8zm-4-9h8v2H8v-2z"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* 相关阅读 */}
            {relatedNews.length > 0 && (
              <section className="my-12">
                <h2 className="text-2xl font-bold text-secondary mb-6">相关阅读</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {relatedNews.map((news) => (
                    <Link href={`/news/${news.slug}`} key={news.id} className="group">
                      <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow h-full">
                        <div className="relative h-44">
                          <Image
                            src={news.image}
                            alt={news.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>
                        <div className="p-4">
                          <div className="text-gray-500 text-sm mb-2">{formatDate(news.date)}</div>
                          <h3 className="text-lg font-bold text-secondary group-hover:text-primary transition-colors line-clamp-2">
                            {news.title}
                          </h3>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            )}

            {/* 返回按钮 */}
            <div className="mt-12 text-center">
              <Button asChild variant="outline">
                <Link href="/news">返回新闻列表</Link>
              </Button>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
}
