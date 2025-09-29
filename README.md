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
- 
![](public/results/private_key.png)
-
Hình ảnh chỉ mang tính chất minh họa về key

##### Kết quả
![](public/results/capcha_result.png)  

### Đăng nhập bằng google

##### Đăng ký tài khoản https://console.cloud.google.com/
![](public/results/create_Oauth2.png) 

# Test các chức năng

### Đăng ký
![](public/results/regist.png) 

### Đăng nhập
![](public/results/login.png) 
#### Giao diện sau khi đăng nhập
![](public/results/profile.png) 



### Đổi mật khẩu
![](public/results/change_pass.png) 


### Quên mật khẩu
- Nhập email 
![](public/results/fogotpass.png)
- Mật khẩu sẽ được gửi về email
![](public/results/new_pass.png)



### Đăng xuất
![](public/results/sign_out.png) 


## 🚀 Kết luận

- Hệ thống đã triển khai được:
  - Đăng ký, đăng nhập cơ bản.  
  - Captcha chống bot.  
  - Reset/đổi mật khẩu.  
  - Đăng nhập Google OAuth2.  
  - Quản lý profile cá nhân.  

Các ảnh trong thư mục **public/results/** minh chứng cho từng bước triển khai hệ thống.
