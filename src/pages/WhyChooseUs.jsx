import React from "react";

const WhyChooseUs = () => {
  const features = [
    {
      title: "Free Shipping",
      description: "On all orders above $50. Fast & reliable delivery worldwide.",
      svgPath: "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H19m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z",
    },
    {
      title: "Easy Returns",
      description: "Hassle-free 30-day return policy with zero extra charges.",
      svgPath: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
    },
    {
      title: "Secure Payment",
      description: "100% protected checkout with trusted encryption methods.",
      svgPath: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
    },
    {
      title: "24/7 Support",
      description: "Dedicated assistance available around the clock via chat.",
      svgPath: "M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636l3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z",
    },
  ];

  return (
    <section style={{ padding: "96px 24px", background: "#f9fafb", color: "#111827" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        
        {/* Section Header */}
        <div style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto 64px auto" }}>
          <span style={{ fontSize: "12px", textTransform: "uppercase", letterSpacing: "2px", color: "#4f46e5", fontWeight: "bold", background: "#eef2ff", padding: "6px 12px", borderRadius: "9999px" }}>
            Our Benefits
          </span>
          <h2 style={{ fontSize: "32px", fontWeight: "800", marginTop: "16px" }}>
            Why Shop With Us?
          </h2>
          <p style={{ color: "#6b7280", fontSize: "16px", marginTop: "8px" }}>
            We provide the best shopping experience with unmatched quality and customer care.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "32px" }}>
          {features.map((item, index) => (
            <div
              key={index}
              style={{
                background: "#ffffff",
                padding: "32px",
                borderRadius: "16px",
                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                border: "1px solid #e5e7eb",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              {/* Icon Container */}
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "12px",
                  background: "#eef2ff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "24px",
                }}
              >
                <svg
                  style={{ width: "24px", height: "24px", stroke: "#4f46e5", fill: "none", strokeWidth: "2" }}
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d={item.svgPath} />
                </svg>
              </div>

              {/* Title & Description */}
              <h3 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "8px" }}>
                {item.title}
              </h3>
              <p style={{ fontSize: "14px", color: "#6b7280", lineHeight: "1.5" }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export class WhyChooseUsErrorBoundary extends React.Component {
  state = { hasError: false };
  static getDerivedStateFromError(error) { return { hasError: true }; }
  componentDidCatch(error, info) { console.log(error, info); }
  render() {
    if (this.state.hasError) return <h2 style={{textAlign:'center', padding:'20px'}}>Something went wrong in WhyChooseUs component.</h2>;
    return this.props.children;
  }
}

export default WhyChooseUs;