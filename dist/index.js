"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const task_1 = __importDefault(require("./models/task"));
const config_1 = __importDefault(require("./db/config"));
const app = (0, express_1.default)();
const port = process.env.PORT;
app.get("/", (req, res) => {
    try {
        res.status(200).send("Hello TS");
    }
    catch (error) {
        res.status(500).json({ message: "Internal error" });
    }
});
app.post("/createTask", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, description } = req.body;
        if (!title || !description) {
            res
                .status(400)
                .json({ success: false, message: "All fields are required" });
            return;
        }
        const task = {
            title,
            description,
        };
        console.log("Создаем задачу:", task);
        yield task_1.default.create(task);
        res.status(200).json({
            success: true,
            message: "task created",
            data: task,
        });
    }
    catch (error) {
        res.status(500).json({ success: false, message: "Internal error" });
    }
}));
(0, config_1.default)();
app.listen(port, () => {
    console.log(`Server running in ${port}`);
});
