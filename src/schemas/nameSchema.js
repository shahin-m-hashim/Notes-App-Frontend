import { z } from "zod";

const nameSchema = z
  .string()
  .nonempty("Required.")
  .min(3, "At least 3 characters.")
  .max(30, "At most 30 characters.");

export default nameSchema;
