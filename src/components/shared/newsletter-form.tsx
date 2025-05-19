"use client";

import { subscribeAction } from "@/app/_actions/subscribe";
import { useActionState, useEffect, useRef } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { subscribeSchema } from "@/app/schemas/subscribe.schema";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem } from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { CircleCheckIcon, CircleX, Loader2 } from "lucide-react";

// Subscribe Button Component with Loading State
const SubscribeButton = ({ pending }: { pending: boolean }) => {
  return (
    <Button
      disabled={pending}
      type="submit"
      className="w-full font-bold uppercase flex items-center justify-center gap-2"
    >
      {pending && <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />}
      Subscribe Now
    </Button>
  );
};

export const NewsletterForm = () => {
  const [state, formAction] = useActionState(subscribeAction, {
    success: false,
    message: "",
  });

  const form = useForm({
    resolver: zodResolver(subscribeSchema),
    mode: "onChange",
  });

  const handleFormAction = async (formData: FormData) => {
    const valid = await form.trigger();
    if (!valid) return;
    formAction(formData);
  };

  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state?.success && formRef.current) {
      formRef.current.reset();
    }
  }, [state?.success]);

  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-primary mb-2">
        📬 Stay in the Loop!
      </h3>
      <p className="text-sm text-gray-600">
        Subscribe to get the latest car listings and offers 🚗
      </p>

      <Form {...form}>
        <form
          ref={formRef}
          className="space-y-4"
          action={handleFormAction}
          onSubmit={() => null}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="First Name"
                      className="bg-white"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Last Name"
                      className="bg-white"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Email Address 📧" className="bg-white" {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          {/* Subscribe Button with Loading State */}
          <SubscribeButton pending={state?.success === undefined} />

          {state?.success && (
            <div className="flex items-center gap-2 rounded-md bg-green-500 p-3 text-white">
              <CircleCheckIcon className="h-5 w-5" />
              <span>✅ Success! {state.message}</span>
            </div>
          )}

          {!state?.success && state?.message && (
            <div className="flex items-center gap-2 rounded-md bg-red-500 p-3 text-white">
              <CircleX className="h-5 w-5" />
              <span>❌ Error! {state.message}</span>
            </div>
          )}
        </form>
      </Form>

      {/* Optional Footer (if needed separately from PublicFooter) */}
      <footer className="mt-10 bg-slate-800 text-white py-4 rounded-xl shadow-md">
        <div className="container mx-auto text-center space-y-2">
          <div>
            <p className="font-semibold text-lg">🏢 GariZone Ltd.</p>
            <p>📍 1234 Motor Ave, Dar es Salaam, Tanzania</p>
            <p>📞 +255 712 345 678 | ✉️ support@garizone.com</p>
          </div>
          <p className="text-sm">&copy; {new Date().getFullYear()} GariZone. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};
