# UNPAZ - Trabajo de Campo 2024

## API REST 

Este repositorio lo utilizaremos como un ejemplo de la API que cada equipo deberá realizar. Cada semana le sumaremos funcionalidades, es decir, que será un punto de consulta bastante habitual.


## Pasos para ejecutar el servidor

- Instalar las depencias que utiliza el proyecto ```npm install```
- Lanzar el servidor en mode desarrollo ```npm run dev``` 

### Comentarios
- Por defecto el servidor corre en el puerto 3000, este valor se puede cambiado la variable de entrono PORT en sus computadoras
- Si revisan el script dev dentro de package.json veran que el proyecto usada la libreria nodemon para modo desarrollo, que permite hacer cambios, grabar y el servidor se reinicia automaticamente.

## Sequelize
- Instalar sequelize-cli en mode desarrollo. ```npm i -D sequelize-cli```
- Instalar sequelize y el driver de postgres. ```npm i sequelize pg```
- Crear un directorio para guardar todo lo relacionado a la base de datos, por ejemplo src/db
- Moverse hasta el nuevo directorio creado ```src/db```
- Correr el comando para inicializar el proyecto con sequelize ```npx sequelize-cli init```
- Revisar las carpetas y archivos generados. Por ejemplo cambiar el dialecto
- Crear un modelo con sequlize-cli tome como ejemplo el alquilable
```
npx sequelize-cli model:generate --name Alquilable --attributes descripcion:string,disponible:boolean,precio:decimal
```
- Cambiar los tipos de datos necesarios, revisar id, createAt y updateAt
- correr la migracion ```npx sequelize-cli db:migrate```