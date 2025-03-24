import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '新闻中心 | 聆花文化',
  description: '了解聆花文化最新动态、展览信息、艺术家合作项目及行业资讯。',
};

export default function NewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
