<template>
	
<div class="app-container">
		<!-- 头部 -->
		<nav class="navbar navbar-default navbar-fixed-top">
		  <div class="container-fluid">
		    <!-- Brand and toggle get grouped for better mobile display -->
		    <div class="navbar-header">
		      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
		        <span class="sr-only">Toggle navigation</span>
		        <span class="icon-bar"></span>
		        <span class="icon-bar"></span>
		        <span class="icon-bar"></span>
		      </button>
		      <a class="navbar-brand navbar-brand1" href="#">Toa Blog</a>
		    </div>

		    <!-- Collect the nav links, forms, and other content for toggling -->
		    <div class="collapse navbar-collapse navbar-right" id="bs-example-navbar-collapse-1">
		      <ul class="nav navbar-nav nav1">
		        <li >
		        	<router-link to="/home">HOME</router-link>
		        </li>
		        <li>
		        	<router-link to="/about">ABOUT</router-link>
		        </li>
		         <li>
		        	<router-link to="/archive">ARCHIVE</router-link>
		        </li>
		    
		      </ul>
		      
		      </ul>
		    </div><!-- /.navbar-collapse -->
		  </div><!-- /.container-fluid -->
		</nav>
	
	
		
			<router-view></router-view>
		
<footer>
		<div class="container">
			<div class="row">
				<div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
					<ul class="list-inline text-center">
						<li>
							<a href="javascript:">
							<span class="iconspan">
							<i class="icon-twitter icon-3x iconcolor"></i>
							</span>
						</a></li>
						<li>
							<a href="javascript:">
							<span class="iconspan">
							<i class=" icon-facebook icon-3x iconcolor"></i>
							</span>
						</a></li>
						<li>
							<a href="javascript:">
							<span class="iconspan">
							<i class="icon-github icon-3x iconcolor"></i>
							</span>
						</a></li>
						<li>
							<a href="javascript:">
							<span class="iconspan">
							<i class=" icon-phone icon-3x iconcolor"></i>
							</span>
						</a></li>
					</ul>
					<p class="copyright text-muted" >
						 Copyright &copy; Toa Blog 2019
                    <br>
                    Powered by <a href="Javascript:">Toa Blog</a> |
                    <iframe
                        style="margin-left: 2px; margin-bottom:-5px;"
                        frameborder="0" scrolling="0" width="100px" height="20px"
                        src="https://ghbtns.com/github-btn.html?user=MonsterAnan&repo=JDFinance&type=star&count=true" >
                    </iframe>
             
					</p>
				</div>
			</div>
		</div>
</footer>
</div>
		
</template>
<script>
export default{
data(){
		return{}
	},
	mounted(){

	},	
	created(){
		
	},

	methods:{
		navbarscroll(){
			console.log(111)
		}
	}
};


</script>
<style lang="less" moudle>
	@import url(./css/base.less);
	.navbar{
		background-color: transparent;
		border: 0;
	}
	.navbar-brand1{
		font-size: 30px;
		font-weight: 600;
	}
	.nav1{
		li{
			font-size:18px;
		}
	}
	
	footer .iconspan{
		display: inline-block;
		width: 60px;
		height: 60px;
		background-color: #404040;
		border-radius: 50%;
	}


	footer .list-inline li {
		margin-right: 10px;
	}
	footer .iconcolor{
		color:#fff;
		display: inline-block;
    	padding-top: 6px;
    	-webkit-font-smoothing: antialiased;
    	-moz-osx-font-smoothing: grayscale;
	}
	footer .copyright {
    font-size: 14px;
    text-align: center;
    margin-bottom: 0;
	}

</style>