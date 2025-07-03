import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: Tried to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted text-muted-foreground px-4">
      <div className="max-w-md text-center p-8 rounded-2xl shadow-xl border bg-card" style={{ background: 'var(--gradient-card)' }}>
        <h1 className="text-6xl font-extrabold tracking-tight text-primary mb-4">
          404
        </h1>
        <p className="text-lg mb-6">
          The page you're looking for doesn’t exist.
        </p>
        <a
          href="/"
          className="inline-block rounded-lg bg-primary text-primary-foreground px-6 py-2 text-sm font-semibold transition hover:brightness-110"
        >
          Back to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
