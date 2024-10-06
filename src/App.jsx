import { RouterProvider, createBrowserRouter } from "react-router-dom";

import AppLayout from "./Layout/App-Layout";

import { ThemeProvider } from "./components/ui/theme-provider"

import Landing from "./pages/landing";
import ProtectedRoute from "./components/protected-route";
import Onboarding from "./pages/onboarding";
import PostJob from "./pages/PostJob";
import JobListing from "./pages/jobListing";
import MyJobs from "./pages/MyJob";
import SavedJobs from "./pages/SaveJob";
import Job from "./pages/job";

import "./App.css";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Landing />,
      },
      {
        path: "/onboarding",
        element: (
          <ProtectedRoute>
          <Onboarding />
        </ProtectedRoute>

            
      
        ),
      },
      {
        path: "/jobs",
        element: (
          <ProtectedRoute>
            <JobListing />
          </ProtectedRoute>
          
         
          
        ),
      },
      {
        path: "/post-job",
        element: (
          <ProtectedRoute>
             <PostJob />
          </ProtectedRoute>
           
        
        ),
      },
      {
        path: "/my-jobs",
        element: (
      <ProtectedRoute>
 <MyJobs />
      </ProtectedRoute>
           
          
        ),
      },
      {
        path: "/saved-jobs",
        element: (
      <ProtectedRoute>
 <SavedJobs />
      </ProtectedRoute>
           
       
        ),
      },
      {
        path: "/job/:id",
        element: (
       
            <Job />
          
        ),
      },
    ],
  },
]);

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
