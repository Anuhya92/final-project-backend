import mongoose from "mongoose";

const aboutSchema = new mongoose.Schema({
  title: {type:String, required: true },
  descripyion: { type: String, required: true },
}, {
  timestamps: true,
});

const About = mongoose.model("About", aboutSchema);

export default About;
