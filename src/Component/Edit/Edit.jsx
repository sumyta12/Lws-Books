import { useParams } from "react-router-dom";
import Form from "./Form";
import { useGetBooksQuery } from "../Feature/BookApi/BookApi";

export default function Edit() {
  const { id } = useParams();

  const { data, isLoading, isError } = useGetBooksQuery(id);

  let content = null;

  if (isLoading) {
    content = <h1>data is comming</h1>;
  }
  if (!isLoading && isError) {
    content = <h1>error occured fecthing the data</h1>;
  }
  if (!isLoading && data?.id) {
    content = <Form id={id} data={data} />;
  }

  return (
    <main className="py-6 2xl:px-6">
      <div className="container">
        <div className="p-8 overflow-hidden bg-white shadow-cardShadow rounded-md max-w-xl mx-auto">
          <h4 className="mb-8 text-xl font-bold text-center">Edit Book</h4>
          {content}
        </div>
      </div>
    </main>
  );
}
