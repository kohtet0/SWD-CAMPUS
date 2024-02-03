import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const FormComponents = ({ htmlFor, label, ...props }) => {
  return (
    <>
      <Label htmlFor={htmlFor}>{label}</Label>
      <Input className="border border-neutral-700" {...props} />
    </>
  );
};

export default FormComponents;
