export default function exportNav()
{
    return `<nav>
    <section id="middle_strip" class="bg-body-emphasis">
        <a class="brand_logo" href = "index.html">
            <img src="./assets/images/logo.png" alt="brand_logo" height="85">
        </a>
        <sub class="search_box">
            <div class="d-flex align-items-center ms-3">
                <span>
                    <img src="https://content1.geekbuying.com/V1.4/en/images/indexV7/search.png" alt="search_btn"
                        id="search_btn">
                </span>
            </div>
            <div class="search_input">
                <input type="text" class="search_key" placeholder="Bạn tìm gì hôm nay ?">
            </div>
            <div class="h-100 d-flex align-items-center ms-auto  search-right">
                <p class="m-0 ">Tìm kiếm</p>
            </div>

        </sub>
        <sub class="middle_icons">
            <a class="p-8-16 d-flex align-items-center home text-decoration-none fw-bold" href = "index.html">
                <img src="./assets/images/home.png" alt="" id="img-home">
                <span>Trang chủ</span>
            </a>

            <div class="p-8-16 sign-in text-decoration-none">
                <div class="d-flex align-items-center">
                    <i class="bi bi-person icon-person"></i>
                    <p class="text-sign-in mb-0">Đăng nhập</p>
                </div>
                <div class="signin_dropdown_content slide-bottom">
                    <div id="welcome-text">
                        <p>Chào mừng đến với MDShop</p>
                    </div>
                    <div id="buttons">
                        <a class="join" href="creatacc.html">  Đăng ký </a>
                        <a class="signin" href="signIn.html">Tham Gía</a>
                    </div>
                    <span id="separator_dropdown" class = "d-flex align-items-center justify-content-center">
                        <hr class  = "me-3">
                        <p>or</p>
                        <hr class = "ms-3">
                    </span>
                    <div id="google_signin">
                        <img src="assets/images/Google_signin.png" alt="Google signin">
                    </div>
                </div>
                <div class="signout_dropdown_content">
                    <br>
                    <p>My Orders</p>
                    <br>
                    <p>My Wishlist</p>
                    <br>
                    <p>My Coupons</p>
                    <br>
                    <p>My Profile</p>
                    <br>
                    <div>
                        <a href="#">
                            <p>Sign out</p>
                        </a>
                    </div>
                    <br>
                </div>
            </div>

            <a class="d-flex p-8-16 cart" href = "cart.html">
                <i class="bi bi-cart icon-cart"></i>
                <span class="red_circle">0</span>
            </a>
        </sub>
    </section>`;
};
