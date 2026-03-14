import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { DashboardLayout } from "./components/DashboardLayout";
import { Home } from "./pages/Home";
import { DashboardIndex } from "./pages/DashboardIndex";
import { Pricing } from "./pages/Pricing";
import { SignIn } from "./pages/SignIn";
import { NotFound } from "./pages/NotFound";

import { Emails } from "./pages/Emails";
import { Tasks } from "./pages/Tasks";
import { Opportunities } from "./pages/Opportunities";
import { Settings } from "./pages/Settings";
import { Feedback, Notifications } from "./pages/AppExtras";
import { SignUp } from "./pages/SignUp";
import { Welcome } from "./pages/Welcome";
import { About, Roadmap, Changelog, Contact, Privacy, Terms, Help } from "./pages/CompanyPages";

export const router = createBrowserRouter([
  // Public Routes (uses original Layout with Navbar & Footer)
  {
    Component: Layout,
    children: [
      { path: "/", Component: Home },
      { path: "pricing", Component: Pricing },
      { path: "signin", Component: SignIn },
      { path: "signup", Component: SignUp },
      { path: "about", Component: About },
      { path: "roadmap", Component: Roadmap },
      { path: "changelog", Component: Changelog },
      { path: "contact", Component: Contact },
      { path: "privacy", Component: Privacy },
      { path: "terms", Component: Terms },
      { path: "help", Component: Help },
    ],
  },
  // Dedicated Onboarding Page (No Navbar/Footer)
  {
    path: "welcome",
    Component: Welcome
  },
  // Private / Dashboard Routes (uses new DashboardLayout)
  {
    Component: DashboardLayout,
    children: [
      { path: "dashboard", Component: DashboardIndex },
      { path: "emails", Component: Emails },
      { path: "tasks", Component: Tasks },
      { path: "opportunities", Component: Opportunities },
      { path: "settings", Component: Settings },
      { path: "feedback", Component: Feedback },
      { path: "notifications", Component: Notifications },
    ]
  },
  // Fallback
  { path: "*", Component: NotFound },
]);
