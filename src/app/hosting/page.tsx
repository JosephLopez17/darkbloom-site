export default function Page() {
  const plans = [
    {
      name: "Starter",
      price: "$29/mo",
      features: [
        "Single automation workflow",
        "Basic hosting (n8n container)",
        "Email support",
      ],
    },
    {
      name: "Growth",
      price: "$79/mo",
      features: [
        "Up to 5 workflows",
        "Custom domain & SSL",
        "Priority support",
      ],
    },
    {
      name: "Pro",
      price: "$199/mo",
      features: [
        "Up to 20 workflows",
        "Private PostgreSQL DB",
        "Dedicated resource allocation",
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900">Hosting Plans</h1>
        <p className="text-gray-600 mt-3">
          Scalable automation infrastructure powered by Docker + n8n.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3 px-6 max-w-6xl mx-auto">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className="bg-white rounded-2xl shadow-md p-8 flex flex-col"
          >
            <h2 className="text-2xl font-semibold mb-2">{plan.name}</h2>
            <p className="text-3xl font-bold mb-4">{plan.price}</p>
            <ul className="mb-6 space-y-2 text-gray-600">
              {plan.features.map((f) => (
                <li key={f}>• {f}</li>
              ))}
            </ul>
            <button className="mt-auto bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition">
              Select Plan
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}
