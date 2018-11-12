<template>
  <section class="container-fuild">
          <TopBar/>
					<NavBar/>
    <div class="container">
			<div>
				<el-row :gutter="10">
				<el-col :sm="24" :md="12" >
					<div class="grid-content">
						<img src="@/static/about-img.jpg" alt="">
					</div>
					</el-col>
					<el-col  :sm="24" :md="12"><div class="grid-content" id="content">
						<h2><b>Giao hàng Hà Nội - Vĩnh Phúc</b></h2>
						<div class="content">
							<p>
								Chúng tôi chuyên gom đơn <span class="b-bold">Hà Nội - Vĩnh Phúc, Vĩnh Phúc - Hà Nội</span> và giao trong ngày. Cứ gom <span class="b-bold">đủ 50 đơn</span> là xuất phát
							</p>
						</div>
						<div class="content">
							<p>
							 <i class="fa fa-check"></i>	Giao hàng tuyến <b>Hà Nội - Vĩnh Phúc</b> trong vòng 4h 
							</p>
							<p> 
								<i class="fa fa-check"></i> Giao hàng tuyến <b>Vĩnh Phúc - Hà Nội</b> trong vòng 4h </p>
							<p>
							<i class="fa fa-check"></i>	Giao hàng nội tỉnh <b>Vĩnh Phúc</b> trong vòng 2h 
							</p>
							<p> 
								<i class="fa fa-check"></i> Giao hàng ứng tiền ngay hoặc thu hộ COD </p>
							<p>
								<i class="fa fa-check"></i> Giao đồ ăn nhanh tại <b>Vĩnh Phúc</b>
							</p>
						</div>
					</div>
					</el-col>
		</el-row>
			</div>
			<div id="rules" style="padding-top: 30px;">
				<el-row :gutter="10">
				<el-col  :sm="12" :md="6" ><div class="grid-content">
					<h2 class="font-lg">
							<b>Hôm nay đang có</b>
					</h2>
					</div>
					</el-col>
				<el-col  :sm="12" :md="6" ><div class="grid-content">
					<div class="block-ship text-center">
									<span class="count-ship">45 đơn</span>
									<div class="location">
										Hà Nội - Vĩnh Phúc
										<p class="title-desc">Đã gom được</p>
									</div>
						</div>
					</div></el-col>
			<el-col  :sm="12" :md="6" ><div class="grid-content">
					<div class="block-ship text-center">
									<span class="count-ship">48 đơn</span>
									<div class="location">
										Vĩnh Phúc - Hà Nội
										<p class="title-desc">Đã gom được</p>
									</div>
						</div>
					</div></el-col>
				<el-col  :sm="12" :md="6" ><div class="grid-content">
					<div class="block-ship text-center">
									<span class="count-ship">100 đơn</span>
									<div class="location">
										
										<p class="title-desc">Đã giao thành công </p>
									</div>
						</div>
					</div></el-col>
			</el-row>
			</div>
				<div class="khtb" id="price">
					<h2>Khách hàng tiêu biểu</h2>
						<p>
						Sed tamen tempor magna labore dolore dolor sint tempor duis magna elit veniam aliqua esse amet veniam enim export quid quid veniam aliqua eram noster malis nulla duis fugiat culpa esse aute nulla ipsum velit export irure minim illum fore
						</p>
				</div>
				<div>
						<CarouselCustomer :logoBrand="logoBrand"/>
				</div>
    	</div>
			<div class="call-div" id="ask">
				<div class="container">
						<el-row :gutter="10">
							<el-col :sm="24" :md="17"><div class="grid-content">
									<h3>
										<b>	Call To Action</b>
									</h3>
									<p>
										Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
									</p>
								</div></el-col>
							<el-col :sm="24" :md="7"><div class="grid-content">
								<div class="text-center call-to-action">
									<a class="" href="#">Call To Action</a>
								</div>
								</div></el-col>
						</el-row>
				</div>
		</div>

		<div class="bottom text-center">
				<span>© Copyright Reveal. All Rights Reserved</span> <br>
				<span>Designed by BootstrapMade</span>
		</div>
  </section>
</template>

<script>
import TopBar from "~/components/layouts/TopBar.vue"
import NavBar from "~/components/layouts/NavBar.vue"
import CarouselCustomer from "~/components/block/CarouselCustomer.vue"

export default {
	components: {
		TopBar,
		NavBar,
		CarouselCustomer
	},
	data() {
		return {
			logoBrand: [
				"https://uphinhnhanh.com/images/2018/11/12/client-7.png",
				"https://uphinhnhanh.com/images/2018/11/12/client-2.png",
				"https://uphinhnhanh.com/images/2018/11/12/client-1.png",
				"https://uphinhnhanh.com/images/2018/11/12/client-3.png",
				"https://uphinhnhanh.com/images/2018/11/12/client-4.png",
				"https://uphinhnhanh.com/images/2018/11/12/client-5.png",
				"https://uphinhnhanh.com/images/2018/11/12/client-6.png",
				"https://uphinhnhanh.com/images/2018/11/12/client-8.png"
			]
		}
	}
}
</script>

<style scoped>
.container {
	padding-top: 30px;
}
.fa-check {
	color: #50d8af;
}
.content {
	padding: 7px;
}
.count-ship {
	height: 80px;
	width: 80px;
	line-height: 80px;
	background-color: #bbb;
	border-radius: 50%;
	display: inline-block;
	font-weight: bold;
}
p {
	font-weight: 400;
}
.font-lg {
	font-size: 3rem;
	color: grey;
}
.b-bold {
	font-weight: 500;
}
h2 {
	color: #0c2e8a;
	font-weight: bold;
}
img {
	width: 100%;
}
.khtb {
	padding-top: 40px;
}
.khtb::before {
	content: "";
	position: absolute;
	display: block;
	width: 50px;
	height: 3px;
	background: #50d8af;
	bottom: 0;
	left: 0;
}
.call-to-action {
	display: flex;
	align-items: center;
	justify-content: flex-end;
}
.call-div {
	background: #081e5b;
	color: #fff;
}
.call-div {
	padding-top: 45px;
	padding-bottom: 45px;
}
.call-div h3 {
	font-family: "Montserrat", sans-serif;
}
.call-to-action a {
	font-family: "Montserrat", sans-serif;
	font-weight: 700;
	font-size: 16px;
	letter-spacing: 1px;
	display: inline-block;
	padding: 8px 26px;
	border-radius: 3px;
	transition: 0.5s;
	margin: 10px;
	border: 3px solid #fff;
	color: #fff;
}
.bottom {
	padding-top: 15px;
}
</style>

