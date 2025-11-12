"use client";

import { StarField } from "./StarField";

export function StarWarsBackground() {
  return (
    <>
      <StarField />
      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-transparent via-blue-900/10 to-black" />
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]" />
    </>
  );
}
