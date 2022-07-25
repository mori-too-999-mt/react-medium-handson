import React, { useState, useCallback, useMemo } from "react";
import { ChildArea } from "./ChildArea";
import "./styles.css";

export default function App() {
  console.log("app");
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);

  const onChangeText = (event) => setText(event.target.value);
  const onClickOpen = () => setOpen(!open);
  // arrow関数をpropsで渡すと、毎回関数が生成＝propsが変わるという扱いになる
  // これを防ぐために、useCallbackを使う、関数を使いまわす場合に使う、
  // 第二引数は変更を監視する対象を入れる
  // 関数のメモ化
  const onClickClose = useCallback(() => setOpen(false), [setOpen]); //空配列でもいいが、setOpenの値監視でもOK

  // useMemoは変数のメモ化
  // 第二引数の値を監視して変わったら第一引数の処理を再計算
  const temp = useMemo(() => 1 + 3, []);
  console.log(temp);

  return (
    <div className="App">
      <input value={text} onChange={onChangeText} />
      <br />
      <br />
      <button onClick={onClickOpen}>表示</button>
      <ChildArea open={open} onClickClose={onClickClose} />
    </div>
  );
}
