<template>
	<div class="header">
	<header class="intro-header">
			<div class="container">
				<div class="row">
					<div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
						<div class="site-heading">
							<h1>Toa Blog</h1>
							<span>HOME</span>
						</div>

					</div>
				</div>
			</div>
		</header>
	<div class="container">
		<div class="row">
			<div class="
                col-lg-8 col-lg-offset-1
                col-md-8 col-md-offset-1
                col-sm-12
                col-xs-12
                postlist-container
            ">
            	<div class="post-preview">
    					<a href="/2018/10/06/vim-cn-im/">
        				<h2 class="post-title">
        				    Vim 与中文输入法
        				</h2>
        				
        				<h3 class="post-subtitle">
        				    Using Vim with non-english input method
        				</h3>
        				
        				<div class="post-content-preview">
        				    
                		Update: 我最后还是放弃在 Vim 模式下输入中文了，mental model 的 cost 太重了（我相信很多中文世界的 Vimer 都遇到过这个烦恼，在 vim 的 insert 模式时可能突然想输个中文，输完之后会本能的直接 esc 接 normal 模式操作，结果发现跳出来的是中文输入法……对于 vscode，我一般会在几次错误之后被逼到退出 vscode vim... 
        				</div>
    					</a>
   						 <p class="post-meta">Posted by Hux on October 6, 2018</p>
				</div>
				<hr>
				<div class="post-preview">
    					<a href="/2018/10/06/vim-cn-im/">
        				<h2 class="post-title">
        				    Vim 与中文输入法
        				</h2>
        				
        				<h3 class="post-subtitle">
        				    Using Vim with non-english input method
        				</h3>
        				
        				<div class="post-content-preview">
        				    
                		Update: 我最后还是放弃在 Vim 模式下输入中文了，mental model 的 cost 太重了（我相信很多中文世界的 Vimer 都遇到过这个烦恼，在 vim 的 insert 模式时可能突然想输个中文，输完之后会本能的直接 esc 接 normal 模式操作，结果发现跳出来的是中文输入法……对于 vscode，我一般会在几次错误之后被逼到退出 vscode vim... 
        				</div>
    					</a>
   						 <p class="post-meta">Posted by Hux on October 6, 2018</p>
				</div>
				<hr>
				<div class="post-preview">
    					<a href="/2018/10/06/vim-cn-im/">
        				<h2 class="post-title">
        				    Vim 与中文输入法
        				</h2>
        				
        				<h3 class="post-subtitle">
        				    Using Vim with non-english input method
        				</h3>
        				
        				<div class="post-content-preview">
        				    
                		Update: 我最后还是放弃在 Vim 模式下输入中文了，mental model 的 cost 太重了（我相信很多中文世界的 Vimer 都遇到过这个烦恼，在 vim 的 insert 模式时可能突然想输个中文，输完之后会本能的直接 esc 接 normal 模式操作，结果发现跳出来的是中文输入法……对于 vscode，我一般会在几次错误之后被逼到退出 vscode vim... 
        				</div>
    					</a>
   						 <p class="post-meta">Posted by Hux on October 6, 2018</p>
				</div>
            </div>
		</div>
	</div>
		
	</div>
</template>
<style lang="less" scoped>
	@import url(../../css/header.less);
	.intro-header{
	background:url('../../images/home-bg.jpg') no-repeat center center;
	}
	.postlist-container {
		margin-bottom: 20px;
		
	}
	.post-preview{
		a{
			color: #404040;
				.post-title{
				    // font-size: 26px;
   					// line-height: 1.3;
    				// margin-bottom: 10px;
				}
			}
	}
	.post-preview>a>.post-subtitle {
	    font-size: 15px;
	    line-height: 1.3;
	    margin: 0;
	    font-weight: 300;
	    margin-bottom: 10px;
	

	}
	.post-preview>a:hover, .post-preview>a:focus,.post-content-preview:hover{
    	text-decoration: none;
    	color: #0085a1;

	}
	
	.post-content-preview {
    	font-size: 13px;
    	font-style: italic;
    	color: #a3a3a3;
	}
	.post-preview>.post-meta {
    	font-family: Lora,'Times New Roman',serif;
    	color: #ccc;
    	font-size: 16px;
    	font-style: italic;
    	margin-top: 0;
	}
	

	@media only screen and (min-width: 768px){
		.post-preview .post-meta {
		    font-size: 18px;
		}
	}
	@media only screen and (min-width: 768px){
	.post-content-preview {
    font-size: 14px;
		}
	}
	@media only screen and (min-width: 768px){
	.post-preview a {
		.post-title{
    	font-size: 26px;
    	line-height: 1.3;
    	margin-bottom: 10px;
    	}
    	.post-subtitle{
    		font-size: 16px;
    	}
	}
}
</style>
<script type="text/javascript">
	
</script>