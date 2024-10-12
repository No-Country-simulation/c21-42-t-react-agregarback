import swaggerJsdoc from 'swagger-jsdoc'; // Importamos swagger-jsdoc
import swaggerUi from 'swagger-ui-express'; // Importamos swagger-ui-express
import path from 'path'; // Importamos path
import { fileURLToPath } from 'url';

// Definimos __filename y __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Definimos la configuración de Swagger
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Pet Care API', // Título de la API
      version: '1.0.0', // Versión de la API
      description: 'API para una plataforma de cuidado de mascotas', // Descripción
    },
    servers: [
      {
        url: 'http://localhost:3000', // URL de tu servidor de desarrollo
      },
    ],
  },
  apis: [`${path.join(__dirname, '/routes/*.js')}`], // Rutas donde se encuentra la documentación
};

// Generamos la documentación
const swaggerSpec = swaggerJsdoc(swaggerOptions);

function swaggerDocs(app, port) {
  // Página de Swagger
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  
  // Documentación en formato JSON
  app.get('/api-docs.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
  });
}

export default swaggerDocs;