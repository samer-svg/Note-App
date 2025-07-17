import { PrismaClient } from '../src/generated/prisma/index.js'

const prisma = new PrismaClient();

export const getNotes =  async (req, res) => {
  try {
    const getNotes = await prisma.note.findMany();
    res.status(200).json(getNotes);
  } catch (err) {
    res.status(400).json({msg : err.message})
  }
}

export const getNote = async (req, res) => {
  const { id } = req.params;
  try {
    const getNote = await prisma.note.findUnique({
      where: { id: Number(id) }
    })
    if (!getNote) {
      res.status(404).json({msg : 'note not found'})
    }
    res.status(200).json(getNote);
  } catch (err) {
    res.status(404).json({msg : msg.err})
  }
}

export const postNote =  async (req, res) => {
    const { title, content } = req.body;
    if (!title) {
      return res.status(400).json({ error: 'Title is required' });
    }
      if (!content) {
      return res.status(400).json({ error: 'Content is required' });
    }
  try {
    const newNote = await prisma.note.create({
      data: {
        title,
        content
      },
    })
    res.status(201).json(newNote);
  } catch (err) {
    err.status(400).json({ msg: err.message });
    }
}

export const updateNote = async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  if (!title) {
    return res.status(400).json({ msg: 'Title is required' });
  }

  if (!content) {
    return res.status(400).json({ msg: 'Content is required' });
  }
  try {
    await prisma.note.update({
      data: { title, content },
      where: { id: Number(id) },
    })
    res.status(200).json({msg : 'updated!'})
  } catch (err) {
    res.status(400).json({msg : 'Note ID not found'})
  }
}

export const deleteNote = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.note.delete({
      where: { id: Number(id) }
    })
    res.status(200).json({msg : 'deleted!'});
  } catch (err) {
    res.status(500).json({ msg: 'note not exists' })
  }
}