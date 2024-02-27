import { ConvexClientProvider } from "@/providers/convex-client-provider";
import "@/styles/globals.css";

import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "700", "800"],
});

export const metadata = {
  title: "Visual Flow",
  description: "Online Realtime Board application",
  icons: [{ rel: "icon", url: "/logo.svg" }],
};

export default function RootLayout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <html lang="en">
      <body className={`${montserrat.className}`}>
        <ConvexClientProvider>{children}</ConvexClientProvider>
      </body>
    </html>
  );
}
