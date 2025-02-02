import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Dashboard } from "./pages/dashboard";
import { Auth } from "./pages/auth";
import { FinancialRecordsProvider } from "./contexts/financial-record-context";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";

function App() {
  return (
    <Router>
      <div className="app-container">
        <div className="navbar">
          <Link to="/"> Dashboard</Link>

          {/* Show UserButton when signed in */}
          <SignedIn>
            <UserButton />
          </SignedIn>

          {/* Show Sign In button when signed out */}
          <SignedOut>
            <Link to="/auth" className="sign-in-button">Sign In</Link>
          </SignedOut>
        </div>

        <Routes>
          <Route
            path="/"
            element={
              <FinancialRecordsProvider>
                <Dashboard />
              </FinancialRecordsProvider>
            }
          />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
