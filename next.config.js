/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['rb.gy', 'lh3.googleusercontent.com'],
  },
  env: {
    GOOGLE_CLIENT_ID:
      '407600803457-20ureo0ehk73rda9sh35gc5fuku18lkq.apps.googleusercontent.com',
    GOOGLE_CLIENT_SECRET: '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',
    NEXTAUTH_URL: 'http://localhost:3000',
    NEXTAUTH_SECRET: 'aibdsahdasdbadj',
    FIREBASE_API_KEY: 'AIzaSyCabMsSfvYNK1LERt6Kyu6a69KQwHueLkc',
    FIREBASE_AUTH_DOMAIN: 'twitter-clone-e0e8f.firebaseapp.com',
    FIREBASE_PROJECT_ID: 'twitter-clone-e0e8f',
    FIREBASE_STORAGE_BUCKET: 'twitter-clone-e0e8f.appspot.com',
    FIREBASE_SENDER_ID: '407600803457',
    FIREBASE_APP_ID: '1:407600803457:web:8a593c22fa15d5aba9e780',
  },
};

module.exports = nextConfig;
