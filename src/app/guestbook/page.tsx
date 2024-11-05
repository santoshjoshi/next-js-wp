
import { Card, CardBody, CardHeader, CardFooter, Avatar} from "@nextui-org/react";
import GuestbookClient from "./page.client";
import { db } from "../db";
import requireAuth from "../utils/require-auth";

export default  async function GuestBook() {
   
   await requireAuth();

   const entries = db.query.guestbook_entries.findMany( {
      orderBy(fields, operators) {
        return operators.desc(fields.createdAt);
      },
      with: {
        user: true,
      },
    }); 
    
    return (
      <>
      <Card className="mx-auto mt-4 max-w-lg">
        <CardBody>
            <h1 className="text-5xl text-center">Welcome to  GuestBook</h1>
           <GuestbookClient />
           {(await (entries)).map((entry) => (
          <Card key={entry.id} className="m-2">
            <CardHeader className="justify-between">
              <div className="flex gap-5">
                <Avatar
                  isBordered
                  radius="full"
                  size="md"
                  src={entry.user.image}
                />
                <div className="flex flex-col items-start justify-center gap-1">
                  <h4 className="text-small font-semibold leading-none text-default-600">
                    {entry.user.name}
                  </h4>
                  <h5 className="text-small tracking-tight text-default-400">
                    {entry.user.email}
                  </h5>
                </div>
              </div>
            </CardHeader>
            <CardBody className="px-3 py-0 text-small text-default-400">
              <p>{entry.message}</p>
            </CardBody>
            <CardFooter className="gap-3">
              <div className="flex gap-1">
                <p className="text-small text-default-400">
                  {entry.createdAt.toLocaleString()}
                </p>
              </div>
            </CardFooter>
          </Card>
        ))}
        </CardBody>
      </Card>
      </>
    );
  }