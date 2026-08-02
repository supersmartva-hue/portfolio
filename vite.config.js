import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { Resend } from "resend";

function contactApiPlugin() {
  return {
    name: "contact-api",
    configureServer(server) {
      server.middlewares.use("/api/contact", async (req, res, next) => {
        if (req.method === "OPTIONS") {
          res.statusCode = 204;
          res.end();
          return;
        }

        if (req.method !== "POST") {
          next();
          return;
        }

        const env = loadEnv(server.config.mode, process.cwd(), "");
        const apiKey = env.RESEND_API_KEY || process.env.RESEND_API_KEY;
        const toEmail =
          env.CONTACT_EMAIL || process.env.CONTACT_EMAIL || "supersmartva@gmail.com";

        try {
          const chunks = [];
          for await (const chunk of req) chunks.push(chunk);
          const raw = Buffer.concat(chunks).toString("utf8");
          const body = raw ? JSON.parse(raw) : {};
          const name = String(body.name || "").trim();
          const email = String(body.email || "").trim();
          const message = String(body.message || "").trim();

          if (!apiKey) {
            res.statusCode = 500;
            res.setHeader("Content-Type", "application/json");
            res.end(JSON.stringify({ error: "Email service is not configured" }));
            return;
          }

          if (!name || !email || !message) {
            res.statusCode = 400;
            res.setHeader("Content-Type", "application/json");
            res.end(JSON.stringify({ error: "Name, email, and message are required" }));
            return;
          }

          const resend = new Resend(apiKey);
          const { error } = await resend.emails.send({
            from: "Portfolio Contact <onboarding@resend.dev>",
            to: [toEmail],
            replyTo: email,
            subject: `Portfolio message from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
            html: `
              <div style="font-family:sans-serif;line-height:1.6;color:#111">
                <h2 style="margin:0 0 12px">New portfolio message</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p style="white-space:pre-wrap;margin-top:16px">${message.replace(/</g, "&lt;")}</p>
              </div>
            `,
          });

          res.setHeader("Content-Type", "application/json");
          if (error) {
            console.error("Resend error:", error);
            res.statusCode = 500;
            res.end(JSON.stringify({ error: "Failed to send message" }));
            return;
          }

          res.statusCode = 200;
          res.end(JSON.stringify({ ok: true }));
        } catch (err) {
          console.error("Contact API error:", err);
          res.statusCode = 500;
          res.setHeader("Content-Type", "application/json");
          res.end(JSON.stringify({ error: "Failed to send message" }));
        }
      });
    },
  };
}

export default defineConfig({
  plugins: [react(), tailwindcss(), contactApiPlugin()],
});
