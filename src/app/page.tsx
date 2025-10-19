export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-5xl font-bold mb-4 text-gray-900">
        Darkbloom Digital
      </h1>
      <p className="text-lg text-gray-600 mb-8">Automation. Elevated.</p>
      <a
        href="/hosting"
        className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition"
      >
        View Hosting Plans
      </a>
    </main>
  );
}
