import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <h2 className="text-xl">
        Welcome to NextJS & TailwindCSS Admin Template
      </h2>
      <Link
        to="/auth"
        className="text-blue-500 hover:underline hover:text-yellow-500"
      >
        Go to Dashboard
      </Link>
    </>
  );
}
