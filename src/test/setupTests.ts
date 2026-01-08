import "@testing-library/jest-dom";
import { beforeAll, afterAll, afterEach } from "vitest";
import { server } from "./mocks/server";
import { cleanup } from "@testing-library/react";

// Start MSW before all tests
beforeAll(() => server.listen({ onUnhandledRequest: "error" }));

// Reset handlers after each test (important for isolation)
afterEach(() => {
  server.resetHandlers();
  cleanup();
});

// Clean up once all tests are done
afterAll(() => server.close());
