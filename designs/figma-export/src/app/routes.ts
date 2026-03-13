import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { DashboardLayout } from "./components/DashboardLayout";
import { Home } from "./pages/Home";
import { DashboardIndex } from "./pages/DashboardIndex";
import { Pricing } from "./pages/Pricing";
import { SignIn } from "./pages/SignIn";
import { NotFound } from "./pages/NotFound";

// Generic placeholder for other dashboard pages
function DashboardPlaceholder({ title }: { title: string }) {
  return (
    <div className="flex items-center justify-center h-full bg-white rounded-3xl border border-slate-100 shadow-sm p-12 text-center animate-in fade-in">
      <div>
         <h1 className="text-3xl font-bold text-slate-800 mb-4">{title} Page</h1>
         <p className="text-slate-500 font-medium">This section is currently under construction.</p>
      </div>
    </div>
  );
}

export const router = createBrowserRouter([
  // Public Routes (uses original Layout with Navbar & Footer)
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "pricing", Component: Pricing },
      { path: "signin", Component: SignIn },
    ],
  },
  // Private / Dashboard Routes (uses new DashboardLayout)
  {
    path: "/",
    Component: DashboardLayout,
    children: [
      { path: "dashboard", Component: DashboardIndex },
      { path: "emails", Component: () => <DashboardPlaceholder title="Emails" /> },
      { path: "tasks", Component: () => <DashboardPlaceholder title="Tasks" /> },
      { path: "opportunities", Component: () => <DashboardPlaceholder title="Opportunities" /> },
      { path: "settings", Component: () => <DashboardPlaceholder title="Settings" /> },
    ]
  },
  // Fallback
  { path: "*", Component: NotFound },
]);
