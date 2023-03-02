import CommentsCSS from "../../styles/browse-styles/comments.module.css";
import { friends } from "../../assets/friends";

export const Comments = () => {
  const friendsComms = friends.map((friend) => {
    return (
      <div key={friend.id} className={CommentsCSS.card}>
        <div className={CommentsCSS.cardTop}>
          <img
            className={CommentsCSS.img}
            src={friend.personImg}
            alt="a picture of your friend"
          />
          <h4 className={CommentsCSS.friendName}>{friend.personName}</h4>
        </div>
        <div className={CommentsCSS.comm}>{friend.personComment}</div>
      </div>
    );
  });

  return (
    <section className={Comments.section}>
      <h3>Comments</h3>
      <div className={CommentsCSS.wrapper}>{friendsComms}</div>
    </section>
  );
};
