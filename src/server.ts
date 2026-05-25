import app from "./app"

const POST = process.env.PORT || 3000

app.listen(POST, () => {
  console.log(`Server is running on port ${POST}`)
})