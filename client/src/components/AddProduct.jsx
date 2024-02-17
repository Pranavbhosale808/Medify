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

function AddProduct() {
  return (
    <PageLayout>
      <section className="pt-12 px-12 flex gap-12 items-start w-full justify-center">
        <div className="flex flex-col items-center justify-center gap-4">
          <img src={img1} alt="#" className="w-[282px] h-[250px] rounded-3xl" />
          <Button>Browse photos</Button>
          <Button className="bg-error">Remove photo</Button>
        </div>
        <div className="flex flex-col gap-6">
          <div>
            <Label>Name</Label>
            <Input placeholder="Remdesivir" />
          </div>
          <div>
            <Label>Quantity in stock</Label>
            <Input placeholder="250" />
          </div>
          <div>
            <Label>Low stock warning</Label>
            <Input placeholder="15" />
          </div>
          <div className="flex gap-4 justify-center items-center">
            <div>
              <Label>Cost Price (1 item)</Label>
              <Input placeholder="₹150" />
            </div>
            <div>
              <Label>Selling Price (1 item)</Label>
              <Input placeholder="₹170" />
            </div>
          </div>
          <div>
            <Label>Preffered vendor</Label>
            <Select>
              <SelectTrigger className="w-full h-[56px]">
                <SelectValue placeholder="Select vendor" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Label>Additional notes</Label>
          <Textarea
            placeholder="Lorem ipsum dolor sit amet, consectet ui i iadipiscing elit.Lorem ipsum dolor sit amet, consectet ui i iadipiscing .Lorem ipsum dolor sit amet, consectet"
            className="h-[130px]"
          />
        </div>
      </section>
    </PageLayout>
  );
}

export default AddProduct;
