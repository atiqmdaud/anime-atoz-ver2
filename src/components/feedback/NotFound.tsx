type NotFoundProps = {
  title?: string;
  description?: string;
};

export default function NotFound({
  title = "No results found",
  description = "Try adjusting your search or filters.",
}: NotFoundProps) {
  return (
    <div className="flex flex-col items-center justify-center text-center p-6 text-gray-600">
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="text-sm mt-1">{description}</p>
    </div>
  );
}
