import { createFileRoute, redirect } from "@tanstack/react-router";

// The landing page is a standalone HTML/CSS/JS build in /public.
// "/" hands the visitor straight to it.
export const Route = createFileRoute("/")({
  beforeLoad: () => {
    throw redirect({ href: "/index.html" });
  },
  component: () => null,
});
