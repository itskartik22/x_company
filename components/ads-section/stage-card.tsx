import { 
    Card,
    CardHeader,
    CardTitle,
    CardContent
 } from "../ui/card";
import Image from "next/image";
interface StageCardProps {
    image: string;
    type: string;
    description: string;

}

const StageCard = ({ image, type, description }: StageCardProps) => {
    return (
        // <Card className="w-[392px] h-[172px] shadow-lg">
        <Card className="lg:w-96 md:h-44 shadow-lg">
            <CardHeader className="-mb-2">
                <CardTitle className="flex gap-3 items-center">
                    <Image src={image} alt={type} width={32} height={32} />
                    <span className="text-xl">{type}</span>
                </CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-base">{description}</p>
            </CardContent>
        </Card>
    )
}

export default StageCard;