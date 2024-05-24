import { Header } from "@/components/header";
import ChickenData from "@/repository/chicken.json";

import ChickenCard from "./chicken-card";

export function Homepage() {
  return (
    <div>
      <Header />
      <p className="py-4 px-2">Sumber Data : https://poultrykeeper.com/</p>
      <section className="w-full flex flex-row flex-wrap justify-center py-4">
        {ChickenData.map((data: { image_url: string; name: string }) => (
          <ChickenCard
            data={{
              image_url: data.image_url,
              name: data.name,
            }}
          />
        ))}
      </section>
    </div>
  );
}
