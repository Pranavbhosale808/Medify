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
      <section className="pt-12 px-10 flex gap-12 items-start w-full justify-center">
        {/* <div className="flex flex-col items-center justify-center gap-4">
          <img src={img1} alt="#" className="w-[282px] h-[250px] rounded-3xl" />
          <Button>Browse photos</Button>
          <Button className="bg-error">Remove photo</Button>
        </div> */}
        <div className="flex flex-col w-1/2 gap-6">
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
          <div className="flex gap-4 justify-center items-center">
            <div>
              <Label>Purchase Date</Label>
              <Input type="date" />
            </div>
            <div>
              <Label>Expiry Date</Label>
              <Input type="date" />
            </div>
          </div>
          <div>
            <Label>Description</Label>
            <Textarea
              placeholder="Lorem ipsum dolor sit amet, consectet ui i iadipiscing elit.Lorem ipsum dolor sit amet, consectet ui i iadipiscing .Lorem ipsum dolor sit amet, consectet"
              className="h-[130px]"
            />
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

export default AddProduct;
