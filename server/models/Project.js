import { Schema, model } from "mongoose";

const projectDataSchema = new Schema(
  {
    name: String,
    status: { type: Boolean, default: true },
    desc: String,
  },
  { timestamps: true }
);

const projectSchema = new Schema(
  {
    name: {
      type: String,
    },

    data: [projectDataSchema],
  },
  {
    timestamps: true,
  }
);

const Project = model("Project", projectSchema);
export default Project;
