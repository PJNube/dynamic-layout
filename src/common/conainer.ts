import "reflect-metadata";

import { TYPES, IExtensionManager } from "./types";
import { ExtensionManager } from "../extensions/index";
import { Container } from "inversify";

const container = new Container();
container
  .bind<IExtensionManager>(TYPES.ExtensionManager)
  .to(ExtensionManager)
  .inSingletonScope();

export default container;
