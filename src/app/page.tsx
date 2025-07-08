import Image from "next/image";
import styles from "./page.module.css";
import Chatbot from '../components/chatbot';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gray-100 dark:bg-gray-900">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">BharatAI Sahayak</h1>
      <Chatbot />
    </main>
  );
}
