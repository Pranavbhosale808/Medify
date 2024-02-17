import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { LuSearch } from "react-icons/lu";
import { IoAdd } from "react-icons/io5";
import { Label } from "@/components/ui/label";
import { IoIosMore } from "react-icons/io";

import img1 from "@/assets/img1.png";
import img2 from "@/assets/img2.png";
import img3 from "@/assets/img3.png";
import PageLayout from "@/components/PageLayout";
import { Link } from "react-router-dom";

const productList = [
  {
    img: img1,
    name: "Remdesivir 20 mg",
    inStock: 25,
    cprice: 2300,
    sprice: 3000,
    notes:
      "Lorem ipsum dolor sit amet, consectet ui i iadipLorem ipsum dolor sit amet,",
  },
  {
    img: img2,
    name: "Remdesivir 20 mg",
    inStock: 25,
    cprice: 2300,
    sprice: 3000,
    notes:
      "Lorem ipsum dolor sit amet, consectet ui i iadipLorem ipsum dolor sit amet,",
  },
  {
    img: img3,
    name: "Remdesivir 20 mg",
    inStock: 25,
    cprice: 2300,
    sprice: 3000,
    notes:
      "Lorem ipsum dolor sit amet, consectet ui i iadipLorem ipsum dolor sit amet,",
  },
  {
    img: img1,
    name: "Remdesivir 20 mg",
    inStock: 25,
    cprice: 2300,
    sprice: 3000,
    notes:
      "Lorem ipsum dolor sit amet, consectet ui i iadipLorem ipsum dolor sit amet,",
  },
  {
    img: img2,
    name: "Remdesivir 20 mg",
    inStock: 25,
    cprice: 2300,
    sprice: 3000,
    notes:
      "Lorem ipsum dolor sit amet, consectet ui i iadipLorem ipsum dolor sit amet,",
  },
  {
    img: img3,
    name: "Remdesivir 20 mg",
    inStock: 25,
    cprice: 2300,
    sprice: 3000,
    notes:
      "Lorem ipsum dolor sit amet, consectet ui i iadipLorem ipsum dolor sit amet,",
  },
  {
    img: img1,
    name: "Remdesivir 20 mg",
    inStock: 25,
    cprice: 2300,
    sprice: 3000,
    notes:
      "Lorem ipsum dolor sit amet, consectet ui i iadipLorem ipsum dolor sit amet,",
  },
  {
    img: img2,
    name: "Remdesivir 20 mg",
    inStock: 25,
    cprice: 2300,
    sprice: 3000,
    notes:
      "Lorem ipsum dolor sit amet, consectet ui i iadipLorem ipsum dolor sit amet,",
  },
];

function Products() {
  return (
    <PageLayout>
      <section className="p-12 w-full flex flex-col gap-8">
        <div className="flex justify-between items-center w-full">
          <div className="flex gap-4 items-center justify-center">
            <Input className="h-10 w-[350px]" placeholder="Search" />
            <Button size="icon" className="p-3">
              <LuSearch />
            </Button>
          </div>
          <div>
            <Label>Sort by</Label>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Cost Price">Cost Price</SelectItem>
                <SelectItem value="Selling Price">Selling Price</SelectItem>
                <SelectItem value="Profit">Profit</SelectItem>
                <SelectItem value="Name">Name</SelectItem>
                <SelectItem value="Qty in stock">Qty in stock</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col items-center">
            <Link to="/products/add-product">
              <Button>
                <IoAdd className="scale-150 mx-4" /> Add Product
              </Button>
            </Link>
            <Label className="text-subtitle">or scan a barcode</Label>
          </div>
        </div>
        <div>
          <Table>
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="text-center text-[18px] font-medium text-black">
                  Name
                </TableHead>
                <TableHead className="text-center text-[18px] font-medium text-black">
                  In Stock
                </TableHead>
                <TableHead className="text-center text-[18px] font-medium text-black">
                  Cost Price
                </TableHead>
                <TableHead className="text-center text-[18px] font-medium text-black">
                  Selling Price
                </TableHead>
                <TableHead className="text-center text-[18px] font-medium text-black">
                  Notes
                </TableHead>
                <TableHead className="text-center text-[18px] font-medium text-black">
                  {" "}
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {productList.map((item, i) => {
                return (
                  <TableRow key={i}>
                    <TableCell className="flex items-center justify-start gap-2">
                      <div className="rounded-full w-14">
                        <img src={img1} alt="#" className="" />
                      </div>
                      <h4 className="font-normal">{item.name}</h4>
                    </TableCell>
                    <TableCell>
                      <h4 className="font-normal">{item.inStock}</h4>
                    </TableCell>
                    <TableCell>
                      <h4 className="font-normal">₹{item.cprice}</h4>
                    </TableCell>
                    <TableCell>
                      <h4 className="font-normal">₹{item.sprice}</h4>
                    </TableCell>
                    <TableCell className="w-[320px]">
                      <p>{item.notes}</p>
                    </TableCell>
                    <TableCell>
                      <IoIosMore className="text-black scale-150 cursor-pointer" />
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
      </section>
    </PageLayout>
  );
}

export default Products;
