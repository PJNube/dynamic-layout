export const TYPES = {
  ExtensionManager: Symbol.for("ExtensionManager"),
};

export interface IExtensionManager {
  getExtension(name: string): React.FC | undefined;
}
