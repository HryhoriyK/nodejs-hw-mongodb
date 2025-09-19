import express from 'express';
import pino from 'pino-http';
import cors from 'cors';

import { getAllContacts, getContactById } from './services/contacts.js';

export const createServer = () => {
  const app = express();

  app.use(express.json());
  app.use(cors());
  app.use(
    pino({
      transport: {
        target: 'pino-pretty',
      },
    })
  );

  app.get('/contacts', async (req, res, next) => {
    try {
      const contacts = await getAllContacts();
      res.json({ status: 200, message: 'Successfully found contacts!', data: contacts });
    } catch (err) {
      next(err);
    }
  });

  app.get('/contacts/:id', async (req, res, next) => {
    try {
      const { id } = req.params;
      const contact = await getContactById(id);
      if (!contact) {
        return res.status(404).json({ status: 404, message: `Contact with ID ${id} not found` });
      }
      res.json({ status: 200, message: `Contact details for ID ${id}`, data: contact });
    } catch (err) {
      next(err);
    }
  });

  app.use((err, req, res, next) => {
    console.error('Server error:', err);
    res.status(500).json({ message: 'Something went wrong', error: err.message });
  });

  app.use((req, res) => {
    res.status(404).json({ message: 'Not found' });
  });

  return app;
};