import Agent from "@/components/Agent";
import { getCurrentUser } from "@/lib/actions/auth.action";

const Page = async () => {
  const user = await getCurrentUser();

  if (!user) {
    return <p className="text-center">Please log in to generate interviews.</p>;
  }

  return (
    <>
      <h3>Interview generation</h3>

      <Agent
        userName={user?.name!}
        userId={user?.id}
        profileImage=""
        type="generate"
      />
    </>
  );
};

export default Page;