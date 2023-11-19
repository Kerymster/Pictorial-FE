import { useNavigate } from "react-router-dom";
import { data } from "../constants/welcoming-card";

export default function WelcomingCard() {
  const navigate = useNavigate();
  return (
    <div className="bg-white">
      <div className="relative overflow-hidden">
        <main>
          <div className="relative bg-gray-900">
            <div className="relative h-56 bg-indigo-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
              <img
                className="w-full h-full object-cover"
                src={data.img}
                alt="welcoming"
              />
              <div aria-hidden="true" className="absolute" />
            </div>
            <div className="relative mx-auto max-w-md px-4 py-12 sm:max-w-7xl sm:px-6 sm:py-20 md:py-28 lg:px-8 lg:py-32">
              <div className="md:ml-auto md:w-1/2 md:pl-10">
                <h2 className="text-base font-semibold uppercase tracking-wider text-gray-300">
                  {data.subtitle}
                </h2>
                <p className="mt-2 text-white text-3xl font-extrabold tracking-tight sm:text-4xl">
                  {data.title}
                </p>
                <p className="mt-3 text-lg text-gray-300">{data.description}</p>
                <div className="mt-8">
                  <div className="inline-flex rounded-md shadow">
                    <button
                      onClick={() => navigate("/about")}
                      className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50"
                    >
                      Explore Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
