import "./globals.css";
import { siteMetadata } from "@/lib/metadata";
import WhatsAppChatButton from "@/components/WhatsAppChatButton";
import Analytics from "@/components/Analytics";

export const metadata = siteMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Analytics />
        {children}
        <WhatsAppChatButton />
      </body>
    </html>
  );
}
