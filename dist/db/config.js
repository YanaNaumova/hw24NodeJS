"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
require("dotenv/config");
const dbUri = process.env.MONGO_URI || "uri";
function connectDb() {
    try {
        mongoose_1.default.connect(dbUri);
        console.log("Connectet to DB");
    }
    catch (error) {
        console.log("Failed connected to DB", error);
        process.exit();
    }
}
exports.default = connectDb;
