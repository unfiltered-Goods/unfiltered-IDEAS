import { supabase } from "@/lib/supabase";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const { name, idea, recaptchaToken } = req.body;
  const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;

  const recaptchaRes = await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`,
  });

  const recaptchaData = await recaptchaRes.json();
  if (!recaptchaData.success) {
    return res.status(400).json({ error: "Failed reCAPTCHA" });
  }

  if (!name || !idea || idea.length > 500 || idea.includes("http")) {
    return res.status(400).json({ error: "Spam or invalid input" });
  }

  const { error } = await supabase.from("ideas").insert([
    { name, idea, ip_address: ip }
  ]);

  if (error) return res.status(500).json({ error: "Database error" });

  res.status(200).json({ message: "Idea submitted!" });
}
