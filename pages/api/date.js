export default function handler(req, res) {
  let time = new Date();
  if (req.method == "POST") {
    res.status(200).json(time);
  }
}
