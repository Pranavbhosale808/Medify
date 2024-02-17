import Navbar from "./Navbar";
import NavigationPanel from "./NavigationPanel";

function PageLayout({ children }) {
  return (
    <>
      <Navbar />
      <div className="flex w-full pt-12">
        <NavigationPanel />
        {children}
      </div>
    </>
  );
}

export default PageLayout;
