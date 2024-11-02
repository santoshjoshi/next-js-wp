import { Card, CardBody } from "@nextui-org/react";
import { IconFile } from "@tabler/icons-react";

export default function NotFound() {
    
  
    return ( 
        <Card className="mx-auto max-w-md mt-4">
            <CardBody>
                 <p className="flex items-center text-2xl  gap-2 "><IconFile/> This page cannot be found</p>
            </CardBody>
        </Card>
    );
}