import React from "react";
import { Control, Controller } from "react-hook-form";
import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@eli/components/ui/form";
import { Input } from "@eli/components/ui/input";
import { FormWrapper } from "@eli/pages/FormWrapper";
import { typeDataFrom } from "@eli/validation";

type PersonalDataForm = {
  control: Control<typeDataFrom>;
};

const PersonalDataFrom: React.FC<PersonalDataForm> = ({ control }) => {
  return (
    <FormWrapper title="Personal Data Information">
      <main className="flex items-center justify-center">
        <div className="p-8 rounded-lg shadow-lg w-96 ">
          <Controller
            control={control}
            name="username"
            render={({ field, fieldState }) => (
              <FormItem>
                <FormLabel className="text-white">Username</FormLabel>
                <FormControl>
                  <Input type="text" {...field} placeholder="Username" />
                </FormControl>
                {fieldState?.error && (
                  <FormMessage>{fieldState.error.message}</FormMessage>
                )}
              </FormItem>
            )}
          />
          <Controller
            control={control}
            name="lastname"
            render={({ field, fieldState }) => (
              <FormItem>
                <FormLabel className="text-white">Lastname</FormLabel>
                <FormControl>
                  <Input type="text" {...field} placeholder="Lastname" />
                </FormControl>
                {fieldState?.error && (
                  <FormMessage>{fieldState.error.message}</FormMessage>
                )}{" "}
              </FormItem>
            )}
          />
          <Controller
            control={control}
            name="age"
            render={({ field, fieldState }) => (
              <FormItem>
                <FormLabel className="text-white">Age</FormLabel>
                <FormControl>
                  <Input type="number" {...field} placeholder="Age" />
                </FormControl>
                {fieldState?.error && (
                  <FormMessage>{fieldState.error.message}</FormMessage>
                )}
              </FormItem>
            )}
          />
          <Controller
            control={control}
            name="address"
            render={({ field, fieldState }) => (
              <FormItem>
                <FormLabel className="text-white">Address</FormLabel>
                <FormControl>
                  <Input type="text" {...field} placeholder="Address" />
                </FormControl>
                {fieldState?.error && (
                  <FormMessage>{fieldState.error.message}</FormMessage>
                )}
              </FormItem>
            )}
          />
        </div>
      </main>
    </FormWrapper>
  );
};

export default PersonalDataFrom;
