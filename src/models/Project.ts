import mongoose, {Schema, Document} from "mongoose";


export type ProjectType = Document & {
    projectName: string;
    clientName: string;
    description: string;
}


const ProjectrSchema: Schema =  new Schema({
    projectName: {
        type: String,
        required: true,
        trim: true,
    },
    clientName: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
});


const Project = mongoose.model<ProjectType>("Project", ProjectrSchema);
export default Project;