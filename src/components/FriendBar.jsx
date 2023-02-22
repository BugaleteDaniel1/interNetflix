import { friends } from "../assets/friends";

export const FriendBar = () => {
  const pals = friends.map((pers) => {
    return (
      <div>
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
