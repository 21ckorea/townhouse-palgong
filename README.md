# 팔공산 전원주택 홈페이지

팔공산의 아름다운 자연 속에서 품격 있는 삶을 누릴 수 있는 프리미엄 전원주택 홍보 웹사이트입니다.

## 기술 스택

- Next.js 14
- React
- TypeScript
- Tailwind CSS

## 주요 기능

- 반응형 디자인
- 메인 페이지 (전원주택 소개)
- 갤러리 섹션
- 문의하기 페이지
- 위치 정보

## 시작하기

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build

# 프로덕션 서버 실행
npm start
```

## 프로젝트 구조

```
├── src/
│   ├── app/
│   │   ├── page.tsx        # 메인 페이지
│   │   ├── layout.tsx      # 전체 레이아웃
│   │   └── contact/        # 문의하기 페이지
│   └── components/         # 재사용 가능한 컴포넌트
├── public/
│   └── images/            # 이미지 파일
└── package.json
```

## 환경 설정

프로젝트를 실행하기 전에 다음 환경 변수를 설정해야 합니다:

```env
NEXT_PUBLIC_CONTACT_EMAIL=your-email@example.com
```

## 라이선스

이 프로젝트는 MIT 라이선스를 따릅니다.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
