import mongoose from "mongoose";

const sectionSchema = new mongoose.Schema({
  title: {type: String, required: true },
  link: {type: String, required: true},
  content: { type: String, required: true },
});

const aboutSchema = new mongoose.Schema(
  {
    heading: { type: String, required: true },
    sections: [sectionSchema],
},
{
  timestamps: true,
}
);

const About = mongoose.model("About", aboutSchema);

export default About;
