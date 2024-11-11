import React from "react";
import { Control, Controller } from "react-hook-form";
import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "../components/ui/form";
import { Input } from "../components/ui/input";
import { FormWrapper } from "./FormWrapper";
import { typeDataFrom } from "@eli/validation";

interface InformationBankingForms {
  control: Control<typeDataFrom>;
}

const INformationBankingForms: React.FC<InformationBankingForms> = ({
  control,
}) => {
  return (
    <FormWrapper title="Information Banking">
      <main className="flex items-center justify-center from-gray-200 to-gray-300">
        <div className=" p-8 rounded-lg shadow-lg w-96">
          <h2 className="text-3xl font-bold text-center mb-6 text-blue-600"></h2>
          <Controller
            control={control}
            name="bank_name"
            render={({ field, fieldState }) => {
              return (
                <FormItem>
                  <FormLabel className="text-white">Bank Name</FormLabel>
                  <FormControl>
                    <Input type="text" {...field} />
                  </FormControl>
                  {fieldState?.error && (
                    <FormMessage>{fieldState.error.message}</FormMessage>
                  )}
                </FormItem>
              );
            }}
          />
          <Controller
            control={control}
            name="account_number"
            render={({ field, fieldState }) => {
              return (
                <FormItem>
                  <FormLabel className="text-white">Account number</FormLabel>
                  <FormControl>
                    <Input type="number" {...field} />
                  </FormControl>
                  {fieldState?.error && (
                    <FormMessage>{fieldState.error.message}</FormMessage>
                  )}
                </FormItem>
              );
            }}
          />
          <Controller
            control={control}
            name="manufacturer_branch_address"
            render={({ field, fieldState }) => {
              return (
                <FormItem>
                  <FormLabel className="text-white">
                    Manufacturer_branch_address
                  </FormLabel>
                  <FormControl>
                    <Input type="text" {...field} />
                  </FormControl>
                  {fieldState?.error && (
                    <FormMessage>{fieldState.error.message}</FormMessage>
                  )}
                </FormItem>
              );
            }}
          />
        </div>
      </main>
    </FormWrapper>
  );
};

export default INformationBankingForms;
