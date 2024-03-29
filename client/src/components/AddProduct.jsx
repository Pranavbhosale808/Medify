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
      <section className="py-12 px-10 flex gap-12 items-start w-full justify-center">
        {/* <div className="flex flex-col items-center justify-center gap-4">
          <img src={img1} alt="#" className="w-[282px] h-[250px] rounded-3xl" />
          <Button>Browse photos</Button>
          <Button className="bg-error">Remove photo</Button>
        </div> */}
        <form className="flex flex-col w-1/2 gap-6">
          <div>
            <Label>Name</Label>
            <Input placeholder="Remdesivir" />
          </div>
          <div>
            <Label>Quantity</Label>
            <Input placeholder="250" type="number" />
          </div>
          <div>
            <Label>Low Stock Value</Label>
            <Input placeholder="15" type="number" />
          </div>
          <div>
            <Label>Unit Price (1 Item)</Label>
            <Input placeholder="170" type="number" />
          </div>
          <div className="flex w-full gap-4 justify-center items-center">
            <div className="w-full">
              <Label>Purchase Date</Label>
              <Input type="date" />
            </div>
            <div className="w-full">
              <Label>Expiry Date</Label>
              <Input type="date" />
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
          <div>
            <Label>Description</Label>
            <Textarea
              placeholder="Lorem ipsum dolor sit amet, consectet ui i iadipiscing elit.Lorem ipsum dolor sit amet, consectet ui i iadipiscing .Lorem ipsum dolor sit amet, consectet"
              className="h-[130px]"
            />
          </div>
          <div className="flex gap-4 w-full justify-between items-center">
            <Button>Add Product</Button>
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

export default AddProduct;
