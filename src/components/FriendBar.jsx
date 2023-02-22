import { friends } from "../assets/friends";
import FriendsCSS from "../styles/friends.module.css";

export const FriendBar = () => {
  const pals = friends.map((pers) => {
    return (
      <div className={FriendsCSS.imgContainer}>
        <img src={pers.personImg} alt="a image of your friend" />
      </div>
    );
  });

  return (
    <div>
      <button>+</button>
      {pals}
    </div>
  );
};
