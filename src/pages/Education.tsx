import React from "react";
// import { z } from "zod";
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

interface EducationForm {
  control: Control<typeDataFrom>;
}

const FormEducation: React.FC<EducationForm> = ({ control }) => {
  return (
    <FormWrapper title="Education">
      <main className="flex items-center justify-center   from-gray-200 to-gray-300">
        <div className=" p-8 rounded-lg shadow-lg w-96">
          <h2 className="text-3xl font-bold text-center mb-6 text-blue-600"></h2>
          <Controller
            control={control}
            name="name_School"
            render={({ field, fieldState }) => {
              return (
                <FormItem>
                  <FormLabel className="text-white">Name_School</FormLabel>
                  <FormControl>
                    <Input type="text" {...field} placeholder="name school" />
                  </FormControl>
                  {fieldState?.error && (
                    <FormMessage>{fieldState.error.message}</FormMessage>
                  )}{" "}
                </FormItem>
              );
            }}
          />
          <Controller
            control={control}
            name="graduate_year"
            render={({ field, fieldState }) => {
              return (
                <FormItem>
                  <FormLabel className="text-white">Graduate_year</FormLabel>
                  <FormControl>
                    <Input type="text" {...field} placeholder="Graduate year" />
                  </FormControl>
                  {fieldState?.error && (
                    <FormMessage>{fieldState.error.message}</FormMessage>
                  )}{" "}
                </FormItem>
              );
            }}
          />
          <Controller
            control={control}
            name="educational_level"
            render={({ field, fieldState }) => {
              return (
                <FormItem>
                  <FormLabel className="text-white">
                    Educational_level
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      {...field}
                      placeholder="Educational Level"
                    />
                  </FormControl>
                  {fieldState?.error && (
                    <FormMessage>{fieldState.error.message}</FormMessage>
                  )}{" "}
                </FormItem>
              );
            }}
          />
          <Controller
            control={control}
            name="address_School"
            render={({ field, fieldState }) => {
              return (
                <FormItem>
                  <FormLabel className="text-white">Address_School</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      {...field}
                      placeholder="address_School"
                    />
                  </FormControl>
                  {fieldState?.error && (
                    <FormMessage>{fieldState.error.message}</FormMessage>
                  )}{" "}
                </FormItem>
              );
            }}
          />
        </div>
      </main>
    </FormWrapper>
  );
};

export default FormEducation;
