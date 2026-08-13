import React from "react";

const CustomerReviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Rahul Sharma",
      role: "Verified Buyer",
      comment: "Amazing quality. The fabric feels premium and fits perfectly. Highly recommended!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150",
    },
    {
      id: 2,
      name: "Aman Verma",
      role: "Verified Buyer",
      comment: "Fast delivery and top-notch packaging. The products exceeded my expectations.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
    },
    {
      id: 3,
      name: "Sahil Khan",
      role: "Verified Buyer",
      comment: "Best clothing website I've used so far. Great customer service and easy returns too.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150",
    },
  ];

  return (
    <section className="py-24 bg-neutral-50 text-neutral-900">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-indigo-600 font-bold bg-indigo-50 px-3 py-1 rounded-full">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mt-3">
            What Our Customers Say
          </h2>
          <p className="text-neutral-500 text-sm md:text-base mt-2">
            Real feedback from people who love our collection and styling.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-neutral-200/60 flex flex-col justify-between relative group"
            >
              {/* Top Quote Icon / Accent */}
              <div className="absolute top-6 right-8 text-neutral-200 text-5xl font-serif select-none pointer-events-none">
                &ldquo;
              </div>

              <div>
                {/* Rating Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <span key={i} className="text-amber-400 text-lg">★</span>
                  ))}
                </div>

                {/* Comment Text */}
                <p className="text-neutral-600 text-sm md:text-base leading-relaxed mb-6">
                  &ldquo;{review.comment}&rdquo;
                </p>
              </div>

              {/* Customer Profile Info */}
              <div className="flex items-center gap-4 pt-4 border-t border-neutral-100">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-indigo-50"
                />
                <div>
                  <h4 className="font-bold text-neutral-900 text-sm">
                    {review.name}
                  </h4>
                  <span className="text-xs text-indigo-600 font-medium">
                    {review.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;