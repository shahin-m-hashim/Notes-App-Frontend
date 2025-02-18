import { useNavigate } from "react-router";

export default function NotFoundPage() {
  const navigate = useNavigate();

  console.log("Rendering Not Found Page");

  return (
    <section className="min-w-[320px] h-scroll">
      <main className="flex items-center justify-center h-full px-4">
        <div className="flex flex-col items-center justify-center gap-6 text-center">
          <h1 className="text-3xl font-semibold">Page Not Found</h1>

          <img
            alt="not found"
            className="w-3/4"
            src="https://assets.ccbp.in/frontend/react-js/not-found-blog-img.png"
          />

          <p className="text-lg">
            We are sorry, the page you requested could not be found !!!
          </p>

          <button
            type="button"
            onClick={() => navigate(-1)}
            className="bg-[#4f46e5] cursor-pointer text-white px-4 py-2 rounded-md"
          >
            Go Back
          </button>
        </div>
      </main>
    </section>
  );
}
