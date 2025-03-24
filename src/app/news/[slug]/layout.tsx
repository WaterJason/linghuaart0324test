import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '新闻详情 | 聆花文化',
  description: '了解聆花文化最新动态、展览信息和掐丝珐琅艺术资讯详情。',
};

export default function NewsDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
