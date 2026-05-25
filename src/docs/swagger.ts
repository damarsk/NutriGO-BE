import swaggerUi from "swagger-ui-express"
import YAML from "yamljs"
import { Express } from "express"
import path from "path"

export const swaggerDocs = (app: Express) => {

  const swaggerDocument = YAML.load(
    path.join(__dirname, "./swagger.yaml")
  )

  app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument))
}