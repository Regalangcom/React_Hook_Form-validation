import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMultiStepForm } from "@eli/hooks/useMultiForm";
import { LoginFormSchema } from "@eli/validation/FormValidation";
import FormEducation from "./Education";
import InformationBankingForms from "@eli/pages/InformationBanking";
import { Form } from "@eli/components/ui/form";
import PersonalDataFrom from "@eli/pages/PersonalDataForm";
import { typeDataFrom } from "@eli/validation";
import axios from "axios";
import { useEffect, useState } from "react";

const Forms: React.FC = () => {
  const [csurf, setcsurf] = useState<string | null>(null);
  const defaultValues: typeDataFrom = {
    id: 0,
    username: "",
    lastname: "",
    age: 0,
    address: "",
    name_School: "",
    address_School: "",
    graduate_year: 0,
    educational_level: "",
    bank_name: "",
    account_number: 0,
    manufacturer_branch_address: "",
  };

  const form = useForm<typeDataFrom>({
    resolver: zodResolver(LoginFormSchema),
    defaultValues: defaultValues,
  });

  const { control, handleSubmit, reset } = form;
  const { currentStep, isFirstStep, isLastStep, steps, step, Back, Next } =
    useMultiStepForm([
      <PersonalDataFrom control={control} />,
      <FormEducation control={control} />,
      <InformationBankingForms control={control} />,
    ]);

  useEffect(() => {
    const axiosCsruf = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_LOCAL_HOST_SERVER}/api/v1/data/csrf-Token`,
          { withCredentials: true }
        );
        setcsurf(response.data.csurfToken);
      } catch (error) {
        console.log("error data", error);
      }
    };
    axiosCsruf();
  }, []);

  const onSubmit: SubmitHandler<typeDataFrom> = async (
    values: typeDataFrom
  ) => {
    try {
      const response = await axios.post<typeDataFrom>(
        `${import.meta.env.VITE_LOCAL_HOST_SERVER}/api/v1/data/personalData`,
        values,
        {
          headers: {
            "X-CSRF-Token": csurf,
          },
          withCredentials: true,
        }
      );
      reset();
      console.log(response.data);
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Error occurred:", error.message); // Akses property `message`

        if (axios.isAxiosError(error) && error.response?.status === 403) {
          window.location.href = "http://localhost:5173/NotFound";
        }
      } else {
        console.error("Unexpected error:", error);
      }
    }
  };

  console.log("result : ", onSubmit);

  return (
    <main className="flex  items-center justify-center min-h-screen bg-gray-100">
      <div className="p-6 rounded-lg shadow-2xl bg-gray-800 w-full max-w-md">
        <h2 className="text-lg text-white  font-semibold text-start mb-4">
          {currentStep + 1} / {steps.length}
        </h2>
        <Form {...form}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="">{step}</div>
            <div className="flex justify-between mt-4">
              {!isFirstStep && (
                <button
                  type="button"
                  className="w-full bg-red-600 text-white font-semibold py-2 rounded-lg hover:bg-red-700 transition duration-200 mr-2"
                  onClick={Back}
                >
                  Back
                </button>
              )}
              <button
                type="submit"
                className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition duration-200"
                onClick={Next}
              >
                {isLastStep ? "Submit" : "Next"}
              </button>
            </div>
          </form>
        </Form>
      </div>
    </main>
  );
};

export default Forms;
