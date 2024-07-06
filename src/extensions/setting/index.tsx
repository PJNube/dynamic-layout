import { Button } from "@radix-ui/themes";
import "./setting.scss";

export default function SettingPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen setting-wrapper">
      <h1 className="text-4xl font-bold mb-4 ">Setting Page</h1>
      <p className="text-lg mb-8">
        <Button variant="outline">Click Me</Button>
      </p>
    </div>
  );
}
