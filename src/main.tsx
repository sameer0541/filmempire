import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./lib/store/store.ts";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import Watch from "./pages/[...Id].tsx";
import VideoPage from "./pages/[videoId].tsx";
import TVWatch from "./pages/[...tvid].tsx";
import OriginaslWatch from "./pages/[...originalid].tsx";
import AllTVShows from "./pages/tvShows.tsx";
import AllMovies from "./pages/allMovies.tsx";
import { ClerkProvider } from "@clerk/clerk-react";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
if(!PUBLISHABLE_KEY){
  throw new Error('NO PUBLISHABLE_KEY')
}

const router = createBrowserRouter([
  {
    path: "/",
    element:<App/>,
    errorElement:<div>404 not found</div>
  },
  {
    path:"/watch/:id",
    element:<Watch/>
  },
  {
    path:"/watch/video/:videoId",
    element:<VideoPage/>
  },
  {path:"/watch/tv/:id",element:<TVWatch/>},
  {path:"/watch/originals/:id",element:<OriginaslWatch/>},
  {path:'/tvShows',element:<AllTVShows/>},
  {path:'/allMovie',element:<AllMovies/>}
])

const root = createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
    </ClerkProvider>
  </StrictMode>
);
export default root
