import "reflect-metadata";

import { TYPES } from "./types";
import { ExtensionManager } from "../extensions/index";
import { Container } from "inversify";

const container = new Container();
container.bind(TYPES.ExtensionManager).to(ExtensionManager).inSingletonScope();

export default container;
