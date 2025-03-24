"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';
import { useForm } from 'react-hook-form';

type FormValues = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  privacy: boolean;
};

export default function ContactForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      privacy: false,
    },
  });

  // 静态表单处理函数
  const onSubmit = (data: FormValues) => {
    setIsSubmitting(true);

    // 模拟API调用
    setTimeout(() => {
      console.log('表单数据:', data);

      // 显示成功提示
      toast({
        title: "消息已发送",
        description: "感谢您的留言，我们会尽快回复您。",
      });

      // 重置表单
      form.reset();
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="bg-white p-8 md:p-12 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-secondary mb-6">发送消息</h2>
      <p className="text-gray-700 mb-8">
        填写以下表单，我们将在24小时内回复您的咨询
      </p>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>姓名</FormLabel>
                  <FormControl>
                    <Input placeholder="您的姓名" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>邮箱</FormLabel>
                  <FormControl>
                    <Input placeholder="您的邮箱地址" type="email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>电话</FormLabel>
                <FormControl>
                  <Input placeholder="您的联系电话" type="tel" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormLabel>咨询主题</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="请选择咨询主题" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="works">作品咨询</SelectItem>
                    <SelectItem value="custom">定制服务</SelectItem>
                    <SelectItem value="cooperation">商务合作</SelectItem>
                    <SelectItem value="visit">参观预约</SelectItem>
                    <SelectItem value="other">其他问题</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>留言内容</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="请详细描述您的需求或问题"
                    rows={5}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="privacy"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel className="text-sm font-normal">
                    我已阅读并同意<Link href="/privacy" className="text-primary hover:underline">隐私政策</Link>
                  </FormLabel>
                </div>
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? '发送中...' : '发送留言'}
          </Button>
        </form>
      </Form>
    </div>
  );
}
