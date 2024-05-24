import Image from "next/image";

interface DataChickenCardProps {
  image_url: string;
  name: string;
}

export default function ChickenCard({ data }: { data: DataChickenCardProps }) {
  return (
    <figure className="group w-[200px] h-[220px] p-4 hover:ring-1 hover:rounded-md cursor-pointer">
      <div className="w-full h-full flex flex-col justify-between group-hover:animate-pulse">
        <Image src={data.image_url} width={100} height={80} alt={data.name} />
        <h4>{data.name}</h4>
      </div>
    </figure>
  );
}
