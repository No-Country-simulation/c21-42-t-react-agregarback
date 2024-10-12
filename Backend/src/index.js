import app from './app.js'; // Importar la aplicación
import {connectDB} from './db.js'; // Importar la función connectDB
import swaggerUi from 'swagger-ui-express';
import swaggerDocs from './swaggerConfig.js'; // Importamos la configuración de Swagger

const port = 3000;
// Llama a la función swaggerDocs para configurar Swagger
swaggerDocs(app, port);

// Ruta de Swagger UI para visualizar la documentación
connectDB();
app.listen(port, () => {
    console.log(`Server is running on port `, port); // Mensaje de éxito
});