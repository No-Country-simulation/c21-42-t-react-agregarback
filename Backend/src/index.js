import app from './app.js'; // Importar la aplicación
import {connectDB} from './db.js'; // Importar la función connectDB

connectDB();
app.listen(3000, () => {
    console.log(`Server is running on port `, 3000); // Mensaje de éxito
});
