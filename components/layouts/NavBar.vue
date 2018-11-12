<template class="menu-contact">
    <nav class="mb-1 navbar navbar-expand-lg">
        <div class="container">
        <h1><a class="navbar-brand brand" href="#"><b>Shipee</b></a></h1>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-5" aria-controls="navbarSupportedContent-5" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent-5">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                    <a class="nav-link waves-effect waves-light" href=""> Trang chủ</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link waves-effect waves-light" href=""  v-scroll-to="{ element: '#home', easing: 'linear'}"> Giới thiệu</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link waves-effect waves-light" href=""  v-scroll-to="{ element: '#rules', easing: 'linear'}"> Điều khoản sử dụng</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link waves-effect waves-light" href=""  v-scroll-to="{ element: '#price', easing: 'linear'}"> Bảng giá dịch vụ</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link waves-effect waves-light" href=""  v-scroll-to="{ element: '#ask', easing: 'linear'}"> Hỏi đáp</a>
                </li>
            </ul>
      </div>
    </div>
    </nav>
</template>
<style scoped>
.container {
	max-width: 1200px;
	margin: 0 auto;
}
.nav-link {
	font-weight: 500;
	color: #555;
}
.brand b {
	font-size: 2.7rem;
	color: #0c2e8a;
	font-weight: bold;
}
</style>
