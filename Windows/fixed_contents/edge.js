document.querySelector("#app--edge").innerHTML=
`
<div class="tab-row">
	<div class="tab-column">
		<span class="web-title">New tab</span>
		<span class="app--edge-minimiser-maximizer-closer">
			<span class="span-1">-</span>
			<span class="span-2">&#9744;<!--&#x2610;--></span>
			<span class="span-3"  onclick="document.querySelector('#app--edge').style.display='none';">X</span>
		</span>
	</div>
	<div class="tab-column"></div>
	<div class="tab-column"></div>
</div>
<div class="search-extension-favorite-bar">
	<div>
		<span>&lt;</span>
	</div>
	<div></div>
</div>
<div class="web-pages">
	<div class="app--edge-main-page">
		<iframe src="https://www.bing.com/"></iframe>
	</div>
</div>
`;