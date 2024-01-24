import UserStat from "../UserStat/UserStat";
import styles from "./UseCard.module.css";
import { LocalGithubUser } from "../../types";
import { UserTitle } from "../UserTitle/UserTitle";
import { UserInfo } from "../UserInfo/UserInfo";
interface UserCardProps extends LocalGithubUser {}
export default function UserCard(props: UserCardProps) {
  return (
    <div className={styles.userCard}>
      <img src={props.avatar} alt={props.login} className={styles.avatar} />
      <UserTitle
        created={props.created}
        login={props.login}
        name={props.name}
      />
      <p className={`${styles.bio}${props.bio ? "" : ` ${styles.empty}`}`}>
        {props.bio || "This profile has no bio"}
      </p>
      <UserStat
        repos={props.repos}
        followers={props.followers}
        following={props.following}
      />
      <UserInfo
        blog={props.blog}
        company={props.company}
        location={props.location}
        twitter={props.twitter}
      />
    </div>
  );
}
