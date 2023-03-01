import { friends } from "../assets/friends";
import FriendsCSS from "../styles/friends.module.css";

export const FriendBar = () => {
  const pals = friends.map((pers) => {
    return (
      <div key={pers.id} className={FriendsCSS.imgContainer}>
        <img
          className={FriendsCSS.img}
          src={pers.personImg}
          alt="a image of your friend"
        />
      </div>
    );
  });

  return (
    <div className={FriendsCSS.friendsSidebar}>
      <button className={FriendsCSS.addBtn}>+</button>
      {pals}
    </div>
  );
};
