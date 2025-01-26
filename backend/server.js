const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const Product = require("./models/Product");
const User = require("./models/User");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors({ origin: "http://localhost:5173" }));
app.use(bodyParser.json());

// Koneksi ke MongoDB
mongoose
  .connect("mongodb://localhost:27017/ecommerce")
  .then(() => console.log("Terhubung ke MongoDB"))
  .catch((err) => console.error("Gagal terhubung ke MongoDB:", err));

// Middleware untuk verifikasi token JWT
const authenticateToken = (req, res, next) => {
  const token = req.headers["authorization"];
  if (!token) return res.status(401).json({ message: "Akses ditolak" });

  jwt.verify(token, "secret_key", (err, user) => {
    if (err) return res.status(403).json({ message: "Token tidak valid" });
    req.user = user;
    next();
  });
};

// Route untuk mendapatkan semua produk
app.get("/api/products", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Route untuk menambah produk (untuk admin)
app.post("/api/products", authenticateToken, async (req, res) => {
  const { name, price, stock } = req.body;
  const product = new Product({ name, price, stock });

  try {
    const newProduct = await product.save();
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Route untuk checkout
app.post("/api/checkout", authenticateToken, (req, res) => {
  const { items } = req.body;
  // Proses checkout (simulasi)
  console.log("Checkout items:", items);
  res.json({ message: "Checkout berhasil!" });
});

// Route untuk registrasi
app.post("/api/register", async (req, res) => {
  const { username, password } = req.body;

  // Validasi input
  if (!username || !password) {
    return res
      .status(400)
      .json({ message: "Username dan password harus diisi" });
  }

  try {
    // Cek apakah username sudah ada
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: "Username sudah digunakan" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Simpan user baru
    const user = new User({ username, password: hashedPassword });
    await user.save();

    res.status(201).json({ message: "Registrasi berhasil!" });
  } catch (err) {
    console.error("Error saat registrasi:", err); // Log error
    res.status(500).json({ message: "Terjadi kesalahan saat registrasi" });
  }
});

// Route untuk login
app.post("/api/login", async (req, res) => {
  const { username, password } = req.body;

  // Validasi input
  if (!username || !password) {
    return res
      .status(400)
      .json({ message: "Username dan password harus diisi" });
  }

  try {
    // Cari user berdasarkan username
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ message: "Pengguna tidak ditemukan" });
    }

    // Bandingkan password
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(400).json({ message: "Password salah" });
    }

    // Buat token JWT
    const token = jwt.sign({ userId: user._id }, "secret_key", {
      expiresIn: "1h",
    });
    res.json({ token });
  } catch (err) {
    console.error("Error saat login:", err); // Log error
    res.status(500).json({ message: "Terjadi kesalahan saat login" });
  }
});

// Proteksi route admin dengan middleware authenticateToken
app.get("/api/admin", authenticateToken, (req, res) => {
  res.json({ message: "Anda berhasil mengakses dashboard admin!" });
});

// Jalankan server
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
