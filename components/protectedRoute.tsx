import React from "react";
import { useAuth } from "../_context/authContext";
import { Redirect } from "expo-router";

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth();

  if (loading) return null; // Ou um spinner se preferir

  if (!user) {
    return <Redirect href="/auth/login" />;
  }

  return <>{children}</>;
}
