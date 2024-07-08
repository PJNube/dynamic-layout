import { injectable } from "inversify";
import { IExtensionManager } from "../common/types";
// import { lazy } from "react";

@injectable()
export class ExtensionManager implements IExtensionManager {
  protected allExtensions = new Map();

  constructor() {
    this.initialized();
  }

  protected initialized() {
    this.allExtensions = this.getAllExtensions();
  }

  /**
   * Automatically get all extensions
   */
  protected getAllExtensions = () => {
    const files: Record<string, any> = import.meta.glob("./**/index.tsx", {
      eager: true,
    });
    const extensions = new Map();
    Object.keys(files).map((key) => {
      const name = "ext-" + key.split("/")[1];
      const ext = files[key].default;
      extensions.set(name, ext);
    });
    // console.log(extensions);
    return extensions;
  };

  /**
   * Manually get all extensions
   */
  // protected getAllExtensions = () => {
  //   return {
  //     "ext-flow": lazy(() => import("./flow/index.tsx")),
  //     "ext-setting": lazy(() => import("./setting/index.tsx")),
  //     "ext-welcome": lazy(() => import("./welcome/index.tsx")),
  //     "ext-dashboard": lazy(() => import("./dashboard/index.tsx")),
  //   };
  // };

  public getExtension(name: string): React.FC | undefined {
    return this.allExtensions.get(name);
  }
}
