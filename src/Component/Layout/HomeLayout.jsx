import Nav from "../Nav/Nav";

export default function HomeLayout({ children }) {
  return (
    <>
      <Nav />
      {children}
    </>
  );
}
