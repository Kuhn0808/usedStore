const express = require("express");
const router = express.Router();
const { getDB } = require("../db");
const { ObjectId } = require("mongodb");

router.post("/login", async (req, res) => {
  try {
    const db = getDB();
    const { email, password } = req.body;


    const user = await db.collection("user").findOne({ email: email });
    if (user && password === user.password) {
      res.status(201).send(user._id);
    } else {
      res.status(400).send("이메일 또는 비밀번호가 잘못되었습니다");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("서버 오류");
  }
});

router.post("/register", async (req, res) => {
  try {
    const db = getDB();
    let { name, id, email, password, address, phone_number } = req.body;

    await db.collection("user").insertOne({
      real_name: name,
      id: id,
      email: email,
      password: password,
      address: address,
      phone_number: phone_number,
      role: "user",
      user_name: "user",
      about: " ",
      create_at: new Date(),
    });

    res.status(201).send("회원가입 완료");
  } catch (error) {
    console.error(error);
    res.status(500).send("서버 오류");
  }
});
router.get("/mypage", async (요청, 응답) => {
  const db = getDB();
  console.log(요청.query);
  let list = await db.collection('user').findOne({_id:new ObjectId(요청.query.id)});
  console.log('test',list);
  응답.send(list)
})

module.exports = router;
