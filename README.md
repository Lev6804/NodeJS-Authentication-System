# Report: Hệ thống Authentication
## Cây thư mục
![](public/results/caythumuc.png)  

## Thay đổi code

### Thêm file .env để set port và chạy bài
![](public/results/them_env.png)  

##### Thay đổi code trong router thư mục gốc của file app.js để đưa đường dẫn đến phần login, đẩy code views/signin.ejs lên web
![](public/results/fix_router.png)  

##### Giao diện sau khi chỉnh router
![](public/results/home_1.png)  

### Chỉnh capcha
##### Đăng ký mã capcha trên https://www.google.com/recaptcha
![](public/results/create_capcha.png)  

##### Sau khi đăng ký xong ta sẽ có 2 mã public key và private key 
![](public/results/public_secret_key.png)  
- Public key: dùng để ghi lên các giao diện  "<divclass="g-recaptcha" data-sitekey="--public key--"></div>"
![](public/results/public_key.png)
- Private key: ghi trong file .env
![](public/results/private_key.png)
Hình ảnh chỉ mang tính chất minh họa về key

##### Kết quả
![](public/results/capcha_result.png)  

##### Thêm file .env để set port và chạy bài
![](public/results/them_env.png)  


- ![Change Password](public/results/change_pass.png)  
  Giao diện đổi mật khẩu.

- ![Create Captcha](public/results/create_captcha.png)  
  Tạo Captcha ngẫu nhiên.

- ![Create OAuth2](public/results/create_Oauth2.png)  
  Cấu hình OAuth2 cho đăng nhập Google.

- ![Fix Router](public/results/fix_router.png)  
  Sửa router trong hệ thống.

- ![Forgot Password](public/results/fogotpass.png)  
  Chức năng quên mật khẩu.

- ![Home 1](public/results/home_1.png)  
  Giao diện trang chủ (phiên bản 1).

- ![Home 2](public/results/home_2.png)  
  Giao diện trang chủ (phiên bản 2).

- ![Image](public/results/image.png)  
  Hình minh họa chung.

- ![Info OAuth](public/results/info_Oauth.png)  
  Thông tin user sau khi login bằng OAuth.

- ![Login Google Fail](public/results/Login_google_fail.png)  
  Lỗi khi đăng nhập Google thất bại.

- ![Login With New Password](public/results/login_with_new_pass.png)  
  Đăng nhập lại bằng mật khẩu mới.

- ![Login](public/results/login.png)  
  Form đăng nhập cơ bản.

- ![Private Key](public/results/private_key.png)  
  Khóa riêng tư (JWT hoặc OAuth).

- ![Profile](public/results/profile.png)  
  Trang thông tin cá nhân.

- ![Public Key](public/results/public_key.png)  
  Khóa công khai.

- ![Public Secret Key](public/results/public_secret_key.png)  
  Bộ key bảo mật.

- ![Register Fix Captcha](public/results/regist_fix_captcha.png)  
  Đăng ký với Captcha bảo mật.

- ![Sign Out](public/results/sign_out.png)  
  Chức năng đăng xuất.

- ![Them ENV](public/results/them_env.png)  
  File `.env` chứa cấu hình.

- ![CN](public/results/cn.png)  
  Hình minh họa khác (có thể là chứng nhận / cấu hình).

## 🚀 Kết luận

- Hệ thống đã triển khai được:
  - Đăng ký, đăng nhập cơ bản.  
  - Captcha chống bot.  
  - Reset/đổi mật khẩu.  
  - Đăng nhập Google OAuth2.  
  - Quản lý profile cá nhân.  

Các ảnh trong thư mục **public/results/** minh chứng cho từng bước triển khai hệ thống.
