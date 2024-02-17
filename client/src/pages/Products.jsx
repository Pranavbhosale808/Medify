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

import PageLayout from "@/components/PageLayout";
import { Link } from "react-router-dom";
import { MdOutlineDelete } from "react-icons/md";

const productList = [
  {
    name: "Remdesivir 20 mg",
    description:
      "Lorem ipsum dolor sit amet, consectet ui i iadipLorem ipsum dolor sit amet,",
    qty: 50,
    lsv: 23,
    price: 3000,
    pd: "22/03/20024",
    ed: "22/03/20025",
  },
  {
    name: "Remdesivir 20 mg",
    description:
      "Lorem ipsum dolor sit amet, consectet ui i iadipLorem ipsum dolor sit amet,",
    qty: 50,
    lsv: 23,
    price: 3000,
    pd: "22/03/20024",
    ed: "22/03/20025",
  },
  {
    name: "Remdesivir 20 mg",
    description:
      "Lorem ipsum dolor sit amet, consectet ui i iadipLorem ipsum dolor sit amet,",
    qty: 50,
    lsv: 23,
    price: 3000,
    pd: "22/03/20024",
    ed: "22/03/20025",
  },
  {
    name: "Remdesivir 20 mg",
    description:
      "Lorem ipsum dolor sit amet, consectet ui i iadipLorem ipsum dolor sit amet,",
    qty: 50,
    lsv: 23,
    price: 3000,
    pd: "22/03/20024",
    ed: "22/03/20025",
  },
  {
    name: "Remdesivir 20 mg",
    description:
      "Lorem ipsum dolor sit amet, consectet ui i iadipLorem ipsum dolor sit amet,",
    qty: 50,
    lsv: 23,
    price: 3000,
    pd: "22/03/20024",
    ed: "22/03/20025",
  },
  {
    name: "Remdesivir 20 mg",
    description:
      "Lorem ipsum dolor sit amet, consectet ui i iadipLorem ipsum dolor sit amet,",
    qty: 50,
    lsv: 23,
    price: 3000,
    pd: "22/03/20024",
    ed: "22/03/20025",
  },
  {
    name: "Remdesivir 20 mg",
    description:
      "Lorem ipsum dolor sit amet, consectet ui i iadipLorem ipsum dolor sit amet,",
    qty: 50,
    lsv: 23,
    price: 3000,
    pd: "22/03/20024",
    ed: "22/03/20025",
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
            <TableHeader>
              <TableRow>
                <TableHead className="text-center text-[16px] font-medium text-black">
                  Name
                </TableHead>
                <TableHead className="text-center text-[16px] font-medium text-black">
                  Description
                </TableHead>
                <TableHead className="text-center text-[16px] font-medium text-black">
                  Quantity
                </TableHead>
                <TableHead className="text-center text-[16px] font-medium text-black">
                  Low Stack Value
                </TableHead>
                <TableHead className="text-center text-[16px] font-medium text-black">
                  Unit Price
                </TableHead>
                <TableHead className="text-center text-[16px] font-medium text-black">
                  Purchase Date
                </TableHead>
                <TableHead className="text-center text-[16px] font-medium text-black">
                  Expiry Date
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
                      <div className="rounded-full w-14"></div>
                      <p className="font-normal">{item.name}</p>
                    </TableCell>
                    <TableCell className="w-[320px]">
                      <Label>{item.description}</Label>
                    </TableCell>
                    <TableCell>
                      <p className="font-normal">{item.qty}</p>
                    </TableCell>
                    <TableCell>
                      <p className="font-normal">{item.lsv}</p>
                    </TableCell>
                    <TableCell>
                      <p className="font-normal">₹{item.price}</p>
                    </TableCell>
                    <TableCell>
                      <p className="font-normal">{item.pd}</p>
                    </TableCell>
                    <TableCell>
                      <p className="font-normal">{item.ed}</p>
                    </TableCell>
                    <TableCell>
                      {/* <IoIosMore className="text-black scale-150 cursor-pointer" /> */}
                      <MdOutlineDelete className="text-error scale-150 cursor-pointer" />
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
