"use client";

export default function Home() {
  return (
    <div className="min-h-screen bg-biscuit">
      {/* Locator Icon - Bottom Right */}
      <a
        href="#location"
        className="fixed bottom-6 right-6 z-50 w-20 h-20 rounded-full bg-gold hover:bg-charcoal text-charcoal hover:text-gold shadow-lg transition-all duration-300 flex items-center justify-center"
        title="Go to Location"
      >
        <img
          src="/location-pin-svgrepo-com.svg"
          alt="Locator Icon"
          className="w-10 h-10"
        />
      </a>

      {/* Navigation */}
      <nav className="sticky top-0 z-40 bg-biscuit/95 backdrop-blur-sm border-b border-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex justify-between items-center">
          <h1 className="text-2xl font-light tracking-widest text-charcoal">
            SRI SAI SUJA COLLECTIONS
          </h1>
          <div className="hidden sm:flex gap-8 text-sm tracking-wide">
            <a
              href="#collection"
              className="text-charcoal hover:text-gold transition-colors"
            >
              COLLECTION
            </a>
            <a
              href="#location"
              className="text-charcoal hover:text-gold transition-colors"
            >
              LOCATION
            </a>
            <a
              href="#contact"
              className="text-charcoal hover:text-gold transition-colors"
            >
              CONTACT
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section with Cover Image */}
      <section className="relative flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Text Content - Left Side */}
            <div>
              <div className="mb-6 text-charcoal text-sm tracking-widest font-light">
                TIMELESS ELEGANCE
              </div>
              <h2 className="text-5xl sm:text-6xl font-light text-charcoal mb-6 leading-tight tracking-tight">
                Curated Fashion Redefined
              </h2>
              <p className="text-lg sm:text-xl text-charcoal/70 mb-12 font-light leading-relaxed">
                Discover our exclusive collection of premium garments, crafted
                with meticulous attention to detail and contemporary design.
              </p>
              <button className="px-12 py-4 bg-charcoal text-biscuit text-sm tracking-widest hover:bg-gold hover:text-charcoal transition-all duration-300 font-light">
                EXPLORE COLLECTION
              </button>
            </div>

            {/* Cover Image - Right Side */}
            <div className="relative">
              <img
                src="/cover image.jpeg"
                alt="Suja Collections Cover"
                className="w-full h-auto object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-gold text-sm tracking-widest font-light mb-4">
              FEATURED
            </p>
            <h3 className="text-4xl sm:text-5xl font-light text-charcoal tracking-tight">
              New Arrivals
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="group cursor-pointer">
                <div className="relative overflow-hidden bg-gray-200 aspect-square mb-6">
                  <img
                    src={`https://images.unsplash.com/photo-${1550355291079 + item * 1000}?w=500&h=500&fit=crop`}
                    alt={`Product ${item}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <p className="text-charcoal text-sm tracking-wide font-light mb-2">
                  Premium Collection {item}
                </p>
                <p className="text-gold text-lg font-light">$299</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-gold text-sm tracking-widest font-light mb-4">
              VISIT US
            </p>
            <h3 className="text-4xl sm:text-5xl font-light text-charcoal tracking-tight">
              Our Store Details
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h4 className="text-2xl font-light text-charcoal mb-4 tracking-wide">
                Pragathi Nagar Road, Hyderabad
              </h4>
              <p className="text-charcoal/70 font-light mb-6 leading-relaxed">
                Visit our flagship boutique located in the heart of Paris, where
                tradition meets contemporary design. Experience our curated
                collection in an environment of refined elegance.
              </p>
              <div className="space-y-4 text-sm font-light">
                <p className="text-charcoal">
                  <span className="text-gold font-semibold">Address:</span> Shop
                  No. 1, VSR Heights apartment, Block No.1 & 2, Sri Ranga Lane,
                  Pragathi Nagar Rd, Hyderabad, Telangana 500118
                </p>
                <p className="text-charcoal">
                  <span className="text-gold font-semibold">Hours:</span> Monday
                  - Sunday, 10:00 AM - 10:00 PM
                </p>
                <p className="text-charcoal">
                  <span className="text-gold font-semibold">Phone:</span> +91
                  944076898
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-lg shadow-lg h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3804.4026238076704!2d78.38938139999999!3d17.5360074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb8f756d0a9e8b%3A0x491b11b508afe73!2sSri%20Sai%20Suja%20Collections!5e0!3m2!1sen!2sin!4v1770225031791!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section
        id="collection"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-white/30"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-gold text-sm tracking-widest font-light mb-4">
              GALLERY
            </p>
            <h3 className="text-4xl sm:text-5xl font-light text-charcoal tracking-tight">
              Seasonal Collection
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div
                key={item}
                className="group overflow-hidden rounded-lg shadow-md"
              >
                <div className="relative aspect-square overflow-hidden bg-gray-200">
                  <img
                    src={`https://images.unsplash.com/photo-${1550355291079 + item * 2000}?w=400&h=400&fit=crop`}
                    alt={`Gallery ${item}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-charcoal text-biscuit"
      >
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gold text-sm tracking-widest font-light mb-4">
            GET IN TOUCH
          </p>
          <h3 className="text-4xl sm:text-5xl font-light mb-8 tracking-tight">
            Contact Our Team
          </h3>
          <p className="text-biscuit/80 font-light mb-8 leading-relaxed">
            Have questions about our collection? We'd love to hear from you.
            Reach out to our team for personalized assistance.
          </p>
          <a
            href="tel:+919440768980"
            className="inline-block px-12 py-4 bg-biscuit text-charcoal text-sm tracking-widest hover:bg-gold transition-all duration-300 font-light"
          >
            CALL US NOW
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-charcoal text-biscuit/70 py-12 px-4 sm:px-6 lg:px-8 border-t border-gold/20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">
          <div>
            <h4 className="text-biscuit font-light tracking-widest mb-4">
              LUXE GARMENTS
            </h4>
            <p className="text-sm font-light">
              Timeless fashion, contemporary design.
            </p>
          </div>
          <div>
            <p className="text-sm font-light tracking-widest mb-4">
              QUICK LINKS
            </p>
            <div className="space-y-2 text-sm font-light">
              <p>
                <a
                  href="#collection"
                  className="hover:text-gold transition-colors"
                >
                  Collection
                </a>
              </p>
              <p>
                <a
                  href="#location"
                  className="hover:text-gold transition-colors"
                >
                  Store
                </a>
              </p>
              <p>
                <a
                  href="#contact"
                  className="hover:text-gold transition-colors"
                >
                  Contact
                </a>
              </p>
            </div>
          </div>
          <div>
            <p className="text-sm font-light tracking-widest mb-4">FOLLOW</p>
            <div className="space-y-2 text-sm font-light">
              <p>
                <a href="#" className="hover:text-gold transition-colors">
                  Instagram
                </a>
              </p>
              <p>
                <a href="#" className="hover:text-gold transition-colors">
                  Facebook
                </a>
              </p>
              <p>
                <a href="#" className="hover:text-gold transition-colors">
                  Twitter
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="border-t border-gold/20 pt-8 text-center text-xs font-light">
          <p>&copy; 2026 Luxe Garments. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
