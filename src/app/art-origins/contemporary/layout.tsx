import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '当代发展 | 艺术起源 | 聆花文化',
  description: '探索掐丝珐琅艺术在当代的创新发展与演变，了解现代工艺大师如何将传统技艺与现代审美完美融合。',
};

export default function ContemporaryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
