// Firebase Client Configuration
export const firebaseConfig = {
  apiKey: "AIzaSyB0a-d_6F0J2W0Si7UrexroLvlsFTV5yW4",
  authDomain: "samplesalon-9da61.firebaseapp.com",
  projectId: "samplesalon-9da61",
  storageBucket: "samplesalon-9da61.firebasestorage.app",
  messagingSenderId: "113034952907",
  appId: "1:113034952907:web:9f010c4d073127a6a15b4e",
  measurementId: "G-23RRTN9HHE",
};

declare global {
  interface Window {
    firebaseApp?: unknown;
    firebaseAnalytics?: unknown;
  }
}

export const getFirebaseApp = () => (typeof window !== "undefined" ? window.firebaseApp : null);
export const getFirebaseAnalytics = () => (typeof window !== "undefined" ? window.firebaseAnalytics : null);
