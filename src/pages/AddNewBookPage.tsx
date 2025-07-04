/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useCreateBookMutation } from "@/redux/api/libraryApi";
import { useForm, type SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

type BookFormInputs = {
  title: string;
  author: string;
  image: string;
  genre: string;
  isbn: string;
  description: string;
  copies: number;
  available: "true" | "false";
};

export default function AddNewBookPage() {
  const form = useForm<BookFormInputs>({
    mode: "onTouched", // Optional: validation mode
    defaultValues: {
      available: "true",
    },
  });

  const [createBook, { isLoading }] = useCreateBookMutation();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<BookFormInputs> = async (data) => {
    const payload = {
      ...data,
      copies: Number(data.copies),
      available: data.available === "true",
    };

    try {
      await createBook(payload).unwrap();
      form.reset();
      toast.success("Book added successfully");
      navigate("/books");
    } catch (error) {
      toast.error("Failed to add book");
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onError = (errors: Record<string, any>) => {
    const firstError = Object.values(errors)[0];
    if (
      firstError &&
      typeof firstError === "object" &&
      "message" in firstError
    ) {
      toast.error(firstError.message);
    }
  };

  return (
    <div className="max-w-3xl mx-auto shadow-xl p-6 rounded-xl mt-16 bg-white">
      <h2 className="text-3xl font-bold text-center mb-6 text-cyan-600">
        Add New Book
      </h2>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit, onError)}
          className="space-y-6"
        >
          {/* Title & Author */}
          <div className="grid sm:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="title"
              rules={{ required: "Enter Book Title" }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Enter book title" />
                  </FormControl>
                  {form.formState.errors.title && (
                    <p className="text-red-600 text-sm mt-1">
                      {form.formState.errors.title.message}
                    </p>
                  )}
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="author"
              rules={{ required: "Enter Author Name" }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Author</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Enter author name" />
                  </FormControl>
                  {form.formState.errors.author && (
                    <p className="text-red-600 text-sm mt-1">
                      {form.formState.errors.author.message}
                    </p>
                  )}
                </FormItem>
              )}
            />
          </div>

          {/* Genre & ISBN */}
          <div className="grid sm:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="genre"
              rules={{ required: "Must select a genre" }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Genre</FormLabel>
                  <Select
                    value={field.value || ""}
                    onValueChange={field.onChange}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a genre" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="FICTION">FICTION</SelectItem>
                      <SelectItem value="NON_FICTION">NON_FICTION</SelectItem>
                      <SelectItem value="SCIENCE">SCIENCE</SelectItem>
                      <SelectItem value="HISTORY">HISTORY</SelectItem>
                      <SelectItem value="BIOGRAPHY">BIOGRAPHY</SelectItem>
                      <SelectItem value="FANTASY">FANTASY</SelectItem>
                    </SelectContent>
                  </Select>
                  {form.formState.errors.genre && (
                    <p className="text-red-600 text-sm mt-1">
                      {form.formState.errors.genre.message}
                    </p>
                  )}
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="isbn"
              rules={{ required: "Enter ISBN" }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>ISBN</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Enter ISBN number" />
                  </FormControl>
                  {form.formState.errors.isbn && (
                    <p className="text-red-600 text-sm mt-1">
                      {form.formState.errors.isbn.message}
                    </p>
                  )}
                </FormItem>
              )}
            />
          </div>

          {/* Copies & Availability */}
          <div className="grid sm:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="copies"
              rules={{
                required: "Copies is required",
                min: { value: 1, message: "Copies must be at least 1" },
              }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Copies</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="number"
                      placeholder="Number of copies"
                      min={1}
                    />
                  </FormControl>
                  {form.formState.errors.copies && (
                    <p className="text-red-600 text-sm mt-1">
                      {form.formState.errors.copies.message}
                    </p>
                  )}
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="available"
              rules={{ required: "Select availability" }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Availability</FormLabel>
                  <Select
                    value={field.value || ""}
                    onValueChange={field.onChange}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select availability" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="true">Available</SelectItem>
                      <SelectItem value="false">Unavailable</SelectItem>
                    </SelectContent>
                  </Select>
                  {form.formState.errors.available && (
                    <p className="text-red-600 text-sm mt-1">
                      {form.formState.errors.available.message}
                    </p>
                  )}
                </FormItem>
              )}
            />
          </div>

          {/* Image URL */}
          <FormField
            control={form.control}
            name="image"
            rules={{
              required: "Enter Book Image URL",
              pattern: {
                value:
                  /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|svg|webp|bmp|tiff))$/i,
                message: "Enter a valid image URL",
              },
            }}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Image URL</FormLabel>
                <FormControl>
                  <Input
                    type="url"
                    {...field}
                    placeholder="Enter book image URL"
                  />
                </FormControl>
                {form.formState.errors.image && (
                  <p className="text-red-600 text-sm mt-1">
                    {form.formState.errors.image.message}
                  </p>
                )}
              </FormItem>
            )}
          />

          {/* Description */}
          <FormField
            control={form.control}
            name="description"
            rules={{ required: "Write Book's Description" }}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea {...field} placeholder="Write description" />
                </FormControl>
                {form.formState.errors.description && (
                  <p className="text-red-600 text-sm mt-1">
                    {form.formState.errors.description.message}
                  </p>
                )}
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="w-full bg-cyan-600 hover:bg-cyan-700"
            disabled={isLoading}
          >
            {isLoading ? "Adding..." : "Add Book"}
          </Button>
        </form>
      </Form>
    </div>
  );
}
