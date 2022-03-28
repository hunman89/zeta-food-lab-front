import Footer from "./footer";
import Header from "./header";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <Header></Header>
      <div>{children}</div>
      <Footer></Footer>
    </div>
  );
}
