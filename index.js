



function changeContent(page) {
    var contentDiv = document.getElementById('content');

    switch (page) {
        case 'home':
            contentDiv.innerHTML = `
				 <img src="    https://t4.ftcdn.net/jpg/05/71/95/65/360_F_571956593_DtxruRmJT7TnPk3XkDK5ax1sEFyuHTUP.jpg
            " alt="Super Heros" width="100px" height="120px">

				<h2>
					Welcome to the Home Page!
				</h2>
				<p>
					Lorem ipsum odor amet, consectetuer adipiscing elit.


				</p>
				<p>
					Lorem ipsum odor amet, consectetuer adipiscing elit. Molestie lacus himenaeos sit consequat adipiscing. Lobortis finibus facilisis sapien hac potenti elit.
				</p>
			`;
            break;
        case 'about':
            contentDiv.innerHTML = `
				<h2>About Us</h2>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
				</p>
				<p>
					Lorem ipsum odor amet, consectetuer adipiscing elit. Justo luctus venenatis velit per bibendum congue.
				</p>
			`;
            break;
        case 'contact':
            contentDiv.innerHTML =
                `<h2>Contact Us</h2> 
				<p>
					Feel free to reach out to us!
				</p> 
				<form> 
				<label for="name">Name:</label> 
				<input type="text" id="name" name="name" 
						placeholder="Your Name" required>
				<label for="email">Email:</label> 
				<input type="email" id="email" name="email" 
						placeholder="Your Email" required>
				<label for="message">Message:</label> 
				<textarea id="message" name="message" 
							placeholder="Your Message" 
							rows="4" required>
					</textarea>
				<button type="submit">Send Message</button> 
				</form>`;
            break;

        default:
            contentDiv.innerHTML = '<h2>Page not found!</h2>';
    }
}

const buttonElement = document.querySelector("button");

console.log(buttonElement);

buttonElement.addEventListener("click", () => {
  alert("Complete our Survey!");
});


