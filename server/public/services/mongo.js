var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import mongoose from "mongoose";
import "dotenv/config";
const mongoConnect = () => __awaiter(void 0, void 0, void 0, function* () {
    const mongoUrl = process.env.MONGO_URI;
    if (!mongoUrl) {
        throw new Error("MONGO_URL environment variable is not defined");
    }
    try {
        yield mongoose.connect(mongoUrl);
        console.log("Connected to MongoDB");
    }
    catch (error) {
        console.error("Error during MongoDB connection:", error);
    }
});
function mongoDisconnect() {
    return __awaiter(this, void 0, void 0, function* () {
        yield mongoose.disconnect();
    });
}
export { mongoConnect, mongoDisconnect, };