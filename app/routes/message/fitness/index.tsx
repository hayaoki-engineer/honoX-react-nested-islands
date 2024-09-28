import { createRoute } from "honox/factory";
import MessageList from "../../../islands/messageList";
import MessageFitnessInput from "../../../islands/messageFitnessInput";


/**
 * フィットネス
 */

export default createRoute((c) => {
  return c.render(
    <div>
      <h1>Message</h1>
      {/* タブ */}

      {/* 一覧 */}
      <MessageList />
      {/* 入力フォーム */}
      <MessageFitnessInput />
    </div>,
    { title: "Message" }
  );
});
