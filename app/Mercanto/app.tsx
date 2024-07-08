import React from "react";
import { Stack } from "expo-router";

const App = () => {
  return (
    <Stack>
      <Stack.Screen name="onboardingscreen" options={{ headerShown: false }} />
    </Stack>
  );
};

export default App;
