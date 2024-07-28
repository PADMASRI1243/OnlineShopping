document.querySelectorAll('header nav a').forEach(link => {
	link.addEventListener('click', (e) => {
	  e.preventDefault();
	  const sectionId = link.textContent.toLowerCase();
	  const section = document.getElementById(sectionId);
	  section.scrollIntoView({ behavior: 'smooth' });
	});
  });
  
  document.querySelectorAll('.product button').forEach(button => {
	button.addEventListener('click', () => {
	  const product = button.parentNode;
	  const productName = product.querySelector('h3').textContent;
	  const productPrice = product.querySelector('p').textContent;
	  const cart = document.querySelector('#cart .cart-container');
	  const cartItem = document.createElement('div');
	  cartItem.innerHTML = `
		<h3>${productName}</h3>
		<p>Price: ${productPrice}</p>
	  `;
	  cart.appendChild(cartItem);
	  button.remove(); // Remove "Add to Cart" button
	});
  });
  
  document.querySelector('#customer-details form').addEventListener('submit', (e) => {
	e.preventDefault();
	const name = document.querySelector('#name').value;
	const email = document.querySelector('#email').value;
	const phone = document.querySelector('#phone').value;
	// You can add code here to handle the form submission, such as sending the data to a server
	console.log(`Name: ${name}, Email: ${email}, Phone: ${phone}`);
  });
  