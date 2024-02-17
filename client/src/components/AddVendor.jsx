import img1 from "@/assets/product.png";
import PageLayout from "./PageLayout";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function AddVendor() {
  return (
    <PageLayout>
      <section className="py-12 px-10 flex gap-12 items-start w-full justify-center">
        {/* <div className="flex flex-col items-center justify-center gap-4">
          <img src={img1} alt="#" className="w-[282px] h-[250px] rounded-3xl" />
          <Button>Browse photos</Button>
          <Button className="bg-error">Remove photo</Button>
        </div> */}
        <form className="flex flex-col w-1/2 gap-6">
          <div>
            <Label>Username</Label>
            <Input placeholder="Ritik" />
          </div>
          <div>
            <Label>Email</Label>
            <Input placeholder="vendor@gmail.com" type="email" />
          </div>
          <div>
            <Label>Phone Number</Label>
            <Input placeholder="+91 8823288323" type="number" />
          </div>
          <div>
            <Label>Description</Label>
            <Textarea
              placeholder="Lorem ipsum dolor sit amet, consectet ui i iadipiscing elit.Lorem ipsum dolor sit amet, consectet ui i iadipiscing .Lorem ipsum dolor sit amet, consectet"
              className="h-[130px]"
            />
          </div>
          <div className="flex gap-4 w-full justify-between items-center">
            <Button>Add Vendor</Button>
            <Button
              variant="outline"
              className="border border-primary text-primary"
            >
              Cancel
            </Button>
          </div>
        </form>
      </section>
    </PageLayout>
  );
}

export default AddVendor;
