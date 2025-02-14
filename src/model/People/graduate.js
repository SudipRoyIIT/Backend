import mongoose from "mongoose";

const { Schema } = mongoose;

const studentSchema = new Schema(
  {
    name: {
      type: [String],
      required: true,
      description: "must be an array of strings and is required",
    },
    enrolledIn: {
      type: String,
      enum: ["PhD Scholar", "M.Tech", "B.Tech", "Intern"],
      required: true,
      description:
        "must be a string, is required and will be one of the enum values",
    },
    graduating_year: {
      type: String,
      required: true,
      description: "must be a string and is required",
    },
    thesis_title: {
      type: String,
      description: "must be a string",
    },
    no_of_journal_papers: {
      type: Number,
      description: "must be an integer value",
    },
    no_of_conference_papers: {
      type: Number,
      description: "must be an integer value",
    },
    current_working_status: {
      type: String,
      description: "must be a string",
    },
    place_of_work: {
      type: String,
      description: "must be a string",
    },
    university_name: {
      type: String,
      description: "must be a string",
    },
    degree: {
      type: String,
      description: "must be a string",
    },
    branch: {
      type: String,
      description: "must be a string",
    },
    internship_domain: {
      type: String,
      description: "must be a string",
    },
    duration: {
      type: String,
      description: "must be a string",
    },
    additionalInfo: {
      type: String,
      description: "must be a string",
    },
  },
  {
    versionKey: false,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    additionalProperties: true,
  }
);

const graduateStudent = mongoose.model("graduateStudent", studentSchema);
export default graduateStudent;