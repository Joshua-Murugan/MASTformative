import React from "react";

// Minimal HomeScreen inlined to avoid a missing-module error.
// Replace this with an imported ./HomeScreen component when you add that file.
const HomeScreen: React.FC = () => {
  // Placeholder UI; return null so this is safe in both web and native builds.
  return null;
};

// Lightweight App entrypoint. Navigation libraries were removed to keep
// the project runnable without installing extra native deps. If you want
// navigation back, reinstall and re-enable @react-navigation packages.
const App: React.FC = () => {
  return <HomeScreen />;
};

export default App;
