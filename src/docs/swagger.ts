import swaggerUi from "swagger-ui-express"
import YAML from "yamljs"
import { Express } from "express"
import path from "path"

export const swaggerDocs = (app: Express) => {

  const swaggerDocument = YAML.load(
    path.join(__dirname, "./swagger.yaml")
  )

  const swaggerOptions = {
    customCssUrl: 'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui.min.css',
    customJs: [
      'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui-bundle.js',
      'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui-standalone-preset.js'
    ]
  }

  app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument, swaggerOptions))
}