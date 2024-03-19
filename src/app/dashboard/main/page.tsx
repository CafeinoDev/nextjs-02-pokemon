import { WidgetsGrid } from "@/components";


export const metadata = {
 title: 'Admin Dashboard',
 description: 'Dashboard',
};

export default function MainPage() {
  return (
    <div>
      <h1 className="text-black mt-2 text-3xl">Dashboard</h1>
      <span className="text-black mt-2 text-md">General information</span>

      <WidgetsGrid />
    </div>
  );
}