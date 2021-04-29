document.querySelector("#taskbar").innerHTML=
`
<ul>

	<!--start-menu-->
	<li onclick="
    	document.querySelector('#start-menu').style.display='block';
    	document.querySelector('#app--chrome').style.display='none';
    	document.querySelector('#app--messenger').style.display='none';
    	document.querySelector('#app--edge').style.display='none';
    ">
		<img src="https://upload.wikimedia.org/wikipedia/commons/5/5f/Windows_logo_-_2012.svg">
	</li>
	
	<!--chrome app-->
	<li onclick="
    	document.querySelector('#start-menu').style.display='none';
    	document.querySelector('#app--chrome').style.display='block';
    	document.querySelector('#app--messenger').style.display='none';
    	document.querySelector('#app--edge').style.display='none';
    ">
		<img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Google_Chrome_icon_%28September_2014%29.svg">
	</li>
	
	<!--messenger app-->
	<li onclick="
    	document.querySelector('#start-menu').style.display='none';
    	document.querySelector('#app--chrome').style.display='none';
    	document.querySelector('#app--messenger').style.display='block';
    	document.querySelector('#app--edge').style.display='none';
    ">
		<img src="https://upload.wikimedia.org/wikipedia/commons/b/be/Facebook_Messenger_logo_2020.svg">
	</li>
	
	<!--edge app-->
	<li onclick="
    	document.querySelector('#start-menu').style.display='none';
    	document.querySelector('#app--chrome').style.display='none';
    	document.querySelector('#app--messenger').style.display='none';
    	document.querySelector('#app--edge').style.display='block';
    ">
		<img src="https://upload.wikimedia.org/wikipedia/en/9/98/Microsoft_Edge_logo_%282019%29.svg">
	</li>
</ul>
`;