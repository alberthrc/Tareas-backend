import type { Request, Response } from 'express';
import Project from '../models/Project';

export class ProjectController {

    static  createProject = async (req: Request, res: Response) => {

        const project = new Project(req.body)
        try {
            await project.save();
            res.send('Creando Creado Correctamente..');
        } catch (error) {
            console.log(error);
        }

    }
    static  getAllProjects = async (req: Request, res: Response) => {

        try {
            const projects = await Project.find({});
            res.json(projects);
        } catch (error) {
            console.log(error);
        }
        res.send('Todos los proyectos');
    }

    static  getProjectById = async (req: Request, res: Response): Promise<void> => {

        const { id } = req.params;

        try {
            const project = await Project.findById(id);

            if (!project) {
                const error = new Error('Projecto no encontrado');
                 res.status(404).json({ error: error.message });
                 return;
            }
             res.json(project); // Enviar la respuesta pero no devolverla
             return
        } catch (error) {
            console.log(error);
        }
    }



    static  updateProject = async (req: Request, res: Response): Promise<void> => {

        const { id } = req.params;

        try {
            const project = await Project.findByIdAndUpdate(id, req.body)

            if (!project) {
                const error = new Error('Projecto no encontrado');
                 res.status(404).json({ error: error.message });
                 return;
            }

            await project.save();
            res.send('Proyecto Actualizado Correctamente..');
            return
        } catch (error) {
            console.log(error);
        }
    }



    static  deleteProject = async (req: Request, res: Response): Promise<void> => {

        const { id } = req.params;

        try {
            const project = await Project.findById(id);
            if (!project) {
                const error = new Error('Projecto no encontrado');
                 res.status(404).json({ error: error.message });
                 return;
            }

            await project.deleteOne();
            res.send('Proyecto Eliminado Correctamente..');
            return;

        } catch (error) {
            console.log(error);
        }
    }
}