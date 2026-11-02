
const products = [
  { name: "Noir Black Hoop Jhumki", price: 890, category: "EARRINGS" },
  { name: "Multicolour Hoop Earrings", price: 750, category: "EARRINGS" },
  { name: "Soft Pink Pearl Hoops", price: 700, category: "EARRINGS" },
  { name: "Sky Blue Jhumki Hoops", price: 890, category: "EARRINGS" },
  { name: "Ruby Red Jhumki Hoops", price: 890, category: "EARRINGS" },
  { name: "Emerald Green Jhumki Hoops", price: 890, category: "EARRINGS" },
  { name: "Ruby Tassel Hoops", price: 820, category: "EARRINGS" },
  { name: "Emerald Green Hoops", price: 700, category: "EARRINGS" },
  { name: "Noir Black Charm Hoops", price: 780, category: "EARRINGS" },
  { name: "Turquoise Blue Anklet", price: 1250, category: "ANKLETS" },
  { name: "Emerald Gold-Tone Anklet", price: 1000, category: "ANKLETS" },
  { name: "White Pearl Aura Anklet", price: 1150, category: "ANKLETS" },
  { name: "Ruby Droplets Anklet", price: 1699, category: "NEW ARRIVAL" },
];

const whatsapp = "917267868110";

function orderLink(product: string) {
  return `https://wa.me/${whatsapp}?text=${encodeURIComponent(
    `Hello Samore Luxe, I would like to order ${product}. Please share the details.`
  )}`;
}

export default function Home() {
  return (
    <main>
      <div className="announcement">
        Thoughtfully chosen jewellery, delivered across India
      </div>

      <header className="navbar">
        <a className="brand" href="#">
          SAMORE LUXE
          <span>JEWELLERY DESIGN BY SAMIA</span>
        </a>
        <nav>
          <a href="#collections">Collections</a>
          <a href="#new-arrivals">New Arrivals</a>
          <a href="#our-story">Our Story</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="nav-order" href={`https://wa.me/${whatsapp}`}>
          Order on WhatsApp ↗
        </a>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">THE ART OF EVERYDAY ELEGANCE</p>
          <h1>
            A little
            <br />
            <em>luxury,</em> a lasting
            <br />
            impression.
          </h1>
          <p className="hero-description">
            Jewellery that celebrates your individuality.
            Discover distinctive pieces designed to make
            your everyday moments feel extraordinary.
          </p>
          <a className="primary-button" href="#collections">
            DISCOVER THE COLLECTION <span>↗</span>
          </a>
          <p className="hero-note">JEWELLERY DESIGN BY SAMIA</p>
        </div>

        <div className="hero-art" role="img" aria-label="Elegant jewellery-inspired rose-gold artwork">
          <div className="art-orbit orbit-one" />
          <div className="art-orbit orbit-two" />
          <div className="art-stone">S</div>
          <div className="art-caption">
            <span>THE SIGNATURE EDIT</span>
            <span>TIMELESS BY DESIGN</span>
          </div>
        </div>
      </section>

      <section className="intro">
        <p className="eyebrow">MORE THAN AN ACCESSORY</p>
        <h2>Made to express <em>you.</em></h2>
        <p>
          Discover thoughtful details, beautiful colours and
          distinctive designs that bring a little magic to
          every occasion.
        </p>
      </section>

      <section className="collection section" id="collections">
        <div className="section-heading">
          <div>
            <p className="eyebrow">THE SAMORE COLLECTION</p>
            <h2>Find your <em>favourite.</em></h2>
          </div>
          <p>Pieces for celebrations, everyday elegance and everything in between.</p>
        </div>

        <div className="product-grid">
          {products.map((product, index) => (
            <article className="product-card" key={product.name}>
              <a
                className={`product-art art-${index + 1}`}
                href={orderLink(product.name)}
                target="_blank"
                rel="noreferrer"
                aria-label={`Enquire about ${product.name}`}
              >
                <span className="product-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="jewel-symbol">
                  {index < 9 ? "✳" : "◇"}
                </span>
                <span className="product-category">{product.category}</span>
              </a>
              <div className="product-details">
                <div>
                  <h3>{product.name}</h3>
                  <p>Designed for your moments</p>
                </div>
                <span className="price">
                  ₹{product.price.toLocaleString("en-IN")}
                </span>
              </div>
              <a
                className="product-order"
                href={orderLink(product.name)}
                target="_blank"
                rel="noreferrer"
              >
                ENQUIRE TO ORDER ↗
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="new-arrival" id="new-arrivals">
        <div>
          <p className="eyebrow">A NEW FAVOURITE AWAITS</p>
          <h2>Something beautiful<br />is <em>on its way.</em></h2>
          <p>
            Meet our Ruby Droplets Anklet, a statement of
            colour, charm and understated elegance.
          </p>
          <a className="primary-button" href={orderLink("Ruby Droplets Anklet")}>
            DISCOVER THE NEW ARRIVAL ↗
          </a>
        </div>
        <div className="arrival-art" aria-hidden="true">
          <span>RUBY</span>
          <span className="arrival-gem">◇</span>
          <span>DROPLETS</span>
        </div>
      </section>

      <section className="gifting section">
        <p className="eyebrow">GIVE SOMETHING MEANINGFUL</p>
        <h2>Beautifully chosen.<br /><em>Lovingly gifted.</em></h2>
        <p>
          For birthdays, celebrations or simply because —
          make their moment special with jewellery from Samore Luxe.
        </p>
        <a className="text-link" href={`https://wa.me/${whatsapp}?text=${encodeURIComponent("Hello Samore Luxe, please share your jewellery gifting options.")}`}>
          EXPLORE GIFTING OPTIONS ↗
        </a>
      </section>

      <section className="story section" id="our-story">
        <div className="story-mark">SL</div>
        <div>
          <p className="eyebrow">THE STORY BEHIND THE BRAND</p>
          <h2>A vision of beauty,<br /><em>by Samia.</em></h2>
          <p>
            Samore Luxe is a celebration of personal style,
            thoughtful design and the little details that
            make a piece feel uniquely yours. Every collection
            is an invitation to express yourself with confidence.
          </p>
          <a className="text-link" href={`https://www.instagram.com/samoreluxe/`}>
            FOLLOW OUR JOURNEY ON INSTAGRAM ↗
          </a>
        </div>
      </section>

      <section className="contact section" id="contact">
        <p className="eyebrow">YOUR NEXT FAVOURITE PIECE AWAITS</p>
        <h2>Let’s find something <em>beautiful.</em></h2>
        <p>Questions, gifting enquiries or orders — we would love to hear from you.</p>
        <a className="primary-button" href={`https://wa.me/${whatsapp}?text=${encodeURIComponent("Hello Samore Luxe, I would like to know more about your collection.")}`}>
          CHAT WITH US ON WHATSAPP ↗
        </a>
        <p className="contact-email">
          <a href="mailto:samoreluxe@gmail.com">samoreluxe@gmail.com</a>
        </p>
      </section>

      <footer className="footer">
        <a className="brand" href="#">
          SAMORE LUXE
          <span>JEWELLERY DESIGN BY SAMIA</span>
        </a>
        <p>Timeless details. Your own kind of beautiful.</p>
        <a href="https://www.instagram.com/samoreluxe/" target="_blank" rel="noreferrer">
          Instagram ↗
        </a>
        <small>© {new Date().getFullYear()} Samore Luxe. All rights reserved.</small>
      </footer>
    </main>
  );
}
