const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);
const express = require("express");
const cors = require("cors");

const router = express();
router.use(cors({ origin: true }));

router.get("/instrument/:id", async (req, res) => {
  const instrument = await admin
    .firestore()
    .collection("instruments")
    .doc(req.params.id)
    .get();
  res.send(instrument);
});

router.get("/instruments", async (req, res) => {
  const instruments = await admin
    .firestore()
    .collection("instruments")
    .get();
  var lista = [];
  instruments.docs.forEach((doc) => {
    lista.push({ id: doc.id, data: doc.data() });
  });
  res.send(lista);
});

router.post("/instrument", async (req, res) => {
  const instrument = await admin
    .firestore()
    .collection("instruments")
    .add(req.body);
  res.send(instrument);
});
router.put("/instrument/:id", async (req, res) => {
  const instrument = await admin
    .firestore()
    .collection("instruments")
    .doc(req.params.id)
    .update(req.body);
  res.send(instrument);
});
router.delete("/instrument/:id", async (req, res) => {
  const instrument = await admin
    .firestore()
    .collection("instruments")
    .doc(req.params.id)
    .delete();
  res.send(instrument);
});

exports.instrument = functions.https.onRequest(router);
