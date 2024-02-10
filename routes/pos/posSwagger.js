/**
 * @swagger
 * /pos/obtenerCategorias:
 *   get:
 *     summary: Obtener categorías de productos
 *     description: Devuelve una lista de todas las categorías de productos disponibles.
 *     tags:
 *       - Productos
 *     responses:
 *       200:
 *         description: Éxito. Devuelve la lista de categorías de productos.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: string
 *       500:
 *         description: Error del servidor. No se pudieron obtener las categorías de productos.
 */

/**
 * @swagger
 * /pos/crearCategoria:
 *   post:
 *     summary: Crear una nueva categoría de producto
 *     description: Crea una nueva categoría de producto en el sistema.
 *     tags:
 *       - Productos
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *                 description: Nombre de la nueva categoría.
 *     responses:
 *       201:
 *         description: Categoría creada con éxito.
 *       400:
 *         description: Error de validación. La solicitud es incorrecta o incompleta.
 *       500:
 *         description: Error del servidor. No se pudo crear la categoría.
 */
