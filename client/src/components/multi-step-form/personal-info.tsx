import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SubscriptionFormData } from "@shared/schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

interface PersonalInfoProps {
  formData: Partial<SubscriptionFormData>;
  updateFormData: (data: Partial<SubscriptionFormData>) => void;
  nextStep: () => void;
}

const personalInfoSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Please enter a valid email"),
});

type PersonalInfoFormData = z.infer<typeof personalInfoSchema>;

export default function PersonalInfo({ formData, updateFormData, nextStep }: PersonalInfoProps) {
  const { register, handleSubmit, formState: { errors } } = useForm<PersonalInfoFormData>({
    resolver: zodResolver(personalInfoSchema),
    defaultValues: {
      firstName: formData.firstName || "",
      lastName: formData.lastName || "",
      email: formData.email || "",
    },
  });

  const onSubmit = (data: PersonalInfoFormData) => {
    updateFormData(data);
    nextStep();
  };

  return (
    <div className="form-step">
      <h3 className="text-xl font-title font-semibold mb-6">Your Information</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <Label htmlFor="firstName" className="block text-sm font-medium text-neutral-700 mb-1">
              First Name
            </Label>
            <Input
              id="firstName"
              {...register("firstName")}
              className={`w-full px-4 py-2 border ${
                errors.firstName ? "border-red-500" : "border-neutral-300"
              } rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors`}
              placeholder="Enter your first name"
            />
            {errors.firstName && (
              <p className="mt-1 text-sm text-red-500">{errors.firstName.message}</p>
            )}
          </div>
          <div>
            <Label htmlFor="lastName" className="block text-sm font-medium text-neutral-700 mb-1">
              Last Name
            </Label>
            <Input
              id="lastName"
              {...register("lastName")}
              className={`w-full px-4 py-2 border ${
                errors.lastName ? "border-red-500" : "border-neutral-300"
              } rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors`}
              placeholder="Enter your last name"
            />
            {errors.lastName && (
              <p className="mt-1 text-sm text-red-500">{errors.lastName.message}</p>
            )}
          </div>
        </div>
        <div className="mb-6">
          <Label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
            Email Address
          </Label>
          <Input
            id="email"
            type="email"
            {...register("email")}
            className={`w-full px-4 py-2 border ${
              errors.email ? "border-red-500" : "border-neutral-300"
            } rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors`}
            placeholder="Enter your email address"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
          )}
        </div>
        <div className="flex justify-end">
          <Button type="submit" className="bg-primary-600 hover:bg-primary-700">
            Next Step
          </Button>
        </div>
      </form>
    </div>
  );
}
