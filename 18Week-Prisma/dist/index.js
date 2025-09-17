import { PrismaClient } from "@prisma/client";
const client = new PrismaClient();
client.users.create({
    data: {
        name: "Nitin",
        email: "yadavnitn.com",
        password: "123123",
        city: "lucknow",
    }
});
//# sourceMappingURL=index.js.map