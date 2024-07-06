import "./welcome.scss";

export default function WelcomePage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen welcome-wrapper">
      <h1 className="text-4xl font-bold mb-4">Welcome to my website!</h1>
      <p className="text-lg mb-8">
        This is a simple website built using Next.js and Tailwind CSS. Feel free
        to explore and learn more about me.
      </p>
    </div>
  );
}
