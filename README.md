# Phong Bạt - Xanh Hóa Biểu Đồ Contributions GitHub Chỉ Với 40 Dòng Code 🌱

## Giới thiệu

Bạn đã bao giờ muốn làm cho biểu đồ **Contributions** trên GitHub của mình thật xanh mướt chưa?  
Trong lúc tìm kiếm các thư viện npm thú vị, mình tình cờ phát hiện thư viện **`simple-git`**. Đây là một thư viện giúp chạy các lệnh Git trên **Node.js**.  
Ý tưởng chợt lóe lên: "Có cách nào làm cái biểu đồ này thành một 'khu rừng xanh' không?" Và thế là đoạn code này ra đời. 😄

---

## Hướng dẫn triển khai

### Thực hiện tất cả trong một lần:
```bash
# Khởi tạo dự án Node.js và cài đặt thư viện
npm init -y
npm install jsonfile moment random simple-git

# Tạo file data.json và index.js
touch data.json index.js

# Khởi tạo Git repo, chạy file index.js
git init
node index.js

