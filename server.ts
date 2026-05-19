import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Route for Contact Form
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, website, pricingModel, message } = req.body;

      if (!name || !email) {
        return res.status(400).json({ error: "Name and Email are required" });
      }

      const accessKey = process.env.CONTACT_API_KEY || "450fe778-45f7-4611-b116-41eb1319a2d9";

      console.log("Submitting to Web3Forms...");
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          access_key: accessKey,
          name,
          email,
          website,
          subject: `New Inquiry from ${name} - ${pricingModel}`,
          from_name: "Portfolio Contact Form",
          message: `
            Name: ${name}
            Email: ${email}
            Website: ${website || 'N/A'}
            Pricing Model: ${pricingModel}
            
            Message:
            ${message}
          `
        }),
      });

      const contentType = response.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        const result = await response.json();
        if (result.success) {
          return res.status(200).json({ status: "ok" });
        } else {
          console.error("Web3Forms error:", result);
          return res.status(500).json({ error: result.message || "Failed to send message" });
        }
      } else {
        const text = await response.text();
        console.error(`Web3Forms returned non-JSON response (Status ${response.status}):`, text.substring(0, 200));
        return res.status(500).json({ error: "Upstream service returned unexpected response format" });
      }
    } catch (error) {
      console.error("Contact API error:", error);
      return res.status(500).json({ error: "Internal server error" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
