import { FaSpinner } from "react-icons/fa";

export default function Loader() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <FaSpinner className="w-12 h-12 text-blue-500 animate-spin" />
    </div>
  );
}
