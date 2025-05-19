import { z } from "zod";

// Zod schema for validating page number
export const pageSchema = z.string().transform((val) => Math.max(Number(val), 1)).optional();
