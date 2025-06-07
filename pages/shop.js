const products = [
  { name: "Sticker Pack Vol. 1", price: "$3", description: "Original chaos collection", link: "https://buy.stripe.com/test1" },
  { name: "Unfiltered Quotes", price: "$2", description: "Brutally honest text stickers", link: "https://buy.stripe.com/test2" },
  { name: "Dark Humor Pack", price: "$2.50", description: "NSFW sticker drop", link: "https://buy.stripe.com/test3" },
  { name: "Digital Protest Pack", price: "$3", description: "Say what you mean", link: "https://buy.stripe.com/test4" },
  { name: "Unfiltered Politics", price: "$2", description: "Slam both sides equally", link: "https://buy.stripe.com/test5" },
  { name: "Laptop Slappers", price: "$1.50", description: "Loud messages for quiet people", link: "https://buy.stripe.com/test6" },
  { name: "Offbeat Aesthetics", price: "$2", description: "Weird is the vibe", link: "https://buy.stripe.com/test7" },
  { name: "Minimal Pack", price: "$1", description: "Clean. Sharp. Punchy.", link: "https://buy.stripe.com/test8" },
  { name: "Zine Style Vol. 1", price: "$2.25", description: "DIY digital flair", link: "https://buy.stripe.com/test9" },
  { name: "Absurd Pack", price: "$2", description: "Nothing makes sense and that’s the point", link: "https://buy.stripe.com/test10" },
  { name: "Rude Affirmations", price: "$2", description: "Stay positive, but don’t lie", link: "https://buy.stripe.com/test11" },
  { name: "Everything Bundle", price: "$5", description: "All current packs in one", link: "https://buy.stripe.com/test12" },
];

export default function Shop() {
  return (
    <div style={{ padding: "3rem", fontFamily: "monospace" }}>
      <h1 style={{ fontSize: "2rem", textAlign: "center", marginBottom: "2rem" }}>
        🛒 Unfiltered Goods – Shop
      </h1>
<div style={{
  display: "grid",
gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
  gap: "2rem",
  maxWidth: "1100px",
  margin: "0 auto"
}}>
        {products.map((product, i) => (
          <div
            key={i}
            style={{
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "1.5rem",
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
              textAlign: "left",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between"
            }}
          >
            <div>
              <h2 style={{ fontSize: "1.2rem", marginBottom: "0.5rem" }}>{product.name}</h2>
              <p style={{ marginBottom: "0.5rem" }}>{product.description}</p>
              <p style={{ fontWeight: "bold", marginBottom: "1rem" }}>{product.price}</p>
            </div>
            <a
              href={product.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: "#000",
                color: "#fff",
                padding: "0.5rem 1rem",
                borderRadius: "4px",
                textDecoration: "none",
                fontWeight: "bold",
                textAlign: "center"
              }}
            >
              Buy Now
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
