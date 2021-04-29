document.querySelector("#app--chrome").innerHTML=
`
		<div class="tab-row">
			<div class="tab-column">
				<span class="web-title">New tab</span>
			</div>
			<div class="tab-column"></div>
			<div class="tab-column"></div>
			<div class="app--chrome-minimiser-maximizer-closer">
				<span class="span-1"  onclick="document.querySelector('#app--chrome').style.display='none';">_</span>
				<span class="span-2">&#9744;<!--&#x2610;--></span>
				<span class="span-3">X</span>
			</div>
		</div>
		<div class="search-extension-favorite-bar">
			<div>
				<span>&lt;</span>
			</div>
			<div></div>
		</div>
		<div class="web-pages">
			<div class="app--chrome-main-page">
				<div class="logo">
					<img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg">
				</div>
				<div></div>
				
			</div>
		</div>
	`;