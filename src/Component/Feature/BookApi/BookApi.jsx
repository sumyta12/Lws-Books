import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BookApi = createApi({
  reducerPath: "bookApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:9000/",
  }),
  tagTypes: ["Book", "Books"],
  endpoints: (builder) => ({
    getBook: builder.query({
      query: () => `/books`,
      providesTags: ["Book"],
    }),
    getBooks: builder.query({
      query: (id) => `/books/${id}`,
      providesTags: (result, error, arg) => [{ type: "Books", arg }],
    }),
    addBook: builder.mutation({
      query: (data) => ({
        url: "/books",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Book"],
    }),
    editBook: builder.mutation({
      query: ({ id, data }) => ({
        url: `/books/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: (result, error, arg) => [
        "Book",
        { type: "Books", id: arg.id },
      ],
    }),
    deleteBook: builder.mutation({
      query: (id) => ({
        url: `/books/${id}`,
        method: "Delete",
      }),
      invalidatesTags: (result, error, arg) => ["Book"],
    }),
  }),
});

export const {
  useGetBookQuery,
  useGetBooksQuery,
  useAddBookMutation,
  useEditBookMutation,
  useDeleteBookMutation,
} = BookApi;

export default BookApi;
