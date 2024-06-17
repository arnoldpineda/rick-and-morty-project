import express, { Router } from 'express';

const charactersRouter: Router = express.Router();

charactersRouter.get('/', (req, res) => {
  res.send('Endpoint to fetch all characters');
});

charactersRouter.get('/:id', (req, res) => {
  const characterId = req.params.id;
  res.send(`Endpoint to fetch character with ID ${characterId}`);
});

export default charactersRouter;
