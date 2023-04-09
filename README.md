# 리뷰 요약 서비스 - GenAI

GenAI 리뷰 요약 서비스는 AI를 활용하여 사용자가 온라인에서 찾을 수 있는 다양한 제품 리뷰를 요약해주는 웹 애플리케이션입니다. React와 Firebase를 사용하여 개발되었습니다.

## 기술 스택

- React
- TypeScript
- Firebase (Firestore, Authentication, Storage, Functions)
- Emotion (CSS-in-JS)
- Axios

## 주요 기능

- 제품 리뷰 요약: GenAI를 사용하여 긴 제품 리뷰를 간결하게 요약
- 사용자 인증: 로그인 및 회원 가입 기능
- 리뷰 저장 및 관리: 요약된 리뷰를 데이터베이스에 저장하고, 사용자별로 관리
- 이미지 업로드: 제품 이미지를 클라우드 스토리지에 저장

## 설치 및 실행 방법

1. 이 저장소를 클론합니다.
```
git clone https://github.com/yourusername/review-summary-service.git
```

2. 프로젝트 디렉토리로 이동합니다.
```
cd review-summary-service
```

3. 필요한 패키지를 설치합니다.
```
npm install -f
```

4. 개발 서버를 실행합니다.
```
npm run start
```

개발 서버가 실행되면, `http://localhost:3000`에서 애플리케이션을 확인할 수 있습니다.

## 라이선스

이 프로젝트는 MIT 라이선스를 따릅니다. 자세한 내용은 [LICENSE](LICENSE) 파일을 참조하세요.
