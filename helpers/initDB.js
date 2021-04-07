import mongoose from "mongoose";

// rABIBLIDKiLITMDM - password

function initDB() {
  if (mongoose.connections[0].readyState) {
    console.log("already connected");
    return;
  }
  console.log("data:-", process.env.MONGO_URI);
  mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  mongoose.connection.on("connected", () => {
    console.log("connected to mongo");
  });
  mongoose.connection.on("error", (err) => {
    console.log("error connecting", err);
  });
}
export default initDB;
