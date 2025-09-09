import { Counter } from '../components/Counter';
import { Header } from '../components/Header';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <Header />
        <div className="flex items-center justify-center min-h-[60vh]">
          <Counter />
        </div>
      </div>
    </main>
  );
}
