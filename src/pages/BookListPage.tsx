import Loader from "@/components/Loader/Loader";
import { Button } from "@/components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  useDeleteBookMutation,
  useGetBooksQuery,
} from "@/redux/api/libraryApi";
import { BookOpen, Pen, Trash2 } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router";
import Swal from "sweetalert2";

export default function BookListPage() {
  const [page, setPage] = useState(1);
  const limit = 10;
  const { data, error, isLoading } = useGetBooksQuery({ page, limit });
  const [deleteBook, { isLoading: isDeleting }] = useDeleteBookMutation();
  const navigate = useNavigate();
  const books = data?.books || [];
  const pagination = data?.pagination || null;

  const handleDelete = async (id: string) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      await deleteBook(id);
      Swal.fire({
        title: "Deleted!",
        text: "The book has been deleted.",
        icon: "success",
      });
    }
  };

  if (isLoading) {
    return <Loader />;
  }
  if (error) {
    return (
      <p className="text-center text-red-600 font-semibold mt-6">
        Error Loading books...
      </p>
    );
  }

  return (
    <div className="mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-extrabold text-center mb-8 text-cyan-600">
        Books List
      </h1>

      <div className="overflow-x-auto rounded-lg shadow-lg border border-gray-200">
        <Table className="min-w-full divide-y divide-gray-200">
          <TableHeader className="bg-cyan-300">
            <TableRow>
              <TableHead className="text-left px-4 py-3 font-semibold text-gray-700">
                No.
              </TableHead>
              <TableHead className="text-left px-4 py-3 font-semibold text-gray-700 w-[150px]">
                Title
              </TableHead>
              <TableHead className="text-left px-4 py-3 font-semibold text-gray-700">
                Author
              </TableHead>
              <TableHead className="text-left px-4 py-3 font-semibold text-gray-700">
                Genre
              </TableHead>
              <TableHead className="text-left px-4 py-3 font-semibold text-gray-700">
                ISBN
              </TableHead>
              <TableHead className="text-center px-4 py-3 font-semibold text-gray-700">
                Copies
              </TableHead>
              <TableHead className="text-center px-4 py-3 font-semibold text-gray-700">
                Availability
              </TableHead>
              <TableHead className="text-center px-4 py-3 font-semibold text-gray-700">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody className="bg-white divide-y divide-gray-100">
            {books?.map((book, idx) => (
              <TableRow
                key={book._id}
                className="hover:bg-cyan-50 transition-colors duration-200"
              >
                <TableCell className="px-4 py-3 whitespace-nowrap">
                  {(page - 1) * limit + idx + 1}
                </TableCell>

                <TableCell className="px-4 py-3 font-medium text-cyan-700 cursor-pointer hover:underline">
                  <Link to={`/book/${book._id}`}>{book.title}</Link>
                </TableCell>

                <TableCell className="px-4 py-3">{book.author}</TableCell>
                <TableCell className="px-4 py-3">{book.genre}</TableCell>
                <TableCell className="px-4 py-3">{book.isbn}</TableCell>

                <TableCell className="px-4 py-3 text-center">
                  {book.copies}
                </TableCell>

                <TableCell
                  className={`px-4 py-3 text-center font-semibold ${
                    Number(book.copies) > 0 ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {Number(book.copies) > 0 ? "Available" : "Unavailable"}
                </TableCell>

                <TableCell className="px-4 py-3 flex items-center justify-center gap-3">
                  <Button
                    variant={"outline"}
                    size="sm"
                    onClick={() => navigate(`/edit-book/${book._id}`)}
                    title="Edit Book"
                    className="hover:bg-cyan-200"
                  >
                    <Pen className="text-cyan-600" />
                  </Button>

                  <Button
                    variant={"outline"}
                    size="sm"
                    onClick={() => navigate(`/borrow/${book._id}`)}
                    disabled={Number(book.copies) === 0}
                    title="Borrow Book"
                    className={`hover:bg-cyan-200 ${
                      Number(book.copies) === 0
                        ? "opacity-50 cursor-not-allowed"
                        : ""
                    }`}
                  >
                    <BookOpen className="text-cyan-600" />
                  </Button>

                  <Button
                    variant={"outline"}
                    size="sm"
                    onClick={() => handleDelete(book._id)}
                    disabled={isDeleting}
                    title="Delete"
                    className="hover:bg-red-100"
                  >
                    <Trash2 className="text-red-600" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {pagination && pagination.totalPages > 1 && (
        <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
          <Pagination>
            <PaginationContent className="flex items-center space-x-3">
              <PaginationItem>
                <PaginationPrevious
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    if (page > 1) setPage(page - 1);
                  }}
                  className={page === 1 ? "pointer-events-none opacity-40" : ""}
                />
              </PaginationItem>

              <span className="text-gray-700 font-medium">
                Page {pagination.currentPage} of {pagination.totalPages}
              </span>

              <PaginationItem>
                <PaginationNext
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    if (page < pagination.totalPages) setPage(page + 1);
                  }}
                  className={
                    page === pagination.totalPages
                      ? "pointer-events-none opacity-40"
                      : ""
                  }
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      )}
    </div>
  );
}
