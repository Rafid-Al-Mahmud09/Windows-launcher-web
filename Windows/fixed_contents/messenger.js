document.querySelector("#app--messenger").innerHTML=
`
<div class="tab-row">
	<div class="tab-column">
		<span class="web-title">New tab</span>
		<span class="app--messenger-minimiser-maximizer-closer">
			<span class="span-1">-</span>
			<span class="span-2">&#9744;<!--&#x2610;--></span>
			<span class="span-3"  onclick="document.querySelector('#app--messenger').style.display='none';">X</span>
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
	<div class="app--messenger-main-page">
		<iframe src="https://www.w3schools.com/"></iframe>
	</div>
</div>
`;