import Loader from "@/components/Loader/Loader";
import { useGetBookByIdQuery } from "@/redux/api/libraryApi";
import { useParams } from "react-router";

export default function BookDetailsPage() {
  const { id: bookId } = useParams();
  const { data: book, isLoading, isError } = useGetBookByIdQuery(bookId!);

  if (isLoading) {
    return <Loader />;
  }
  if (isError) {
    return <p>Error loading book details.</p>;
  }

  // ডিবাগের জন্য কনসোল লগ
  console.log("Book data:", book);

  const copiesCount = Number(book?.copies);
  const isAvailable = copiesCount > 0;

  return (
    <div className="max-w-6xl mx-auto my-10 p-6 rounded ">
      <div className="space-y-2 text-lg md:flex gap-5">
        <div className="flex justify-center">
          <img src={book?.image} alt={book?.title} className="max-h-96" />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-4 text-center">{book?.title}</h1>
          <p>
            <strong>Author:</strong> {book?.author}
          </p>
          <p>
            <strong>Genre:</strong>{" "}
            <span className="bg-blue-400 px-2 rounded-xl text-sm text-white">
              {book?.genre}
            </span>
          </p>
          <p>
            <strong>ISBN:</strong> {book?.isbn}
          </p>
          <p>
            <strong>Copies:</strong> {book?.copies}
          </p>
          <p>
            <strong>Status:</strong>{" "}
            <span className={isAvailable ? "text-green-600" : "text-red-600"}>
              {isAvailable ? "Available" : "Unavailable"}
            </span>
          </p>
          <p className="mt-4">
            <strong>Description:</strong> {book?.description}
          </p>
        </div>
      </div>
    </div>
  );
}
