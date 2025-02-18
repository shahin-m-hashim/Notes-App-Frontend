import { z } from "zod";

const emailSchema = z
  .string()
  .nonempty("Required.")
  .email("Invalid email address.");

export default emailSchema;
