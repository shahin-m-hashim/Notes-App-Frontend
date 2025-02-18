import { z } from "zod";

export const CATEGORIES = ["OTHER", "WORK", "STUDY", "PERSONAL"];
export const COLORS = ["#fec971", "#fe9b72", "#b693fd", "#e4ef90", "#00d4fe"];

const noteSchema = z.object({
  title: z
    .string()
    .trim()
    .nonempty("Required.")
    .min(3, "At least 3 characters")
    .max(30, "At most 30 characters"),
  content: z
    .string()
    .trim()
    .nonempty("Required.")
    .min(3, "At least 3 characters")
    .max(1000, "At most 1000 characters"),
  color: z.enum(COLORS).default("#e8e9eb"),
  category: z.enum(CATEGORIES).default("OTHER"),
});

export default noteSchema;
