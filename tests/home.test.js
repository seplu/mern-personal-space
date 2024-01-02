import { describe, expect, it } from "vitest";

describe("Test response status on main page", () => {
  it("GET", async () => {
    fetch("http://localhost:5000/").then((res) => {
      expect(res.status).toBe(200);
    });
  });
});
