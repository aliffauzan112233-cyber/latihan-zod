import { z } from "zod";

const schema = z.object({
    name: z.string(),
    age: z.number(),
});

console.log(schema.safeParse({
    name: "Ari",
    age: 25,
}));