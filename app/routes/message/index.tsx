import { createRoute } from "honox/factory";
import MessageInput from "../../islands/messageInput";
import MessageList from "../../islands/messageList";

/**
 * すべて
 */

export default createRoute((c) => {

  return c.render(
    <div>
      <h1>Message</h1>
      {/* タブ */}

      {/* 一覧 */}
      <MessageList />
      {/* 入力フォーム */}
      <MessageInput />
    </div>,
    { title: 'Message' }
  );
});
