## Data lưu data dùng cho web,bên trong chia ra nhiều thư mục như: 
    ``` products(data dành cho sản phẩm),....
    ```
## Public lưu tài nguyên tĩnh như img

## Src lưu source code, index.html là trang chủ
    ```mỗi thư mục bên trong như Giỏ Hàng, sẽ chứa 
    ```
## Lib lưu thư viện bootstrap
    ```
    ```
### Load Header và Mobile Bottom vào trang
    ```+B1: Link đến nơi chứa thư viện bootstrap, css root (customse), icon bootstrap, copy link bên dưới dán vào thẻ head của trang cần sử dụng   
        <!-- bootstrap -->
        <link rel="stylesheet" href="../lib/bootstrap-5.3.8-dist/css/bootstrap.min.css">
        <!-- root css -->
        <link rel="stylesheet" href="../public/css/root.css">
        <!-- icon -->
        <link rel="stylesheet" href="../lib/bootstrap-icons-1.13.1/bootstrap-icons.min.css">
    ```
    ```+B2:Gắn placeholder vào, copy code bên dưới dán vào bên trong thẻ body (tham khảo trang index.html,sanpham.html)
        <div class="wrapper ">
        <header id="header" class="d-flex justify-content-between align-items-center bg-primary-app px-2"></header>
        -------------------------
            Anh em code ở đây nha  
        -------------------------
        <div id="bottom-placeholder" class=""></div>
        </div>
    ```
    ```+B3: Gọi Scrpit tiến hành load component vào, copy code bên dưới dán vào ngay bên dưới thẻ body(tham khảo trang index.html,sanpham.html)
        <script src="./components/header/loadHeader.js"  type="module"></script>
    <script src="./components/bottom_mobile/loadBottomMobile.js"  type="module"></script>
    ```