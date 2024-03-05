import swaggerJSDoc from "swagger-jsdoc";

const options = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "REST API Portafolio",
      version: "1.0.0",
      description: "Documentación de mi API REST",
    },
  },
  apis: ["./routes/**/*.js"], // Rutas donde se encuentran las definiciones de tus endpoints
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;
