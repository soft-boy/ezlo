/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// Data for the components
const product = {
  name: "Kirkland Signature Lime Sparkling Energy Water",
  tagline: "Spark your day. Brighten your night.",
  heroImage: "assets/hero.jpg", // The user-provided product image
};

const features = [
  {
    title: "Pure, Clean Energy",
    description: "Plant-based caffeine + B-vitamins deliver a smooth, natural boost—no jitters, no crash. Keeps you sharp and energized from sunrise to late-night grind."
  },
  {
    title: "Zero Sugar. Zero Guilt.",
    description: "0 calories, 0 sugar, 0 sweeteners—just sparkling, lime-kissed refreshment. Nothing artificial, only naturally flavored effervescence."
  },
  {
    title: "Anywhere, Anytime Power",
    description: "Grab-and-go 12 fl oz can fits effortlessly in your gym bag, car cup holder, or desk drawer. Hydrate and energize wherever your day (or night) takes you."
  }
];

const galleryImages = [
    {
      src: "assets/hero.jpg",
      alt: "A hand holding a can of Kirkland Signature Lime Sparkling Energy Water."
    },
    {
      src: "assets/product.jpg",
      alt: "Kirkland Signature Lime Sparkling Energy Water can alongside other sparkling water flavors."
    }
];

const testimonials = [
  {
    quote: "Exactly the boost I need for marathon coding sessions.",
    author: "Alex R., Verified Buyer"
  },
  {
    quote: "Tastes like a fresh squeeze of lime with bubbles—without the sugar crash of typical energy drinks.",
    author: "Jamie L., Fitness Enthusiast"
  },
  {
    quote: "Finally, an energy drink that doesn’t feel heavy. I keep a case at work and at home.",
    author: "Priya M., Busy Mom & Entrepreneur"
  }
];

const faqs = [
    {
        question: "How much caffeine is in each can?",
        answer: "Each can contains about the same natural caffeine as a small cup of coffee, sourced from plant-based ingredients for a smooth lift without jitters."
    },
    {
        question: "Is it safe for keto, vegan, or gluten-free diets?",
        answer: "Absolutely. It’s naturally keto-friendly, vegan, and gluten-free, with zero sugar or sweeteners."
    },
    {
        question: "Can I drink more than two cans a day?",
        answer: "We recommend enjoying up to two cans daily for a steady energy boost, but always listen to your body and stay hydrated."
    },
    {
        question: "Are the cans recyclable?",
        answer: "Yes! Our aluminum cans are 100% recyclable, supporting a cleaner planet."
    },
    {
        question: "Does it contain any artificial sweeteners or flavors?",
        answer: "No. Only natural lime flavor and plant-based caffeine—no artificial sweeteners, colors, or preservatives."
    }
];


// Components
const Header = () => (
  <header className="header">
    <div className="container">
      <div className="logo">⚡ Lime Spark</div>
      <nav>
        <a href="#pricing" className="cta-button">Buy Now</a>
      </nav>
    </div>
  </header>
);

const Hero = () => (
  <section className="hero">
    <div className="hero-content container">
      <div className="hero-text">
        <h1>{product.name}</h1>
        <p className="tagline">{product.tagline}</p>
        <a href="#pricing" className="cta-button">Shop Now</a>
      </div>
      <div className="hero-image-container">
        <img src={product.heroImage} alt="Can of Kirkland Lime Sparkling Energy Water" className="hero-image" />
      </div>
    </div>
  </section>
);

const Features = () => (
  <section className="features" aria-labelledby="features-heading">
    <div className="container">
      <h2 id="features-heading" className="section-title">✨ Why You’ll Love It</h2>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Gallery = () => (
    <section className="gallery" aria-labelledby="gallery-heading">
        <div className="container">
            <h2 id="gallery-heading" className="section-title">📸 A Closer Look</h2>
            <div className="gallery-grid">
                {galleryImages.map((image, index) => (
                    <div className="gallery-item" key={index}>
                        <img src={image.src} alt={image.alt} />
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const Story = () => (
    <section className="story" aria-labelledby="story-heading">
        <div className="container">
            <h2 id="story-heading" className="section-title">💚 Our Story: Born from Late-Night Sparks</h2>
            <p>It all started with a group of entrepreneurs working deep into the night. Coffee was too heavy, energy drinks too sugary. They dreamed of something <strong>clean, light, and exhilarating</strong>—a drink that could <strong>match their creative energy without the crash</strong>.</p>
            <p>After months of experimenting with plant-based caffeine and perfectly balanced bubbles, <strong>Kirkland Signature Lime Sparkling Energy Water</strong> was born. It’s more than a drink; it’s a <strong>spark of innovation in every can</strong>—made for builders, dreamers, and anyone chasing big ideas.</p>
        </div>
    </section>
);

const Testimonials = () => (
    <section className="testimonials" aria-labelledby="testimonials-heading">
        <div className="container">
            <h2 id="testimonials-heading" className="section-title">⭐ Customer Raves</h2>
            <div className="testimonials-grid">
                {testimonials.map((testimonial, index) => (
                    <blockquote className="testimonial-card" key={index}>
                        <p>“{testimonial.quote}”</p>
                        <footer>— {testimonial.author}</footer>
                    </blockquote>
                ))}
            </div>
        </div>
    </section>
);

const Pricing = () => (
    <section id="pricing" className="pricing" aria-labelledby="pricing-heading">
        <div className="container">
            <h2 id="pricing-heading" className="section-title">🛒 Pricing & Deals</h2>
            <div className="pricing-table-container">
                <div className="pricing-card best-value">
                     <span className="best-value-badge">Best Value</span>
                    <h3>Dozen (12 cans)</h3>
                    <p className="price">$10</p>
                    <p className="shipping">FREE Shipping</p>
                    <p className="description">Perfect for home, office, or gym stock-ups.</p>
                    <button className="cta-button">Add to Cart</button>
                </div>
                <div className="pricing-card">
                    <h3>Single Can</h3>
                    <p className="price">$1</p>
                    <p className="shipping">FREE Shipping</p>
                    <p className="description">Try one today and feel the spark.</p>
                    <button className="cta-button">Add to Cart</button>
                </div>
            </div>
        </div>
    </section>
);

const ProductSnapshot = () => (
    <section className="snapshot" aria-labelledby="snapshot-heading">
        <div className="container">
            <h2 id="snapshot-heading" className="section-title">Product Snapshot</h2>
            <div className="snapshot-table">
                <div className="snapshot-row">
                    <div className="snapshot-feature"><strong>Flavor</strong></div>
                    <div className="snapshot-detail">Bright, tangy Lime</div>
                </div>
                <div className="snapshot-row">
                    <div className="snapshot-feature"><strong>Size</strong></div>
                    <div className="snapshot-detail">12 fl oz (355 mL)</div>
                </div>
                <div className="snapshot-row">
                    <div className="snapshot-feature"><strong>Calories</strong></div>
                    <div className="snapshot-detail">0</div>
                </div>
                <div className="snapshot-row">
                    <div className="snapshot-feature"><strong>Sugar</strong></div>
                    <div className="snapshot-detail">0 g</div>
                </div>
                 <div className="snapshot-row">
                    <div className="snapshot-feature"><strong>Energy</strong></div>
                    <div className="snapshot-detail">Plant-based caffeine & B-vitamins*</div>
                </div>
                <div className="snapshot-row">
                    <div className="snapshot-feature"><strong>Lifestyle</strong></div>
                    <div className="snapshot-detail">Vegan • Gluten-free • Keto-friendly</div>
                </div>
            </div>
            <p className="footnote">*Provides a gentle, sustained energy lift to keep you focused and motivated.</p>
        </div>
    </section>
);

const FAQ = () => (
    <section className="faq" aria-labelledby="faq-heading">
        <div className="container">
            <h2 id="faq-heading" className="section-title">❓ Frequently Asked Questions</h2>
            <div className="faq-grid">
                {faqs.map((faq, index) => (
                    <div className="faq-item" key={index}>
                        <h3>{faq.question}</h3>
                        <p>{faq.answer}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const Loyalty = () => (
    <section className="loyalty" aria-labelledby="loyalty-heading">
        <div className="container">
            <h2 id="loyalty-heading" className="section-title">💎 Loyalty & Subscription Options</h2>
            <p>Love staying energized every day? Join our <strong>Lime Spark Loyalty Club</strong> and save more:</p>
            <ul>
                <li><strong>Subscribe & Save 10%</strong> – Choose weekly, bi‑weekly, or monthly deliveries. Cancel anytime.</li>
                <li><strong>Automatic Free Shipping</strong> – Every subscription order ships free, no minimums.</li>
                <li><strong>Exclusive Perks</strong> – Early access to new flavors and limited edition runs.</li>
                <li><strong>Earn Rewards</strong> – Every dollar spent earns points toward free cases and special gifts.</li>
            </ul>
             <button className="cta-button">Subscribe Now</button>
        </div>
    </section>
);

const Footer = () => (
    <footer className="footer">
        <div className="container">
            <h3>🚀 Ready to Feel the Spark?</h3>
            <p>Power every moment—from first light to last call—with Kirkland Signature Lime Sparkling Energy Water.</p>
            <p><strong>Free shipping on every order, always.</strong></p>
            <small>*Disclaimer: Nutritional information may vary. Check the can for the latest details.</small>
        </div>
    </footer>
);


const App = () => (
  <>
    <Header />
    <main>
        <Hero />
        <Features />
        <Gallery />
        <Story />
        <Testimonials />
        <Pricing />
        <ProductSnapshot />
        <FAQ />
        <Loyalty />
    </main>
    <Footer />
  </>
);


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);