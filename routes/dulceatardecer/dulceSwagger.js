/**
 * @swagger
 * /dulce/perfil:
 *   get:
 *     summary: Obtener perfil de usuario
 *     description: |
 *       Devuelve el perfil del usuario autenticado.
 *     tags:
 *       - Dulce Atardecer
 *     security:
 *       - JWT: []
 *     responses:
 *       200:
 *         description: Éxito. Devuelve el perfil del usuario.
 *       401:
 *         description: No autorizado. El usuario no está autenticado.
 *       500:
 *         description: Error del servidor. No se pudo obtener el perfil del usuario.
 */

/**
 * @swagger
 * /dulce/obtenerProductos:
 *   get:
 *     summary: Obtener lista de productos
 *     description: |
 *       Devuelve una lista de todos los productos disponibles.
 *     tags:
 *       - Dulce Atardecer
 *     security:
 *       - JWT: []
 *     responses:
 *       200:
 *         description: Éxito. Devuelve la lista de productos.
 *       500:
 *         description: Error del servidor. No se pudo obtener la lista de productos.
 */
