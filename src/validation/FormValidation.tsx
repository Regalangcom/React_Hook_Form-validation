import { z } from "zod";

const LoginFormSchemas = z.object({
  username: z
    .string()
    .min(3, "Usename Minimal 3 Karakter")
    .max(16, "Username max 16 karakter"),
  lastname: z
    .string()
    .min(3, "Password Minimal 3 Karakter")
    .max(16, "Password max 16 karakter"),
  age: z.coerce.number().min(1, "age Minimal 3 Karakter"),
  address: z
    .string()
    .min(3, "address Minimal 3 Karakter")
    .max(16, "address max 16 karakter"),
});

const Education = z.object({
  name_School: z.string().min(4, "Name School is required"),
  graduate_year: z.coerce.number().min(3, "graduate year is required"),
  educational_level: z.string().min(1, "educational_level is required"),
  address_School: z.string().min(4, "address School is required"),
});

const InformationBanking = z.object({
  bank_name: z.string().min(5, "bank_name Number is required"),
  account_number: z.coerce.number().min(0, "account_number is required"),
  manufacturer_branch_address: z
    .string()
    .min(5, "manufacturer_branch_address Number is required"),
});

// Gabungkan semua skema
const LoginFormSchema =
  LoginFormSchemas.merge(Education).merge(InformationBanking);

export type LoginFormValues = z.infer<typeof LoginFormSchema>;

export { LoginFormSchema };
