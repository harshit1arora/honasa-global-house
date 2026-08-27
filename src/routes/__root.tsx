import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import honasaMarkUrl from "@/assets/honasa-mark.png?url";
import { SiteProvider } from "@/lib/site-state";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { AIChatbot } from "@/components/chatbot/AIChatbot";
import { ProductDetailModal } from "@/components/site/ProductDetailModal";
import { BeautyQuizModal } from "@/components/site/BeautyQuizModal";
import { SearchAnswerModal } from "@/components/site/SearchAnswerModal";
import { BeautyProfileModal } from "@/components/site/BeautyProfileModal";
import { RoutineCartModal } from "@/components/site/RoutineCartModal";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <img
          src="/honasa-logo.png"
          alt="Honasa Consumer"
          className="h-16 w-auto mx-auto mb-6 object-contain"
        />
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 cursor-pointer"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error("[Honasa Error Boundary]:", error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <img
          src="/honasa-logo.png"
          alt="Honasa Consumer"
          className="h-16 w-auto mx-auto mb-6 object-contain"
        />
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 cursor-pointer"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent cursor-pointer"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Honasa Consumer | Digital-First Beauty & Personal Care" },
      {
        name: "description",
        content:
          "Honasa Consumer: eight beauty and personal care brands built for skin and hair across climates.",
      },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Honasa Consumer | Digital-First Beauty & Personal Care" },
      {
        property: "og:description",
        content: "Intelligent personal care and beauty ecosystem across eight specialized houses.",
      },
      { property: "og:image", content: "/honasa-logo.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Honasa Consumer : Global Beauty House" },
      { name: "twitter:image", content: "/honasa-logo.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400..700&family=Manrope:wght@400..700&display=swap",
      },
      { rel: "icon", href: honasaMarkUrl, type: "image/png" },
      { rel: "shortcut icon", href: honasaMarkUrl, type: "image/png" },
      { rel: "apple-touch-icon", href: honasaMarkUrl },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <SiteProvider>
        <Header />
        <main>
          {/* Required: nested routes render here. */}
          <Outlet />
        </main>
        <Footer />
        <AIChatbot />
        <ProductDetailModal />
        <BeautyQuizModal />
        <SearchAnswerModal />
        <BeautyProfileModal />
        <RoutineCartModal />
      </SiteProvider>
    </QueryClientProvider>
  );
}

