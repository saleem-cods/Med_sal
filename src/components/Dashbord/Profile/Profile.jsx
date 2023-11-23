import avater from "./PeofileImages/Avtar.svg";
import camera from "./PeofileImages/Camera.svg";
import user from "../../../assets/icons/Vector.svg";
import email from "../../../assets/icons/Email.svg";
import Typography from "../../utilities/Typography";
import view from "../../../assets/icons/View.svg";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
export default function Profile() {
  const { t } = useTranslation("global");
  const items = [
    {
      image: avater,
      name: "admin user",
      email: "rawanahd23@gmail.com",
    },
  ];

  return (
    <div className="flex md:justify-end justify-center pt-5 px-0 sm:px-5">
      <div className=" flex flex-col bg-white  min-w-[10%] sm:min-w-[25rem] rounded-md px-5 py-10 gap-5 ">
        {items.map((item) => (
          <>
            <div className=" relative flex items-center justify-center flex-col gap-2">
              <div className="relative ">
                <img
                  className="w-28 sm:w-32"
                  src={item.image ? item.image : ""}
                  alt={""}
                />
                <img
                  className="absolute bottom-3  ltr:start-24 rtl:start-24 "
                  src={item.image ? camera : ""}
                  alt=""
                />
              </div>
              <div>
                <Typography component={"p"}> {item.email}</Typography>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex justify-between items-center border-2 border-myGray-100 py-2 rounded-md">
                <Typography className={"ps-3"} component={"h4"}>
                  {item.name ? item.name : ""}
                </Typography>
                <img className="pe-3" src={user} alt="" />
              </div>
              <div className="flex justify-between items-center border-2  border-myGray-100 py-2 rounded-md">
                <Typography className={"ps-3"} component={"h4"}>
                  {item.email ? item.email : ""}
                </Typography>
                <img className="pe-3" src={email} alt="img" />
              </div>
              <div className="flex justify-between items-center border-2 border-myGray-100 py-2 rounded-md">
                <Typography className={"ps-3"} component={"h4"}>
                  ********
                </Typography>
                <img className="pe-3 w-6" src={view} alt="" />
              </div>
            </div>
          </>
        ))}
        <Link>
          <Typography
            className={"ltr:text-end rtl:text-start"}
            component={"secondary-text"}
          >
            {t("profile")}
          </Typography>
        </Link>
      </div>
    </div>
  );
}