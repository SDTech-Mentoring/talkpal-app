// talkpal/app/_layout.tsx
// talkpal/app/_layout.tsx
// talkpal/app/_layout.tsx

import React from "react";
import { FraseProvider } from "../context/FraseContext";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <FraseProvider>
      <Stack />
    </FraseProvider>
  );
}

