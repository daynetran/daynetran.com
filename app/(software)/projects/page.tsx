import Image from "next/image";
import Penguino from "@/app/Penguinos.png";

const ProjectPage = () => {
    return (
        <div className="hidden lg:flex justify-center items-center h-full w-full flex-col ">
            <Image
                src={Penguino}
                alt="Penguino"
                width={1000}
                height={1000}
            />
        </div>
    )
}

export default ProjectPage;
