import { LocalGithubUser } from "../../types";

import styles from "./UserInfo.module.css";
import { FaLocationDot } from "react-icons/fa6";
import { BiLogoBlogger } from "react-icons/bi";
import { FaSquareTwitter } from "react-icons/fa6";
import { SiGithub } from "react-icons/si";
import { InfoItem, InfoItemProps } from "../InfoItem/InfoItem";
interface UserInfoProps
  extends Pick<LocalGithubUser, "blog" | "company" | "location" | "twitter"> {}

export const UserInfo = ({
  blog,
  company,
  location,
  twitter,
}: UserInfoProps) => {
  const items: InfoItemProps[] = [
    {
      icon: <FaLocationDot />,
      text: location,
    },
    {
      icon: <BiLogoBlogger />,
      text: blog,
      isLink: true,
    },
    {
      icon: <FaSquareTwitter />,
      text: twitter,
    },
    {
      icon: <SiGithub />,
      text: company,
    },
  ];

  return (
    <div className={styles.userInfo}>
      {items.map((item, index) => (
        <InfoItem {...item} key={index} />
      ))}
    </div>
  );
};
