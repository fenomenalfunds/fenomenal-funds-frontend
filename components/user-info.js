import {useAuth} from "../lib/auth.context";
import _ from "lodash";
import Link from "next/link";
import styles from "../styles/components/navigation.module.scss";
import ProfilePhoto from "./profile-photo";

const UserInfo = ({user}) => {

	return <>
		{!_.isEmpty(user.fullname) ?
				<li>
					<Link href={`/user/profile`}>
						<a className={`${styles.btn} ${styles.profile}`}>
							<p>{user.fullname}</p>
							<figure>
								{_.isEmpty(user.photo) ? <img src="/FF_2021_ImagePlaceholder_510x288.jpg" alt={user.fullname}/> :
										<ProfilePhoto image={user.photo}/>
								}
							</figure>
						</a>
					</Link>
				</li> :
				<li>
					<Link href={`/login`}>
						<a className={styles.btn}>
							<span>Login</span>
						</a>
					</Link>
				</li>}
	</>
}

export default UserInfo;