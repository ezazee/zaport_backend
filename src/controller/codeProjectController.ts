import { Request, Response } from "express";
import { CodeProject } from "../models/codeProjectModel";

export const getCodeProjects = async (req: Request, res: Response) => {
  try {
    const projects = await CodeProject.find({});
    res.status(200).json({ success: true, data: projects });
  } catch (error) {
    res.status(500).json({ success: false, error });
  }
};

// Fungsi untuk menambahkan proyek kode baru
export const addCodeProject = async (req: Request, res: Response) => {
  try {
    const project = await CodeProject.create(req.body);
    res.status(201).json({ success: true, data: project });
  } catch (error) {
    res.status(500).json({ success: false, error });
  }
};

// Fungsi untuk memperbarui proyek kode berdasarkan _id
export const updateCodeProject = async (req: Request, res: Response) => {
  try {
    const project = await CodeProject.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json({ success: true, data: project });
  } catch (error) {
    res.status(500).json({ success: false, error });
  }
};

// Fungsi untuk menghapus proyek kode berdasarkan _id
export const deleteCodeProject = async (req: Request, res: Response) => {
  try {
    await CodeProject.findByIdAndDelete(req.params.id);
    res.status(200).json({ success: true, data: {} });
  } catch (error) {
    res.status(500).json({ success: false, error });
  }
};

// Fungsi untuk mendapatkan detail proyek kode berdasarkan _id
export const getCodeProjectById = async (req: Request, res: Response) => {
  try {
    const project = await CodeProject.findById(req.params.id);
    if (!project) {
      return res
        .status(404)
        .json({ success: false, error: "Project not found" });
    }
    res.status(200).json({ success: true, data: project });
  } catch (error) {
    res.status(500).json({ success: false, error });
  }
};
