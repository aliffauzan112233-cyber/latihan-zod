const result = schema.safeParse({
    name: "Alif",
    age: "18",
});

console.log(result)

if (!result.success){
    console.log(result.error.format());
}