export default function Page() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <h1 className="text-4xl font-bold mb-4">Free Automation Audit</h1>
      <p className="text-gray-600 mb-8 max-w-lg">
        Get a free evaluation of your business workflows. We’ll identify time-sinks, manual processes, and
        automation opportunities — with a report delivered to your inbox.
      </p>

      <div className="w-full max-w-lg">
        <iframe
          src="https://form.typeform.com/to/XXXX" // replace with your Typeform URL
          className="w-full h-[600px] rounded-2xl border"
          allow="camera; microphone; autoplay; encrypted-media;"
        ></iframe>
      </div>
    </main>
  );
}
