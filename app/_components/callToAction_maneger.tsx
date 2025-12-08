'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

interface FormData {
  name: string;
  email: string;
  company: string;
  problem: string;
  phone: string;
}

export default function CallToActionManager() {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    problem: '',
    phone: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/manager-problems', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitMessage('پیام شما با موفقیت ارسال شد');
        setFormData({
          name: '',
          email: '',
          company: '',
          problem: '',
          phone: '',
        });
        setTimeout(() => {
          setOpen(false);
          setSubmitMessage('');
        }, 2000);
      } else {
        setSubmitMessage('خطا در ارسال پیام. لطفا دوباره تلاش کنید');
      }
    } catch (error) {
      setSubmitMessage('خطا در ارسال پیام. لطفا دوباره تلاش کنید');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
    if (!newOpen) {
      setFormData({
        name: '',
        email: '',
        company: '',
        problem: '',
        phone: '',
      });
      setSubmitMessage('');
    }
  };

  return (
    <section  className="py-24 bg-secondary rounded ">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          مسائل خود را با ما به اشتراک بگذارید
        </h2>
        <p dir='rtl' className="text-lg  text-white mb-8">
          آیا مدیر هستید و مشکلات خاصی داشتید؟ ما اینجایم تا شنوایم. پیام خود را برای ما ارسال کنید
          و ما به زودی با شما تماس خواهیم گرفت.
        </p>

        <Dialog  open={open} onOpenChange={handleOpenChange}>
          <DialogTrigger asChild>
           <Button variant={"default"}> مسئله خود رابیان کنید</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[800px]" >
            <DialogHeader>
              <DialogTitle>درخواست رسیدگی به مسائل شما</DialogTitle>
              <DialogDescription>
                لطفا مسئله خود را بیان کنید تا ما بتوانیم کمک کنیم
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} dir='rtl' className="space-y-4">
              {/* Name Field */}
              <div className="space-y-2">
                <Label htmlFor="name">نام و نام خانوادگی</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="نام خود را وارد کنید"
                  required
                />
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <Label htmlFor="email">ایمیل</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="ایمیل خود را وارد کنید"
                  required
                />
              </div>

              {/* Company Field */}
              <div className="space-y-2">
                <Label htmlFor="company">نام شرکت / سازمان</Label>
                <Input
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder="نام شرکت خود را وارد کنید"
                />
              </div>

              {/* Phone Field */}
              <div className="space-y-2">
                <Label htmlFor="phone">شماره تماس</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="شماره تماس خود را وارد کنید"
                />
              </div>

              {/* Problem Field */}
              <div className="space-y-2">
                <Label htmlFor="problem">توضیح مشکل</Label>
                <Textarea
                  id="problem"
                  name="problem"
                  value={formData.problem}
                  onChange={handleInputChange}
                  placeholder="مشکل خود را به تفصیل توضیح دهید..."
                  required
                />
              </div>

              {/* Submit Message */}
              {submitMessage && (
                <div
                  className={`p-3 rounded-lg text-center text-sm ${
                    submitMessage.includes('موفقیت')
                      ? 'bg-green-100 text-green-800'
                      : 'bg-red-100 text-red-800'
                  }`}
                >
                  {submitMessage}
                </div>
              )}

              {/* Buttons */}
              <div className="flex gap-3 pt-4">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1"
                >
                  {isSubmitting ? 'در حال ارسال...' : 'ارسال'}
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setOpen(false)}
                  className="flex-1"
                >
                  بستن
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
