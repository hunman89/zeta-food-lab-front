import Link from "next/link";
import { cls } from "utils/utils";

interface SubMenuProps {
  isBig?: boolean;
  index: number;
  position: number;
  text: string;
  url: string;
}

const SubMenu = ({
  isBig = true,
  index,
  position,
  text,
  url,
}: SubMenuProps) => {
  return (
    <Link href={url}>
      <a
        className={cls(
          "flex flex-row justify-between items-center hover:border-white  border-b-4 pb-5 px-2 text-center font-bold",
          position === index ? "border-white " : "border-gray-500",
          isBig ? "w-1/3" : "w-1/4"
        )}
      >
        <div>{text}</div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </a>
    </Link>
  );
};

export default SubMenu;
