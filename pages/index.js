export default function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "2rem",
        fontFamily: "monospace",
        textAlign: "center",
      }}
    >
      <img
        src="/UNFILTERED_LOGO.png"
        alt="Unfiltered Goods Logo"
        style={{ width: "250px", marginBottom: "2rem" }}
      />

      <h1
        style={{
          fontSize: "2.2rem",
          fontWeight: "bold",
          lineHeight: "1.4",
          textTransform: "uppercase",
          marginBottom: "1.5rem",
        }}
      >
        Random Ideas. All Original.
        <br />
        Some Dumb. Some Genius.
      </h1>

      <p
        style={{
          fontSize: "1.3rem",
          fontWeight: "500",
          lineHeight: "1.6",
          marginBottom: "2rem",
        }}
      >
        welcome to unfiltered GOODS
        <br />
        <span
          style={{
            fontSize: "1.6rem",
            display: "block",
            margin: "0.2rem 0",
          }}
        >
          – – – – – – – – – – – – – – – – – – – –
        </span>
        the limited-run brand built from chaos
      </p>
import Link from "next/link";

// ...inside your component

<Link href="/shop" passHref>
  <a
    style={{
      marginBottom: "3rem",
      display: "inline-block",
      padding: "1rem 2rem",
      backgroundColor: "#fff",
      color: "#000",
      textDecoration: "none",
      fontWeight: "bold",
      borderRadius: "4px",
      border: "2px solid #000"
    }}
    Shop Now
  </a>
</Link>

    </div>
  );
}
