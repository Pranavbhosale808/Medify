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
    username: "Navtika",
    description:
      "Lorem ipsum dolor sit amet, consectet ui i iadipLorem ipsum dolor sit amet,",
    email: "vendorEmail@gmail.com",
    phn: "87888888888",
  },
  {
    username: "Nishant",
    description:
      "Lorem ipsum dolor sit amet, consectet ui i iadipLorem ipsum dolor sit amet,",
    email: "vendorEmail@gmail.com",
    phn: "87888888888",
  },
  {
    username: "Nikhil",
    description:
      "Lorem ipsum dolor sit amet, consectet ui i iadipLorem ipsum dolor sit amet,",
    email: "vendorEmail@gmail.com",
    phn: "87888888888",
  },
  {
    username: "Samiksa",
    description:
      "Lorem ipsum dolor sit amet, consectet ui i iadipLorem ipsum dolor sit amet,",
    email: "vendorEmail@gmail.com",
    phn: "87888888888",
  },
  {
    username: "Sai Pranav",
    description:
      "Lorem ipsum dolor sit amet, consectet ui i iadipLorem ipsum dolor sit amet,",
    email: "vendorEmail@gmail.com",
    phn: "87888888888",
  },
  {
    username: "Sahil",
    description:
      "Lorem ipsum dolor sit amet, consectet ui i iadipLorem ipsum dolor sit amet,",
    email: "vendorEmail@gmail.com",
    phn: "87888888888",
  },
  {
    username: "Kushal",
    description:
      "Lorem ipsum dolor sit amet, consectet ui i iadipLorem ipsum dolor sit amet,",
    email: "vendorEmail@gmail.com",
    phn: "87888888888",
  },
  {
    username: "Kushala",
    description:
      "Lorem ipsum dolor sit amet, consectet ui i iadipLorem ipsum dolor sit amet,",
    email: "vendorEmail@gmail.com",
    phn: "87888888888",
  },
];

function Vendors() {
  return (
    <PageLayout>
      <section className="p-12 pl-[290px] flex flex-col gap-8">
        <div className="flex justify-around items-center w-full">
          <div className="flex gap-4 items-center justify-center">
            <Input className="h-10 w-[350px]" placeholder="Search" />
            <Button size="icon" className="p-3">
              <LuSearch />
            </Button>
          </div>
          {/* <div>
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
          </div> */}
          <div className="flex flex-col items-center">
            <Link to="/vendors/add-vendor">
              <Button>
                <IoAdd className="scale-150 mx-4" /> Add Vendor
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
                  Username
                </TableHead>
                <TableHead className="text-center text-[16px] font-medium text-black">
                  Email
                </TableHead>
                <TableHead className="text-center text-[16px] font-medium text-black">
                  Phone Number
                </TableHead>
                <TableHead className="text-center text-[16px] font-medium text-black">
                  Description
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {productList.map((item, i) => {
                return (
                  <TableRow key={i}>
                    <TableCell className="flex items-center justify-start gap-2">
                      <div className="rounded-full w-14"></div>
                      <p className="font-normal">{item.username}</p>
                    </TableCell>

                    <TableCell>
                      <p className="font-normal">{item.email}</p>
                    </TableCell>
                    <TableCell>
                      <p className="font-normal">{item.phn}</p>
                    </TableCell>
                    <TableCell className="w-[320px]">
                      <Label>{item.description}</Label>
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

export default Vendors;
