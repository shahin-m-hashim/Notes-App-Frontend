import { z } from "zod";

const passwordSchema = z
  .string()
  .nonempty("Required.")
  .min(6, "Minimum 6 characters.")
  .max(24, "Maximum 24 characters.")
  .regex(/\d/, "At least one number")
  .regex(/[a-z]/, "At least one lowercase letter")
  .regex(/[A-Z]/, "At least one uppercase letter")
  .regex(/[@$!%*?&]/, "At least one special character");

export default passwordSchema;
