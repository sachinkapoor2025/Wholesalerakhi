import { describe, expect, it } from "vitest";
import { allowSubmission, leadInputSchema } from "./leads";

describe("lead validation", () => {
  it("requires name, email, country and buyer type", () => {
    const result = leadInputSchema.safeParse({
      name: "A",
      email: "bad",
      country: "",
      buyerType: "Retailer",
    });
    expect(result.success).toBe(false);
  });

  it("accepts a complete enquiry", () => {
    const result = leadInputSchema.safeParse({
      name: "Priya Shah",
      email: "priya@example.com",
      country: "United Kingdom",
      buyerType: "Retailer",
      estimatedQuantity: "100–500",
      interestedCategories: ["Designer Rakhi"],
    });
    expect(result.success).toBe(true);
  });

  it("rate limits repeated keys", () => {
    const key = `test-${Date.now()}`;
    for (let i = 0; i < 5; i += 1) expect(allowSubmission(key)).toBe(true);
    expect(allowSubmission(key)).toBe(false);
  });
});
