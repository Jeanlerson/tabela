import Example from "@/components/Table";
import { GET } from "./api/ping/route";
import ExampleWithProviders from "@/components/Table";

export default function Page() {
  return (
    <div className="bg-white h-screen">
      <Example />
    </div>
  );
}
