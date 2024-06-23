import { User } from "firebase/auth";
import { useUserFirebase } from "lib/firebase/hooks/useUser";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

interface WrappedComponentProps {
  // Props passed to the wrapped component
  user?: User;
}

export function withAdmin<T extends WrappedComponentProps = {}>(
  WrappedComponent: React.ComponentType<T>,
) {
  const _withAdmin = (props: T) => {
    const router = useRouter();
    const [user, isLoading] = useUserFirebase();

    useEffect(() => {
      if (!isLoading && !user) {
        router.push("/");
      }
    }, [isLoading, user]);

    if (isLoading || !user) return <div>loading</div>;
    return <WrappedComponent {...props} user={user} />;
  };

  _withAdmin.displayName = `WithLoading(${
    typeof WrappedComponent.displayName || WrappedComponent.name
  })`;

  return _withAdmin;
}
