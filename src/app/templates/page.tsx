export default function Page() {
  const templates = [
    {
      title: "Real Estate Lead Capture",
      desc: "Syncs Typeform → CRM → SMS → Google Sheet",
    },
    {
      title: "Agency Client Onboarding",
      desc: "Automated Notion page + Slack notifications",
    },
    {
      title: "Shopify Order Tracker",
      desc: "Pull orders → summarize → email clients daily",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50 py-16 px-6">
      <div className="max-w-5xl mx-auto text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-900">Automation Templates</h1>
        <p className="text-gray-600 mt-2">
          Ready-to-deploy n8n workflows — customize in minutes.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {templates.map((tpl) => (
          <div
            key={tpl.title}
            className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition p-6"
          >
            <h2 className="text-xl font-semibold mb-2">{tpl.title}</h2>
            <p className="text-gray-600 mb-4">{tpl.desc}</p>
            <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition">
              View Template
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}
