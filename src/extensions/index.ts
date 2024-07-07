const getAllExtensions = () => {
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

export default getAllExtensions;
