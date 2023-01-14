import { resolve } from "node:path";
import { readdirSync, readFileSync } from "node:fs";

const files = readdirSync(resolve("src")).filter((file) => file.endsWith("-color-theme.json"));

console.log("Found the following color themes: \n", files.map((file) => "\t" + file).join("\n"));

const fileDataMap = new Map();
files.forEach((file) => {
	const fileData = readFileSync(resolve("src", file), "utf-8");
	fileDataMap.set(file, fileData);
});


