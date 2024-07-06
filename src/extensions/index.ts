const getAllExtensions = () => {
  const files: Record<string, any> = import.meta.glob("./**/index.tsx", {
    eager: true,
  });
  const extensions = new Map();
  Object.keys(files).map((key) => {
    const ext = files[key].default;
    const name = "ext-" + key.split("/")[1];
    extensions.set(name, ext);
  });
  console.log(extensions);
  return extensions;
};

export default getAllExtensions;
