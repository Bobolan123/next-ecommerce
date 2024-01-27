import ResponsiveAppBar from "@/components/Navbar";
import { Container } from "@mui/material";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <ResponsiveAppBar />
      <div className="mt-5">
        <Container>{children}</Container>
      </div>
    </>
  );
}
