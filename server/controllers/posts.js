import { db } from "../db.js";

export const getPost = (req, res) => {
  const q = `call getPost(?)`;

  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.json(err);
    return res.status(200).json(data[0]);
  });
};

export const addPost = (req, res) => {
  const q = `call addPost(?,?,?,?)`;

  db.query(
    q,
    [req.body.title, req.body.desc, req.body.img, req.body.uid],
    (err, data) => {
      if (err) return res.json(err);
      return res.status(200).json("Post has been created");
    }
  );
};

export const updatePost = async (req, res) => {
  const checkPost = `call getPost(?)`;
  await db.query(checkPost, [req.params.id], async (err, data) => {
    if (!data[0].length) return res.status(400).json("Don't have this post");

    const q = `call updatePost(?,?,?,?,?)`;

    await db.query(
      q,
      [
        req.body.title,
        req.body.desc,
        req.body.img,
        req.params.id,
        req.body.uid,
      ],
      (err, data) => {
        if (err) return res.json(err);
        return res.status(200).json("Post has been updated");
      }
    );
  });
};

export const deletePost = async (req, res) => {
  const checkPost = `call getPost(?)`;
  await db.query(checkPost, [req.params.id], async (err, data) => {
    if (!data[0].length) return res.status(400).json("Don't have this post");

    const q = `call deletePost(?)`;

    await db.query(q, [req.params.id], (err, data) => {
      if (err) return res.json(err);
      return res.status(200).json("Post has been deleted");
    });
  });
};
