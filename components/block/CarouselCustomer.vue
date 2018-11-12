<template>
    <div class="brands_block">
        <carousel class="icon_block"  navigationNextLabel="<i class='fa fa-chevron-circle-right'></i>" navigationPrevLabel="<i class='fa fa-chevron-circle-left'></i>" :perPageCustom="[[411, 2], [768, 3], [1024, 6]]" :autoplay="true" :minSwipeDistance="10">
            <slide v-for="logo of logoBrand" :key="logo.id">
               <el-row>
				   <el-card style="border: none">
					   <nuxt-link to=""><div class="block_images">
                           <img :src="logo">
                       </div></nuxt-link>
				   </el-card>
                </el-row>
            </slide>
        </carousel>
    </div>
</template>

<script>
export default {
	props: ["logoBrand"]
}
</script>

 <style scoped>
.brands_block {
	padding: 20px 0 0px;
	background-color: #fff;
	margin-top: 30px;
}
.title_brand {
	padding-top: 10px;
	padding-bottom: 15px;
	text-transform: uppercase;
}
.block_images {
	height: 45px;
	padding: 5px 30px;
	text-align: center;
	overflow: hidden;
	transform: scale(1.7);
}
.images {
	width: auto;
	overflow: hidden;
	display: inline-block;
}
img {
    width: 100%;
    opacity: 0.7;
    transition: 0.5s
}
img:hover {
    opacity: 1;
}
</style>