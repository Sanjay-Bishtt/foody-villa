import React from 'react';

export const About = () => {
  return (
    <main className="max-w-6xl mx-auto p-12 bg-white rounded-xl shadow-lg mt-16 font-sans">
      <header className="mb-12 text-center">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
          About Our Foody Villa
        </h1>
        <p className="text-gray-700 text-xl max-w-3xl mx-auto leading-relaxed">
          At <strong>Our Foody Villa</strong>, we believe food is more than just sustenance — it's a celebration of culture, community, and passion. We are dedicated to delivering authentic flavors and fresh ingredients, ensuring every bite is a memorable experience.
        </p>
      </header>

      {/* Two-column layout: Image on left, text on right */}
      <section className="flex flex-col md:flex-row items-center md:items-start gap-12 max-w-5xl mx-auto">
        <div className="md:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80"
            alt="Delicious food served at Our Foody Villa"
            className="rounded-lg shadow-lg object-cover w-full h-80 md:h-full"
          />
        </div>

        <div className="md:w-1/2 space-y-6 text-gray-700 text-lg leading-relaxed">
          <p>
            Founded with a passion for exceptional cuisine, Our Foody Villa brings you meals crafted from the freshest local ingredients. Our expert chefs blend traditional recipes with modern techniques to create dishes that delight your palate and nourish your soul.
          </p>
          <p>
            We are committed to sustainability and community support, partnering with local farmers and producers to ensure responsible sourcing and vibrant neighborhood growth.
          </p>
          <p>
            Our easy-to-use platform and reliable delivery service ensure that you enjoy gourmet meals in the comfort of your home, whenever you desire.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="text-center mt-16">
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">Our Mission</h2>
        <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed text-lg">
          To delight our customers with authentic, high-quality meals while fostering sustainable practices and supporting our local communities.
        </p>
      </section>

      <footer className="mt-20 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Our Foody Villa. All rights reserved.
      </footer>
    </main>
  );
};
