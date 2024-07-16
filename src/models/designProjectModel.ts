import mongoose, { Schema, Document } from "mongoose";

interface IDesignProject extends Document {
  client: string;
  duration: string;
  category: string;
  title: string;
  description: string;
  image: string;
  slug: string;
}

const DesignProjectSchema: Schema = new Schema({
  client: { type: String, required: true },
  duration: { type: String, required: true },
  category: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  slug: { type: String, required: true },
});

const DesignProject = mongoose.model<IDesignProject>(
  "DesignProject",
  DesignProjectSchema
);

export { DesignProject, IDesignProject };
