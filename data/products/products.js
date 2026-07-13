const products = [
  {
    id: 1,
    name: "iPhone 17 Pro 256GB | Chính hãng",
    desc: "Màn hình 6.3\", chip A19 Pro, trả góp 0%",
    variants: [
      { storage: "256GB", oldPrice: 34990000, newPrice: 33890000 },
      { storage: "512GB", oldPrice: 41490000, newPrice: 39990000 },
      { storage: "1TB",   oldPrice: 47990000, newPrice: 45990000 }
    ],
    colors: [
      { name: "Titan Xanh Đậm", hex: "#2b3a4a", imgs: [] },
      { name: "Titan Cam", hex: "#c96a3e", imgs: [] },
      { name: "Titan Bạc", hex: "#d9d9d9", imgs: [] }
    ]
  },
  {
    id: 2,
    name: "Samsung Galaxy S26 Ultra 5G",
    desc: "Màn hình 6.9\", Snapdragon 8 Elite Gen 5",
    variants: [
      { storage: "12GB/256GB", oldPrice: 36990000, newPrice: 31590000 },
      { storage: "12GB/512GB", oldPrice: 42990000, newPrice: 33990000 },
      { storage: "16GB/1TB",   oldPrice: 51990000, newPrice: 44990000 }
    ],
    colors: [
      { name: "Đen Titan", hex: "#1c1c1e", imgs: [] },
      { name: "Bạc Titan", hex: "#cfd2d6", imgs: [] },
      { name: "Xanh Titan", hex: "#3d4f5c", imgs: [] }
    ]
  },
  {
    id: 3,
    name: "iPhone 17 Pro Max 256GB | Chính hãng",
    desc: "Màn hình 6.9\", chip A19 Pro",
    variants: [
      { storage: "256GB", oldPrice: 37990000, newPrice: 35990000 },
      { storage: "512GB", oldPrice: 43390000, newPrice: 41990000 },
      { storage: "1TB",   oldPrice: 50990000, newPrice: 48990000 },
      { storage: "2TB",   oldPrice: 63990000, newPrice: 60990000 }
    ],
    colors: [
      { name: "Titan Xanh Đậm", hex: "#2b3a4a", imgs: [] },
      { name: "Titan Cam", hex: "#c96a3e", imgs: [] },
      { name: "Titan Bạc", hex: "#d9d9d9", imgs: [] }
    ]
  },
  {
    id: 4,
    name: "Samsung Galaxy A17 5G 8GB 128GB",
    desc: "Màn hình 6.7\", pin bền bỉ",
    variants: [
      { storage: "8GB/128GB", oldPrice: 6390000, newPrice: 6090000 }
    ],
    colors: [
      { name: "Đen", hex: "#1c1c1e", imgs: [] },
      { name: "Xanh Bạc Hà", hex: "#a8c9bd", imgs: [] },
      { name: "Xanh Dương", hex: "#4a6fa5", imgs: [] }
    ]
  },
  {
    id: 7,
    name: "OPPO Find X9s 12GB 256GB",
    desc: "Màn hình 6.59\", camera Hasselblad",
    variants: [
      { storage: "12GB/256GB", oldPrice: 24990000, newPrice: 23990000 }
    ],
    colors: [
      { name: "Đen", hex: "#1c1c1e", imgs: [] },
      { name: "Trắng", hex: "#f2f2f2", imgs: [] }
    ]
  },
  {
    id: 8,
    name: "OPPO Find N6 16GB 512GB",
    desc: "Điện thoại gập, màn phụ 6.62\" - màn chính 8.12\"",
    variants: [
      { storage: "16GB/512GB", oldPrice: 64990000, newPrice: 64990000 }
    ],
    colors: [
      { name: "Đen", hex: "#1c1c1e", imgs: [] },
      { name: "Kem", hex: "#e8dfc9", imgs: [] }
    ]
  },
  {
    id: 9,
    name: "Nubia Neo 5 5G 8GB 128GB",
    desc: "Màn hình 6.8\", pin dung lượng lớn",
    variants: [
      { storage: "8GB/128GB", oldPrice: 7490000, newPrice: 6990000 }
    ],
    colors: [
      { name: "Đen", hex: "#1c1c1e", imgs: [] },
      { name: "Bạc", hex: "#cfd2d6", imgs: [] }
    ]
  },
  {
    id: 10,
    name: "Samsung Galaxy A57 5G 8GB 128GB",
    desc: "Màn hình 6.7\", chip Exynos 1680",
    variants: [
      { storage: "8GB/128GB", oldPrice: 12490000, newPrice: 11990000 }
    ],
    colors: [
      { name: "Đen", hex: "#1c1c1e", imgs: [] },
      { name: "Xanh", hex: "#3d4f5c", imgs: [] },
      { name: "Tím", hex: "#a89bc9", imgs: [] }
    ]
  },
  {
    id: 11,
    name: "Xiaomi 14T Pro 12GB 512GB",
    desc: "Màn hình 6.67\", camera Leica",
    variants: [
      { storage: "12GB/512GB", oldPrice: 17670000, newPrice: 12990000 }
    ],
    colors: [
      { name: "Đen", hex: "#1c1c1e", imgs: [] },
      { name: "Xanh Titan", hex: "#3d4f5c", imgs: [] }
    ]
  },
  {
    id: 12,
    name: "iPhone Air 256GB | Chính hãng",
    desc: "Màn hình 6.5\", thiết kế siêu mỏng",
    variants: [
      { storage: "256GB", oldPrice: 31990000, newPrice: 24990000 },
      { storage: "512GB", oldPrice: 38490000, newPrice: 30490000 },
      { storage: "1TB",   oldPrice: 44990000, newPrice: 35990000 }
    ],
    colors: [
      { name: "Đen Không Gian", hex: "#2b2b2b", imgs: [] },
      { name: "Vàng Sa Mạc", hex: "#c9a86a", imgs: [] },
      { name: "Trắng Mây", hex: "#f2f2f2", imgs: [] }
    ]
  },
  {
    id: 13,
    name: "OPPO Reno15 F 5G 8GB 256GB",
    desc: "Màn hình 6.57\", thiết kế mỏng nhẹ",
    variants: [
      { storage: "8GB/256GB", oldPrice: 11990000, newPrice: 11990000 }
    ],
    colors: [
      { name: "Đen", hex: "#1c1c1e", imgs: [] },
      { name: "Hồng", hex: "#e8b9c4", imgs: [] }
    ]
  },
  {
    id: 14,
    name: "Xiaomi 17T Pro 5G 12GB 512GB",
    desc: "Màn hình 6.83\", camera Telephoto",
    variants: [
      { storage: "12GB/512GB", oldPrice: 24990000, newPrice: 22990000 }
    ],
    colors: [
      { name: "Đen", hex: "#1c1c1e", imgs: [] },
      { name: "Bạc", hex: "#cfd2d6", imgs: [] }
    ]
  },
  {
    id: 15,
    name: "Xiaomi 17T 5G 12GB 512GB",
    desc: "Màn hình 6.59\", camera Telephoto",
    variants: [
      { storage: "12GB/512GB", oldPrice: 20990000, newPrice: 18990000 }
    ],
    colors: [
      { name: "Đen", hex: "#1c1c1e", imgs: [] },
      { name: "Xanh", hex: "#3d4f5c", imgs: [] }
    ]
  },
  {
    id: 16,
    name: "HONOR 600 5G 8GB 256GB",
    desc: "Màn hình 6.57\", camera AI, hàng mới về",
    variants: [
      { storage: "8GB/256GB", oldPrice: 17990000, newPrice: 15990000 }
    ],
    colors: [
      { name: "Đen", hex: "#1c1c1e", imgs: [] },
      { name: "Xanh", hex: "#3d4f5c", imgs: [] }
    ]
  },
  {
    id: 17,
    name: "Samsung Galaxy S25 Ultra 12GB 256GB",
    desc: "Màn hình 6.9\", Snapdragon 8 Elite",
    variants: [
      { storage: "12GB/256GB", oldPrice: 31990000, newPrice: 27490000 },
      { storage: "12GB/512GB", oldPrice: 35490000, newPrice: 30490000 },
      { storage: "16GB/1TB",   oldPrice: 42790000, newPrice: 36790000 }
    ],
    colors: [
      { name: "Đen Titan", hex: "#1c1c1e", imgs: [] },
      { name: "Bạc Titan", hex: "#cfd2d6", imgs: [] },
      { name: "Xanh Titan", hex: "#3d4f5c", imgs: [] }
    ]
  },
  {
    id: 18,
    name: "iPhone 16 Pro Max 256GB",
    desc: "Màn hình 6.9\", chip A18 Pro, sắp về hàng",
    variants: [
      { storage: "256GB", oldPrice: 34990000, newPrice: 30990000 }
    ],
    colors: [
      { name: "Titan Đen", hex: "#2b2b2b", imgs: [] },
      { name: "Titan Sa Mạc", hex: "#c9a86a", imgs: [] },
      { name: "Titan Tự Nhiên", hex: "#8a8a8a", imgs: [] }
    ]
  },
  {
    id: 19,
    name: "Samsung Galaxy S25 Plus 256GB",
    desc: "Màn hình 6.7\", Snapdragon 8 Elite",
    variants: [
      { storage: "12GB/256GB", oldPrice: 26500000, newPrice: 20290000 },
      { storage: "12GB/512GB", oldPrice: 29490000, newPrice: 22990000 }
    ],
    colors: [
      { name: "Đen", hex: "#1c1c1e", imgs: [] },
      { name: "Bạc", hex: "#cfd2d6", imgs: [] }
    ]
  },
  {
    id: 20,
    name: "iPhone 15 128GB | Chính hãng VN/A",
    desc: "Màn hình 6.1\", chip A16 Bionic",
    variants: [
      { storage: "128GB", oldPrice: 19990000, newPrice: 17990000 }
    ],
    colors: [
      { name: "Đen", hex: "#1c1c1e", imgs: [] },
      { name: "Xanh Dương", hex: "#4a6fa5", imgs: [] },
      { name: "Hồng", hex: "#e8b9c4", imgs: [] },
      { name: "Vàng", hex: "#e6d19a", imgs: [] }
    ]
  }
];
 