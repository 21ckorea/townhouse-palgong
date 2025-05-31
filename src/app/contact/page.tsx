'use client';

import { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // EmailJS로 이메일 전송
      const result = await emailjs.sendForm(
        'service_uitn6zz', // 여기에 실제 Service ID 입력
        'template_3nc204x', // 여기에 실제 Template ID 입력
        e.currentTarget,
        'tDHRnRv9pzxGl5hpM' // 여기에 실제 Public Key 입력
      );

      if (result.text === 'OK') {
        setIsSubmitted(true);
        (e.target as HTMLFormElement).reset();
      } else {
        alert('메시지 전송에 실패했습니다. 다시 시도해주세요.');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      alert('메시지 전송에 실패했습니다. 다시 시도해주세요.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-12">상담 문의</h1>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            {isSubmitted ? (
              <div className="text-center py-8">
                <h3 className="text-2xl font-semibold text-green-600 mb-4">
                  문의가 성공적으로 전송되었습니다!
                </h3>
                <p className="text-gray-600 mb-6">
                  빠른 시일 내에 답변 드리도록 하겠습니다.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition"
                >
                  새로운 문의하기
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="from_name" className="block text-sm font-medium text-gray-700 mb-1">
                    성함
                  </label>
                  <input
                    type="text"
                    id="from_name"
                    name="from_name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    연락처
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="reply_to" className="block text-sm font-medium text-gray-700 mb-1">
                    이메일
                  </label>
                  <input
                    type="email"
                    id="reply_to"
                    name="reply_to"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    문의사항
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                    required
                  ></textarea>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-black text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-800 transition disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? '전송 중...' : '상담 신청하기'}
                  </button>
                </div>
              </form>
            )}
          </div>

          <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6">연락처</h2>
            <div className="space-y-4">
              <p className="flex items-center">
                <span className="text-xl mr-3">📍</span>
                <span>대구광역시 동구 중대동 453-6</span>
              </p>
              <p className="flex items-center">
                <span className="text-xl mr-3">📞</span>
                <span>053-981-8280</span>
              </p>
              <p className="flex items-center">
                <span className="text-xl mr-3">✉️</span>
                <span>ingyo98@gamil.com</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 