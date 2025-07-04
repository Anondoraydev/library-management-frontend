import Loader from "@/components/Loader/Loader";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGetBorrowSummaryQuery } from "@/redux/api/libraryApi";

export default function BorrowSummaryPage() {
  const { data: summary, isLoading, isError } = useGetBorrowSummaryQuery();

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return (
      <div className="flex justify-center items-center h-[60vh]">
        <p className="text-red-600 text-lg font-semibold">
          Failed to load summary. Please try again later.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-20">
      <h2 className="text-4xl font-extrabold text-center mb-8 text-cyan-600 tracking-wide">
        Borrowed Books Summary
      </h2>

      <div className="overflow-x-auto shadow-lg rounded-lg border border-cyan-300">
        <Table className="min-w-full">
          <TableHeader className="bg-cyan-200">
            <TableRow>
              <TableHead className="py-3 px-4 text-left text-sm font-semibold text-cyan-800">
                No.
              </TableHead>
              <TableHead className="py-3 px-4 text-left text-sm font-semibold text-cyan-800">
                Title
              </TableHead>
              <TableHead className="py-3 px-4 text-left text-sm font-semibold text-cyan-800">
                ISBN
              </TableHead>
              <TableHead className="py-3 px-4 text-left text-sm font-semibold text-cyan-800">
                Total Borrowed
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {summary && summary.length > 0 ? (
              summary.map((item, idx) => (
                <TableRow
                  key={item.book.isbn || idx}
                  className="even:bg-cyan-50 hover:bg-cyan-100 transition-colors duration-150 cursor-default"
                >
                  <TableCell className="py-3 px-4 text-sm text-gray-700">
                    {idx + 1}
                  </TableCell>
                  <TableCell className="py-3 px-4 text-sm font-medium text-cyan-900">
                    {item.book.title}
                  </TableCell>
                  <TableCell className="py-3 px-4 text-sm text-gray-600">
                    {item.book.isbn}
                  </TableCell>
                  <TableCell className="py-3 px-4 text-sm font-semibold text-cyan-700">
                    {item.totalQuantity}
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={4}
                  className="text-center py-6 text-gray-500"
                >
                  No borrow summary data available.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
