import "./globals.css";
import ThemeRegistry from "@app/context/ThemeRegistry";
import { Container } from "@mui/material";
import Header from "@app/components/Header";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <ThemeRegistry>
        <body>
          <main>
            <Header />
            <Container>{children}</Container>
          </main>
        </body>
      </ThemeRegistry>
    </html>
  );
}
