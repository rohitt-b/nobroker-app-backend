import { Request, Response } from 'express';
import prisma from '../prisma/client';

export const getAllProperties = async (_: Request, res: Response) => {
  const properties = await prisma.property.findMany({ include: { owner: true } });
  res.json(properties);
};

export const createProperty = async (req: Request, res: Response) => {
  const { title, description, location, price } = req.body;
  const ownerId = (req as any).user.id;

  try {
    const property = await prisma.property.create({
      data: { title, description, location, price, ownerId },
    });
    res.status(201).json(property);
  } catch (err) {
    res.status(500).json({ error: 'Could not create property.' });
  }
};
