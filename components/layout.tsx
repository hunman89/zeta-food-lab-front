import Footer from "./footer";
import Header from "./header";

interface LayoutProps {
  footer?: boolean;
  children: React.ReactNode;
}

export default function Layout({ footer, children }: LayoutProps) {
  return (
    <div>
      <Header></Header>
      <div className="w-full mx-auto">{children}</div>
      {footer ? <Footer></Footer> : <></>}
    </div>
  );
}
