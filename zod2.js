import { z } from "zod";

// bikin schema dulu
const schema = z.object({
  name: z.string(),
});

// baru dipakai
const result = schema.safeParse({
  name: "Alif"
});

console.log(result);