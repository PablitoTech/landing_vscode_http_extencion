import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning>
      <body className="min-h-screen bg-canvas text-fg antialiased">
        {children}
      </body>
    </html>
  );
}
