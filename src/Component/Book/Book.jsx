import { useGetBookQuery } from "../Feature/BookApi/BookApi";
import Books from "./Books";

export default function Book() {
  const { data: book, isLoading, isError } = useGetBookQuery();

  let content = null;

  if (isLoading) {
    content = <h1>Data is Loading</h1>;
  }

  if (!isLoading && isError) {
    content = <h1>there is error occure</h1>;
  }

  if (!isLoading && book?.length === 0) {
    content = <h1>no data available</h1>;
  }

  if (!isLoading && book?.length > 0) {
    content = book?.map((books) => <Books key={books?.id} book={books} />);
  }

  return <>{content}</>;
}
