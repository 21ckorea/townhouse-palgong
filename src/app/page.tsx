'use client';

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <Image
            src="/images/jagamdo.jpeg"
            alt="팔공산 전원주택 전경"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            자연과 함께하는 프리미엄 라이프
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            팔공산의 아름다운 전경과 함께하는 특별한 일상
          </p>
          <Link
            href="/contact"
            className="bg-white text-black px-8 py-3 rounded-full text-lg font-semibold hover:bg-opacity-90 transition"
          >
            문의하기
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">특별한 가치</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="bg-gray-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🌳</span>
              </div>
              <h3 className="text-2xl font-semibold mb-4">자연친화적 환경</h3>
              <p className="text-gray-600">팔공산의 맑은 공기와 아름다운 경관을 매일 만나보세요</p>
            </div>
            <div className="text-center">
              <div className="bg-gray-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🏠</span>
              </div>
              <h3 className="text-2xl font-semibold mb-4">프리미엄 설계</h3>
              <p className="text-gray-600">고급스러운 마감재와 세련된 디자인의 조화</p>
            </div>
            <div className="text-center">
              <div className="bg-gray-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🚗</span>
              </div>
              <h3 className="text-2xl font-semibold mb-4">편리한 접근성</h3>
              <p className="text-gray-600">도심과 가까우면서도 프라이빗한 주거환경</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">갤러리</h2>
          
          {/* 1층 내부 */}
          <div id="1f" className="mb-16 pt-16">
            <h3 className="text-2xl font-semibold mb-8">1층 내부</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((index) => (
                <div key={`1f-${index}`} className="relative aspect-[4/3] overflow-hidden rounded-lg">
                  <Image
                    src={`/images/1f/1f-${index}.jpeg`}
                    alt={`1층 내부 이미지 ${index}`}
                    fill
                    className="object-cover hover:scale-105 transition duration-300"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* 2층 내부 */}
          <div id="2f" className="mb-16 pt-16">
            <h3 className="text-2xl font-semibold mb-8">2층 내부</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((index) => (
                <div key={`2f-${index}`} className="relative aspect-[4/3] overflow-hidden rounded-lg">
                  <Image
                    src={`/images/2f/2f-${index}.jpeg`}
                    alt={`2층 내부 이미지 ${index}`}
                    fill
                    className="object-cover hover:scale-105 transition duration-300"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* 외부 전경 */}
          <div id="exterior" className="mb-16 pt-16">
            <h3 className="text-2xl font-semibold mb-8">외부 전경</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19].map((index) => (
                <div key={`exterior-${index}`} className="relative aspect-[4/3] overflow-hidden rounded-lg">
                  <Image
                    src={`/images/exterior/exterior-${index}.jpeg`}
                    alt={`외부 전경 이미지 ${index}`}
                    fill
                    className="object-cover hover:scale-105 transition duration-300"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* 주변 정보 */}
          <div id="info" className="mb-16 pt-16">
            <h3 className="text-2xl font-semibold mb-8">주변 정보</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((index) => (
                <div key={`info-${index}`} className="relative aspect-[4/3] overflow-hidden rounded-lg">
                  <Image
                    src={`/images/info/info-${index}.jpeg`}
                    alt={`주변 정보 이미지 ${index}`}
                    fill
                    className="object-cover hover:scale-105 transition duration-300"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* 주변 환경 */}
          <div id="environment" className="mb-16 pt-16">
            <h3 className="text-2xl font-semibold mb-8">주변 환경</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((index) => (
                <div key={`environment-${index}`} className="relative aspect-[4/3] overflow-hidden rounded-lg">
                  <Image
                    src={`/images/environment/environment-${index}.jpeg`}
                    alt={`주변 환경 이미지 ${index}`}
                    fill
                    className="object-cover hover:scale-105 transition duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">관심이 있으신가요?</h2>
            <p className="text-xl text-gray-600 mb-12">
              프리미엄 전원주택의 새로운 라이프스타일을 경험해보세요
            </p>
            <Link
              href="/contact"
              className="inline-block bg-black text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-800 transition"
            >
              상담 예약하기
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
