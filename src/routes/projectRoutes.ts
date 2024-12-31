import { Router } from "express";
import { body, param } from "express-validator";
import {ProjectController} from "../controllers/ProjectController";
import { handleInputErrors } from "../middleware/validation";


const router = Router();

/*Create project */
router.post("/", 
    body("projectName")
        .notEmpty().withMessage("El nombre del proyecto es obligatorio"),
    body("clientName")
        .notEmpty().withMessage("El nombre del cliente es obligatorio"),
    body("description")
        .notEmpty().withMessage("La descripción del proyecto es obligatorio"),
        handleInputErrors,
        
    ProjectController.createProject

);

/*View all projects */
router.get("/", ProjectController.getAllProjects);


/*View a project by ID */
router.get("/:id", 
    param("id").isMongoId().withMessage("El id del proyecto no es válido"),
    handleInputErrors,
    ProjectController.getProjectById);

/*Update a project by ID */
router.put("/:id", 
    param("id").isMongoId().withMessage("El id del proyecto no es válido"),
    body("projectName")
        .notEmpty().withMessage("El nombre del proyecto es obligatorio"),
    body("clientName")
        .notEmpty().withMessage("El nombre del cliente es obligatorio"),
    body("description")
        .notEmpty().withMessage("La descripción del proyecto es obligatorio"),
    handleInputErrors,
    ProjectController.updateProject);


    /*Delete a project by ID */
    router.delete("/:id", 
        param("id").isMongoId().withMessage("El id del proyecto no es válido"),
        handleInputErrors,
        ProjectController.deleteProject);




export default router;