import { Request, Response } from "express";
import { DesignProject } from "../models/designProjectModel";

// Fungsi untuk mendapatkan semua proyek desain
export const getDesignProjects = async (req: Request, res: Response) => {
  try {
    const projects = await DesignProject.find({});
    res.status(200).json({ success: true, data: projects });
  } catch (error) {
    res.status(500).json({ success: false, error, data: {} });
  }
};

// Fungsi untuk menambahkan proyek desain baru
export const addDesignProject = async (req: Request, res: Response) => {
  try {
    const project = await DesignProject.create(req.body);
    res.status(201).json({ success: true, data: project });
  } catch (error) {
    res.status(500).json({ success: false, error, data: {} });
  }
};

// Fungsi untuk memperbarui proyek desain berdasarkan _id
export const updateDesignProject = async (req: Request, res: Response) => {
  try {
    const project = await DesignProject.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json({ success: true, data: project });
  } catch (error) {
    res.status(500).json({ success: false, error, data: {} });
  }
};

// Fungsi untuk menghapus proyek desain berdasarkan _id
export const deleteDesignProject = async (req: Request, res: Response) => {
  try {
    await DesignProject.findByIdAndDelete(req.params.id);
    res.status(200).json({ success: true, data: {} });
  } catch (error) {
    res.status(500).json({ success: false, error, data: {} });
  }
};

// Fungsi untuk mendapatkan detail proyek desain berdasarkan _id
export const getDesignProjectById = async (req: Request, res: Response) => {
  try {
    const project = await DesignProject.findById(req.params.id);
    if (!project) {
      return res
        .status(404)
        .json({ success: false, error: "Project not found" });
    }
    res.status(200).json({ success: true, data: project });
  } catch (error) {
    res.status(500).json({ success: false, error, data: {} });
  }
};

// Fungsi untuk mendapatkan semua proyek kod
