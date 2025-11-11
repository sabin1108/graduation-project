# 한경국립대학교 AI 챗봇

한경국립대학교 학생들을 위한 지능형 대화 시스템으로, 학사 일정, 공지사항, 수강 신청 등 다양한 대학 생활 정보를 실시간으로 제공하여 어려움을 해결합니다.

![메인 화면면](https://i.postimg.cc/QCgssXSr/meinlogeu.png)

## 목차

- [개요](#-개요)
- [주요 기능](#-주요-기능)
- [기술 스택](#-기술-스택)
- [개발 환경](#-개발-환경)

## 개요

한경국립대학교 AI 챗봇은 학생들이 대학 생활에 필요한 정보를 쉽고 빠르게 얻을 수 있도록 돕는 대화형 인공지능 시스템입니다. 자연어 처리 기술을 활용하여 학생들의 질문을 이해하고, 학사 일정, 수강 신청, 공지사항 등 다양한 정보를 실시간으로 제공합니다.

### 프로젝트 목표

- 학생들의 정보 접근성 향상 - 분활된 정보 그룹화
- 실시간 학사 정보 제공
- 다양한 학교 연계 사이트 제공
- 학교 행사 및 공모전에 대한 홍보 및 정보 제공
- 직관적이고 사용하기 쉬운 인터페이스 구현 - 사용자의 UX를 우선

## 주요 기능
### 1. 메인 화면
![Image](https://github.com/user-attachments/assets/0e71eff6-685d-42b2-b21d-1d9d317bd925)
![main page](https://i.postimg.cc/mg3PgsXJ/seukeulinsyas-2025-10-24-170236.png)
- 좌측 사이드바: 메뉴 네비게이션
- 중앙: 대화 인터페이스
- 채팅 히스토리 관리
### 2. 지능형 대화 시스템
- 자연어 기반 질의응답
- 맥락을 이해하는 대화 연속성
- 다양한 학사 관련 질문 처리
- 실시간 응답 제공
- 데이터베이스를 통한 정확한 정보 제공

### 3. 학사 일정 관리
![Calendar Feature](https://i.postimg.cc/XYSNTz8Y/hagsailjeong-sajin.png)

- 인터랙티브 캘린더 UI
- 학기별 주요 일정 표시
  - 수강 신청 기간
  - 시험 기간
  - 학사 일정
  - 방학 정보
- 월별/일별 일정 조회
    - 이벤트 색상 코딩
### 4. 공지사항 및 소식
![Notification Feature](https://i.postimg.cc/QdGNRyb8/hagsagongji-yesi.png)
- 최신 공지사항 자동 업데이트
- 학사, 장학, 한경 공지 카테고리별 분류
- 제공된 공지사항 링크화
- 시간순 공지 나열

#### 4.1 학교 행사 및 소식 

![Notice Feature](https://i.postimg.cc/4xk4rS5X/hongbo-poseuteo-yesi.png)

- 행사 및 대회 정보 제공
- 클릭시 링크로 이동

### 4. 식단 정보
![menu](https://i.postimg.cc/SkjXz0YX/sigdan-pyosi-yesi.png)

- 학생 식당 메뉴 확인
- 기숙사 식당 메뉴 확인
- 교직원 식당 메뉴 확인
- 원하는 날짜 메뉴 확인 가능능

### 5. 사용자 편의성 기능
![UX](https://i.postimg.cc/2m6f7CjY/seukeulinsyas-2025-07-21-210402.png)
- 폰트 크기 조절기능
- 자동 스크롤 기능
- 음성 알림 기능
- 시간 표시 기능
- 대화 내보내기 기능
- 대화 삭제 기능
- 가이드 기능  
#### 5.1 대화 내보내기 기능
![Image](https://github.com/user-attachments/assets/37943b44-4b02-40cf-a250-96444a3c66ef)
- 필요한 대화 내용 txt 파일로 저장

#### 5.2 폰트 조절기능
![Image](https://github.com/user-attachments/assets/5ef642f2-edac-422c-85bc-4f0e97f95218)

- 원하는 폰트로 크기 변환
#### 5.3 가이드 기능
![guid](https://i.postimg.cc/25QvBW0t/seukeulinsyas-2025-11-12-004355.png)
- 초기 사용자를 위한 가이드 기능능

### 6. 반응형 디자인
![Image](https://github.com/user-attachments/assets/d78ecf15-9343-4261-ae9f-80fc56fbbbc1)
- 모바일 최적화
- 다양한 화면 크기 대응




## 🛠 기술 스택

### Frontend
```
- next.js(App Router) : React 기반의 풀스택 프레임워크입니다. App Router를 사용하여 서버 컴포넌트, SEO 최적화, 향상된 라우팅 기능을 활용합니다

- TypeScript : 정적 타입을 지원하여 코드의 안정성과 가독성을 높이고, 개발 단계에서 오류를 미리 방지하기 위해 사용되었습니다.

- React.js : React에 내장된 Hooks를 최대한 활용하여 상태 관리 로직을 간결하게 유지했습니다.

- Tailwind CSS : 유틸리티-우선 CSS 프레임워크로, `shadcn/ui`와 함께 일관되고 빠르게 UI를 구축하기 위해 사용되었습니다.
```

**Frontend**

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white) 
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-38B2AC?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Nginx](https://img.shields.io/badge/nginx-%23009639.svg?style=for-the-badge&logo=nginx&logoColor=white)



**Backend**

![NCP](https://img.shields.io/badge/NCP-%23009639.svg?style=for-the-badge&logo=nginx&logoColor=white) 
![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=Python&logoColor=white)
![Java](https://img.shields.io/badge/Java-007396?style=for-the-badge&logo=openjdk&logoColor=white)
![Spring Boot](https://img.shields.io/badge/Spring%20Boot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white)
![OpenAI API](https://img.shields.io/badge/OpenAI%20API-412991?style=for-the-badge&logo=openai&logoColor=white)
![Redis](https://img.shields.io/badge/Redis-DC382D?style=for-the-badge&logo=Redis&logoColor=white)


<div sytle="overflow:hidden;">
<table>
  <tr>
    <td colspan="1" align="center"><strong>FrontEnd</strong></td>
    <td colspan="1" align="center"><strong>BackEnd</strong></td>
  </tr>
  <tr>
    <td align="center">
      <a href="https://github.com/sabin1108"><img src="https://avatars.githubusercontent.com/u/67681246?v=4" width="150px" alt="민사빈"/><br/><sub><b>민사빈</b></sub></a>
    </td>
    <td align="center">
      <a href="https://github.com/thatgirls00"><img src="https://avatars.githubusercontent.com/u/109068985?v=4" width="150px;" alt="전현수"/><br/><sub><b>전현수</b></sub></a>
    </td>
  </tr>
</table>

> 민사빈 : React, TypeScript 기반 UI/UX 개발 및 TailwindCss 페이지 디자인, API 연동 <br><br>
> 전현수 : Spring API Server (Java) / NCP 서버 연동 / 학교 데이터 크롤러 및 전처리(Python) / 
</div>
<br>









