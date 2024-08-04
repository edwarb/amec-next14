import { Controller, useForm } from "react-hook-form";
import { signInWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth } from "lib/firebase/clientApp";
import { useToast } from "components/ui/use-toast";
import { useState } from "react";
import { useRouter } from "next/router";
import { LoadingButton } from "components/ui/loadingbutton";

interface Form {
  email: string;
  password: string;
}
function LoginApp() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { toast } = useToast();
  const { control, handleSubmit } = useForm<Form>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function handleLogin(values: Form) {
    setLoading(true);
    try {
      const resp = await signInWithEmailAndPassword(
        firebaseAuth,
        values.email,
        values.password,
      );
      if (resp.user) {
        toast({
          description: "Login Successfull",
        });
        setTimeout(() => {
          router.push("/dashboard-admin");
        }, 3000);
      }
    } catch (err) {
      toast({
        description: (err as any)?.message || "User Error",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="mx-auto flex flex-col items-center justify-center px-6 py-8 md:h-screen lg:py-0">
        <div className="w-full rounded-lg bg-white shadow dark:border dark:border-gray-700 dark:bg-gray-800 sm:max-w-md md:mt-0 xl:p-0">
          <div className="space-y-4 p-6 sm:p-8 md:space-y-6">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white md:text-2xl">
              {`Login`}
            </h1>
            <form
              className="space-y-4 md:space-y-6"
              onSubmit={handleSubmit(handleLogin)}
            >
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  {`Email`}
                </label>

                <Controller
                  control={control}
                  name={"email"}
                  render={({ field }) => (
                    <input
                      type="email"
                      name={field.name}
                      id={field.name}
                      className="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
                      placeholder="name@company.com"
                      required
                      value={field.value}
                      onChange={field.onChange}
                    />
                  )}
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  {`Password`}
                </label>
                <Controller
                  name={"password"}
                  control={control}
                  render={({ field }) => (
                    <input
                      type="password"
                      name={field.name}
                      id={field.name}
                      placeholder="••••••••"
                      className="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
                      required
                      value={field.value}
                      onChange={field.onChange}
                    />
                  )}
                />
              </div>
              <div className="flex items-center justify-between">
                <a className="text-primary-600 dark:text-primary-500 text-sm font-medium hover:underline">
                  {`Forgot password?`}
                </a>
              </div>
              <LoadingButton
                loading={loading}
                type="submit"
                className="focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 w-full rounded-lg bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-slate-700 focus:outline-none focus:ring-4"
              >
                {`Sign in`}
              </LoadingButton>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LoginApp;
