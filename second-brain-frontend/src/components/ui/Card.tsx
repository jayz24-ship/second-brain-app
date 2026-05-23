import PlusIcon from "../../icons/PlusIcon";
import ShareIcon from "../../icons/ShareIcon";

interface CardProps {
  title: string;
  link: string;
  type: "twitter" | "youtube" | "blog";
}

export function Card({ title, link, type }: CardProps) {
  return (
    <div className="w-80">
      <div className="bg-white shadow-md border border-gray-200 rounded-xl p-4 min-h-48">

        {/* Header */}
        <div className="flex justify-between items-start">

          {/* Left Section */}
          <div className="flex items-center gap-2">

            <div className="text-gray-500">
              <ShareIcon />
            </div>

            <div>
              <h2 className="font-semibold text-lg text-gray-800">
                {title}
              </h2>

              <p className="text-sm text-gray-500 capitalize">
                {type}
              </p>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-3 text-gray-500">

            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition"
            >
              <ShareIcon />
            </a>

            <button className="hover:text-black transition">
              <PlusIcon />
            </button>
          </div>
        </div>

        {/* Content Preview */}
        <div className="mt-4">

          {type === "youtube" && (
            <iframe
              className="w-full rounded-lg"
              height="200"
              src={link.replace("watch?v=", "embed/")}
              title={title}
              allowFullScreen
            />
          )}

          {type === "twitter" && (
            <div className="border rounded-lg p-4 text-sm text-gray-600">
              Twitter embed preview coming soon.
            </div>
          )}

          {type === "blog" && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline break-words"
            >
              {link}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}