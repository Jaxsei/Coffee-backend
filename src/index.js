import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({ path: './env' })

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 4000, () => {
      console.log(`Server listening on http://localhost:${process.env.PORT}`)
    })

    app.on('error', (error) => {
      console.error('ERROR in server CONNECTION (file:index.js)', error)
      process.exit(1)
    })
  })
  .catch((err) => {
    console.log('MONGODB CONNECTION FAILED !!!', err)
  })





//(async () => {
//  try {
//    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//
//  } catch (error) {
//    console.error('ERROR: ', error)
//    throw err
//  }
//})()
