import express from "express";
import {
  getDesignProjects,
  addDesignProject,
  updateDesignProject,
  deleteDesignProject,
  getDesignProjectById,
} from "../controller/designProjectController";
import {
  getCodeProjects,
  addCodeProject,
  deleteCodeProject,
  getCodeProjectById,
  updateCodeProject,
} from "../controller/codeProjectController";

const router = express.Router();

// Rute untuk mendapatkan semua proyek desain
router.get("/design-projects", getDesignProjects);

// Rute untuk menambahkan proyek desain baru
router.post("/design-projects", addDesignProject);

// Rute untuk memperbarui proyek desain berdasarkan _id
router.put("/design-projects/:id", updateDesignProject);

// Rute untuk menghapus proyek desain berdasarkan _id
router.delete("/design-projects/:id", deleteDesignProject);

// Rute untuk mendapatkan detail proyek desain berdasarkan _id
router.get("/design-projects/:id", getDesignProjectById);

// Rute untuk mendapatkan semua proyek kode
router.get("/code-projects", getCodeProjects);

// Rute untuk menambahkan proyek kode baru
router.post("/code-projects", addCodeProject);

// Rute untuk memperbarui proyek kode berdasarkan _id
router.put("/code-projects/:id", updateCodeProject);

// Rute untuk menghapus proyek kode berdasarkan _id
router.delete("/code-projects/:id", deleteCodeProject);

// Rute untuk mendapatkan detail proyek kode berdasarkan _id
router.get("/code-projects/:id", getCodeProjectById);

export default router;
