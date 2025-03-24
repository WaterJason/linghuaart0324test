import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { newsData } from '@/data/news';
import { Badge } from '@/components/ui/badge';
import { formatDate } from '@/lib/utils';

export default function NewsCarousel() {
  // 获取最新的4条新闻
  const latestNews = [...newsData]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 4);

  return (
    <section className="py-16 bg-cream">
      <div className="container-wide">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-secondary mb-2">新闻动态</h2>
            <p className="text-gray-600 max-w-2xl">
              了解聆花文化最新的展览、活动、合作项目和行业资讯，探索掐丝珐琅艺术的当代发展。
            </p>
          </div>
          <Button asChild variant="outline" className="mt-4 md:mt-0">
            <Link href="/news">查看全部</Link>
          </Button>
        </div>

        <Carousel className="w-full">
          <CarouselContent className="-ml-4">
            {latestNews.map((news) => (
              <CarouselItem key={news.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <Link href={`/news/${news.slug}`} className="block group">
                  <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="relative w-full h-48 overflow-hidden">
                      <Image
                        src={news.image}
                        alt={news.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <CardContent className="p-5">
                      <div className="flex items-center justify-between mb-3">
                        <Badge variant="outline" className="bg-white">
                          {news.category}
                        </Badge>
                        <span className="text-sm text-gray-500">{formatDate(news.date)}</span>
                      </div>
                      <h3 className="text-xl font-bold text-secondary group-hover:text-primary transition-colors line-clamp-2 mb-2">
                        {news.title}
                      </h3>
                      <p className="text-gray-600 line-clamp-2 text-sm">
                        {news.excerpt}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden md:block">
            <CarouselPrevious className="left-0" />
            <CarouselNext className="right-0" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
