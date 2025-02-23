import React from "react";

const Rules = () => {
  return (
    <div className="container">
      <div className="bg-gray-100 p-6 rounded-2xl max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-4 text-green-700">
          Turf Playground Rules & Guidelines
        </h1>
        <p className="text-gray-700 text-center mb-6">
          Welcome to <strong>Pavallian Turf</strong>! To ensure a safe and
          enjoyable experience for everyone, please follow these rules and
          guidelines.
        </p>

        <div className="space-y-6">
          {/* General Rules */}
          <section>
            <h2 className="text-2xl font-semibold text-green-600 mb-2">
              General Rules
            </h2>
            <ul className="list-disc list-inside text-gray-800">
              <li>Always prioritize the safety of yourself and others.</li>
              <li>
                Children under the age of <strong>3</strong> must be
                supervised by an adult.
              </li>
              <li>No pushing, shoving, tackling, or aggressive behavior.</li>
              <li>
                Only turf-approved shoes (e.g., rubber cleats or athletic
                sneakers) are allowed. No metal cleats or high heels.
              </li>
              <li>
                Wear appropriate sportswear and protective gear as needed.
              </li>
            </ul>
          </section>

          {/* Prohibited Items */}
          <section>
            <h2 className="text-2xl font-semibold text-green-600 mb-2">
              Prohibited Items
            </h2>
            <ul className="list-disc list-inside text-gray-800">
              <li>
                No food, gum, or sugary drinks on the turf. Only water is
                permitted.
              </li>
              <li>No spikes, glass, or sharp objects allowed on the turf.</li>
              <li>
                Smoking, vaping, and the use of tobacco products are not
                allowed.
              </li>
              <li>
                No animals are allowed on the turf, except for service animals.
              </li>
              <li>
                No unauthorized equipment or heavy items that could damage the
                turf.
              </li>
            </ul>
          </section>

          {/* Usage Guidelines */}
          <section>
            <h2 className="text-2xl font-semibold text-green-600 mb-2">
              Usage Guidelines
            </h2>
            <ul className="list-disc list-inside text-gray-800">
              <li>
                Follow the schedule for organized games and events. Respect
                others’ booking times.
              </li>
              <li>Do not drag heavy objects or chairs across the turf.</li>
              <li>
                Use designated bins to dispose of any waste and keep the turf
                clean.
              </li>
              <li>
                Avoid using the turf during extreme weather (e.g., heavy rain,
                lightning).
              </li>
              <li>
                Notify staff immediately of any damage, unsafe conditions, or
                injuries.
              </li>
            </ul>
          </section>

          {/* Code of Conduct */}
          <section>
            <h2 className="text-2xl font-semibold text-green-600 mb-2">
              Code of Conduct
            </h2>
            <ul className="list-disc list-inside text-gray-800">
              <li>
                Treat staff, players, and other visitors with respect and
                courtesy.
              </li>
              <li>Use of offensive or abusive language is not tolerated.</li>
              <li>Always play fair and encourage good sportsmanship.</li>
            </ul>
          </section>

          {/* Liability Disclaimer */}
          <section>
            <h2 className="text-2xl font-semibold text-green-600 mb-2">
              Liability Disclaimer
            </h2>
            <p className="text-gray-700">
              Users of the turf playground do so at their own risk.{" "}
              <strong>Pavallian Turf</strong> is not liable for injuries,
              lost items, or damages.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Rules;
