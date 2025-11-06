import { z } from "zod";

export const zSchema = z.object({
  title: z.string().min(1, "Name is required"),
  description: z.string().min(1, "Designation is required"),
});
