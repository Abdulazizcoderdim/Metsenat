import { Route } from "react-router-dom";
import Home from "./pages/Home";
import { Toaster } from "react-hot-toast";
import Admin from "./pages/Admin";
import { SignedIn, SignedOut } from "@clerk/clerk-react";

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        index
        element={
          <>
            <SignedIn >
              <Admin />
            </SignedIn>

            <SignedOut >
              <Home />
            </SignedOut>
          </>
        }
      />
      <Route path="/admin" element={<Admin />} />
      <Route path="*" element={<NotFound />} />
    </>
  )
);

const App = () => {
  return (
    <>
      <Toaster position="bottom-right" toastOptions={{ duration: 2000 }} />
      <RouterProvider router={router} />
    </>
  );
};

export default App;
