import { lazy } from "react";

/**
 * Import all extensions from the ./extensions folder
 * and export them as a Map
 *
 * */
export const getAllExtensions = () => {
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

// export default getAllExtensions;

const AllExtensions: Record<string, React.FC> = {
  "ext-flow": lazy(() => import("./flow/index.tsx")),
  "ext-setting": lazy(() => import("./setting/index.tsx")),
  "ext-welcome": lazy(() => import("./welcome/index.tsx")),
  "ext-dashboard": lazy(() => import("./dashboard/index.tsx")),
};

export default AllExtensions;
