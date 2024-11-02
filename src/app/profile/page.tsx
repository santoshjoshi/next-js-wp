import { Card, CardBody, User } from "@nextui-org/react";
import { getServerSession } from "next-auth";

import options from "@/app/config/auth";
import requireAuth from "../utils/require-auth";

export default async function Profile() {

  // making sure that only loged in user are able to access
  await requireAuth();

  //session wont be null
  const session = (await getServerSession(options))!;

  return (
    <Card className="mx-auto mt-4 max-w-md">
      <CardBody>
        <User
          name={session.user?.name}
          description={session.user?.email}
          avatarProps={{
            showFallback: !session.user?.image,
            src: session.user?.image || "",
          }}
        />
      </CardBody>
  
    </Card>
  );
}