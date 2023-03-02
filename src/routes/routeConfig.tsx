import { Outlet, Route, Routes } from "react-router-dom";
import { PageWrapper } from "../components/modules";
import { About, Contact, Gallery, Home, Services } from "../pages";


export default function routeConfig() {
  return (
    <Routes>
        <Route
          element={
            <PageWrapper>
              <Outlet />
            </PageWrapper>
          }
        >
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
        </Route>
      </Routes>
  )
}
