import express from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = Number(process.env.PORT) || 3000;

  app.use(express.json());

  // In-memory messages store
  const contactMessages: Array<{
    id: string;
    name: string;
    email: string;
    subject: string;
    message?: string;
    plan?: string;
    createdAt: string;
  }> = [];

  // API Route: Contact submission
  app.post('/api/contact', (req, res) => {
    const { name, email, subject, message, plan } = req.body;

    if (!name || !email || !subject) {
      return res.status(400).json({
        success: false,
        error: 'Name, email, and subject are required fields.',
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        error: 'Please provide a valid email address.',
      });
    }

    const newMessage = {
      id: 'msg_' + Date.now() + '_' + Math.random().toString(36).substring(2, 7),
      name: String(name).trim(),
      email: String(email).trim(),
      subject: String(subject).trim(),
      message: message ? String(message).trim() : '',
      plan: plan ? String(plan).trim() : 'General Inquiry',
      createdAt: new Date().toISOString(),
    };

    contactMessages.push(newMessage);
    console.log(
      `[Contact Form Received] From ${newMessage.name} (${newMessage.email}): "${newMessage.subject}"`
    );

    return res.status(200).json({
      success: true,
      message:
        'Thank you! Your message has been received by M Shahid Islam. We will connect with you via email or WhatsApp shortly.',
      data: {
        id: newMessage.id,
        createdAt: newMessage.createdAt,
      },
    });
  });

  // API Route: Health check
  app.get('/api/health', (req, res) => {
    res.json({
      status: 'ok',
      service: 'M Shahid Islam Portfolio & Sales Engineering',
      contactCount: contactMessages.length,
    });
  });

  // Vite development middleware or production static serving
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  } else {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
