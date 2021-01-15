const htmlProducts = document.querySelector(".products");
const productSearch = document.querySelector("#productSearch");

let str_content_product = ``;

function getStrContentProduct(listproduct) {
	let str = ``;
	for (const product of listproduct) {
		let money = formatMoney(product.price);
		str += `<div class="content_search">
                              <div class="product_id">${product.id}</div>
        											<div class="product_name">${product.name}</div>
        											<div class="product_price">${money} VND</div>
   		 											</div>`;
	}

	return str;
}

function formatMoney(money) {
	return (money + "").replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
}

function displayProduct(str) {
	htmlProducts.innerHTML = str;
}

str_content_product = getStrContentProduct(products);
displayProduct(str_content_product);

productSearch.addEventListener('keyup', function() {
	let product_name = productSearch.value.trim();
	if(product_name === "") {
		str_content_product = getStrContentProduct(products);
		displayProduct(str_content_product);
		return;
	};
	let relust = [];

	for (const product of products) {
		if(product.name.includes(product_name)) {
			relust.push(product);
		}
	}

	str_content_product = getStrContentProduct(relust);
	displayProduct(str_content_product);
});