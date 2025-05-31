import Link from 'next/link';

const Navigation = () => {
  const menuItems = [
    { name: '소개', href: '/' },
    { name: '1층내부', href: '#1f' },
    { name: '2층내부', href: '#2f' },
    { name: '외부전경', href: '#exterior' },
    { name: '주변정보', href: '#info' },
    { name: '주변환경', href: '#environment' },
    { name: '문의하기', href: '/contact' },
  ];

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-bold">
            타운하우스팔공
          </Link>
          
          <div className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-600 hover:text-black transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* 모바일 메뉴 버튼 */}
          <button className="md:hidden p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation; 