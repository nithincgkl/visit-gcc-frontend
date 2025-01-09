import HomePage from "../../components/home/home";

export async function generateMetadata() {
  return {
    title: 'Home | IM Vision',
    description: 'Welcome to my Next.js site optimized for search engines. Discover our products/services and learn how we can help you.',
  };
}

async function getData() {
  const res = await fetch('https://fakestoreapi.com/products/1', { cache: 'no-store' });
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

export default function Home() {
  return <HomePage />
}