// 최소한의 서비스워커 - 오프라인 캐싱 기능은 없고,
// 크롬이 이 사이트를 "설치 가능한 앱"으로 인식하게 하는 용도입니다.
self.addEventListener("install", () => {
    self.skipWaiting();
});

self.addEventListener("activate", (event) => {
    event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", (event) => {
    // 별도 캐싱 없이 그대로 네트워크로 통과시킴
    event.respondWith(fetch(event.request));
});
